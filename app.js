const Discord = require("discord.js");
const client = new Discord.Client();
var LolApi = require('leagueapi');

LolApi.init('xxxxxxxxxxxxxxxxxxxxxxxx', 'euw');//tokeen removed

var bonacounter = 17;

// LolApi.Summoner.getByName('Zamalkawii')
//     .then(function (summoner) {
//         console.log(summoner);
//     });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
});

client.on("guildMemberAdd", member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(`Welcome ${member.user} to whatever Syanide or Zamalkawii call this server now`);
});

client.on('message', msg => {
    if (msg.author.bot) return;
    let guild = msg.author.guild;
    let modrole = msg.guild.roles.find("name", "Moderator");

    let prefix = "==";
    if (!msg.content.startsWith(prefix)) return;

    let command = msg.content.split(" ")[0];
    command = command.slice(prefix.length).toLowerCase();

    let args = msg.content.split(" ").slice(1);
    switch (command) {
        case 'myphoto':
            msg.reply(msg.author.avatarURL);
            return;
        case 'ayman':
            msg.channel.sendMessage('Its the year 2025, and still no kart shasha');
            return;
        case 'shamy':
            msg.channel.sendMessage('iWander what his name is ... LeKrittyJames ... i mean MegaDunkinKat ... Meh');
            return;
        case 'oudric':
            msg.channel.sendMessage('https://upload.wikimedia.org/wikipedia/commons/7/70/Gokarnatheshwara_Temple_7042008.jpg !');
            return;
        case 'yokrania':
            msg.channel.sendMessage('@everyone, https://randomtournamentlinkplzgivemerpiwantthatluxskin.com');
            return;
        case 'banda':
            msg.reply('Banda is 12!');
            return;
        case 'hossam':
            msg.channel.sendMessage('Fun fact: Looney Tunes has 120 perma-banned accounts!');
            return;
        case 'drakno':
            msg.channel.sendMessage('Rakan OTP!');
            return;
        case 'zamalkawii':
            msg.channel.sendMessage('Owner of this bot, 3rd best egyptian jungle, casual pleb, gift blood moon elise or riot');
            return;
        case 'bona':
            msg.channel.sendMessage('Bona 3aleh ' + bonacounter + ' Crepe!');
            return;
        case 'syanide':
            var x = msg.guild.emojis.find(val => val.name === 'jinx2');
            msg.channel.sendMessage('small crits big crits ' + x);
            return;
        case 'tournament':
            msg.channel.sendMessage('NO!');
            return;
        case 'freechampsdetailed':
            {
                LolApi.getChampions(true, (err, champs) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    let Message = ' ';
                    let counter = 1;
                    for (var i = 0; i < champs.length; i += 1) {
                        var options = {
                            champData: 'allytips,blurb',
                            locale: 'en_US'
                        }
                        LolApi.Static.getChampionById(champs[i].id, options, 'na', (err2, champ) => {
                            if (err2) {
                                console.log(err2);
                                return;
                            }
                            Message = counter + ") " + ("**" + champ.name + "**" + " " + champ.title + " \n" + champ.blurb + "\n"); // +" \n"+champ.allytips
                            counter += 1;
                            msg.channel.sendMessage(Message);
                        });
                    }
                });

                return;
            }
        case 'freechamps':
            {
                LolApi.getChampions(true, (err, champs) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    let Message = ' ';
                    let counter = 1;
                    for (var i = 0; i < champs.length; i += 1) {
                        var options = {
                            champData: 'allytips,blurb',
                            locale: 'en_US'
                        }
                        LolApi.Static.getChampionById(champs[i].id, options, 'na', (err2, champ) => {
                            if (err2) {
                                console.log(err2);
                                return;
                            }
                            Message = counter + ") " + ("**" + champ.name + "**" + " " + champ.title + " \n"); // +" \n"+champ.allytips
                            counter += 1;
                            msg.channel.sendMessage(Message);
                        });
                    }
                });

                return;
            }
        case 'addcrepe':
            {
                bonacounter += 1;
                msg.channel.sendMessage('Bona 3aleh ' + bonacounter + ' Crepe!');
                return;
            }
        case 'decrementcrepe':
            {
                bonacounter -= 1;
                msg.channel.sendMessage('Bona 3aleh ' + bonacounter + ' Crepe!');
                return;
            }
        case 'rick':
            msg.channel.sendMessage(['WUBBA LUBBA DUB DUB!'], {
                tts: true
            });
            return;
        case 'morty':
            var number = Math.floor((Math.random() * 2) + 1);
            switch (number) {
                case 1:
                    msg.channel.sendMessage(['Oh geez rick! you cant do this rick!'], {
                        tts: true
                    });
                    msg.channel.sendMessage('https://i.imgur.com/bk9Oo0S.png');
                    return;
                case 2:
                    msg.channel.sendMessage(['Its not fair! Our lawyer is a morty!'], {
                        tts: true
                    });
                    msg.channel.sendMessage('https://i.imgur.com/bk9Oo0S.png');
                    return;
            }
            return;
        case 'help':
            msg.reply('List of commands for now:\n •==joe \n •==zamalkawii \n •==rick \n •==morty \n •==myphoto \n •==banda'
            +' \n •==ayman \n •==yokrania \n •==hossam \n •==drakno  \n •==freechamps '
            +'\n •==freechampsdetailed \n •==help \n •==playing \n •==bona \n •==addcrepe \n •==decrementcrepe '
            +'\n •==ghayarly{{ Game Name }} \n •==is {{ question }} \n •==should {{ question }} \n •==how {{ question }} '
            +'\n •==will {{ question }}');
            return;
        case 'playing':
            if (msg.author.presence) {
                if (msg.author.presence.game) {
                    msg.reply('You are playing ' + msg.author.presence.game.name);
                    return;
                } else {
                    msg.reply('Enta mesh betel3ab 7aga!');
                    return;
                }
            }
    }
    if (command.startsWith('ghayarly')) {
        client.user.setGame(args.join(" "));
        msg.reply("Now Playing " + args.join(" "));
    }

    if (command.startsWith('will')) {
        var number = Math.floor((Math.random() * 3) + 1);
        switch (number) {
            case 1:
                msg.reply('Yes!');
                return;
            case 2:
                msg.reply('No!');
                return;
            case 3:
                msg.reply('Maybe!');
                return;
        }

    }
    if (command.startsWith('should')) {
        var number = Math.floor((Math.random() * 3) + 1);
        switch (number) {
            case 1:
                msg.reply('Yes!');
                return;
            case 2:
                msg.reply('No!');
                return;
            case 3:
                msg.reply('Maybe!');
                return;
        }

    }
    if (command.startsWith('how')) {
        msg.reply("Keda ¯\\\\_(ツ)__/¯");
    }
    if (command.startsWith('lolsearch')) {
        LolApi.Summoner.getByName(args.join(" "))
            .then(function (summoner) {
                let summonername = args.join(" ");
                console.log(summoner);
                let summonerid = summoner[0].id;
                console.log(summonername);
                console.log(summonerid);
                LolApi.Stats.getPlayerSummary(summonerId, [3], (err, data) => {
                    console.log(data);
                });
            });
        return;
    }
    if (command.startsWith('is joe')) {
        msg.reply('Walad! 3eib!');
        return;
    } else if (command.startsWith('is mohsen')) {
        msg.reply('Walad! 3eib!');
        return;
    } else if (command.startsWith('is zamalkawii')) {
        msg.reply('Walad! 3eib!');
        return;
    } else if (command.startsWith('is')) {
        var number = Math.floor((Math.random() * 3) + 1);
        switch (number) {
            case 1:
                msg.reply('Yes!');
                return;
            case 2:
                msg.reply('No!');
                return;
            case 3:
                msg.reply('Maybe!');
                return;
        }

    }

    if (command.startsWith('is')) {
        var number = Math.floor((Math.random() * 3) + 1);
        switch (number) {
            case 1:
                msg.reply('Yes!');
                return;
            case 2:
                msg.reply('No!');
                return;
            case 3:
                msg.reply('Maybe!');
                return;
        }

    }

});

client.login('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');//token removed