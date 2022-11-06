const {
    MessageEmbed
} = require('discord.js');
const botInfo = require('./botInfo.json');
module.exports = {
    name: 'info',
    description: 'Ini adalah command info',
    execute(message, args) {
        if(!args[1]) {
            const infoEmbed = new MessageEmbed()
            .setTitle('BOT Informations Commands')
            .setDescription('Masukan salah satu perintah setelah mengetikan kata info')
            .addField('author', 'BOT Author information')
            .addField('version', 'BOT Version')
            .addField('bot', 'All Information about BOT')
            .setFooter('SOON-Bots ' + botInfo.version);
            message.reply(infoEmbed);
            } else {
            if (args[1] === 'author') {
                message.reply(botInfo.author);    
            } else if (args[1] === 'version') {
                message.reply('Version : ' + botInfo.version);
            } else if (args[1] === 'bot') {
                const botInfoEmbed = new MessageEmbed()
                .setTitle('BOT Information')
                .setDescription('SOON-Bots Adalah untuk melayani member di dalam server discord SOONS || NEW ERA')
                .addField('Author', botInfo.author, true)
                .addField('Version', botInfo.version, true)
                .setColor('FF5F00')
                .setFooter('SOON-Bots ' + botInfo.version);
                message.reply(botInfoEmbed);
            } else {
                message.reply('Perintah yang anda masukan tidak ditemukan');
            }
        }
    }
}