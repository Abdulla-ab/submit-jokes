import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JokeService } from './joke.service';
import { JokeController } from './joke.controller';
import { JokeSchema } from './joke.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Joke', schema: JokeSchema }]),
  ],
  providers: [JokeService],
  controllers: [JokeController],
})
export class JokeModule {}