const Discord = require("discord.js");
const bot = new Discord.Client();

const PREFIX = "tg!"
const TGCOLOR = 0x00c62b

console.log('TG Bot running!');

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('389527245636632587').send(":white_check_mark: " + "<@" + member.user.id + ">" , {embed: {
    color: TGCOLOR,
    title: 'WELCOME TO THE SERVER!',
    description: 'A new Toxic Warrior summoned! / Um novo Toxic Warrior sumonado!'

    }});
});


bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
    }
});

bot.login(process.env.BOT_TOKEN);
