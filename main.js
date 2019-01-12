// imports discord.js module
const Discord = require('discord.js');
// imports file system from node.js
const fs = require('fs');
// imports enmap module
const Enmap = require('enmap');

// initialize discord bot
const client = new Discord.Client();
// gets token of bot
const auth = require('./auth.json');
// makes auth it accessible through client
client.auth = auth;

// prints info
client.on('ready', () => {
    // shows that the bot is connected and what it is logged in as
    console.log('Connected');
    console.log('You have started Zeus-Bot');
});

// reads all files in events
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  // loops through each file
  files.forEach( file => {
    // check if .js file
    if (!file.endsWith(".js")) return;
    // load the event file
    const event = require(`./events/${file}`);
    // gets the event name from file name
    let eventName = file.split(".")[0];
    // each event will be called with the client argument,
    // followed by its "normal" arguments
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});

client.commands = new Enmap();

// reads all files in commands
fs.readdir('./commands/', (err, files) => {
  if (err) return console.error(err);
  // loops through each file
  files.forEach(file => {
    // check if .js file
    if (!file.endsWith(".js")) return;
    // load the event file
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load ${commandName}`);
    //storing commands in the enmap
    client.commands.set(commandName, props);
  });
});

// logging bot in
client.login(auth.token);
