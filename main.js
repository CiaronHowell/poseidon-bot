const Discord = require('discord.io');

const logger = require('winston');

// gets the token of the bot
const auth = require('./auth.json');

//makes dateFormat available 
const dateFormat = require('dateformat');


//gets recent date
let now = new Date();

// logger settings
logger.remove(logger.transports.Console);

logger.add(logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';

// initialize discord bot

const bot = new Discord.Client ({
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
       //stores the argument for the command
       let args = message.substring(1).split(' ');
       //will store the command for later use
       let cmd = args[0]
       
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
                    message: "Fortunately, that is " + user 
                    + "'s girlfriend :smile:"
                });
           break;
           
           case 'time':
                bot.sendMessage({
                    to: channelID,
                    message: dateFormat(now, 'HH:MM! ') + "Can't touch this!"
                    });
           break;
           
           case 'date':
                bot.sendMessage({
                    to: channelID,
                    message: "" + dateFormat(now, "dddd, dS mmmm, yyyy")
                    });
           break;
       }
   }
});