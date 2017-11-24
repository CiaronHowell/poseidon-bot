// //////////////////// imports //////////////////////////
// imports discord.js module
const Discord = require('discord.js');

// imports winston module
const logger = require('winston');

// gets token of bot
const auth = require('./auth.js');

// //////////////////////// logger settings ////////////////////////////////
logger.remove(logger.transports.Console);

logger.add(logger.transports.Console, {
    colorize: true,
});

logger.level = 'debug';

// initialize discord bot
const client = new Discord.Client();

// logging bot in
client.login(auth.token);

// prints info
client.on('ready', () => {
    // shows that the bot is connected and what it is logged in as
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(`${client.username} - (${client.id})`);
});
// ///////////////////////////////////////////////////////////////////////////

// ////////////////////////////// test ///////////////////////////////////////
// the bot will take a message and check it
client.on('message', (msgInfo) => {
    // this bot will listen for '>test'
    if (msgInfo.content == '>test') {
        // the bot replies
        msgInfo.channel.send("Yo, what's good homie");
    }
});
// /////////////////////////////////////////////////////////////////////////////
