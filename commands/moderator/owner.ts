import { Message } from "discord.js";
import { Command } from "../../utils/iCommand";
// TODO: Probably should find a better way to share config info
import { ownerID, prefix} from "../../data/config.json";

// TODO: Test for something bigger 
class Owner implements Command {
    name: string = "owner";
    description: string = "Tells you if you're the owner :)";
    usage: string = "";
    developer: boolean = true;

    run(message: Message, ...args: string[]): void {
        if (message.author.id !== ownerID) return;

        message.reply('Yeet big boi, you are the owner');
    }   
}

export default new Owner();