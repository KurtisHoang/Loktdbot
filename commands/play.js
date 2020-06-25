const Discord = require('discord.js');
//youtube
const ytdl = require('ytdl-core');

module.exports.run = async (message, args) => {

    //check for arguments
    if(!args[1]) return message.reply("You need to provide a link");

    //check if valid url
    if(!ytdl.validateURL(args[1])) return message.reply('This is not a valid youtube url');

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
    const dispatcher = connection.play(ytdl(args[1]))
    .on('finish', () => {
        voiceChannel.leave();
    })
    .on('error', error => {
        console.log(error);
    })
    dispatcher.setVolume(1);
};

module.exports.help = {
    name: 'play'
}