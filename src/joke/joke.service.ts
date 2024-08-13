import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Joke } from "./joke.schema";

@Injectable()
export class JokeService {
    constructor(@InjectModel('Joke') private jokeModel: Model<Joke>) {}

    async createJoke(joke: string, type: string): Promise<Joke> {
        try {
          const newJoke = new this.jokeModel({ joke, type });
          return await newJoke.save();
        } catch (error) {
          console.error('Error submitting joke:', error);
          throw new InternalServerErrorException('Error submitting the joke. Please try again.');
        }
    }

    async getJokeTypes(): Promise<string[]> {
        const jokes = await this.jokeModel.find().exec();
        return Array.from(new Set(jokes.map(joke => joke.type)));
    }

    async getJokeByType(type: string): Promise<Joke> {
      const jokes = await this.jokeModel.find({ type }).exec();
      if (jokes.length === 0) {
        throw new NotFoundException('No jokes found');
      }
      return jokes[Math.floor(Math.random() * jokes.length)];
  }
}