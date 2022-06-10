const Discord = require('discord.js');
const client = new Discord.Client();
var os 	= require('os-utils');
const fs = require('fs');
const puppeteer = require('puppeteer');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.cache.find(channel => channel.name === 'general').send("Hello, I'm here to protect your server to prevent vulgarity and anything.");
  client.user.setPresence({
    status: 'online',
    activity: {
        name: 'Watching for bad words | w!help',
        type: 'PLAYING',
        url: 'http://78.63.40.199:700'
    }
})
});
client.on('message', (message) => {
	var emojis = ["😀","😁","😂","😃","😄","😅","😆","😇","😈","👿","😉","😊","☺️","😋","😌","😍","😎","😏","😐","😑","😒","😓","😔","😕","😖","😗","😘","😙","😚","😛","😜","😝","😞","😟","😠","😡","😢","😣","😤","😥","😦","😧","😨","😩","😪","😫","😬","😭","😮","😯","😰","😱","😲","😳","😴","😵","😶","😷","😸","😹","😺","😻","😼","😽","😾","😿","🙀","👣","👤","👥","👶","👶🏻","👶🏼","👶🏽","👶🏾","👶🏿","👦","👦🏻","👦🏼","👦🏽","👦🏾","👦🏿","👧","👧🏻","👧🏼","👧🏽","👧🏾","👧🏿","👨","👨🏻","👨🏼","👨🏽","👨🏾","👨🏿","👩","👩🏻","👩🏼","👩🏽","👩🏾","👩🏿","👪","👨‍👩‍👧","👨‍👩‍👧‍👦","👨‍👩‍👦‍👦","👨‍👩‍👧‍👧","👩‍👩‍👦","👩‍👩‍👧","👩‍👩‍👧‍👦","👩‍👩‍👦‍👦","👩‍👩‍👧‍👧","👨‍👨‍👦","👨‍👨‍👧","👨‍👨‍👧‍👦","👨‍👨‍👦‍👦","👨‍👨‍👧‍👧","👫","👬","👭","👯","👰","👰🏻","👰🏼","👰🏽","👰🏾","👰🏿","👱","👱🏻","👱🏼","👱🏽","👱🏾","👱🏿","👲","👲🏻","👲🏼","👲🏽","👲🏾","👲🏿","👳","👳🏻","👳🏼","👳🏽","👳🏾","👳🏿","👴","👴🏻","👴🏼","👴🏽","👴🏾","👴🏿","👵","👵🏻","👵🏼","👵🏽","👵🏾","👵🏿","👮","👮🏻","👮🏼","👮🏽","👮🏾","👮🏿","👷","👷🏻","👷🏼","👷🏽","👷🏾","👷🏿","👸","👸🏻","👸🏼","👸🏽","👸🏾","👸🏿","💂","💂🏻","💂🏼","💂🏽","💂🏾","💂🏿","👼","👼🏻","👼🏼","👼🏽","👼🏾","👼🏿","🎅","🎅🏻","🎅🏼","🎅🏽","🎅🏾","🎅🏿","👻","👹","👺","💩","💀","👽","👾","🙇","🙇🏻","🙇🏼","🙇🏽","🙇🏾","🙇🏿","💁","💁🏻","💁🏼","💁🏽","💁🏾","💁🏿","🙅","🙅🏻","🙅🏼","🙅🏽","🙅🏾","🙅🏿","🙆","🙆🏻","🙆🏼","🙆🏽","🙆🏾","🙆🏿","🙋","🙋🏻","🙋🏼","🙋🏽","🙋🏾","🙋🏿","🙎","🙎🏻","🙎🏼","🙎🏽","🙎🏾","🙎🏿","🙍","🙍🏻","🙍🏼","🙍🏽","🙍🏾","🙍🏿","💆","💆🏻","💆🏼","💆🏽","💆🏾","💆🏿","💇","💇🏻","💇🏼","💇🏽","💇🏾","💇🏿","💑","👩‍❤️‍👩","👨‍❤️‍👨","💏","👩‍❤️‍💋‍👩","👨‍❤️‍💋‍👨","🙌","🙌🏻","🙌🏼","🙌🏽","🙌🏾","🙌🏿","👏","👏🏻","👏🏼","👏🏽","👏🏾","👏🏿","👂","👂🏻","👂🏼","👂🏽","👂🏾","👂🏿","👀","👃","👃🏻","👃🏼","👃🏽","👃🏾","👃🏿","👄","💋","👅","💅","💅🏻","💅🏼","💅🏽","💅🏾","💅🏿","👋","👋🏻","👋🏼","👋🏽","👋🏾","👋🏿","👍","👍🏻","👍🏼","👍🏽","👍🏾","👍🏿","👎","👎🏻","👎🏼","👎🏽","👎🏾","👎🏿","☝","☝🏻","☝🏼","☝🏽","☝🏾","☝🏿","👆","👆🏻","👆🏼","👆🏽","👆🏾","👆🏿","👇","👇🏻","👇🏼","👇🏽","👇🏾","👇🏿","👈","👈🏻","👈🏼","👈🏽","👈🏾","👈🏿","👉","👉🏻","👉🏼","👉🏽","👉🏾","👉🏿","👌","👌🏻","👌🏼","👌🏽","👌🏾","👌🏿","✌","✌🏻","✌🏼","✌🏽","✌🏾","✌🏿","👊","👊🏻","👊🏼","👊🏽","👊🏾","👊🏿","✊","✊🏻","✊🏼","✊🏽","✊🏾","✊🏿","✋","✋🏻","✋🏼","✋🏽","✋🏾","✋🏿","💪","💪🏻","💪🏼","💪🏽","💪🏾","💪🏿","👐","👐🏻","👐🏼","👐🏽","👐🏾","👐🏿","🙏","🙏🏻","🙏🏼","🙏🏽","🙏🏾","🙏🏿","🌱","🌲","🌳","🌴","🌵","🌷","🌸","🌹","🌺","🌻","🌼","💐","🌾","🌿","🍀","🍁","🍂","🍃","🍄","🌰","🐀","🐁","🐭","🐹","🐂","🐃","🐄","🐮","🐅","🐆","🐯","🐇","🐰","🐈","🐱","🐎","🐴","🐏","🐑","🐐","🐓","🐔","🐤","🐣","🐥","🐦","🐧","🐘","🐪","🐫","🐗","🐖","🐷","🐽","🐕","🐩","🐶","🐺","🐻","🐨","🐼","🐵","🙈","🙉","🙊","🐒","🐉","🐲","🐊","🐍","🐢","🐸","🐋","🐳","🐬","🐙","🐟","🐠","🐡","🐚","🐌","🐛","🐜","🐝","🐞","🐾","⚡️","🔥","🌙","☀️","⛅️","☁️","💧","💦","☔️","💨","❄️","🌟","⭐️","🌠","🌄","🌅","🌈","🌊","🌋","🌌","🗻","🗾","🌐","🌍","🌎","🌏","🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘","🌚","🌝","🌛","🌜","🌞","🍅","🍆","🌽","🍠","🍇","🍈","🍉","🍊","🍋","🍌","🍍","🍎","🍏","🍐","🍑","🍒","🍓","🍔","🍕","🍖","🍗","🍘","🍙","🍚","🍛","🍜","🍝","🍞","🍟","🍡","🍢","🍣","🍤","🍥","🍦","🍧","🍨","🍩","🍪","🍫","🍬","🍭","🍮","🍯","🍰","🍱","🍲","🍳","🍴","🍵","☕️","🍶","🍷","🍸","🍹","🍺","🍻","🍼","🎀","🎁","🎂","🎃","🎄","🎋","🎍","🎑","🎆","🎇","🎉","🎊","🎈","💫","✨","💥","🎓","👑","🎎","🎏","🎐","🎌","🏮","💍","❤️","💔","💌","💕","💞","💓","💗","💖","💘","💝","💟","💜","💛","💚","💙","🏃","🏃🏻","🏃🏼","🏃🏽","🏃🏾","🏃🏿","🚶","🚶🏻","🚶🏼","🚶🏽","🚶🏾","🚶🏿","💃","💃🏻","💃🏼","💃🏽","💃🏾","💃🏿","🚣","🚣🏻","🚣🏼","🚣🏽","🚣🏾","🚣🏿","🏊","🏊🏻","🏊🏼","🏊🏽","🏊🏾","🏊🏿","🏄","🏄🏻","🏄🏼","🏄🏽","🏄🏾","🏄🏿","🛀","🛀🏻","🛀🏼","🛀🏽","🛀🏾","🛀🏿","🏂","🎿","⛄️","🚴","🚴🏻","🚴🏼","🚴🏽","🚴🏾","🚴🏿","🚵","🚵🏻","🚵🏼","🚵🏽","🚵🏾","🚵🏿","🏇","🏇🏻","🏇🏼","🏇🏽","🏇🏾","🏇🏿","⛺️","🎣","⚽️","🏀","🏈","⚾️","🎾","🏉","⛳️","🏆","🎽","🏁","🎹","🎸","🎻","🎷","🎺","🎵","🎶","🎼","🎧","🎤","🎭","🎫","🎩","🎪","🎬","🎨","🎯","🎱","🎳","🎰","🎲","🎮","🎴","🃏","🀄️","🎠","🎡","🎢","🚃","🚞","🚂","🚋","🚝","🚄","🚅","🚆","🚇","🚈","🚉","🚊","🚌","🚍","🚎","🚐","🚑","🚒","🚓","🚔","🚨","🚕","🚖","🚗","🚘","🚙","🚚","🚛","🚜","🚲","🚏","⛽️","🚧","🚦","🚥","🚀","🚁","✈️","💺","⚓️","🚢","🚤","⛵️","🚡","🚠","🚟","🛂","🛃","🛄","🛅","💴","💶","💷","💵","🗽","🗿","🌁","🗼","⛲️","🏰","🏯","🌇","🌆","🌃","🌉","🏠","🏡","🏢","🏬","🏭","🏣","🏤","🏥","🏦","🏨","🏩","💒","⛪️","🏪","🏫","🇦🇺","🇦🇹","🇧🇪","🇧🇷","🇨🇦","🇨🇱","🇨🇳","🇨🇴","🇩🇰","🇫🇮","🇫🇷","🇩🇪","🇭🇰","🇮🇳","🇮🇩","🇮🇪","🇮🇱","🇮🇹","🇯🇵","🇰🇷","🇲🇴","🇲🇾","🇲🇽","🇳🇱","🇳🇿","🇳🇴","🇵🇭","🇵🇱","🇵🇹","🇵🇷","🇷🇺","🇸🇦","🇸🇬","🇿🇦","🇪🇸","🇸🇪","🇨🇭","🇹🇷","🇬🇧","🇺🇸","🇦🇪","🇻🇳","⌚️","📱","📲","💻","⏰","⏳","⌛️","📷","📹","🎥","📺","📻","📟","📞","☎️","📠","💽","💾","💿","📀","📼","🔋","🔌","💡","🔦","📡","💳","💸","💰","💎","🌂","👝","👛","👜","💼","🎒","💄","👓","👒","👡","👠","👢","👞","👟","👙","👗","👘","👚","👕","👔","👖","🚪","🚿","🛁","🚽","💈","💉","💊","🔬","🔭","🔮","🔧","🔪","🔩","🔨","💣","🚬","🔫","🔖","📰","🔑","✉️","📩","📨","📧","📥","📤","📦","📯","📮","📪","📫","📬","📭","📄","📃","📑","📈","📉","📊","📅","📆","🔅","🔆","📜","📋","📖","📓","📔","📒","📕","📗","📘","📙","📚","📇","🔗","📎","📌","✂️","📐","📍","📏","🚩","📁","📂","✒️","✏️","📝","🔏","🔐","🔒","🔓","📣","📢","🔈","🔉","🔊","🔇","💤","🔔","🔕","💭","💬","🚸","🔍","🔎","🚫","⛔️","📛","🚷","🚯","🚳","🚱","📵","🔞","🉑","🉐","💮","㊙️","㊗️","🈴","🈵","🈲","🈶","🈚️","🈸","🈺","🈷","🈹","🈳","🈂","🈁","🈯️","💹","❇️","✳️","❎","✅","✴️","📳","📴","🆚","🅰","🅱","🆎","🆑","🅾","🆘","🆔","🅿️","🚾","🆒","🆓","🆕","🆖","🆗","🆙","🏧","♈️","♉️","♊️","♋️","♌️","♍️","♎️","♏️","♐️","♑️","♒️","♓️","🚻","🚹","🚺","🚼","♿️","🚰","🚭","🚮","▶️","◀️","🔼","🔽","⏩","⏪","⏫","⏬","➡️","⬅️","⬆️","⬇️","↗️","↘️","↙️","↖️","↕️","↔️","🔄","↪️","↩️","⤴️","⤵️","🔀","🔁","🔂","#⃣","0⃣","1⃣","2⃣","3⃣","4⃣","5⃣","6⃣","7⃣","8⃣","9⃣","🔟","🔢","🔤","🔡","🔠","ℹ️","📶","🎦","🔣","➕","➖","〰","➗","✖️","✔️","🔃","™","©","®","💱","💲","➰","➿","〽️","❗️","❓","❕","❔","‼️","⁉️","❌","⭕️","💯","🔚","🔙","🔛","🔝","🔜","🌀","Ⓜ️","⛎","🔯","🔰","🔱","⚠️","♨️","♻️","💢","💠","♠️","♣️","♥️","♦️","☑️","⚪️","⚫️","🔘","🔴","🔵","🔺","🔻","🔸","🔹","🔶","🔷","▪️","▫️","⬛️","⬜️","◼️","◻️","◾️","◽️","🔲","🔳","🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛","🕜","🕝","🕞","🕟","🕠","🕡","🕢","🕣","🕤","🕥","🕦","🕧"]
	let msgArray = message.content.split(" "); // Splits the message content with space as a delimiter
  let prefix = "w!";
  let command = msgArray[0].replace(prefix, ""); // Gets the first element of msgArray and removes the prefix
  let args = msgArray.slice(1); // Remove the first element of msgArray/command and this basically returns the arguments
  // Now here is where you can create your commands
  if(command === "understand") {
    if(!args[0]) return message.react("✔")
    if(args[1]) return message.reply("array error");
  }
  if(command === "reactthis") {
    if(!args[0]) return message.react("✔");message.react("🎉");message.react("🌾");message.react("👑");message.react("🌈");message.react("✨");message.react("⛏");message.react("🤔");
    if(args[1]) return message.reply("array error");
  }
  if(command === "freeadmin") {
    if(!args[0]) return message.react("🤔");message.react("🤩");message.react("😕");message.react("😁");message.react("😎");message.react("👀");message.react("✨");message.react("😍");
    if(args[1]) return message.react("🤔");message.react("🤩");message.react("😕");message.react("😁");message.react("😎");message.react("👀");message.react("✨");message.react("😍");
  }
  if(command === "freebonzi") {
    if(!args[0]) return message.react("☢");message.react("😎");message.react("🤔");message.react("😐");message.react("👌");message.react("😖");
    if(args[1]) return message.react("☢");message.react("😎");message.react("🤔");message.react("😐");message.react("👌");message.react("😖");
  }
  if(command === "randomscratch") {
    if(!args[0]) return message.channel.send("https://scratch.mit.edu/projects/" + Math.floor(Math.random()*496724229));
    if(args[1]) return message.reply("array error");
  }
  if(command === "randomip") {
    if(!args[0]) return message.channel.send("Here's a random IP: http://" + Math.floor(Math.random()*254) + "." + Math.floor(Math.random()*254) + "." + Math.floor(Math.random()*254) + "." + Math.floor(Math.random()*254));
    if(args[1]) return message.reply("array error");
  }
  if(command === "randomweb") {
    if(!args[0]) return message.channel.send("http://www." + Math.random().toString(36).slice(Math.floor(Math.random()*-10)) + ".com");
    if(args[1]) return message.reply("array error");
  }
  if(command === "randomsearch") {
    if(!args[0]) return message.channel.send("https://www.google.com/search?q=" + Math.random().toString(36).slice(-9) + Math.random().toString(36).slice(-9));
    if(args[1]) return message.reply("array error");
  }
  if(command === "randomadvancedweb") {
	  var httpheader = ["http","https"]
	  var www = ["www.",""]
	  var toplevel = ["ch","lt","lv","ee","de","ru","uk","co","com","net","gov","org","world","online","jp","in","rs","ae","xyz","gq","tk","cf","ml","ga","ua","tr","pt","fr","np","no","kr","it","id","fm","cx","ca","br","bd","au","as","gg","ai","al","ar","bb","gr","hr","edu","biz","club","dev","eco","game","gift","gay","guru","info","wiki","link","one","pro","site","tech","wtf","zone","cat"]
    if(!args[0]) return message.channel.send(httpheader[Math.floor(Math.random()*httpheader.length)] + "://" + www[Math.floor(Math.random()*www.length)] + Math.random().toString(36).slice(-5) + "." + toplevel[Math.floor(Math.random()*toplevel.length)]);
    if(args[1]) return message.reply("array error");
  }
  if(command === "youtube") {
    if(!args[0]) return message.channel.send("https://www.youtube.com/channel/UC-qpKEbfivcB74Ju_ftCYpA?sub_confirmation=1");
    if(args[1]) return message.reply("array error");
  }
  if(command === "savetext") {
    if(!args[0]) return message.reply("Please enter the text to save.");
    if(args[1]) return fs.appendFileSync('discord.txt', args.join(' ') + ' \r\n'); message.channel.send("Saved! " + args.join(' '));
  }
  if(command === "date") {
    if(!args[0]) return message.channel.send(Date());
    if(args[1]) return message.reply("array error");
  }
  if(command === "ground") {
	var dayof = ["months","lifetimes","eras","seconds","nanoseconds","picoseconds","milliseconds","microseconds","days","weeks","years","decades","tranquilities","eternities","centuries","forevers","aeons","spans","hours","times","generations","measures","semesters","lapses","humanities","todays","groundings","pooping","collections"]
    if(!args[0]) return message.reply("You can't just ground nobody. Nobody is not groundable, she will be ungrounded anytime.")
    if(args[1]) return message.channel.send(args.join(' ') + " was grounded grounded grounded grounded grounded grounded grounded grounded grounded for " + Math.floor(Math.random()*9999999999) + Math.floor(Math.random()*9999999999) + Math.floor(Math.random()*9999999999) + Math.floor(Math.random()*9999999999) + Math.floor(Math.random()*9999999999) + " " + dayof[Math.floor(Math.random()*dayof.length)] + ". Go to your room now.");
  }
  if(command === "unground") {
	var dayof2 = ["months","lifetimes","eras","seconds","nanoseconds","picoseconds","milliseconds","microseconds","days","weeks","years","decades","tranquilities","eternities","centuries","forevers","aeons","spans","hours","times","generations","measures","semesters","lapses","humanities","todays","groundings","pooping","collections"]
    if(!args[0]) return message.reply("You can't just unground nobody. Nobody is groundable, she will be grounded anytime.")
    if(args[1]) return message.channel.send(args.join(' ') + " was ungrounded ungrounded ungrounded ungrounded ungrounded ungrounded ungrounded ungrounded ungrounded for " + Math.floor(Math.random()*9999999999) + Math.floor(Math.random()*9999999999) + Math.floor(Math.random()*9999999999) + Math.floor(Math.random()*9999999999) + Math.floor(Math.random()*9999999999) + " " + dayof2[Math.floor(Math.random()*dayof2.length)] + ". Go anything if you want.");
  }
  if(command === "sorry") {
	  var millions = ["million","billion","thousand","hundred","trillion","quadrillion","quintillion","sextillion","septillion"]
    if(!args[0]) return message.reply("That's opinion bashing! Your apology is not accepted! (100%)");
    if(args[1]) return message.channel.send(args.join(' ') + ". I'm sorry for " + Math.floor(Math.random()*99999999) + " " + millions[Math.floor(Math.random()*millions.length)] + " times. I will also improve my behavior and be short today. Please be patient person, I'm sorry what I have been ever did!");
  }
  if(command === "swear") {
	  var swearwords = ["fuck","nigger","shit","dumb","asshole","ass","nigga","fuckass","dumbass","heyass","shitass","shitty","bitch","son of a bitch","son of a jerk","jerk","retard","bastard","cocksucker","fucking","niggers","asshole","shitface","dick","cock","greek","greek in the sauce","cunt","slut","pussy","motherfucker","motherfucking","whore","jackass","bullshit","faggot","maggot","anus","fag","piss","crap","crappie","penis","shithead","butthead","tits","cum","prick","twat","blyat","snatch","fool","dildo","shut the fuck up","shut up you","prositute","shut up","douche","dilde","douchebag","piece of shit","piece of crap","piece of fucking bitches","you","you're","assclock","asscockroach","asses","assbitch","cuntfuck","jigglin","doxxer","ddoser","dickhead","kiko","kike","jabba","salvie","grow up","kiddie","gofag","gokid","goturd","gachafag","gofaggot","dong","stupid","fingerfuck","middle finger","fuck you","bugger","fuckburger","cheesefuck","cheeseass","bollocks","chad","choad","biyotch","shag","wanker","slang","arse","holy shit","fucking sexy","jesus fuck","jesus christ","jesus","sisterfucker","fuckban","banass","frigger","goddamn","gayass","gayshit","gayfuck","go to hell","go to hell you piece of jerk","piece of jerk","hell","vagina","ballsucker","I don't give a shit","I don't give a fucking chance","kick my ass","queer","pee my pants","cuntass","childsucker","shitkiko","fungus"]
    if(!args[0]) return message.channel.send(swearwords[Math.floor(Math.random()*swearwords.length)]);
    if(args[1]) return message.reply("No. Please be only one.");
  }
  if(command === "patch") {
    if(!args[0]) return message.reply("There's no URL to patch. You will return into Chrome Error System Page.");
    if(args[1]) return message.channel.send(args.join(' ') + " was patched by Vyond. Vyond said: You are going to the court right now, because you pirared legacy video maker or I will call the police to arrest you for being an cracker from this community.");
  }
  if(command === "rant") {
    if(!args[0]) return message.reply("You couldn't rant nobody.");
    if(args[1]) return message.channel.send(args + "? NO! MORE LIKE " + args + "666! OH MY GOD! THIS USER SUCKS! HE KEEPS ANNOYING AT ME AND SPYING AT ME! I WISH THAT USER " + args + " GETS TERMINATED AND BANNED FOREVER AND EVER! WHO LIKES THIS USER? EVERYONE! WHO HATES THIS USER? JUST ME AND OTHERS! NOW " + args + ", IF YOU WATCHING THIS, GO AWAY YOU PIECE OF CUNT, I DON'T WANNA TO BE FRIENDS YOU HYPOCRITICIZING PERSON IN THE WORLD. USERS IS " + Math.floor(Math.random()*999999999999) + " TIMES BETTER THAN YOU! (" + args + "). END OF RANT!");
  }
  if(command === "ddos") {
    if(!args[0]) return message.reply("You can't just give some threat attacks to people, you need an random.");
    if(args[1]) return message.channel.send(args + " was DDoSed for " + Math.floor(Math.random()*999999999999) + " times for being a fool. You suck.");
  }
  if(command === "poop") {
    if(!args[0]) return message.channel.send("You can't make him poop nobody. There's no hocus pocus to make nobody to poop.");
    if(args[1]) return message.channel.send(args + " pooped so hard like " + Math.floor(Math.random()*99999999) + " times. He has diarrhea!");
  }
  if(command === "kill") {
    if(!args[0]) return message.reply("You can't kill nobody.");
    if(args[1]) return message.channel.send(args + " was killed with knife. \n" + args + ": OWWWW OUUCHHHHH... *dies*");
  }
  if(command === "emoji") {
    if(!args[0]) return message.react(emojis[Math.floor(Math.random()*emojis.length)])
    if(args[1]) return message.reply("There's no array yet! :)");
  }
  if(command === "help") {
    if(!args[0]) return message.channel.send("**Commands**:\nw!understand \nw!emoji \nw!help \nw!site \nw!invite \nw!bot \nw!specs \nw!paste \nw!reactthis \nw!freeadmin \nw!freebonzi \nw!randomweb \nw!randomsearch \nw!randomip \nw!randomadvancedweb \nw!randomscratch \nw!date \nw!youtube \nw!savetext \nw!ground \nw!unground \nw!sorry \nw!swear \nw!patch \nw!rant \nw!ddos \nw!poop \nw!kill \nProtect your server with me for GoAnimate chat!");
    if(args[1]) return message.reply("array error");
  }
  if(command === "site") {
    if(!args[0]) return message.channel.send("http://78.63.40.199:700");
    if(args[1]) return message.reply("array error");
  }
  if(command === "invite") {
    if(!args[0]) return message.channel.send("https://discord.gg/DpBBJkBuzQ");
    if(args[1]) return message.reply("array error");
  }
  if(command === "paste") {
    if(!args[0]) return message.channel.send("ok http://78.63.40.199:3000/pastemasterdoesmatter/");
    if(args[1]) return message.reply("array error");
  }
  if(command === "bot") {
    if(!args[0]) return message.channel.send("https://discord.com/api/oauth2/authorize?client_id=818838621611098132&permissions=8&scope=bot");
    if(args[1]) return message.reply("array error");
  }
  if(command === "specs") {
    if(!args[0]) return message.channel.send("Host Status:\nPlatform: " + os.platform() + "\nNumber of cores: " + os.cpuCount() + " cores \nFree memory: " + Math.floor(os.freemem()) + " MB per RAM (" + os.freememPercentage() + "%)\nTotal memory: " + Math.floor(os.totalmem()) + " MB \nKernel uptime: " + os.sysUptime() + " seconds \nServer process uptime: " + Math.floor(os.processUptime()) + " seconds");
    if(args[1]) return message.reply("array error");
  }
    if(message.content.includes('nigg')) {
    message.delete()
	message.reply('You said the N-word. Please be more respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('Nigg')) {
    message.delete()
	message.reply('You said the N-word. Please be more respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('NIGG')) {
    message.delete()
	message.reply('You said the N-word. Please be more respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('fuck')) {
    message.delete()
	message.reply('You said the F-word. Please be more respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('Fuck')) {
    message.delete()
	message.reply('You said the F-word. Please be more respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('FUCK')) {
    message.delete()
	message.reply('You said the F-word. Please be more respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('Shit')) {
    message.delete()
	message.reply('You said the S-word. Please be more respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('shit')) {
    message.delete()
	message.reply('You said the S-word. Please be more respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('SHIT')) {
    message.delete()
	message.reply('You said the S-word. Please be more respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('Asshole')) {
    message.delete()
	message.reply('You said the A-word. Please be more respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('asshole')) {
    message.delete()
	message.reply('You said the A-word. Please be more respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('ASSHOLE')) {
    message.delete()
	message.reply('You said the A-word. Please be more respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('penis')) {
    message.delete()
	message.reply('That\'s inappropriate word.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('Penis')) {
    message.delete()
	message.reply('That\'s inappropriate word.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('PENIS')) {
    message.delete()
	message.reply('That\'s inappropriate word.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('COCK')) {
    message.delete()
	message.reply('That\'s inappropriate word.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('cock')) {
    message.delete()
	message.reply('That\'s inappropriate word.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('Cock')) {
    message.delete()
	message.reply('That\'s inappropriate word.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('dumb')) {
    message.delete()
	message.reply('You said the D-word. Please be more respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('Dumb')) {
    message.delete()
	message.reply('You said the D-word. Please be more respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('DUMB')) {
    message.delete()
	message.reply('You said the D-word. Please be more respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('fag')) {
    message.delete()
	message.reply('You can\'t say "with combined" word only.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('FAG')) {
    message.delete()
	message.reply('You can\'t say "with combined" word only.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('raid')) {
    message.delete()
	message.reply('You can\'t say that, but you will get reported immediately. 🏁').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('RAID')) {
    message.delete()
	message.reply('Whoa, please don\'t shout out words for nuking Discord server. ☢').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('homophobic')) {
    message.delete()
	message.reply('Are you not gay 🏳‍🌈?').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('bisexual')) {
    message.delete()
	message.reply('Are you not both of people hugging others?').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('no one cares')) {
    message.delete()
	message.reply('What do you mean?')
	}
	if(message.content.includes('jabba')) {
    message.delete()
	message.reply('Say Ven a Doggis. https://www.youtube.com/watch?v=vmIAZZMiwKw').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('kiko')) {
    message.delete()
	message.reply('Don\'t shout these names like "combined words" ☢.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('bitch')) {
    message.delete()
	message.reply('You mean - bite?').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('unban')) {
    message.delete()
	message.reply('Beggar. 💢').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('engage')) {
    message.delete()
	message.reply('You can\'t do a spy, you couldn\'t be hatred. 🤔').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('dox')) {
    message.delete()
	message.reply('You will not going to post the personal information around from Discord. 😲 (see or steal information illegal)\nDoing this will get you reported and you can\'t escape from this.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('virus')) {
    message.delete()
	message.reply('Don\'t threat about basic protection. 💉').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('malware')) {
    message.delete()
	message.reply('Don\'t threat about program injection. 🎙').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('trojan')) {
    message.delete()
	message.reply('Don\'t threat about horses. 🎠').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('ransomware')) {
    message.delete()
	message.reply('Don\'t threat about personal computer loss. 💻').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('spyware')) {
    message.delete()
	message.reply('Don\'t threat some bank information. 💹').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('sexy')) {
    message.delete()
	message.reply('Did you mean? **peepz**').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('hack')) {
    message.delete()
	message.reply('Best ways to make a clean install of Windows. ⛏ https://www.windowscentral.com/how-do-clean-installation-windows-10').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('pirate')) {
    message.delete()
	message.reply('Uninstall your stolen software. 🚔').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('evade')) {
    message.delete()
	message.reply('Don\'t you dare to join when you get banned? Leave or you will be reported from Discord for life. 😖').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('bastard')) {
    message.delete()
	message.reply('Be pleasant. 😕').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('dick')) {
    message.delete()
	message.reply('Please don\'t show up. 😐').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('pussy')) {
    message.delete()
	message.reply('Are you a cat 🙀?').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('cunt')) {
    message.delete()
	message.reply('Leave your friends alone because you said C-word. Please say as sleep ✨ tho.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('kike')) {
    message.delete()
	message.reply('Are you GoAnimate hater? Take this instead. 🛡').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('nitro')) {
    message.delete()
	message.reply('No promoting.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('fck')) {
    message.delete()
	message.reply('Nice try bypassing the F-word.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('NITRO')) {
    message.delete()
	message.reply('If you misuse spam about the premium service, you would be blocked.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('Nitro')) {
    message.delete()
	message.reply('Actually, no. You won\'t believe if you spam conclusively.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('fatass')) {
    message.delete()
	message.reply('Be fit 😁. How do you want to be fit?\n **get a running device to run any step for association forever** \n Also to respect others.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
	if(message.content.includes('shit')) {
    message.delete()
	message.reply('Don\'t eat the poop 💩. Be respectful.').then(msg => {
    msg.delete({ timeout: 10000 })
  })
	}
});
client.login('toooooookenennenen');