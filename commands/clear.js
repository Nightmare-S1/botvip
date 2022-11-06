module.exports = {
    name: 'clear',
    description: "Ini adalah command clear",
    execute(message, args) {
        if (!args[1]) {
            return message.reply('Masukan jumlah chat yang ingin di hapus');
        } else {
            message.channel.bulkDelete(args[1]);

        }
    }
}