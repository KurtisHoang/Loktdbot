const Discord = require('discord.js');

var usedCommandRecently = new Set();

module.exports.run = async (message) => {
    if(usedCommandRecently.has(message.author.id)) {
        //cooldown
        message.reply('Your command is on cooldown. Try again in 10 seconds.');
    } else {
        //check if user in voice channel
        if(!message.member.voice.channel) return message.channel.send('You need to be in the voice channel to stop the video');

        message.member.voice.channel.leave();
        //add user to usedCommandRecently
        usedCommandRecently.add(message.author.id);
        setTimeout(() => {
            //delete after 10 seconds
            usedCommandRecently.delete(message.author.id);
        }, 10000);
        return undefined;
    }
}

module.exports.help = {
    name: 'stop'
}