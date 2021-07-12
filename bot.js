// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);





client.on('message', msg => {
	var message = msg.content
  if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
		var COM = cmd.toUpperCase();
		function sortString(COM){
			var arr = COM.split('');
			var sorted = arr.sort();
			return sorted.join('');
		}
		var arb = sortString(COM);
		
		var general = ["Block", "Dauntless", "Dirty Player", "Fend", "Frenzy", "Kick", "Kick-Off Return", "Pass Block", "Pro", "Shadowing", "Strip Ball", "Sure Hands", "Tackle", "Wrestle"];
var grandom =  Math.floor(Math.random() * general.length);

var agility = ["Catch", "Diving Catch", "Diving Tackle", "Dodge", "Jump Up", "Leap", "Side Step", "Sneaky Git", "Sprint", "Sure Feet"];
var arandom = Math.floor(Math.random() * agility.length);

var pass = ["Accurate", "Dump-Off", "Hail Mary Pass", "Leader", "Nerves of Steel", "Pass", "Safe Throw"];
var prandom = Math.floor(Math.random() * pass.length);

var strength = ["Break Tackle", "Grab", "Guard", "Juggernaut", "Mighty Blow", "Multiple Block", "Piling On", "Stand Firm", "Strong Arm", "Thick Skull"];
var srandom = Math.floor(Math.random() * strength.length);

var mutation = ["Big Hand", "Claw", "Disturbing Presence", "Extra Arms", "Foul Appearance", "Horns", "Prehensile Tail", "Tentacles", "Two Heads", "Very Long Legs"];
var mrandom = Math.floor(Math.random() * mutation.length);

var ADIMSTU = ["Security Gate", "Beer Stand", "Magician's Shop", "Referee Rest Area", "Astrogranite Playing Surface", "Elf Turf", "Royal Box", "Squig Sandwich Kiosk", "Magic Dome", "Nuffle Altar"];
var stadrand = Math.floor(Math.random() * ADIMSTU.length);

var stat = ["+MA", "+AV"]
var randstat = Math.floor(Math.random() * stat.length);

var race = ["Humans", "Orcs", "Dwarfs", "Skaven", "High Elves", "Dark Elves", "Bretonnians", "Chaos", "Wood Elves", "Lizardmen", "Norse", "Undead", "Necromantic", "Nurgle", "Chaos Dwarves", "Khemri", "Amazon", "Elven Union", "Goblins", "Halflings", "Ogres", "Underworld Denizens", "Vampires", "Kislev Circus"];
var rrandom = Math.floor(Math.random() * race.length);

var G = general[grandom];
var A = agility[arandom];
var P = pass[prandom];
var S = strength[srandom];
var M = mutation[mrandom];
var STAD = ADIMSTU[stadrand];
var STAT = stat[randstat];
var TEAM = race[rrandom];
		
		function rollDice(min, max) {
return min + Math.floor(Math.random() * (max-min + 1))
}

var d6 = rollDice(1,6);
var d6a = rollDice(1,6);



		switch(arb){
case 'AEMT':
msg.reply(TEAM);
break;
case 'ASTT':
msg.reply(STAT);
break;
case 'CDEI':
msg.reply(d6 +' + ' + d6a + ' = ' + (d6+d6a));
break;
case 'ADIMSTU':
msg.reply(STAD);
break;
case 'G':
msg.reply(G);
break;
case 'A':
msg.reply(A);
break;
case 'P':
msg.reply(P);
break;
case 'S':
msg.reply(S);
break;
case 'M':
msg.reply(M);
break;
case 'AG':
var AG = [A, G]
msg.reply(AG[Math.floor(Math.random()*AG.length)]);
break;
case 'AS':
var AS = [A, S]
msg.reply(AS[Math.floor(Math.random()*AS.length)]);
break;
case 'AP':
var AP = [A, P]
msg.reply(AP[Math.floor(Math.random()*AP.length)]);
break;
case 'AM':
var AM = [A, M]
msg.reply(AM[Math.floor(Math.random()*AM.length)]);
break;
case 'GS':
var GS = [G, S]
msg.reply(GS[Math.floor(Math.random()*GS.length)]);
break;
case 'GM':
var GM = [G, M]
msg.reply(GM[Math.floor(Math.random()*GM.length)]);
break;
case 'GP':
var GP = [G, P]
msg.reply(GP[Math.floor(Math.random()*GP.length)]);
break;
case 'MS':
var MS = [M, S]
msg.reply(MS[Math.floor(Math.random()*MS.length)]);
break;
case 'PS':
var PS = [P, S]
msg.reply(PS[Math.floor(Math.random()*PS.length)]);
break;
case 'MP':
var MP = [M, P]
msg.reply(MP[Math.floor(Math.random()*MP.length)]);
break;
case 'AGS':
var AGS = [A, G, S]
msg.reply(AGS[Math.floor(Math.random()*AGS.length)]);
break;
case 'AGM':
var AGM = [A, G, M]
msg.reply(AGM[Math.floor(Math.random()*AGM.length)]);
break;
case 'AGP':
var AGP = [A, G, P]
msg.reply(AGP[Math.floor(Math.random()*AGP.length)]);
break;
case 'AMS':
var AMS = [A, M, S]
msg.reply(AMS[Math.floor(Math.random()*AMS.length)]);
break;
case 'APS':
var APS = [A, P, S]
msg.reply(APS[Math.floor(Math.random()*APS.length)]);
break;
case 'AMP':
var AMP = [A, M, P]
msg.reply(AMP[Math.floor(Math.random()*AMP.length)]);
break;
case 'GMS':
var GMS = [G, M, S]
msg.reply(GMS[Math.floor(Math.random()*GMS.length)]);
break;
case 'GPS':
var GPS = [G, P, S]
msg.reply(GPS[Math.floor(Math.random()*GPS.length)]);
break;
case 'GMP':
var GMP = [G, M, P]
msg.reply(GMP[Math.floor(Math.random()*GMP.length)]);
break;
case 'MPS':
var MPS = [M, P, S]
msg.reply(MPS[Math.floor(Math.random()*MPS.length)]);
break;
case 'AGMS':
var AGMS = [A, G, M, S]
msg.reply(AGMS[Math.floor(Math.random()*AGMS.length)]);
break;
case 'AGPS':
var AGPS = [A, G, P, S]
msg.reply(AGPS[Math.floor(Math.random()*AGPS.length)]);
break;
case 'AGMP':
var AGMP = [A, G, M, P]
msg.reply(AGMP[Math.floor(Math.random()*AGMP.length)]);
break;
case 'AMPS':
var AMPS = [A, M, P, S]
msg.reply(AMPS[Math.floor(Math.random()*AMPS.length)]);
break;
case 'GMPS':
var GMPS = [G, M, P, S]
msg.reply(GMPS[Math.floor(Math.random()*GMPS.length)]);
break;
case 'AGMPS':
var AGMPS = [A, G, M, P, S]
msg.reply(AGMPS[Math.floor(Math.random()*AGMPS.length)]);
break;
default:
msg.reply('Please only use any combination of A G M P S (no duplicates), or the !stadium, !dice, !stat or !team commands');
}
}
});
