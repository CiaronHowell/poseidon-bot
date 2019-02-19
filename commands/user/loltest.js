const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

exports.run = (client, message, args) => {
    const request = new XMLHttpRequest();
    let userID;

    // sends the request
    request.open('GET', 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + args + client.auth.lolapi, false);

    // what we're gonna do with the
    request.onload = function () {
        // checks if request is ok
        if (request.status >= 200 && request.status < 400) {
            // parses it to JSON
            const data = JSON.parse(request.responseText);

            const name = data.name;
            const level = data.summonerLevel;
            userID = data.accountId;

            message.channel.send(name + " " + level);

            console.log('Querying Riot API.');
        } else {
            console.log('Error, my dude.');
        }
    };

    request.send();

    // TODO: Utilise the encrypted user id to gather more info

    // request.open('GET', '' + args + client.auth.lolapi, false);

    // request.onload = function () {

    // if (request.status >= 200 && request.status < 400) {

    // }

    // }

    // request.send();
};
