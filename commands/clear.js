const Discord = require('discord.js');

module.exports.run = async (message, args) => {
    //clear messages based on args[1]
    //reply = reply back to the person that wrote the command
    if(!args) message.reply('Error: Please define how many messages you want deleted');
    message.channel.bulkDelete(args[1]);
}

module.exports.help = {
    name: 'clear'
}