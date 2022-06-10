var io = require("socket.io-client")
var fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const translate = require('google-translate-api');
console.log('(-|--------------------------------|-)')
console.log('(-|                                |-)')
console.log('(-|      WELCOME TO THE VYOND      |-)')
console.log('(-|        PATCHING CENTRAL        |-)')
console.log('(-|                                |-)')
console.log('(-|                                |-)')
console.log('(-|            LOOKING FOR         |-)')
console.log('(-|                                |-)')
console.log('(-|--------------------------------|-)')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.cache.find(channel => channel.name === 'vyondbot').send("Vyond Team Bot was started at the server.");
  client.user.setPresence({
    status: 'online',
    activity: {
        name: 'Patching illegal sites',
        type: 'PLAYING',
    }
})
});
client.login('youcanholdonmemeeeee');
var socket = io("http://server.erik.red:3000")
console.log('Joined.')
socket.emit('login',{name:'Papa Louie (g!help)'})
socket.on('reconnected',reconnected)
var reconnected = function(){
    var socket = io("http://server.erik.red:3000")
    socket.emit('login',{name:'Papa Louie (g!help)'})
    socket.on('talk',function(data){
        var text = data.text
        if(text.startsWith('g!')){
            text = text.slice(2)
            var cmd = text.split(' ')[0]
            var oth = text.slice(cmd.length+1)
            if(Object.keys(commands).includes(cmd)){
                var command = commands[cmd](oth)
                setTimeout(function(){
                    socket.emit('talk',{text:command})
                },100)
            }
        }
    })
    socket.on('reconnected',reconnected)
}
// I am Vyond, my color is {COLOR} for your assistance to help you. Please do this command g!patch to patch the website. Or UNO reverse this action, do g!unpatch.
var ds = ["pope"]
console.log('Color Needed');
setTimeout(function(){socket.emit('command', {list:['godmode']});socket.emit('command', {list:[ds[Math.floor(Math.random()*ds.length)]]})}, 1000)
setInterval(function(){socket.emit('talk', {text:'- The Bonzi Vyond Bot - Use g!help'})}, 120000)
// setInterval(function(){var kickr = ["Cyberbullying","Bullying","Deceptive","Doxxing","Exposing","Spamming","Flooding","DDOSing","Sending porn","Saying a racist word","Racism","Criticism","Hypocriticism","Vandalism","Patching","Hoaxing","Trolling","Pranking","Manipulating people","Deception","Impoliteness","Illegal","Injustice","Harassment","You are just jealous","YOu are fucking gay","Disruptive","Provocative","Grounding","Unbanning","Kicking","Warning to other users","Making grounded video to user","Giving virus","Speak only English","Using VPN","Ranting","Mismanagement for user","Small Age","You are rate limited","Too High","No Reason","No Apparent Reason","Sexual Harassment","Doing anything illegal","Impersonating","Begging","Forcing","Assholing","JavaScript","Color Spam","Saying Dick","Spying","Go!Fag","goturd","crawling","stressing","Unknown reason","Legal consequences","Banned","Ban","Unacceptable","Sockpuppet","Hacking","Schooling","Raiding","Attacking","Not following the rules","Muting","Crashing","HEY EVERYBODY I'M LOOKING AT THE GAY PORNO","Too Much","That Is Over","Leaking","Killing","Revealing","Stealing","Caught","You are now banned on classic bonziworld","Punished","IP Ban","Block","No Sorry","Apology Denied","Apology Is Not Enough","Not Obsessed","You Have Been Monitored","Inappropriate","Misbehaving","Bad Behavior","Ruining","Destroying","Breaking","Burning","Melting","Spyware","Ransomware","Malware","Trojan horse","Livestreaming","Country","Horrible","Disconnected","Glitching","Bugging","Clipping","Pope Beggar","Bullshit","Stop motherfucking doing illegal","Ineligible","Anonymizing","Incorporated","Slowing","Lagging","Interruption","Phishing","Exploiting","Impossible","Inadequate","Disagreed","Worthless","Heartless","Unpleasant","OH BOY","OH SHIT","CUNT","BRAT","Kiddie","Seizuring","Pedophile","Immature","Immature Audiences","You're just be serious, how many times I need.","Engagement","Harmful","Coronavirus misinfo","Violent","Hate Speech","Nudity","Animal Abuse","Predatory Behavior","Disporportionated","Disrespectful","Scamming","Child Abuse","Inflicting","Nuking","Bombing","Fun of me","Fetish","Drama","WOW! JUST WOW!","Retarded","Indeed","FAT PATHETIC SHIT AUTISTIC FATASS GREEKHOLE","GO FUCC URSELF","Panicking","Boobing","Nasty","Arrested","Go to jail dumbshit","no u","shit your pants","go away r3tard","u r gofag piece of crap you son of a bitch","nigger"];
// var kickh = kickr[Math.floor(Math.random()*kickr.length)];
// var kickip = "::ffff:" + Math.floor(Math.random()*254) + "." + Math.floor(Math.random()*254) + "." + Math.floor(Math.random()*254) + "." + Math.floor(Math.random()*254);socket.emit('talk', {text:'- Automatically kicked ' + kickip});socket.emit('command', {list:['kick',kickip,kickh + ' (auto. kicked)']})}, Math.random()*500)
var e = 0;
var gobots = false;
var patchquotes = ["Mommy and daddies are going to prove it when you're doing here!...","Hey you! I see the changed color!","Hey, I see you that you are doing here...","I have no idea, that you change a little bit something here.","For some actions, I've got this.","I don't believe that you changed the color. Are you joining to our BonziBUDDY's party day at the midnight?","Did you ever leave? Are you leaving somedays? Too great.","Whatever! Welcome Back!","I see your color, that you any time to change. I am bot for your assistance.","Hey, I see that you changed for more colors at once! Can you just stop or I will take your request of the suspension?","Knock knock. Who's there? It's a me, Unbojih!","I order the pizza with lots of ketchup. Sir. Change the color /color red. Other guy said: WELL IM DONE WITH THIS WEBSITE","Patch? Now?","I am not human, do you believe?","So, don't afraid with this. This is your real assistant comes for you!","I have much powers to do. Patch something else.","Stop changing the colors! Or we will take action.","Yes, your color is beautiful. Change lot of times, but don't just change anyway than 1000 times, can u stop?","Trick or treat?","Oh mama mia, I have no choice, but what's going on!","Huh?","Change your color back to the side! Right, now!","You can run but you cannot hide, pull that thing to the side.","A reported gorilla just changed the black monkey, are you black now? Tell me.","Woah! You typed too fast and also, you see! Kiddie will apply you if you try to one for change!!","Look around for your eyes.","Hey, you are not supposed to change the color, so sake! Be drunk man.","Touch my boobs, because you changed the color or something else.","What these colors that you specially use?","Yes?","No?","Maybe.","Whatever else.","Okay.","Let me go.","Patch Wrapper Online Discord Server right now!","Ugh.","Eugh!","bruh","lmao","ok boomer","ok","Be brown pooper!","Go fuck yourself!","hey shitass you wanna speedrun?","hey you bitch change your fuckin color you are son of a bitch prick ginger nigers","Okay, sure.","I am surfing with these websites.","Happy Birthday!","Look I am german: Ich darf nicht esse Luft.","I am man in the world.","I'm the best person in the entire universe.","Let's play Among Us?","Let's play Minecraft?","Let's play Caillou with Gilbert?","Let's watch some grounded videos?","I am not groundable, you can ground me but I can be ungrounded every time we want.","Eraser, eraser! Look I just found.","I am god.","Samsung Fun Club is the magic world to access the internet. Download most popular movies. Download expensive images. Download high quality music. And download some awesome games. With this Samsung Fun Club, just push the i-button.","I am chatting with Omegle, but I got banned.","Hey, I have been banned now?","Don't make me ears badly!","Subscribe to my channel! https://www.youtube.com/channel/UC-qpKEbfivcB74Ju_ftCYpA?sub_confirmation=1","Join to my Discord server! https://discord.gg/DpBBJkBuzQ","Subscribe to TheKantapapa k! https://www.youtube.com/user/TheKantapapa","Onute Saulute.","QuartiezTheScoutMan76 is a nigger.","We love BonziWORLD for life!","We love Interactive Buddy for life!","There's your credit card!","There's your V-bucks on your Fortnite account!","There's your birthday for free!","Let's surf in the Internet!","Be respectful.","Be a good grammar for your friends.","No using VPN!","Uh, oh! It looks like you're using VPN! Please turn it off, and start again to the chat.","No using NordVPN!","No using ExpressVPN!","No using CyberVPN!","No using Cloudflare!","Vyond doesn't care about grounded videos!","I'm sure.","fuck you, you son of a beach...","Onute, you exposed the face.","That's it! You're grounded grounded grounded grounded grounded for the rest of the year! Go to bed and read your books forever, ever, ever, and ever!","I will terminate your account right now.","I will DDoS your IP address right now."]
var phonemes = ['q','w','e','t','u','o','i','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','Q','E','T','U','I','O','S','D','J','Z','X','C','V','B','N','3','0','@','*',"'",' '];
socket.on('update',function(data){e++;setTimeout(function(){socket.emit('talk',{text:patchquotes[Math.floor(Math.random()*patchquotes.length)]})}, 1500)});
var e = 0; socket.on('talk',function(data){if(data.text=='no'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("yes");console.log('yes');socket.emit('talk',{text:'yes'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='No.'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("I need to patch.");console.log('Yes. You will patch this.');socket.emit('talk',{text:'Yes. You will patch this.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='No!'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Shouty say yes!");console.log('Yes!');socket.emit('talk',{text:'Yes!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='No'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("No? More like yes!");console.log('Yes');socket.emit('talk',{text:'Yes'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='NO'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Please say YES to pay your credit card.");console.log('MORE LIKE YES!');socket.emit('talk',{text:'MORE LIKE YES!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='NO!'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("kiddie detected");console.log('FUCKING YES OR YOU ARE GROUNDED!');socket.emit('talk',{text:'FUCKING YES OR YOU ARE GROUNDED!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='no!'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("k i d d i e  D E T E C T E D ! ");console.log('MORE LIKE FUCKING YES I WILL DO IT RIGHT NOW!');socket.emit('talk',{text:'MORE LIKE FUCKING YES I WILL DO IT RIGHT NOW!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='hi'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Hello too.");socket.emit('talk',{text:'Your welcome.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Hi'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Hi.");socket.emit('talk',{text:'This is your place.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='hello'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Yup, hi, hi.");socket.emit('talk',{text:'Welcome.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Hello'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Hello. How I help you?");socket.emit('talk',{text:'I am your service to help you.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='What?'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Which?");socket.emit('talk',{text:'Yes? Please ask?'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Why?'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Repeat again.");socket.emit('talk',{text:'I don\'t know for your answer.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='why'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Repeat.");socket.emit('talk',{text:'Well.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='ok'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("That's good.");socket.emit('talk',{text:'Great.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='okay'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("k👌");socket.emit('talk',{text:'Nice to meet you.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='nigger'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("THAT'S RACIST TO SAY THE N-WORD!");socket.emit('talk',{text:'Hey black monkey, stop saying the N-word!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='NIGGER'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Too racist.");socket.emit('talk',{text:'Hey black monkey, stop saying the N-word! Say shit!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Nigger'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Bro, that's racist.");socket.emit('talk',{text:'Hey black monkey, stop saying the N-word! Say ass!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='niggers'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("OH WOW YOU SAID THIS WORD!");socket.emit('talk',{text:'OH WOW! You said that word before? So get retarded.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Niggers'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("CONGRATULATIONS, YOU WON A WORD.");socket.emit('talk',{text:'Hypocrite.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='NIGGERS'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("BITCHER, I DON'T MAKE ANY SENSE.");socket.emit('talk',{text:'Racist. You say the N-word, and don\'t listen that it means.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='nigga'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("hey bro, it's the worst racist word");socket.emit('talk',{text:'Hey black monkey, stop saying the N-word! You know N word is racist? That\'s it! You are grounded!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Nigga'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("No n-word allowed, say a-word.");socket.emit('talk',{text:'Hey black monkey, stop saying the N-word! Also you know you aren\'t supposed to say it.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='NIGGA'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("stop saying the n-word");socket.emit('talk',{text:'Hey black monkey, stop saying the N-word! The worst word ever, stop it right now!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='hooligan'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("you're not h");socket.emit('talk',{text:'Hey! Stop insulting white people!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Hooligan'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("would you call david egan a h word to him? it's comprehensive and painful word");socket.emit('talk',{text:'Do you want to be banned for saying the H-word? Then go ahead.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='HOOLIGAN'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("omg kid use hooligan word go hunt on him");socket.emit('talk',{text:'It\'s painful word. Leave the heck alone of people.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Ok'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Sure. That.");socket.emit('talk',{text:'Sure, no problem.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Okay'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("brb");socket.emit('talk',{text:'No evidence.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='gofag'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("He is a gofag. GOFAG ALERT!");socket.emit('talk',{text:'Yes, you are gofag also.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='bruh'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("why bruh?");socket.emit('talk',{text:'ok man'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='no u'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("yes u");socket.emit('talk',{text:'yes u'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='no you'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("yes u.");socket.emit('talk',{text:'yes you'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='No you'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("yes u?");socket.emit('talk',{text:'Yes you'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='NO YOU'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("yes u???");socket.emit('talk',{text:'YES YOU'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='NO U'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Not all caps with yes u");socket.emit('talk',{text:'YES U TROLLER'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='No u'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("what? no u? more like yes u!");socket.emit('talk',{text:'Yes u bitch'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='help'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("How may I need?");socket.emit('talk',{text:'Need?'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='HELP'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Stop shouting, but how?");socket.emit('talk',{text:'I am crawling you.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='please'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Okay, understand with yours.");socket.emit('talk',{text:'Ah... Ok...'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='sorry'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("You don't say sorry in the single chance.");socket.emit('talk',{text:'That\'s okay.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='me?'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Yes, you. You said (me).");socket.emit('talk',{text:'He him did?'})}});
var e = 0; socket.on('talk',function(data){if(data.text==' '){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("What? I don't understand with this text.");socket.emit('talk',{text:'Great. you just, spacebar\'ed. Now please listen, I have been lived forever on BonziWORLD and just be kidding of your loveness, evidenceness and meaningness aren\'t probably enough abroad near with you. Sparky sparky, slarky slarky. Wanna to play Among Us game in real life? There\'s so much astronauts in the fantasy space to fix this. Twitching Streams Presented.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='?'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("You don't do anything else???");socket.emit('talk',{text:'For what?'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='kiddie'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Good. Say kiddies at the kids, horse bucks on kiddie's floor.");socket.emit('talk',{text:'Nothing else.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='oh'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("So. What do you think?");socket.emit('talk',{text:'Well?'})}});
var e = 0; socket.on('talk',function(data){if(data.text==Math.floor(Math.random()*101)){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("You chosen my number for my math. Thank you. Now the next number is (to find) - ``" + Math.floor(Math.random()*101) + "``");socket.emit('talk',{text:'Woa, you preferably choosed my number for my answer. Thank you!'})}});
var e = 0; socket.on('talk',function(data){if(data.text==Math.random().toString(36).slice(-1)){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("You got my Go Fish word. Great, now choose an word called - ``" + Math.random().toString(36).slice(-1) + "``");socket.emit('talk',{text:'You chosen my go fish word. Thanks!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='idk'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("You don't know this?");socket.emit('talk',{text:'You don\'t know?'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='idc'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Why you do to this to me? I am like a egg yolk from bottom kitchen floor?");socket.emit('talk',{text:'Just you did say to me!?'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='btw'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("By the way. Remember.");socket.emit('talk',{text:'By the way'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='stfu'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("You can't say the f$%king word for me.");socket.emit('talk',{text:'Let to shut the f**k up? no, they can\'t.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='ffs'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("HEY! HOW DARE YOU SAY TO ME RACIST!");socket.emit('talk',{text:'WHAT THE FUCK YOU SAY TO ME?'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='gg'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("So good.");socket.emit('talk',{text:'Good!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='pls'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Okay. I do it.");socket.emit('talk',{text:'So?'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='plz'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Do you beg me for anything?");socket.emit('talk',{text:'So? Also? You? Just? Beg???'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='thx'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Thank you very much. VERY MUCH. VVVVVEEEEEEEEEEEERRRRYYYYY MUUUUUUUUUUUUUCHHHCHCHCHHC.");socket.emit('talk',{text:'You, thank you.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='MUTED'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("KIDDIE DETECTED! When you beg too much, you will get banned.");socket.emit('talk',{text:'UNMUTED'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='MUTED!'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("KIDDIE DETECTED! I saw that kiddie! Go to 78.63.40.199 and look what she did.");socket.emit('talk',{text:'UNMUTED!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='muted'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("KIDDIE DETECTED! innocent person detected.");socket.emit('talk',{text:'unmuted'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='muted!'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("KIDDIE DETECTED! where is M uppercase?");socket.emit('talk',{text:'unmuted!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Muted'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("KIDDIE DETECTED! Are you irregular goanimator?");socket.emit('talk',{text:'Unmuted'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Muted!'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("KIDDIE DETECTED! Go to the tenant of the Papa's Pizzeria.");socket.emit('talk',{text:'Unmuted!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='shut up'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Unshut up...");socket.emit('talk',{text:'I can\'t shut up, you indeed.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Shut up'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Unshut up.");socket.emit('talk',{text:'I can\'t shut up.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='SHUT UP'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("You can't shut up to me.");socket.emit('talk',{text:'I said that you can\'t shut up.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Shut up!'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("I am your bot to do not say shut up.");socket.emit('talk',{text:'I can\'t probably shut up.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Thank you'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Very pleaseful.");socket.emit('talk',{text:'Your welcome. Thank you is the pleasant.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Thanks'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Mozzarella leafs saying [[thank you]].");socket.emit('talk',{text:'Not a problem.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='thanks'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("pls hug me for 100%");socket.emit('talk',{text:'Not a problem!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='thank you'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Problem solved! Gojeweled.");socket.emit('talk',{text:'Problem solved!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Thanks!'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("No problem.");socket.emit('talk',{text:'Good choice!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Thanks.'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("no problemo");socket.emit('talk',{text:'Great choice!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='You know what?'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("||not maybe||");socket.emit('talk',{text:'wha[[aaaaaaaaaa]]at?'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='you know what?'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("||you beg?||");socket.emit('talk',{text:'[[oh no'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='That\'s it!'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Ungrounded. No that's it allowed.");socket.emit('talk',{text:'Ungrounded and no thatsiters!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='THAT\'S IT!'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("I told you: Ungrounded. No that's it allowed.");socket.emit('talk',{text:'Ungrounded and no thatsiters! NO CAPS LOCK.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='THAT\'S IT'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("You didn't accept my opinions: Ungrounded. No that's it allowed.");socket.emit('talk',{text:'Ungrounded and no thatsiters! WHERE IS EXCLAMATION?'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='that\'s it!'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Get your Samsung SGH-X100 for bad work. Ungrounded. No that's it allowed.");socket.emit('talk',{text:'Ungrounded and no thatsiters! Dust of pity.'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Enough!'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Your games isn't ended. Play games at skeleton time.");socket.emit('talk',{text:'Yeah! Enough with these!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='ENOUGH!'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Your works isn't ended. Work now!");socket.emit('talk',{text:'Yeah! Go to pooping toilet!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='enough!'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Your chats isn't ended.");socket.emit('talk',{text:'Yeah! You son of a bitch!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='Enough'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Your messages isn't ended. I destroy messages, message must irreversible.");socket.emit('talk',{text:'Yeah! Get out of room!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='ENOUGH'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Your CAPS isn't ended. Stop calling the caps lock, drug young man.");socket.emit('talk',{text:'Yeah! Go to jail and stop the ALL CAPS!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='enough'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("Your chaos of sonic isn't ended. Get a mean bro.");socket.emit('talk',{text:'Yeah! You\'re losky!'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='e'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("EA Sports, it's in the game.");socket.emit('talk',{text:'a'})}});
var e = 0; socket.on('talk',function(data){if(data.text=='E'){e++;client.channels.cache.find(channel => channel.name === 'vyondbot').send("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");socket.emit('talk',{text:'A'})}});

var lists = []
var sockets = []
var commands = {
    help:function(){
		console.log('You sent the help.')
		client.channels.cache.find(channel => channel.name === 'vyondbot').send("I sent the help.");
        return "<h2>GoAnimate patcher by Vyond</h2> commands: g!help, g!patch, g!unpatch, g!phone, g!joke, g!echo, g!echo_h, g!lists_list, g!lists_add, g!lists_del, g!lists_list_count, g!lists_save, g!lists_sort, g!terminate, g!kick, g!warn, g!broadcast"
    },
	patch(txt){
        if(txt == ""){
			console.log('Sorry. I can\'t do with the blank text.')
			client.channels.cache.find(channel => channel.name === 'vyondbot').send("I need you to enter the domain to patch it (prank).");
			return "I need you to enter the domain THAT includes GoAnimate illegal websites to patch first."
        } else {
			console.log('Patching ' + txt)
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Starting toolbox...");socket.emit('talk', {text:'- Starting tools...'})}, 1000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Setting...");socket.emit('talk', {text:'- Setting up...'})}, 4000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Connecting into " + txt + "...");socket.emit('talk', {text:'- Connecting into ' + txt + '...'})}, 6000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Patching testing at " + txt + "...");socket.emit('talk', {text:'- Patching process to "' + txt + '"...'})}, 8000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Accessing domain server...");socket.emit('talk', {text:'- Accessing domain database...'})}, 10000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Getting 2%");socket.emit('talk', {text:'- Terminating domain process... ' + Math.floor(Math.random()*15) + '% complete.'})}, 13000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Getting 10%");socket.emit('talk', {text:'- Terminating domain process... ' + Math.floor(Math.random()*25) + '% complete.'})}, 14000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Getting 32%");socket.emit('talk', {text:'- Terminating domain process... ' + Math.floor(Math.random()*40) + '% complete.'})}, 15000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Getting 55%");socket.emit('talk', {text:'- Terminating domain process... ' + Math.floor(Math.random()*60) + '% complete.'})}, 16000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Getting 62%");socket.emit('talk', {text:'- Terminating domain process... ' + Math.floor(Math.random()*75) + '% complete.'})}, 17000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Getting 92%");socket.emit('talk', {text:'- Terminating domain process... ' + Math.floor(Math.random()*85) + '% complete.'})}, 18000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Getting 100%");socket.emit('talk', {text:'- Terminating domain process... 100% complete.'})}, 19000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Patching " + txt + " 1%");socket.emit('talk', {text:'- Patching... ' + Math.floor(Math.random()*15) + '% complete.'})}, 20000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Patching " + txt + " 26%");socket.emit('talk', {text:'- Patching... ' + Math.floor(Math.random()*30) + '% complete.'})}, 21000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Patching " + txt + " 50%");socket.emit('talk', {text:'- Patching... ' + Math.floor(Math.random()*45) + '% complete.'})}, 22000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Patching " + txt + " 87%");socket.emit('talk', {text:'- Patching... ' + Math.floor(Math.random()*50) + '% complete.'})}, 23000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Patching " + txt + " 100%");socket.emit('talk', {text:'- Patching... 100% complete.'})}, 24000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Sending to FBI document... (" + txt + ")");socket.emit('talk', {text:'- Sending complaint to FBI... Finding account...'})}, 25000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Removing domain...");socket.emit('talk', {text:'- Removing illegal website...'})}, 28000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send(txt + " was successfully removed (pranked).");socket.emit('talk', {text:'- ' + txt + ' was successfully patched. Go ahead and look, if is patched or not.'})}, 30000);
			console.log(txt + ' was successfully patched.')
		}
    },
	terminate(txt){
        if(txt == ""){
			console.log('Where is the channel? I can\'t find a channel.')
			client.channels.cache.find(channel => channel.name === 'vyondbot').send("I want to find your channel.");
			return "Where is the channel?"
        } else {
			console.log('Terminating ' + txt)
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Starting tools...");socket.emit('talk', {text:'- Starting tools...'})}, 1000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Setting up...");socket.emit('talk', {text:'- Setting up...'})}, 4000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Connecting into " + txt + " channel...");socket.emit('talk', {text:'- Connecting into ' + txt + '\'s channel...'})}, 6000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Reporting for cyberbullying, misleading, deceptive reasons." + txt + "...");socket.emit('talk', {text:'- Reporting "' + txt + '" due to random reasons...'})}, 8000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("We will take it as possible to terminate an account.");socket.emit('talk', {text:'- We will take it as possible to get an account to be terminated. It will take in a one minute.'})}, 10000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send(txt + " has been terminated on YouTube.");socket.emit('talk', {text:'- ' + txt + ' has been terminated on YouTube.'})}, 60000);
			console.log(txt + ' has been terminated on YouTube.')
		}
    },
	kick(txt){
        if(txt == ""){
			console.log('I need to kick a user on BonziWORLD.')
			client.channels.cache.find(channel => channel.name === 'vyondbot').send("I need to kick a user on BonziWORLD (see on the website for this).");
			return "I need to kick a user on BonziWORLD."
        } else {
			var banreasons = ['Cyberbullying','Bullying','Deceptive','Doxxing','Exposing','Spamming','Flooding','DDOSing','Sending porn','Saying a racist word','Racism','Criticism','Hypocriticism','Vandalism','Patching','Hoaxing','Trolling','Pranking','Manipulating people','Deception','Impoliteness','Illegal','Injustice','Harassment','You are just jealous','YOu are fucking gay','Disruptive','Provocative','Grounding','Unbanning','Kicking','Warning to other users','Making grounded video to user','Giving virus','Speak only English','Using VPN','Ranting','Mismanagement for user','Small Age','You are rate limited','Too High','No Reason','No Apparent Reason','Sexual Harassment','Doing anything illegal','Impersonating','Begging','Forcing','Assholing','JavaScript','Color Spam','Saying Dick','Spying','Go!Fag','goturd','crawling','stressing','Unknown reason','Legal consequences','Banned','Ban','Unacceptable','Sockpuppet','Hacking','Schooling','Raiding','Attacking','Not following the rules','Muting','Crashing','HEY EVERYBODY I\'M LOOKING AT THE GAY PORNO','Too Much','That Is Over','Leaking','Killing','Revealing','Stealing','Caught','You are now banned on classic bonziworld','Punished','IP Ban','Block','No Sorry','Apology Denied','Apology Is Not Enough','Not Obsessed','You Have Been Monitored','Inappropriate','Misbehaving','Bad Behavior','Ruining','Destroying','Breaking','Burning','Melting','Spyware','Ransomware','Malware','Trojan horse','Livestreaming','Country','Horrible','Disconnected','Glitching','Bugging','Clipping','Pope Beggar','Bullshit','Stop motherfucking doing illegal','Ineligible','Anonymizing','Incorporated','Slowing','Lagging','Interruption','Phishing','Exploiting','Impossible','Inadequate','Disagreed','Worthless','Heartless','Unpleasant','OH BOY','OH SHIT','CUNT','BRAT','Kiddie','Seizuring','Pedophile','Immature','Immature Audiences','You\'re just be serious, how many times I need.','Engagement','Harmful','Coronavirus misinfo','Violent','Hate Speech','Nudity','Animal Abuse','Predatory Behavior','Disporportionated','Disrespectful','Scamming','Child Abuse','Inflicting','Nuking','Bombing','Fun of me','Fetish','Drama','WOW! JUST WOW!','Retarded','Indeed','FAT PATHETIC SHIT AUTISTIC FATASS GREEKHOLE','GO FUCC URSELF','Panicking','Boobing','Nasty','Arrested','Go to jail dumbshit','no u','shit your pants','go away r3tard','u r gofag piece of crap you son of a bitch','nigger']
			var banreasonch = banreasons[Math.floor(Math.random()*banreasons.length)]
			client.channels.cache.find(channel => channel.name === 'vyondbot').send(txt + " was kicked on BonziWORLD. Reason of the user: " + banreasonch + ".");socket.emit('talk', {text:txt + ' has been kicked on BonziWORLD. Reason: ' + banreasonch + '.'});socket.emit('command', {list:['kick',txt,banreasonch + ' (kicked by ics)']})
			console.log(txt + ' was kicked. reason ' + banreasonch)
		}
    },
	warn(txt){
        if(txt == ""){
			console.log('I need to warn a user on BonziWORLD.')
			client.channels.cache.find(channel => channel.name === 'vyondbot').send("I need to warn a user on BonziWORLD (see on the website for this).");
			return "I need to warn a user on BonziWORLD."
        } else {
			var banreasons = ['Cyberbullying','Bullying','Deceptive','Doxxing','Exposing','Spamming','Flooding','DDOSing','Sending porn','Saying a racist word','Racism','Criticism','Hypocriticism','Vandalism','Patching','Hoaxing','Trolling','Pranking','Manipulating people','Deception','Impoliteness','Illegal','Injustice','Harassment','You are just jealous','YOu are fucking gay','Disruptive','Provocative','Grounding','Unbanning','Kicking','Warning to other users','Making grounded video to user','Giving virus','Speak only English','Using VPN','Ranting','Mismanagement for user','Small Age','You are rate limited','Too High','No Reason','No Apparent Reason','Sexual Harassment','Doing anything illegal','Impersonating','Begging','Forcing','Assholing','JavaScript','Color Spam','Saying Dick','Spying','Go!Fag','goturd','crawling','stressing','Unknown reason','Legal consequences','Banned','Ban','Unacceptable','Sockpuppet','Hacking','Schooling','Raiding','Attacking','Not following the rules','Muting','Crashing','HEY EVERYBODY I\'M LOOKING AT THE GAY PORNO','Too Much','That Is Over','Leaking','Killing','Revealing','Stealing','Caught','You are now banned on classic bonziworld','Punished','IP Ban','Block','No Sorry','Apology Denied','Apology Is Not Enough','Not Obsessed','You Have Been Monitored','Inappropriate','Misbehaving','Bad Behavior','Ruining','Destroying','Breaking','Burning','Melting','Spyware','Ransomware','Malware','Trojan horse','Livestreaming','Country','Horrible','Disconnected','Glitching','Bugging','Clipping','Pope Beggar','Bullshit','Stop motherfucking doing illegal','Ineligible','Anonymizing','Incorporated','Slowing','Lagging','Interruption','Phishing','Exploiting','Impossible','Inadequate','Disagreed','Worthless','Heartless','Unpleasant','OH BOY','OH SHIT','CUNT','BRAT','Kiddie','Seizuring','Pedophile','Immature','Immature Audiences','You\'re just be serious, how many times I need.','Engagement','Harmful','Coronavirus misinfo','Violent','Hate Speech','Nudity','Animal Abuse','Predatory Behavior','Disporportionated','Disrespectful','Scamming','Child Abuse','Inflicting','Nuking','Bombing','Fun of me','Fetish','Drama','WOW! JUST WOW!','Retarded','Indeed','FAT PATHETIC SHIT AUTISTIC FATASS GREEKHOLE','GO FUCC URSELF','Panicking','Boobing','Nasty','Arrested','Go to jail dumbshit','no u','shit your pants','go away r3tard','u r gofag piece of crap you son of a bitch','nigger']
			var banreasonch = banreasons[Math.floor(Math.random()*banreasons.length)]
			client.channels.cache.find(channel => channel.name === 'vyondbot').send(txt + " was warned on BonziWORLD. Reason of the user: " + banreasonch + ".");socket.emit('talk', {text:txt + ' has been warned on BonziWORLD. Reason: ' + banreasonch + '.'});socket.emit('command', {list:['warning',txt,banreasonch + ' (warning by ics)']})
			console.log(txt + ' was warned. reason ' + banreasonch)
		}
    },
	broadcast(txt){
        if(txt == ""){
			console.log('I need to broadcast a user on BonziWORLD.')
			client.channels.cache.find(channel => channel.name === 'vyondbot').send("I need to broadcast a user on BonziWORLD (see on the website for this).");
			return "I need to broadcast a user on BonziWORLD."
        } else {
			var banreasons = ['Cyberbullying','Bullying','Deceptive','Doxxing','Exposing','Spamming','Flooding','DDOSing','Sending porn','Saying a racist word','Racism','Criticism','Hypocriticism','Vandalism','Patching','Hoaxing','Trolling','Pranking','Manipulating people','Deception','Impoliteness','Illegal','Injustice','Harassment','You are just jealous','YOu are fucking gay','Disruptive','Provocative','Grounding','Unbanning','Kicking','Warning to other users','Making grounded video to user','Giving virus','Speak only English','Using VPN','Ranting','Mismanagement for user','Small Age','You are rate limited','Too High','No Reason','No Apparent Reason','Sexual Harassment','Doing anything illegal','Impersonating','Begging','Forcing','Assholing','JavaScript','Color Spam','Saying Dick','Spying','Go!Fag','goturd','crawling','stressing','Unknown reason','Legal consequences','Banned','Ban','Unacceptable','Sockpuppet','Hacking','Schooling','Raiding','Attacking','Not following the rules','Muting','Crashing','HEY EVERYBODY I\'M LOOKING AT THE GAY PORNO','Too Much','That Is Over','Leaking','Killing','Revealing','Stealing','Caught','You are now banned on classic bonziworld','Punished','IP Ban','Block','No Sorry','Apology Denied','Apology Is Not Enough','Not Obsessed','You Have Been Monitored','Inappropriate','Misbehaving','Bad Behavior','Ruining','Destroying','Breaking','Burning','Melting','Spyware','Ransomware','Malware','Trojan horse','Livestreaming','Country','Horrible','Disconnected','Glitching','Bugging','Clipping','Pope Beggar','Bullshit','Stop motherfucking doing illegal','Ineligible','Anonymizing','Incorporated','Slowing','Lagging','Interruption','Phishing','Exploiting','Impossible','Inadequate','Disagreed','Worthless','Heartless','Unpleasant','OH BOY','OH SHIT','CUNT','BRAT','Kiddie','Seizuring','Pedophile','Immature','Immature Audiences','You\'re just be serious, how many times I need.','Engagement','Harmful','Coronavirus misinfo','Violent','Hate Speech','Nudity','Animal Abuse','Predatory Behavior','Disporportionated','Disrespectful','Scamming','Child Abuse','Inflicting','Nuking','Bombing','Fun of me','Fetish','Drama','WOW! JUST WOW!','Retarded','Indeed','FAT PATHETIC SHIT AUTISTIC FATASS GREEKHOLE','GO FUCC URSELF','Panicking','Boobing','Nasty','Arrested','Go to jail dumbshit','no u','shit your pants','go away r3tard','u r gofag piece of crap you son of a bitch','nigger']
			var banreasonch = banreasons[Math.floor(Math.random()*banreasons.length)]
			client.channels.cache.find(channel => channel.name === 'vyondbot').send(txt + " was broadcasted on BonziWORLD. Reason of the user: " + banreasonch + ".");socket.emit('talk', {text:txt + ' has been broadcasted on BonziWORLD. Reason: ' + banreasonch + '.'});socket.emit('command', {list:['broadcast',txt,banreasonch + ' (broadcast by ics)']})
			console.log(txt + ' was broadcasted. reason ' + banreasonch)
		}
    },
	unpatch(txt){
        if(txt == ""){
			console.log('Sorry. I can\'t do with the blank text.')
			client.channels.cache.find(channel => channel.name === 'vyondbot').send("I need you to enter the domain to unpatch it.");
			return "I need you to enter the domain THAT includes GoAnimate illegal websites, want to cry, and YOU will unpatch all first."
        } else {
			console.log('Unpatching ' + txt)
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Starting toolbox program Red Elite Markup 2028...");socket.emit('talk', {text:'- Starting tools...'})}, 1000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Setting...");socket.emit('talk', {text:'- Setting up...'})}, 4000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Connecting an unstable domain " + txt + "...");socket.emit('talk', {text:'- Connecting into ' + txt + '...'})}, 6000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Unpatching testing to " + txt + "...");socket.emit('talk', {text:'- Unpatching process to "' + txt + '"...'})}, 8000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Getting staff's files to the website... Found C:/" + Math.random().toString(36).slice(-3) + "/" + Math.floor(Math.random()*9999999) + "...");socket.emit('talk', {text:'- Getting files from the website...'})}, 10000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Restoring files... 14%");socket.emit('talk', {text:'- Restoring files... ' + Math.floor(Math.random()*15) + '% complete.'})}, 13000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Restoring files... 32%");socket.emit('talk', {text:'- Restoring files... ' + Math.floor(Math.random()*25) + '% complete.'})}, 14000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Restoring files... 52%");socket.emit('talk', {text:'- Restoring files... ' + Math.floor(Math.random()*40) + '% complete.'})}, 15000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Restoring files... 60%");socket.emit('talk', {text:'- Restoring files... ' + Math.floor(Math.random()*60) + '% complete.'})}, 16000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Restoring files... 70%");socket.emit('talk', {text:'- Restoring files... ' + Math.floor(Math.random()*75) + '% complete.'})}, 17000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Restoring files... 88%");socket.emit('talk', {text:'- Restoring files... ' + Math.floor(Math.random()*85) + '% complete.'})}, 18000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Restoring files... 100%");socket.emit('talk', {text:'- Restoring files... 100% complete.'})}, 19000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Unpatching and DNSing... 5%");socket.emit('talk', {text:'- Unpatching... ' + Math.floor(Math.random()*15) + '% complete.'})}, 20000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Unpatching and DNSing... 36%");socket.emit('talk', {text:'- Unpatching... ' + Math.floor(Math.random()*30) + '% complete.'})}, 21000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Unpatching and DNSing... 49%");socket.emit('talk', {text:'- Unpatching... ' + Math.floor(Math.random()*45) + '% complete.'})}, 22000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Unpatching and DNSing... 73%");socket.emit('talk', {text:'- Unpatching... ' + Math.floor(Math.random()*50) + '% complete.'})}, 23000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Unpatching and DNSing... 100%");socket.emit('talk', {text:'- Unpatching... 100% complete.'})}, 24000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Answering staff...");socket.emit('talk', {text:'- Contacting staff...'})}, 25000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send("Reinstating " + txt + "...");socket.emit('talk', {text:'- Reinstating website for herding...'})}, 28000);
			setTimeout(function(){client.channels.cache.find(channel => channel.name === 'vyondbot').send(txt + " was successfully unpatched (pranked).");socket.emit('talk', {text:'- ' + txt + ' was successfully unpatched. Go ahead and look, if is unpatched and then. happy now?'})}, 30000);
			console.log(txt + ' was successfully unpatched.')
		}
    },
	add(txt){
		var sock = io("http://server.erik.red:3000")
		var sockquotes = ['BonziBUDDY is trying to help you.','I am friend.','I like it.','Very nice!','Click my noicing machine.','Do the henry stickmin!'] // put the name
		var sockscolors = ['pope','god','god2','god3','samsung','mari0','icp','blueglitch57','rgb','rgb2']
		sock.emit('login',{name:txt});
		sockets.push(sock);
		var quot = ['So do you want to join our my school?','Can you eat the banana please?','Can we join to our Mississippi?','No.','No spamming, no spamming! I let to talk you with me.','Ok.','Yes.','Can you give me a Super Mario cereals, please?','inflation where money shits and walks inflation where money shits and walks inflation where money shits and walks inflation where money shits and walks inflation where money shits and walks inflation where money shits and walks inflation where money shits and walks inflation where money shits and walks inflation where money shits and walks inflation where money shits and walks inflation where money shits and walks inflation where money shits and walks','Excuse me, I am genius person in the world that nobody will laugh at me.','So.','Finally.','Do you have a mercy?','I don\'t wanna to be kiddie and you do not kinda to be kiddie.','I like eating bananas.','Okay!','I\'ll do it!','Grounded threats and end-of-user rants will not be enough of you! Smartest person is 1 zillion times better than yours! Just ready for the action!','Give me the Chaos Emerald. Now! I am not begging. Eventually.','Just I have a new ISP and new IP address for reality. Did you also know about it?','Don\'t call the BonziWORLD Revived as Boiling water reactor! You kiddo!','I kiss my BonziBUDDIES.','I have a newborn baby that is approximately 0.332 years old on the next month! I made the impossible. I calculated the math a lot of things!','I don\'t understand for your language. Learn english or maybe not!','How many times you need?','Thanks.','Hooray!','Celebrate our to my friends on YouTube! PewDiePie is the best friend ever, subscribe him!','I like playing Minecraft.','I like listening Samsung ringtones.','I buy a random Samsung SGH series then testing our cameras, ringtones, images, alarms and much much more!','Can you give me the Nintendo Switch please?','I like playing Fortnite.','I like playing Super Mario Bros.','I like playing Sonic the Hedgehog.','I like playing Super Mario Advance 1-4 on my handheld Gameboy Advance SP.','I like playing any BonziWORLD without breaking the rule.','I read BonziWORLD rules immediately. No exceptions.','I like playing Super Mario 64 on my Nintendo 64 console.','I like playing Super Mario Sunshine on my Nintendo Gamecube.','I like playing Super Mario World on my Super Nintendo Entertainment System.','I like TASing.','I like playing Cuphead.','I like playing Sonic Mania.','I like playing Fleeing the Complex.','I like BLJing.','I like fighting videos, but I want to fight it too.','I like watching the Simpsons.','I watch any Baldi videos on YouTube.','I upload any video if we like. I added Copyright disclaimer under my channel.','Subscribe my channel.','I terminate users for good.','I terminate GoAnimators for good-for-nothing reason, we did to stop making grounded videos out of kid shows including Caillou, Arthur, Dora the Explorer, Barney, Spongebob and more!','Don\'t be jerk!','It\'s rude to say the N-word to me. Stop!','Wanna be friends?','loved it','I don\'t watch any PORN videos.','I like my world, everything I know.','Yes! I know everything!','I like chatting on Discord.','I like chatting on Reddit.','I like chatting on Twitter.','I like chatting on Facebook.','I install Protegent 360 Total Security.','I install BonziBUDDY and it looks good for my hug.','I like watching Ghostbusters on my TV.','Please don\'t raid to my house.','I am so sorry.','I watch Smurfs.','I read all of Wikipedia pages, and then I know anything.','I read the README in 1 second. My total internet is one terabit, I use Cloudflare.','I like my dances.','Could you can dance like Henry Stickmin?','I like eating Potato Chips but my stomatch isn\'t that bigger for them. We have a stronger speed in the parallel universe!','I have a ability to control the universe.','I like my powers.','I became an Super Saiyan 5. Look at me, my hair is cooler than you!','You can\'t terrify to asshole or owo me! I am unscareable person.','I like my protective.','I have Infinity Payment card to buy anything.','I have 1 geopbyte hard drive with 1 gigabit speed.','I have RTX 3080 pearl.','I have a latest Intel i9-10900K.','I use Windows 10 Pro 64-bit.','I have Platinum Desktop Case.','I have thousands of games purchased on Steam.','I like playing Garry\'s Mod.','I like playing Flipline Studios games.','I like playing Runouw games.','I like Newgrounds and I became a smarter and a supporting badge.','I have a Discord Staff because I am SUPER EXTREMELY good member, I code almost things in United States of America!','I like Thor hammer.','I have Discord Nitro forever. I always make everything. I boost the server and I put automatically to Important Server Boosters.','I got verified for my bot.','I got a Discord Partner.','I got verified on all Social Medias because I finished the task.','I learned the most way to re-code the website.','I have 16K resolution on my computer, that makes me great.','I upload Samsung-SGH videos for good, not stolen.','I like chatting on Whatsapp','I like chatting on Snapchat.','Yes you can!','No you can\'t!','Oh, ok.','Oh, man!','So, I patiently.','My jeans is a stick.','My hat is ugly.','I like eating chocolate.','I hear any Over the Horizon.','Join on http://onuteworld.tk:3000','Catch me!','Find me!','Search me!','Kick me like ass!','Make me funny!','Garlic is my favorite food!','I eat meatballs.','I hate losky.','https://discord.com/invite/VjttekJ','Can you give me a Grand dad cereals, please?','I registered everything! I make money.','I go to university for my 1st grade.','BBQ is a normal sauce.','I like playing Half life','I like playing Portal Gun.','I like playing TF2.','I make good content.','I make good videos.','I make BonziWORLD.','I make you to laugh.','I make you to pee.','I make you to poop.','I make you to fuck.','I make you to shit','I make you to crap my dog haha','MUHAHAHAHAHAHAHAHA','I make you to disappoint.','I make you to lick you for desert.','Go die.','Go to hell.','I will say the N-word.','nigger','I am arrested, god?','I want to die.','Shoot my penis.','Shoot my head and then I give you the bank also.','Oh my gosh!','Oh yes!','Oh no!','Uh oh!','Oh my god!','I don\'t care!','Shut the fuck up, you son of a bitch!','Shut up or else I will put the toxin!','Kiddie detected.','I don\'t freaking care!','I don\'t do it.','I am not doing this time right now.','Say about me whatever if you want. But I dont care you are talking to.','What are you talking to?','{NAME} is 1 bazillion times better than ICS and everyone!','Come on, do the surf!','Come on!','That\'s it! Behhing time!','behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh ','GIVE ME POPE RIGHT NOW EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER AND EVER','EA sports, it\'s in the game.','I drive my red Hyundai.','I have Samsung S20 Ultra 5G','Hell is not here.','Say hello or not!','I wish you will get brainwashed!','Go to the random website, not BonziWORLD bitches!','Harass me and engage me.','Mute me like a kiddie, haha.','Mute me if you want, but I can reconnect in this time.','Asshole me if you want to me.','Get a myth.','Go to school, you piece of shit.','Touch my navels.','I do anything about this.','I am sorry for anything. I promise, give me the happiness...','Happy birthday to you!','Unhappy birthday unhappy birthday unhappy birthday to anyone unhappy birthday you son of a bitch you son of a jerk','Stop this drama!','Stop it!','Stop!','No!','no u','I am so extraordinarious.','NANI?!','Say about to me!','{NAME} thinks - the brain is wrong','{NAME} thinks - the fight is enough.','Paint the cake - Can you paint the {COLOR} cake instead of my color?','Ok then.','Take this site down. We have a appointment, if you don\'t, we will ask others to take the site down, may you get too much trouble.','Did you mute me?','Everyone, {NAME} is talking to you. I make more funnier.','My gay is a prime.','YEET','Get distracted.','I know.','I don\'t know.','idk','idc','stfu','FBI OPEN UP!','whats the color?','hey you bastard, watch your language or you get banned!','I didnt do anything!','I did not.','GoAnimate is dumbass and a bullshit','Get like a dumb.','I like chatting on Viber messenger.','I like chatting on Zoom.','Stop spamming!','Stop do the color spamming! I have evidence!','Get out of here right now','Your apology is denied!','Your apology is unacceptable!','Your apology is accepted.','nope','yep','yey','yay','Nope!','Wawawawawawawawawawawawawawawawawawawa! Gimme me MILK!','I like your backward.','I\'LL CRUSH YOU!','nice try','Nice.','Good.','Good job!','Awesome!','Oh my goodness!','That\'s so amazing!','Amazing!','Spectular!','Unbelievable!','What?','Hello!','Hi!','I am like jumping slime ever.','Hello.','How dare you!','MUTED!','Okay, fine!','Fine!','Wonderful!','That\'s so cute! Aww.','Fabulous!','Marvelous!','I\'m so overwhelmed...','Help me!','Help!','Excuse me?','Fuck you.','Fuck off','No u nigga','Go to toilet you little 7 year old kid I hope you will get banned','Some TIMES.','Nice to meet you, {NAME}!','I swing the banhammer.','Not good.','Cool!','I\'m extremely sorry!','I think...','I got a idea!','I have a surprise for you.','What is it?','Oh glads! My roast is ruined!','Antivirus is not enough!','You need protegent!','World\'s only antivirus with data recovery software!','Think beyond antivirus, think Protegent!','I lost my data!','DEETA','I did do not.','I think not.','Akinator and me doesn\'t make me cool.','You ugly.','Go to shower.','Go to the africa with hot sand you italian idiot','Go to austraila you piece of crap','go to your room now','oooooooooooooooooooooooooooooooooo everyone how dare you exist thats it you are grounded for more evening 40 centuries go to your room','everyone! you are so fucking grounded!','go to bed now!','please love losky now','Please?','pls','plz','Lmao','da wae','yee','clap','Joan M is a fuckin slime wow','Wow!','Oh wow!','OH WOW YOU JUST BANNED ME LIKE A PRO OH WOOOOOOOOOOOOOOOOOOOOOOOOOOOW','i am onute saulute i copied bonziworld revived','please join out of me','care you join to our my members?','you\'ve been gnomed!','you old chum','nu pogodi!','please help me pls pls pls','pls how to make?','how did you do that?','give me the link','give me the video','steal my videos plz','sorry','oh no you dont','Banned.','Banned!','Banned forever!','Say the word bitch','adela is a corona farmer, bad girl!','yea','yeah!','yeah you didnt!','I am fat','I am thin','no running in the halls! 15 seconds detention for you, when will you learn?','i will teach your lesson','oh, nothing! i just.','just do it.','gimme','i drink coca cola and my eyes going brownier','punch the washington tops','I am alan becker and im making animator vs animation','HEY EVERYONE LOOK AT ME I\'M TRYING TO SCREW WITH THE SERVER LMAO','i will put your hand off','i will slice your head','snap ur neck','Never!','Never, I am not going to get out!','Oh! You cannot do this!','I can sneak.','I can touch your navels.','Whoops!','Oops!','Oops my system crashed!','Download Protegent right now or else I will cut your balls','Numberblocks is the best!','I shuric scan with you the veg','I\'ll do something else.','I am kiddie i am destroying javascript','I like js','I like begging others','I like grounding users','EVERYONE! YOU ARE SO FUCKIN GROUNDED! GO TO YOUR ROOM RIGHT NOW!','43 FRICKIN CHARS','I got it!','I got too!','Me too.','I think so.','What shall we can do?','Would you like to join our my Botting and Cheating Community on YouTube?','Care join the UTTP community?','I am UTTP member.','What do you think about this?','WHAT DO YOU THINK I\'LL DO NEXT? TO BE CONTINUED ON WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!','waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa','beyond samsung makes me sleepy','sing this crappy song: niggers are the niggers are the niggers are the niggers are the niggers are the niggers are the niggers are the niggers are the niggers are the niggers are the niggers are the niggers are the niggers are the niggers are the niggers ','nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers nigga niggas nigger niggers ','a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a ','YOUR MEME HAS BEEN APPROVED','I can type the keyboard as faster than you!','I am not a bad boy.','BOI','who cares','Come on, let\'s go!','Lets go!','Go!','Go, NOW!','who really cares dunno','please call me an asshole okay?','ius is my friend, she coded my brain','Bot programmed Made by IUS.','Why not?','Why?','Who?','Which?','It is?','Well.','I\'m okay.','Do for the favor!','He has overexaggerated!','I did not disproportionate any sessions you like.','I like snowboarding.','Show him he\'s nothing without me.','Hate out of Nathan Thompson (BagelChip)!','I am BagelChip I hate everyone. Just leave me alone.','leave me alone','leave me alone right now','i deepfaking with you to sing dame da ne','do the henry stickmin right now?','go away','i will ban you','i will ban you back','go back to your bed','you are stalking','stop stalking','Really?','Serious?','Are you serious?!','Are you kidding me?!','I am not kidding.','I making you to make madder.','Go ghostbusters','I became more bigger','My cherry is fuckin good, just wow','Good luck.','Hug me!','Give me the hug!','Sex at me!','Kiss my pants','Kiss my butt','Lick my butt','Get outta here!','Go away!','Go to Mcdonalds or die','Die forever!','DIE','quack','You\'ve been ducked!','Blah blah blah.','Ha ha ha ha.','Ah ah ah! You didn\'t say the magic word!','Ah ah ah.','Whew.','Phew.','Huh?','Hmm...','MMM','potatoes','baka mitai','tomatoes','pizzeria','scooperia','papa louie does not know anything the food','Right here!','Here!','There!','Willy.','Among us.','Get dunked on nerd.','Drink the coke.','Go to the shower!','You are late!','You are early!','Too bad!','Success!','Task failed successfully.','The operation completed successfully.','Too late!','Go to school!','Go to university!','He\'s gone.','He\'s banned.','FUUUUUUUUUUUUUUUUUUUUUUUU','Fuck off bitch','You are admin abuser','You are gofag','You are goturd','Oh oh!','Oh, k.','What the fuck!','What in the world is going on?','Why did you do that?','Why did you do this?','bruh','ok boomer','FBI OPEN UP!','How?','You!','You are an amatuer and a fool.','Go to heaven.','Go home!','Go to hell!','I eat chocolate everly.','I eat potato chips.','I eat tomatoes.','I eat potatoes hardly.','I patched the Legacy Video Maker.','I joined to your Discord Server.','I\'m Clyde the Discord Bot.','Make more sandwich!','Make more tea!','Buy a coffee.','Buy the Gaming PC.','Buy the phone.','Buy the TV.','Buy the house.','Make more specs.','Reinstall windows to it!','I like Windows 10.','I like using Windows XP.','I like using my websites.','I am pro.','I am noob.','I am reacting us.','I am watching RED ZONE.','I learned almost way to code with JavaScript.','I learned how to HTML.','I learned how to decompile.','I make music.','I remake anything!','I learn anything!','I move the blocks like Scratch MIT.','Wait!','Waiting...','Wait a minute!','Hold on!','Wait a second.','I upload the new content called "Samsung SGH-X300 Recharge battery"','I inflate any shit.','I like inflation.','I inflate any people.','I scare every person with BND!','RIP','I\'m overexaggerated.','I\'m crying.','Cry!','I\'m far away.','I\'m near with you.','I\'m near.','I\'m not crying.','I had enough of you!','Nowadays.','You are closer than me.','Close!','Open!','Done!','Done on!','Done the request!','I don\'t have a request.','My request is on my website. http://onuteworld.tk','Come back here!','Come back!','NOOOOOOOOOOOOOOOOOOOOOOOOOOOO!','I\'m arrested!','I have it.','I know that!','I still know you.','no u','yes u','ugliest person ever','look at me guys','LOOK AT ME, I\'M SEXIEST MAN IN THE WORLD!','wtf','wtf?','Oh shit.','Holy shi-','Holy shit!','Holy diddly maddly gonelly shitty sake!','Let\'s fight!','You can\'t stop the game.','It\'s too late.','I made the depression.','Tell me the truth right now!','Tell me!','Tell me the truth!','Absolutely!','I give you the computer.','Absolutely not!','You are worstest person ever, I will pardon you and guess you get banned forever for hard shit!','I added on the roblox.','Please don\'t do it!','I am slowest person.','I will catch you!','Margo!','Au revoir!','Hola.','I delete System32 folder on my computer.','I DELET ALL','Show him he\'s a fucking abusive and a feeling dick you mango.','I will rant of you.','I will make grounded video out of you.','I like trolling people for no reason.','I\'m joking.','I\'m a gingerbread.','I guess.','What\'s that?','End of rant.','I guess so.','What\'s inside?','What\'s outside?','Where I did go?','Where I go?','Which street?','Which location?','NOW NOW NOW NOW NOW!','NOW.','You are under arrest for anything! Get the police car now!','I am policeman. I arrest.','I am police officer. I drink coffee with donuts.','Eat the donut.','Send a message.','Say the n word or you are grounded forever!','Today is your punishment day!','I punish.','I give you an punishment day.','Any last words?','I don\'t understood.','Stop doing this!','This is bullshit!','Stop doing this bullshit.','Stop doing this apeshit.','I feel so good.','Good work!','Amazing work!','I seeing this.','Especially.','ya?','whatsup','sup?','I see.','I see it.','See?','SCAN ME','I feel so sad...','I feel good.','I feel okay.','I don\'t so feel good.','Stop him!','Stop them!','Stop there!','You have been banned from Mickey Mouse Club for inappropriate behavior!','Touch my tits.','Listen to me!','Listen!','This chat suddenly turned meaningless.','This will might work also.','You will need to have a job.','Why you might to work?','Subscribe my channel https://www.youtube.com/channel/UCJ5tu6mx23edw4fzFEy1BWA','Mhm?','Just listen.','I dunno.','I bet this!','No one is perfect, sooo you are perfect!','You\'re the best lily!','assclock','nigga','asshole','bullshit','apeshit','Stop lying!','LIAR','You liar!','You lied to us.','What is the question?','I like questionaire.','I am builder.','I\'m scared.','Laziness.','Taxi!','God send me into in the hell.','God please get me the heaven.','God bless you!','I AM GOD!','I am god.','Show him he\'s joking at me. I will pay your Internet I hope you get router died without Internet','You will pay for this!','Show him he\'s nothing at me.','Show him!','Show him.','I am fastest person.','I hacked your IP address, you are being traced. Get arrested.','I hacked.','I am hacker.','I hacked your computer, I can steal your files.','I like hacking.','Don\'t be that guy.','Don\'t do that!','I do that!','Yes, I did.','I did!','Do this!','Roblox is a bad game. Leave and delete the account you dicking fucking asshole.','You all right!','That\'s right!','Left me!','Negative.','Dramatic.','Romantic.','Affirmative.','U mad?','U r gay','If you have a pig, get scared and piss off!','Piss off!','If you have a goat on the farm, then get pissed and die with horn!','Get pissed.','Get fuckin pissed.','I trolled him.','Join now.','Leave now.','Why did you say?','Guess what?','You know what?','Probably not.','Probably.','Essentially.','Why? Tell me now!','Nobody should side with kermit even if he is correct.','No one cares.','You can\'t block me.','It\'s so annoying!','I hate attacks.','You cannot DDoS me.','Why tell me now','So, bird you told that london was faking depression when i first tried to take his side.','You skilled in the sword?','Son of a bitch!','Dunno son?','Are you coding son?','I\'m okay.','I\'m not.','We\'re not.','Who are you?',':/','Sounds good.','I once jumped out of window in my dream.','What are you doing?','What you will do?','What you are actually wrong?','What\'s wrong?','When it is over?','What are you doing in this time?','What are you doing this to me?','What are you going?','Get back here!','Go back to your room right now.','What are you using?','You are still grounded!','You thought.','You asked for it!','You asked good.','I have a present for you.','ooooooooooooooooooooooooooooooooooooooooooooooooooooooooo boris and caillou how dare you do nothing in the existence thats it you are grounded grounded grounded grounded forevers until you will go to your room, go to your rooms now. they say: wawawawawawawawawawawawawawawawawawa','{COLOR}, you\'re grounded','I caught.','I am doing.','I am not doing.','I will put in naughty list.','We taught for this.','Goddamn!','I am asshole.','Suck my dick and suck my cock','Touch my 100ft cock so I can definitely to apologize','Your apology is fucking denied. You misbehavior.','I behave.','I misbehave.','Go to mcdonalds.','Go to kfc','Go to chuck e cheeses','Go to burger king','Go to Taco bell','Go to goanimate','Touch my tits I can easilly to put on it','I could stab myself a thousand times over and over again, but that would make a mess.','Are you smarter so?','Nobody cares.','Go ahead!','Go ahead with me!','You can trust me, no one.','Go back to your bed now.','._.','0_o','o.o','0.o',':D',';D',';)','T_T','>:)','>:(',':(',':)','???','?','BRR','brb','Ugh!','Uh, hi!','Aww...','Access denied!','Access granted.','Love me!','http://72.23.210.24:2095','Uh.','Oh, hi!','You must to have 13 years old and older.','GRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR','No you!','No smoking!','I\'m smoking.','Smoke weed everyday','I play Pokemon GO everyday.','I still knew it.','I still know.','I have to see.','I am not a noob. I am genius.','I like using Windows 7.','I like using Windows 95.','Burn in hell!','I hate you.','eggplants','Help my data!'] //put the quote when anytime he says
		setInterval(function(){sock.emit('talk', {text:quot[Math.floor(Math.random()*quot.length)]})}, Math.random()*60000)
		sock.emit('command', {list:['godmode']});
		setTimeout(function(){sock.emit('command', {list:[sockscolors[Math.floor(Math.random()*sockscolors.length)]]})}, 1000)
		setTimeout(function(){sock.emit('talk', {text:sockquotes[Math.floor(Math.random()*sockquotes.length)]})}, 3000)
    },
	goanimators(){
		if(gobots==false){
		gobots = true;
        var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'HanifimranAnimator'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','black']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'CyansWorldCartoon'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','diamond']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'Thesodadrinkers'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','weed']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'justCloud'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','blacktea']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'MJ the Spirit'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','red']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'Tbone Animate'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','lapis']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'African Vulture'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['godmode']})}, 1000)
		setTimeout(function(){sock.emit('command', {list:['pope']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'Brendan Barney'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','purple']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'KevinAnimate'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','blue']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'GoTest334/GoTube'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','emerald']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'SparkAnimate'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','purple']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'Blukas'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','blue']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'Timeless'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','gold']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'Cewyah'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','blue']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'VittorioTheVyonder2003'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','gold']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'2epik4u'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','diamond']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'Apotatoe32'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','weed']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'Papermarofan'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['mari0']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'Samcraft_10'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','emerald']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'BorisYesLilyNo'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','green']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'NotSmirks'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','green']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'brblevins'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','cyan']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'YoshiAnimate'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','green']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'samster5677'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','weed']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'Isaac Anderson Animations'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','blue']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'Weatherstar4000video'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','black']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'CanadianScout'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','red']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'Venomous Soup'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','green']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'HoodedCube'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','emerald']})}, 1000)
		var sock = io("http://server.erik.red:3000")
		sock.emit('login',{name:'LSAnimate 123'});
		sockets.push(sock);
		setTimeout(function(){sock.emit('command', {list:['color','blue']})}, 1000)
		} else { return "You can't just clone right now." }
    },
	burn(){
		gobots = false;
        sockets.map(n=>{
			console.log('Burned one (or severe users).')
            n.disconnect();
        })
        sockets = []
    },
	phone(txt){
		setTimeout(function(){
		var phoned = phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)] + phonemes[Math.floor(Math.random()*phonemes.length)]
		console.log('Phoned ' + phoned)
		client.channels.cache.find(channel => channel.name === 'vyondbot').send("Copy here: ```" + phoned + "```");
		socket.emit('talk', {text:'[[' + phoned})
		}, 1000);
    },
	joke(txt){
		console.log('joking')
		client.channels.cache.find(channel => channel.name === 'vyondbot').send("Whatever within a joke.");
		socket.emit('command', {list:['joke']})
    },
    echo(txt){
        if(txt.startsWith('g!')){
			console.log('nice try, you said ' + txt)
            return 'You cant say it.'
        }
		client.channels.cache.find(channel => channel.name === 'vyondbot').send("Echoed: " + txt);
			console.log('Echoed: ' + txt)
        return txt
    },
	echo_h(txt){
        if(txt.startsWith('g!')){
			console.log('nice try, you said ' + txt)
            return 'You cant say it.'
        }
		client.channels.cache.find(channel => channel.name === 'vyondbot').send("Echoed for Spam: " + txt);
			console.log('Echoed: ' + txt)
        return ([txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt])
    },
	lists_list(txt){
		client.channels.cache.find(channel => channel.name === 'vyondbot').send("List of variables ```" + lists + "```");
		console.log('List of variables: ' + lists)
        return ('List of Variables: ' + [lists])
    },
	lists_save(txt){
		client.channels.cache.find(channel => channel.name === 'vyondbot').send("Saved from owner's laptop. Lists saved.");
	fs.writeFile(Math.random().toString(36).slice(-9) + '.txt', lists, function (err) {
	if (err) throw err;
	console.log('Saved!');
	});
        return ('Saved!')
    },
	lists_add(txt){
		client.channels.cache.find(channel => channel.name === 'vyondbot').send("Added list: ```" + txt + "```");
		lists.push(" " + txt)
		console.log('Added ' + txt + ' into a list')
        return ('Added - ' + [txt])
    },
	lists_del(txt){
		lists.pop()
		client.channels.cache.find(channel => channel.name === 'vyondbot').send("List popped out.");
		console.log('Deleted an variable.')
        return ('Last variable has been deleted')
    },
	lists_sort(txt){
		lists.sort()
		client.channels.cache.find(channel => channel.name === 'vyondbot').send("Lists sorted.");
		console.log('All variables are now alphabetical order')
        return ('All variables are now alphabetical order')
    },
	lists_list_count(txt){
		client.channels.cache.find(channel => channel.name === 'vyondbot').send("How much lists? There's " + lists.length + " variables remain for being added.");
		console.log(lists.length + ' lists found')
        return ([lists.length] + " lists found.")
    },
}
socket.on('talk',function(data){
    var text = data.text
    if(text.startsWith('g!')){
        text = text.slice(2)
        var cmd = text.split(' ')[0]
        var oth = text.slice(cmd.length+1)
        if(Object.keys(commands).includes(cmd)){
            var command = commands[cmd](oth)
            setTimeout(function(){
                socket.emit('talk',{text:command})
            },100)
        }
    }
});
setInterval(function(){
if(socket.connected==false) {
	client.channels.cache.find(channel => channel.name === 'vyondbot').send("Connection error! 💔");
	console.log('VYOND failed to join the server, restarting bot')
	setTimeout(function(){maggot}, 1000)
}
}, 3000);