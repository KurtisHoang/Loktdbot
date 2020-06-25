const Discord = require('discord.js');

module.exports.run = async (message) => {
    //display avatar
    message.reply(message.author.displayAvatarURL());
}

module.exports.help = {
    name: 'avatar'
}