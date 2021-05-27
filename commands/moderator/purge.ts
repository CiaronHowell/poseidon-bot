import { Collection, Message, TextChannel } from "discord.js";
import { Command } from "../../utils/iCommand";
import { prefix } from "../../data/config.json";

// TODO: This class will need updating (probably)
class Purge implements Command {
    name: string = "purge";
    description: string = "Deletes a given number of messages";
    usage: string = `${prefix + this.name} [number of messages to delete]`;
    developer: boolean = true;

    async run(message: Message, ...args: string[]): Promise<void> {
        // Checks if the user is the owner TODO: This will most likely be changed later
        if (!(message.member!.hasPermission('ADMINISTRATOR'))) return;

        const deleteAmount:number = Number.parseInt(args[0]); 
        // bots can't delete 99< messages
        if (deleteAmount < 0 || deleteAmount > 99) {
            message.reply('Please keep the number between 0-99');
            return;
        }

        // Delete the authors message
        message.delete().then( () => {
            console.log('Deleted authors message')
        })

        try {
            // Delete amount specified
            (message.channel as TextChannel).bulkDelete(deleteAmount);
        }
        catch (error:any) {
            console.error(error);
        }   
    }   
}

export default new Purge();