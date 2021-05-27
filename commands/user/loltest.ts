import { Message } from "discord.js";
import { Command } from "../../utils/iCommand";
import got, { HTTPError } from "got";
import { lolapi } from "../../data/config.json";
import { AccountResponse, LeagueResponseCode } from "../../utils/leagueOfLegends/iAccountResponse";

class LolTest implements Command {
    name: string = "lolTest";
    description: string = "Test with the lol";
    usage: string = "";
    developer: boolean = false;

    private readonly url:string = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
    
    async run(message: Message, ...args: string[]): Promise<void> {
        let account:AccountResponse;
        try {
            account = await got(this.url + args[0], {
                'searchParams': {
                    api_key: lolapi
                }
            }).json();
        }
        catch (error: any) {

            console.log(`Error caught: ${error}`);

            const errorCode: number = error.response.statusCode;
            
            if (errorCode == LeagueResponseCode.DATA_NOT_FOUND) {
                message.reply(`Could not find an account linked to the username: ${args[0]}`);
            }
            else {
                console.error(`Error occured when trying to do ${this.name} - ${LeagueResponseCode[errorCode].toString()}`);
            }

            return;
        }
        
        
        message.reply(`\n${account.name}, Summoner Level: ${account.summonerLevel}`);
    }
    
}

export default new LolTest();