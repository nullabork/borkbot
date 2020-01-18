
let discord_conf;
try {
  discord_conf = require('./discord.config.js');
} catch {
  console.log('requires a ./discord.config.js file');
  console.log('{ discord : { token : 324567dfghjk... } }');
  process.exit();
}

module.exports = {
  ...discord_conf
  //...other_conf
}