const Discord = require('discord.js');
//youtube
const ytdl = require('ytdl-core');

module.exports.run = async (message) => {
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
}

module.exports.help = {
    name: 'rr'
}