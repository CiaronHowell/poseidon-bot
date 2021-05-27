// Interface to handle the json response for the account request
export interface AccountResponse {
    id: string,
    accountId: string,
    puuid: string,
    name: string,
    profileIconId: number,
    revisionDate: number,
    summonerLevel: number
}

// Might not need this specifically for league
export enum LeagueResponseCode {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    DATA_NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    UNSUPPORTED_MEDIA_TYPE = 415,
    RATE_LIMIT_EXCEEDED = 429,
    INTERNAL_SERVER_ERROR = 500,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504
}