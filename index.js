const {
    Client, 
    MessageEmbed,
    Collection
} = require('discord.js');
const bot = new Client;

const token = 'OTY2MzYyMTU5Mjg0MTI1Nzc2.G53zls.I-fd3hwsclJVlUF0ysPzTnqvKVsU6H9tVDsEAM';
var PREFIX = '>';
var version = '1.1.2';


const fs = require('fs');
const commands = new Collection();
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of files) {
        const command = require(`./commands/${file}`);
        commands.set(command.name, command)
}


bot.on('ready', () => {
    console.log('Bot sudah on')

    bot.user.setActivity('Discord SOON Agar Ramai', {
        type: "PLAYING"
    }).catch(console.error);
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');
    
    switch (args[0]) {
        case 'ping':
            commands.get('ping').execute(message);
            break;

         case 'info':
             commands.get('info').execute(message, args);
             break;
                    
        case 'help':
            commands.get('help').execute(message);
            break;

        case 'clear':
            commands.get('clear').execute(message, args);
            break;
    }

})

bot.login(token);