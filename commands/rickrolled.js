const Discord = require('discord.js');
//youtube
const ytdl = require('ytdl-core');

var usedCommandRecently = new Set();

module.exports.run = async (message) => {
    if(usedCommandRecently.has(message.author.id)) {
        //cooldown
        message.reply('Your command is on cooldown. Try again in 10 seconds.');
    } else {
        //check if in voice channel
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel)  return message.reply('You must be in a voice channel to play music!');
        
        try{
            //bot connect to channel
            var connection = await voiceChannel.join();
        } catch (error)
        {
            console.log('There was an error connecting to the voice channel: ' + error);
            message.channel.send('There was an error connecting to the voice channel: ' + error);
        }

        //play song
        const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=oHg5SJYRHA0', {filter: 'audioonly'}))
        .on('finish', () => {
            voiceChannel.leave();
        })
        .on('error', error => {
            console.log(error);
        })
        dispatcher.setVolumeLogarithmic( 5 / 5);
        
        //add user to usedCommandRecently
        usedCommandRecently.add(message.author.id);
        setTimeout(() => {
            //delete after 10 seconds
            usedCommandRecently.delete(message.author.id);
        }, 10000);
    }
}

module.exports.help = {
    name: 'rr'
}