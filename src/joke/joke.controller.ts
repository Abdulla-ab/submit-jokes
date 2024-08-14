import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { JokeService } from "./joke.service";

@Controller('jokes')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Post('')
  submitJoke(@Body() body: { content: { joke: string; type: string } }) {
    const { content } = body;
    const { joke, type } = content;
    return this.jokeService.createJoke(joke, type);
  }

  @Get('')
  getJoke(@Query('type') type: string) {
    return this.jokeService.getJokeByType(type);
  }

  @Get('types')
  getJokeTypes() {
    return this.jokeService.getJokeTypes();
  }
}