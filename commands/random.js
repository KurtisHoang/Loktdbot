
const Discord = require('discord.js');

module.exports.run = async (message, args) => {
    //random number between arg1 and arg2
    let arg1 = Number.parseInt(args[1]);
    let arg2 = Number.parseInt(args[2]);
    if(Number.isInteger(arg1))
    {
        if(Number.isInteger(arg2))
        {
            let num = (Math.floor(Math.random()*arg2)+arg1);
            message.channel.send(num);
        }
        else
        {
            message.channel.send('Error: Please input another argument. Ex: !rand 1 10');
        }
    }
    else
    {
        message.channel.send('Error: Please input two arguments. Ex !rand 1 10');
    }
}

module.exports.help = {
    name: 'rand'
}