var Discord = require('discord.io');

var logger = require('winston');

// gets the token of the bot
var auth = require('./auth.json');

// logger settings
logger.remove(logger.transports.Console);

logger.add(logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';

// initialize discord bot

var bot = new Discord.Client ({
    token: auth.token,
    autorun: true
});

bot.on('ready', function (evt){
    //shows that the bot is connected and what it is logged in as
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
   //this bot will listen for messages starting with '>'
   if (message.substring(0, 1) == '>') {
       // 
       var args = message.substring(1).split(' ');
       //will store the command for later use
       var cmd = args[0]
       
       args = args.splice(1);
       
       switch(cmd) {
           //>ping
           case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
           break;
           
           case 'holdtight':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hold tight, ' + user
                });
           break;
           
           case '2+2=4':
                bot.sendMessage({
                    to: channelID,
                    message: "That's quick maths, " + user
                });
           break;
           
           case 'hannah':
                bot.sendMessage({
                    to: channelID,
                    message: "Unfortunately, that is " + user 
                    + "'s girlfriend :smile:"
                });
           break;
       }
   }
});