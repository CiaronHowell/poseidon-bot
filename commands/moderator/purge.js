exports.run = (client, message, args) => {
    // checks if the user is the owner (needs to be changed)
    // TODO: Check if the author has permissions, not the ownerID
    if (message.author.id !== client.auth.ownerID) return;

    // gets a specified amount of messages, and then deletes them
    message.channel.fetchMessages({ limit: args })
        .then(messages => message.channel.bulkDelete(messages))
        .catch(console.error);

    console.log('Completed');
};
