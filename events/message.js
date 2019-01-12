module.exports = (client, message) => {
  // ignore bots
  if (message.author.bot) return;

  // ignore messages without prefix
  if (message.content.indexOf(client.auth.prefix) !== 0) return;

  const args = message.content.slice(client.auth.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // gets the command data from the enmap
  const cmd = client.commands.get(command);

  // checks if command exists
  if (!cmd) return;

  // runs command
  cmd.run(client, message, args);

}
