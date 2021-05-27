import { Message } from "discord.js";
import { Command } from "../../utils/iCommand";

class AutoPurge implements Command {
    name: string = "autopurge";
    description: string = "WIP";
    usage: string = "WIP";
    developer: boolean = true;
    run(message: Message, ...args: string[]): void {
        // Checks if the user is the owner
        if (!(message.member.hasPermission('ADMINISTRATOR'))) return;

        // TODO
        console.log("Hit");
    }
    
}

export default new AutoPurge();
