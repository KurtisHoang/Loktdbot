/*
to run discord bot
go to directory of bot
type in terminal nodemon .
*/
const Discord = require('discord.js');
//creating bot
const bot = new Discord.Client();
//dotenv
require('dotenv').config();
//prefix
const prefix = '>';
//version variable
var version = '1.0';
//filescript
const fs = require('fs');
//collection of commands
bot.commands = new Discord.Collection();

//read files from commands folder
fs.readdir('./commands/', (err,files) => {
    if(err) console.log(err);

    //filter .js from files
    let jsFile = files.filter(f => f.split('.').pop() === 'js');

    //if less than 0 there are no command files
    if(jsFile <= 0) {
        console.log('could not find commands.');
    }

    //set each file to a bot command collection
    jsFile.forEach((f,i) => {
        let props = require('./commands/'+f);
        console.log(f + ' has loaded');
        bot.commands.set(props.help.name, props);
    })

});

//when bot is ready will log bot is online
bot.once('ready', () => {
    console.log('This bot is online! version: ' + version);
    //sets bot game playing title
    bot.user.setActivity('Bot jobs');
});

bot.on('message', message=> {

    if(message.content[0] === prefix)
    {
        //
        if(message.author.bot) return;
        //if it direct message then don't do anything
        if(message.channel.type === 'dm') return;

        //allow us to add prefix to argument
        let args = message.content.substring(prefix.length).split(' ');
        
        //get the file needed
        let commandFile = bot.commands.get(args[0]);

        //only gets first argument after prefix
        switch(args[0])
        {
            case 'ping':
                commandFile.run(message);
                break;
            case 'clear':
                commandFile.run(message, args);
                break;
            case 'poll':

                //if no arguments after !poll
                if(!args[1]){
                    message.channel.reply('Please input a question');
                    break;
                }

                //getting all arguments into one string
                var newArgs = '';

                //applying arguments into one
                for(i = 1; i < args.length; i++)
                {
                    newArgs += ' ' + args[i];
                }

                commandFile.run(message, newArgs);
                break;
            case 'avatar':
                commandFile.run(message);
                break;
            case 'rand':
                commandFile.run(message,args);
                break;
            case 'coinflip':
                commandFile.run(message);
                break;
            case 'rr':
                commandFile.run(message);
                break;   
            case 'ba':
                commandFile.run(message);
                break; 
            case 'play':
                commandFile.run(message, args);
                break;    
            case 'stop':
                commandFile.run(message);
                break;
            case 'help':
                commandFile.run(message);
                break;
            default:
                break;
        }
    }
});

//login to bot
bot.login(process.env.TOKEN);