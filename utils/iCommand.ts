import { Message } from "discord.js";

export interface Command {
    name: string,
    description: string,
    usage: string,
    developer: boolean,
    run(message:Message, ...args:string[]): void
}