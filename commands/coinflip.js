const Discord = require('discord.js');

module.exports.run = async (message) => {
    var coin = Math.floor(Math.random()*2)+1;
    console.log(coin);
    if(coin === 1)
    {
        message.reply('Tails');
    } else {
        message.reply('Heads');
    }
}

module.exports.help = {
    name: 'coinflip'
}