exports.run = (client, message, args) => {
    if (message.author.id !== client.auth.ownerID) return;

    message.channel.send('Yeet big boi, you are the owner');
};
