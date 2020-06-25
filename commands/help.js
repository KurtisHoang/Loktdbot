const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');

module.exports.run = async (message) => {

    const ping = '>ping shows how to check your ping\n';
    const clear = '>clear clear up x amount of previous messages (max: 100) Ex: >clear 25\n';
    const avatar = '>avatar displays your own avatar\n';
    const coinflip = '>coinflip flips a coin';
    const rand = '>rand randomly chooses a number between two numbers Ex: >rand 1 10\n';
    const poll = '>poll will set up a yes or no poll Ex: >poll Should I eat a sandwhich?\n';
    const ba = '>ba is a secret command\n';
    const rr = '>rr is a secret command\n';
    const play = '>play will play a youtube url Ex: >play youtube_url_here\n';
    const stop = '>stop will stop any music/sound command\n';

    const embed = new MessageEmbed()
        .setColor(0x00FF00)
        .setTitle('List of Commands')
        .setDescription(ping + '\n' + clear + '\n'
             + avatar + '\n' + coinflip + '\n'
             + rand + '\n' + poll + '\n'
             + play + '\n' + stop + '\n'
             + ba + '\n' + rr + '\n');

    message.channel.send(embed);
}

module.exports.help = {
    name: 'help'
}