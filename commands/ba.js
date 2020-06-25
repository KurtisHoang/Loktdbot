const Discord = require('discord.js');
//youtube
//const ytdl = require('ytdl-core');

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

    //
    const dispatcher = connection.play('./Assets/ba.mp3')
    .on('finish', () => {
        voiceChannel.leave();
    })
    .on('error', error => {
        console.log(error);
    })
    dispatcher.setVolume(3);
};

module.exports.help = {
    name: 'ba'
}