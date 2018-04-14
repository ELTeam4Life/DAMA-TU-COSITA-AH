const Discord = require("discord.js")
const PREFIX = "~";
const TOKEN = "MzMxMTQ2MTkzMjIyNjMxNDI2.DDrUHQ.cCoc9XKJ75VKxoebdaeauaFYF1M";
const YTDL = require('ytdl-core');
const fs = require('fs');


var bot = new Discord.Client();

bot.on("message", function() { 
    console.log("sent");
});

bot.on("ready", function() {

    bot.user.setGame("~envoypvp      | EnvoyPvP-BOT BY EL BOT//EL Team"); 
    console.log("Ready");
});
    


bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

        switch (args[0]) {
        case "envoypvp":
       message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "EnvoyPvP",
    description: "INFORMATION",
    fields: [{
        name: "Addictive",
        value: "This server is so addictive, because it have much game modes which you will love! and they are nice! ;) "
      },
      {
        name: "Friendly Community!",
        value: "Staff, Members is friendly, helpful, that makes guarantee of fun!"
      },
       {
        name: "Games/Modes!",
        value: "Kit-PvP HungerGames Skywars/Team-Skywars Murderer GuessWho Factions Skullwars Hide And Seek and Who is the Traitor..."
      },
      {
        name: "VOTE [1]",
        value: "http://topg.org/Minecraft/in-465782"
      },
      {
        name: "VOTE [2]",
        value: "https://serverpact.nl/vote-34499"
      },
                  {
        name: "WEBSITE ",
        value: "http://envoypvp.buycraft.net"
      },
            {
        name: "JOIN NOW!",
        value: "mc.envoypvp.com"
      },
    {
        name: "========================",
        value: "- -"
      }
    ],
    footer: {
      text: "BOTS, MODERATIONS, GFX, HELP BY EL Team " + "--MORE INFO: [EL]Elvinas (FOUNDER OF EL TEAM)#9465"
    }
  }
});
            break;
}
});


bot.login(TOKEN);