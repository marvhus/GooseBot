const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';
 
client.commands = new Discord.Collection();


// on ready
client.once('ready', () => {
    console.log("GooseBot is online");

    client.user.setActivity('v-help');
});

// on message
client.on('message', message => {

    if(message.author.bot) return; // checks if the message is sent by a bot and if it is it stops it

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    const embed = new Discord.MessageEmbed()

    switch (message.content.toLowerCase()) {

        case 'hello':
            let user = message.mentions.users.first();
            message.channel.send('Hello ' + user);
            break;

    }

    // Commands without prefix end

    if (!message.content.startsWith(prefix)) return; // checks if message starts with the prefix

    switch(command) {

        // Help command
        case 'help':
            embed
            .setColor('#FF3F76')
            .setTitle('HEELLPP')
            .addFields(
                {name: 'v-creator', value: 'The bot creator'},
                {name: 'v-ping', value: 'Pong!'},
                {name: 'v-help', value: 'well ....... you know'}
            )
            .setDescription('Requested by: ' + message.author.username );

            break;

        // Ping command
        case 'ping':
           
            embed
            .setColor('#FF3F76')
            .addFields(
                {name: 'Pong!', value: Date.now() - message.createdTimestamp + 'ms'}
            )
            .setDescription('Requested by: ' + message.author.username );

            break;

        // Creator command
        case 'creator':

            embed
            .setColor('#FF3F76')
            .addFields(
                {name: 'Bot made by:', value: 'MartHus#8022'}
            )
            .setDescription('Requested by: ' + message.author.username );
            
            break;

    }

    message.channel.send(embed);
    // -------- Message end --------

});

client.login(process.env.token);