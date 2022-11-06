const {
    MessageEmbed
} = require('discord.js');
const botInfo = require('./botInfo.json');

module.exports = {
    name: 'help',
    description: 'Ini adalah command help',
    execute(message) {
        const helpEmbed = new MessageEmbed()
            .setTitle('BOT Commands')
            .addField('PREFIX', botInfo.prefix)
            .addField('help', 'BOT Commands')
            .addField('ping', 'Ping Bot')
            .addField('info', 'Bot Informations')
            .addField('clear <count>', 'Clear Message')
            .setColor('F900BF')
            .setFooter('SOON-Bots ' + botInfo.version);
        message.channel.send(helpEmbed)
        }
    }