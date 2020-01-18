const config = require('./config/config');

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {

});

client.on('message', message => {

  //dont respond to myself
  if(message.author.id == client.user.id) return;
  const content = message.content;

  /*****************************************
   * Ping Pong  
   *****************************************/
  if(content == 'ping') {
    message.channel.send('pong');
  }

});

client.login(config.discord.token);
