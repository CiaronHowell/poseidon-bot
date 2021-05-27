import Discord, { Client, ClientUser, Collection } from 'discord.js';
import fg from 'fast-glob';
import configs from './data/config.json';
import { Command } from './utils/iCommand';


const client:Client = new Discord.Client();
// Collection of Commands
const commands:Collection<string, Command> = new Discord.Collection();

client.once('ready', () => {
    // shows that the bot is connected and what it is logged in as
    console.log('Connected');
    console.log('Poseidon-Bot has been started');
    client.user!.setActivity(`${configs.prefix}help`);
    console.log('Activity has been set');

    loadCommands();
});

// Load commands 
function loadCommands(): void {
    // Use Fast-Glob to get all js files
    const commandPaths:string[] = fg.sync('commands/**/*.js', {
        "absolute": true
    });

    // Load import all commands (not going to be a lot)
    commandPaths.forEach(async (commandPath) => {
        // Import instantiated command
        const command:Command = (await import(commandPath)).default;
        
        console.log(command);

        console.log(`Loaded ${command.name}`);
        commands.set(command.name, command);
    });
}

// Handles discord messages
client.on("message", message => {
    if (!message.content.startsWith(configs.prefix)) return;

    const messageString:string = message.content.replace(configs.prefix, '');

    // Just split by space for now TODO: Create a framework for messages
    const [commandName, args] = messageString.split(/ (.+)/);

    // Ignore incorrect commands, possible TODO: add algorithm to suggest 
    //the most similar command (OTT?)
    if (!commands.has(commandName)) {
        return;
    }

    const command:Command = commands.get(commandName)!;

    // TODO: Split the args

    command.run(message, args);
});

// logging bot in
client.login(configs.token);
