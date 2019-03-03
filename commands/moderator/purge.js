exports.run = (client, message, args) => {
    // checks if the user is the owner
    if (!(message.member.hasPermission('ADMINISTRATOR'))) return;

    // bots can't delete 99< messages
    if (args < 0 || args > 99) {
        message.channel.send('Please keep the number between 0-99, ');
        return;
    }

    async function deleteMsgs() {
        message.delete()
            .then(console.log('Deleted authors message'))
            .catch(console.error);

        // gets a specified amount of messages, and then deletes them
        const fetchedMessages = await message.channel.fetchMessages({ limit: args })
            .catch(console.error);

        message.channel.bulkDelete(fetchedMessages)
            .catch(console.error);
    }

    // TODO: Bot cannot bulk delete one message, so needs .delete

    deleteMsgs();
};
