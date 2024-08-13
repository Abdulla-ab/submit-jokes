import { Schema, Document } from "mongoose";

export interface Joke extends Document {
    joke : string;
    type : string;
} 

export const JokeSchema = new Schema ({
    joke : { type: String, required: true },
    type : { type: String, required: true }
})