import { Message } from "discord.js";
import { GetSummonerInfo } from "@core/lolApi";
import { Command } from "@utils/iCommand";
import { AccountResponse, LeagueResponseCode } from "@utils/leagueOfLegends/iAccountResponse";
import { prefix } from "@data/config.json";

class SummonerInfo implements Command {
    name: string = "summoner";
    description: string = "Test with the lol";
    usage: string = `${prefix}${this.name}`;
    developer: boolean = false;

    async run(message: Message, ...args: string[]): Promise<void> {
        let account:AccountResponse;
        
        try {
            account = await GetSummonerInfo(args[0], false);
        }
        catch (error: any) {
            console.log(`Error caught: ${error}`);

            const errorCode: number = error.response.statusCode;
            
            if (errorCode == LeagueResponseCode.DATA_NOT_FOUND)
                message.reply(`Could not find an account linked to the username: ${args[0]}`);
            else
                console.error(`Error occured when trying to do ${this.name} - ${LeagueResponseCode[errorCode].toString()}`);

            return;
        }
        
        message.reply(`\n${account.name}, Summoner Level: ${account.summonerLevel}`);
    }
    
}

export default new SummonerInfo();