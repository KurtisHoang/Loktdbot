const Discord = require('discord.js');

module.exports.run = async (message) => {
    //check if user in voice channel
    if(!message.member.voice.channel) return message.channel.send('You need to be in the voice channel to stop the video');

    message.member.voice.channel.leave();
    return undefined;
}

module.exports.help = {
    name: 'stop'
}