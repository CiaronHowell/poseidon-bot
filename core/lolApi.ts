// TODO: Need a better name
// TODO: Maybe change this to a class

import got from "got";
import { lolapi } from "@data/config.json";
import { AccountResponse } from "@utils/leagueOfLegends/iAccountResponse";

const baseUrl: string = "https://euw1.api.riotgames.com"
const summonerInfoByNameUrl:string = `${baseUrl}/lol/summoner/v4/summoners/by-name/`;
const summonerInfoByPuuidUrl:string = `${baseUrl}/lol/summoner/v4/summoners/by-puuid/`;

/**
 * Method gets summoner info through two methods
 * @param summonerId Either summoner name or PUUID 
 * @param viaPuuid If PUUID was used for @param summonerId then this would be true. Otherwise set this to false
 * @returns Promise of the account details
 */
export async function GetSummonerInfo(summonerId: string, viaPuuid: boolean): Promise<AccountResponse> {
    return await got((viaPuuid ? summonerInfoByPuuidUrl : summonerInfoByNameUrl) + summonerId, {
        'searchParams': {
            api_key: lolapi
        }
    }).json();
}

