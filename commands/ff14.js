const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');

module.exports.run = async (message) => {
    /*
        https://ffxiv.consolegameswiki.com/wiki/Main_Scenario_Quests
        https://ffxiv.consolegameswiki.com/wiki/Aether_Currents
        https://ffxiv.consolegameswiki.com/wiki/Chocobo_Colors#:~:text=Players%20can%20change%20the%20color,will%20alter%20the%20colors%20differently.
        https://ffxiv.consolegameswiki.com/wiki/FF14_Wiki
    */

    const ff14MSQ = 'https://ffxiv.consolegameswiki.com/wiki/Main_Scenario_Quests';
    const ff14AC = 'https://ffxiv.consolegameswiki.com/wiki/Aether_Currents';
    const ff14CC = 'https://ffxiv.consolegameswiki.com/wiki/Chocobo_Colors#:~:text=Players%20can%20change%20the%20color,will%20alter%20the%20colors%20differently';
    const ff14Wiki = 'https://ffxiv.consolegameswiki.com/wiki/FF14_Wiki';

    // '**' mean bold text
    const embed = new MessageEmbed()
        .setColor(0xADD8E6)
        .setTitle('Poll')
        .setDescription('Main Story Quest:\n' + ff14MSQ + '\n' + 
        'Aether Current:\n' + ff14AC + '\n' + 
        'Chocobo Colors:\n' + ff14CC + '\n' +
        'ff14 Wikipedia:\n' + ff14Wiki + '\n');

    //add emoji reaction to text
    message.reply(embed);
}

module.exports.help = {
    name: 'ff14'
}