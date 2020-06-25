const Discord = require('discord.js');

module.exports.run = async (message) => {
    //send without @user
    message.channel.send('Type ping 204.2.229.9 in Terminal/Command Prompt');
}

module.exports.help = {
    name: 'ping'
}