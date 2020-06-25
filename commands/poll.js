const Discord = require('discord.js');
//MessageAttachment, MessageEmbed
const {MessageEmbed} = require('discord.js');

module.exports.run = async (message, args) => {
    // '**' mean bold text
    const embed = new MessageEmbed()
        .setColor(0xFFC300)
        .setTitle('Poll')
        .setDescription('**' + args + '**');

    //add emoji reaction to text
    message.channel.send(embed).then(messageReaction => {
        messageReaction.react('👍');
        messageReaction.react('👎');
        message.delete().catch(console.error);
    });
}

module.exports.help = {
    name: 'poll'
}