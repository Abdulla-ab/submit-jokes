import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { JokeService } from "./joke.service";

@Controller('jokes')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Post('submit')
  submitJoke(@Body() body: { content: { joke: string; type: string } }) {
    const { content } = body;
    const { joke, type } = content;
    return this.jokeService.createJoke(joke, type);
  }

  @Get('types')
  getJokeTypes() {
    return this.jokeService.getJokeTypes();
  }
}