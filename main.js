// //////////////////// imports //////////////////////////
// imports discord.js module
const Discord = require('discord.js');

// imports winston module
const logger = require('winston');

// gets token of bot
const Auth = require('./auth.js');

// //////////////////////// logger settings ////////////////////////////////
logger.remove(logger.transports.Console);

logger.add(logger.transports.Console, {
    colorize: true,
});

logger.level = 'debug';

// initialize discord bot
const client = new Discord.Client();

// prints info
client.on('ready', () => {
    // shows that the bot is connected and what it is logged in as
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(`${client} - ${client.id}`);
});
// ///////////////////////////////////////////////////////////////////////////

// ////////////////////////////// test ///////////////////////////////////////
// the bot will take a message and check it
client.on('message', (msgInfo) => {
    // this bot will listen for '>test'
    if (msgInfo.content === '>test') {
        // the bot replies
        msgInfo.channel.send(`Yo, what's good ${msgInfo.author}`);
    }

    // Splits the message into multiple parts
    const userMessage = msgInfo.content.split(' ');
    if (userMessage[0] === '>*') {
        const num1 = parseFloat(userMessage[1]);
        const num2 = parseFloat(userMessage[2]);

        const ans = num1 * num2;

        msgInfo.channel.send(`The answer is: ${ans}`);
    }

    if (msgInfo.content === '>depressed') {
        // the bot replies
        msgInfo.channel.send(`Cheer up ${msgInfo.author}, all is okay :D`);
    }
});
// //////////////////////////////////////////////////////////////////////////////

// logging bot in
client.login(Auth.botToken);
