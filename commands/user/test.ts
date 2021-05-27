import { Message } from "discord.js";
import { Command } from "../../utils/iCommand";

class Test implements Command {
    name: string = "test";
    description: string = "Just a test command";
    usage: string = this.name;
    developer: boolean = false;

    run(message: Message, ...args: string[]): void {
        message.channel.send(`Yo, what's good ${message.author}`);
    }   
}

export default new Test();