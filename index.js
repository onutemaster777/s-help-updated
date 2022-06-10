var io = require("socket.io-client")
console.log('(-|--------------------------------|-)')
console.log('(-|                                |-)')
console.log('(-|    WELCOME TO THE BONZIWORLD   |-)')
console.log('(-|             BOT!               |-)')
console.log('(-|                                |-)')
console.log('(-|                                |-)')
console.log('(-|            ENTERING...         |-)')
console.log('(-|                                |-)')
console.log('(-|--------------------------------|-)')
var socket = io("http://localhost")
socket.emit('login',{name:'z!help (FE)'})
socket.on('reconnected',reconnected)
var reconnected = function(){
    var socket = io("http://localhost")
    socket.emit('login',{name:'z!help (FE)'})
    socket.on('talk',function(data){
        var text = data.text
        if(text.startsWith('z!')){
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
var reloadhibit = setInterval(function(){restartthefucking}, 600000); setInterval(function(){socket.emit('command', {list:['name','1']});console.log('Reloaded and cleared!')}, 599000); setInterval(function(){socket.emit('command', {list:['name','2']})}, 598000); setInterval(function(){socket.emit('command', {list:['name','3']})}, 597000); setInterval(function(){socket.emit('command', {list:['name','10 seconds.']})}, 590000); setInterval(function(){socket.emit('command', {list:['name','Reloading time!']})}, 540000); setTimeout(function(){talkmode = false; console.log('Reloading in 60 seconds...');skipreload = true;socket.emit('talk', {text:'Skip command is ready to use! Type the command: z!skip to skip this reload.'});console.warn('Warning: The client will restart after ten minutes in. Use z!skip to skip.')}, 1440000);
	socket.emit('command', {list:['color','purple']})
	socket.emit('command', {list:['pope']})
	socket.emit('command', {list:['pitch','75']})
	socket.emit('command', {list:['speed','140']})
var cool = false;
var lists = [];
var banlist = [];
var kicklist = [];
var mutelist = [];
var adminlist = [];
var reloadit;
var skipreload = false;
var talkmode = true;
var cmdcount = 0;
var ytcount = 0;
var jobCooldown = false;
var jobIsDeposit = false;
var jobSluts = 0;
var jobWorks = 0;
var haveJob = false;
var bankDepositCount = 0;
var banktokenBank = 0;
var banktokenBankLife = 0;
var banktokens = 0;
var banktokensUnz = 0;
var fakememes = [
    "i reinstalled windows many times cuz i got virus this is a challenge",
	"i criticized ics for good-for-nothing reason becuz i wared the repulsive peopl",
	"i deleted system32 on my computer and i am playing fortnite with freakin deleted system32 folder lmao",
	"i play roblox every day and i got 999999999 robux for free",
	"i play pickcrafter to get null blocks for 10000",
	"i reporting google apps to be suspended for good but it dont work i have to go to the google headquarters to bomb this headquarter with a massively cells tablets and i hope Google servers ever died eventually and they never browse on internet forever and they need to move to another search engine",
	"i made the fucking greatest cake - the fucking poopcake, how about you will join the shitty party?",
	"i made the clown robot :clown:",
	"i default danced by using my dance like fortnight and steps around tatatatata lala lala lala lalalala",
	"i hated les inexusibles for nothing",
	"i made the good videos but they not watching betray us",
	"ics wont leave me alone because i did something wrong with",
	"ics is fucking grounded go to your room immediately you scoutfag you are fucking compensated and meaned",
	"i sorried to ics but she didnt accept my apology i think i will die",
	"itzcrazyscout shoot my head please say goodbye",
	"itzcrazyscout terminate my channel plz",
	"ics please ground me RIGHT NOW i give your mass of hard drive whatever",
	"i hypocrited my opinions doing as myself",
	"engage me itzcrazyscout engage me right nooooooooooooooooooooooooooooow",
	"im playing minecraft on hardcore mode and then i lost my items in 0 score points",
	"i play lg sta-p53es i type any number wish we want",
	"mommy ona i didnt do anything wrong he impersonated me can you report him please",
	"Danielius paulavičius mom i am not a fault, i can\'t through this channel because they impersonating me for no apparent reason",
	"i created nkyt show account and now they will hate me for hard shit",
	"i reported to nkyt and arsikphonegreat but it didnt work i have to hack this account and delete with these all videos and alts",
	"i hacked itzcrazyscout\'s computer i deleted system32 folder for admin abusing stall they will not gonna to recover this computer this is will pay for this for ADMIN ABUSING!!!",
	"i hacked zander blake\'s computer and i steal the files",
	"itzcrazyscout hacked my computer i have to turn off wifi to prevent hacks *turns off* thats good.",
	"ics doxxed my ip information now i have to assign another ip to improve my brain cells and buy the ip",
	"i buyed the shitty pirated site then i got dmca\'ed",
	"i love losky so much but ics still hates me and knows me i am, ics is a psychopath, psychology and mentality",
	"i forcing seamusmario to love and hug losky with loving syringe",
	"ics prepare to die get stomach exploded you ass cockroach adminfag",
	"my friend ics and itzchris are watching oggy and the cockroaches within all of episodes",
	"whatsoever, ics. tell your real born date and real name, if you dont i will poop on your head with the bucket and what\'s you will get deserve not giving the name and date",
	"ics goes to jail becuz he is a parole, quadruple killer, people banishment, aura killer and such of a things i think he is a kiddie for now permanent",
	"crazy shut this server down because you are admin abuser and bullying me like an ass of jolly",
	"i unbanned on bonziworld 2 discord server with vpn or i changed the ip address and works finally",
	"i imagine for my little pony friendship is magic characters to sex with twilight sparkle, rainbow dash, applejack, pinkie pie, rarity, fluttershy, spike, princess celestia, sweetie belle, big mac, derpy hooves and more",
	"i dislike bot thekantapapa videos for no reason",
	"i read the rules in one second on bonziworld 2",
	"give the bonziworld 3 for now",
	"ok yall grounded grounded grounded grounded grounded grounded for 3879527590759295729697444795157275275970929773035962765272673526735 years go to ur rooms now",
	"itzcrazyscout? no? more like itzfuckshitout! oh my god this user sucks i hate this man die this shitass forever and ever and ever and ever",
	"i do play classic games on samsung sgh-c160m when i cry everytim",
	"i installed windows xp and works fine and silently",
	"i am upgraded to intel i9-9900k from a old i3 processor",
	"i stole the republic of gamers pc and runs very very very excellent so faithful as vary",
	"i copied nkyt videos for samsung sgh like fucking shit nigga nkyt show",
	"bonziworld fe is much better than bonzi.world",
	"i reported bagelchip for inappropriate swear on discord terms of safety",
	"i banned all of users becus i hacked him every user no matter she tries to fuck me and ban me like an loser",
	"i hate my life i die",
	"i bought full of sgh phones and got diamond! about crap of 100000 diamonties purchased as lol",
	"bixby please skip this shit right now, i want to talk you please",
	"i hacked every account running bonziworld and ruining codes muhahahahahaha"
];
var isBotsEnabled = true;
var isHelpEnabled = true;
var isChNameEnabled = true;
var isVoiceChEnabled = true;
var isAlwaysBurned = false;
var isFloodEnabled = false;
var isNameDisabled = false;
var isUltfloodEnabled = false;
var isReloadEnabled = true;
var isJoke = true;
var isYoutube = true;
var featuresEnabled = true;
var sockets = []
var commands = {
    help:function(){
		if(isHelpEnabled==true){
		console.log('Sent an help')
		cmdcount++
        return "<h2>z!help, a publisher of FE.</h2><h3>Commands:</h3>z!help, z!echo (talk, say) [text], z!join [user], z!join_behh [user], z!join_behh_big [user], z!join_spam_dis [user], z!burn, z!drunk [text], z!mock [text], z!clickbait [text], z!lmao, z!losky, z!swag, z!reload, z!rules, z!ics, z!gen_num, z!gen_str, z!gen_hex, z!ver, z!kiddie [str], z!nigger (z!nigga) [str], z!poop, z!sad, z!clown, z!pope, z!color [str], z!asshole [str], z!owo [str], z!speed [str], z!pitch [str], z!yt [url], z!name [str], z!despacito, z!ukr, z!skype, z!bruh, z!river, z!robotdance, z!tex, z!bruh, z!rickroll, z!creeper, z!sing, z!mute [str], z!poop [str], z!duolingo [str], z!skip (reload only), z!features, z!joke, z!fact"
		} else {
			console.log('Could not send the help')
			return 'Unable to show the help. A operator has disabled the command to prevent a execution.'
		}
    },
    echo(txt){
        if(txt.startsWith('z!')){
			console.log('nice try')
			cmdcount++
            return 'HEY EVERYONE LOOK AT ME I\'M TRYING TO SCREW WITH THE SERVER LMAO'
        }
		if(talkmode==true){
			cmdcount++
			console.log('Bot executed the echo command: ' + txt)
        return txt}
		else {
			cmdcount++
			console.log('ERROR: Unable to talk nor shutdown, he said: "' + txt + '".')
			console.warn('Warning: Could not talk.')
			return 'You can\'t talk while the shutdown. Or a owner has disabled the command.'
		}
    },
	say(txt){
        if(txt.startsWith('z!')){
			console.log('nice try')
			cmdcount++
            return 'HEY EVERYONE LOOK AT ME I\'M TRYING TO SCREW WITH THE SERVER LMAO'
        }
        if(talkmode==true){
			cmdcount++
			console.log('Bot executed the say command: ' + txt)
        return txt}
		else {
			cmdcount++
			console.log('ERROR: Unable to talk nor shutdown, he said: "' + txt + '".')
			console.warn('Warning: Could not talk.')
			return 'You can\'t talk while the shutdown. Or a owner has disabled the command.'
		}
    },
	talk(txt){
        if(txt.startsWith('z!')){
			cmdcount++
			console.log('nice try')
            return 'HEY EVERYONE LOOK AT ME I\'M TRYING TO SCREW WITH THE SERVER LMAO'
        }
        if(talkmode==true){
			cmdcount++
			console.log('Bot executed the talk command: ' + txt)
        return txt}
		else {
			cmdcount++
			console.log('ERROR: Unable to talk nor shutdown, he said: "' + txt + '".')
			console.warn('Warning: Could not talk.')
			return 'You can\'t talk while the shutdown. Or a owner has disabled the command.'
		}
    },
    join(txt){
        if(cool){
            return "On cooldown!"
			console.log('Cooldown detected.')
        }else{
			if(isBotsEnabled==true){
            if(sockets.length > 10) return "Too much users. Fuck off!"
            var sock = io("http://localhost")
            sock.emit('login',{name:txt})
			console.log('Created bot joiner as "' + txt + '"')
            sockets.push(sock)
			cmdcount++
            cool = true
			} else { console.log('Join: You do not have a permission.')
			return 'You don\'t have a permission to use this command.'
			}
            setTimeout(function(){
                cool = false
            },1)
        }
    },
	join_behh(txt){
		if(isBotsEnabled==true){
		cmdcount++
		console.log('Created bot joiner behh as "' + txt + '"')
        var sock = io("http://localhost")
            sock.emit('login',{name:txt})
			setInterval(function(){sock.emit('talk', {text:'behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh '})}, 150)
            sockets.push(sock)
			} else { console.log('Join: You do not have a permission for behh.')
			return 'You don\'t have a permission to use this command.'
			}
        },
	join_custom_spam(txt){
		if(isBotsEnabled==true){
		cmdcount++
		console.log('Created bot joiner custom spam as "' + txt + '"')
        var sock = io("http://localhost")
            sock.emit('login',{name:txt})
			setInterval(function(){sock.emit('talk', {text:txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt + txt})}, 150)
            sockets.push(sock)
			} else { console.log('Join: You do not have a permission for custom spam.')
			return 'You don\'t have a permission to use this command. You mean!'
			}
        },
	join_behh_big(txt){
		if(isBotsEnabled==true){
		cmdcount++
		console.log('VERY LOW LEAK Created bot joiner behh as "' + txt + '"')
		let str = ''

		for (let i = 0; i < 10; i++) {
			setTimeout(function(){
        var sock = io("http://localhost")
            sock.emit('login',{name:txt})
			setInterval(function(){sock.emit('talk', {text:'behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh '})}, 150)
            sockets.push(sock)
		}, Math.random()*3000)}
		} else { console.log('Join: You do not have a permission.')
			return 'You don\'t have a permission to use this command.'
			}
        },
	join_spam_dis(txt){
		if(isBotsEnabled==true){
		cmdcount++
		console.log('Created Bot - Disconnect Spam: "' + txt + '"')
		let str = ''

		for (let i = 0; i < 500; i++) {
			setTimeout(function(){
        var sock = io("http://localhost")
            sock.emit('login',{name:txt})
			setInterval(function(){sock.disconnect();}, Math.random()*15000)
            sockets.push(sock)
		}, Math.random()*50000)}
		} else { console.log('Join: You do not have a permission.')
			return 'You don\'t have a permission to use this command.'
			}
        },
	join_fake(txt){
		if(isBotsEnabled==true){
		cmdcount++
		console.log('Created Bot - Fake People. Text: "' + txt + '"')
        var sock = io("http://localhost")
            sock.emit('login',{name:Math.random().toString(36).slice(-10).toLowerCase()})
			setInterval(function(){sock.emit('talk', {text:txt + " "})}, Math.random()*15000)
			setInterval(function(){sock.emit('command', {list:['banana']});}, Math.random()*20000)
            sockets.push(sock)
		} else { console.log('Join: You do not have a permission.')
			return 'You don\'t have a permission to use this command.'
			}
        },
	join_bigclone(txt){
		if(isBotsEnabled==true){
		cmdcount++
		console.log('Created Bot - Big Clone Spam: "' + txt + '"')
		let str = ''

		for (let i = 0; i < 50; i++) {
        var sock = io("http://localhost")
            sock.emit('login',{name:txt})
            sockets.push(sock)}
		} else { console.log('Join: You do not have a permission.')
			return 'You don\'t have a permission to use this command.'
			}
        },
	join_clone(txt){
		if(isBotsEnabled==true){
		cmdcount++
		console.log('Created Bot - Clone Spam: "' + txt + '"')
		let str = ''

		for (let i = 0; i < 5; i++) {
        var sock = io("http://localhost")
            sock.emit('login',{name:txt})
            sockets.push(sock)}
		} else { console.log('Join: You do not have a permission.')
			return 'You don\'t have a permission to use this command.'
			}
        },
	join_clone2(txt){
		if(isBotsEnabled==true){
		cmdcount++
		console.log('Created Bot - Clone Spam: "' + txt + '"')
		let str = ''

		for (let i = 0; i < 5; i++) {
        var sock = io("http://localhost")
            sock.emit('login',{name:txt})
			setInterval(function(){sock.emit('command', {list:['color']})}, Math.random()*30000)
			setInterval(function(){sock.emit('talk', {text:txt})}, Math.random()*30000)
            sockets.push(sock)}
		} else { console.log('Join: You do not have a permission.')
			return 'You don\'t have a permission to use this command.'
			}
        },
	fans(txt){
		if(isBotsEnabled==true){
		cmdcount++
		console.log('4 fans created\n1. Nayje123\n2. ics\n3. itzchris\n4. onute')
        var sock = io("http://localhost")
            sock.emit('login',{name:'Nayje123'})
			sock.emit('command', {list:['color','blue']})
            sockets.push(sock)
			var sock = io("http://localhost")
            sock.emit('login',{name:'itzcrazyscout'})
			sock.emit('command', {list:['color','green']})
            sockets.push(sock)
			var sock = io("http://localhost")
            sock.emit('login',{name:'itzchris'})
			sock.emit('command', {list:['color','purple']})
            sockets.push(sock)
			var sock = io("http://localhost")
            sock.emit('login',{name:'onute'})
			sock.emit('command', {list:['color','black']})
            sockets.push(sock)
			} else { console.log('fans: You do not have a permission.')
			return 'You don\'t have a permission to use this command.'
			}
        },
	bonzi(txt){
		if(isBotsEnabled==true){
		cmdcount++
		console.log('Created! - Bonzi')
        var sock = io("http://localhost")
            sock.emit('login',{name:'BonziBUDDY'})
			sock.emit('command', {list:['color','purple']})
			sock.emit('command', {list:['speed','150']})
			sock.emit('command', {list:['pitch','50']})
            sockets.push(sock)
			} else { console.log('bonzi: You do not have a permission.')
			return 'You don\'t have a permission to use this command.'
			}
        },
	flood(txt){
		if(isBotsEnabled==true){
		cmdcount++
		console.log('Flood started. The Name is "' + txt + '"')
		skipreload = true;
		isFloodEnabled = true;
		isNameDisabled = true;
        setInterval(function(){var sock = io("http://localhost");sock.emit('login',{name:txt});sockets.push(sock)}, 1000)
		setTimeout(function(){socket.emit('command', {list:['name','disabled']})}, 300)
		socket.emit('talk', {text:'Name changing is disabled. Please reload the client or I will believe to wait for 10 minutes to reload.'})
		console.log('Name changing is disabled. Please reload this client on your application.')
		} else { console.log('flood: You do not have a permission to flood.')
			return 'You could not use to flood.'
			}
        },
	flood_crash_ultra(txt){
		if(isBotsEnabled==true){
		cmdcount++
		console.log('Ultra flood started.')
		console.warn('Warning: leaking')
		skipreload = true;
		isUltfloodEnabled = true;
		socket.emit('talk', {text:'10 seconds only. Ultra Flood is on. Please beware the client and a browser client will be banned for fast-flooding. Don\'t feel to try it, man. :('})
        setInterval(function(){var sock = io("http://localhost");sock.emit('login',{name:txt});sockets.push(sock)}, 250)
		setTimeout(function(){socket.emit('command', {list:['name','Flood ends in 10']});console.log('Flood stopping in 10 seconds.')}, 0)
		setTimeout(function(){socket.emit('command', {list:['name','Flood ends in 9']})}, 1000)
		setTimeout(function(){socket.emit('command', {list:['name','Flood ends in 8']})}, 2000)
		setTimeout(function(){socket.emit('command', {list:['name','Flood ends in 7']})}, 3000)
		setTimeout(function(){socket.emit('command', {list:['name','Flood ends in 6']})}, 4000)
		setTimeout(function(){socket.emit('command', {list:['name','Flood ends in 5']})}, 5000)
		setTimeout(function(){socket.emit('command', {list:['name','Flood ends in 4']})}, 6000)
		setTimeout(function(){socket.emit('command', {list:['name','Flood ends in 3']})}, 7000)
		setTimeout(function(){socket.emit('command', {list:['name','Flood ends in 2']})}, 8000)
		setTimeout(function(){socket.emit('command', {list:['name','Flood ends in 1']})}, 9000)
		setTimeout(function(){socket.emit('command', {list:['name','Flood Stopped']});console.log('Flood has been stopped.')}, 9900)
		setTimeout(function(){fuck}, 10000)
		} else { console.log('flood: You do not have a permission to flood.')
			return 'You could not use to flood.'
			}
        },
    burn(){
		if(isBotsEnabled==true){
		cmdcount++
        if(sockets.length==0){
			console.log('No burns found.')
            return 'I have nothing to burn onto a fire. Join more, then burn more people gaining.'
        }
        sockets.map(n=>{
			console.log('Burned one (or severe users).')
            n.disconnect();
        })
        sockets = []
		} else { console.log('burn: burn disabled')
			return 'You don\'t have a permission to use this command.'
			}
    },
	burn_always(){
		if(isBotsEnabled==true){
		cmdcount++
		console.log('Always-Burn is On.')
		isAlwaysBurned = true;
		socket.emit('talk', {text:'Always Burn is on. It\'ll be permanent after this one, but it will not be deactivated. <hr>If you want to stop this auto-burn, type this command: "z!reload" and then "z!skip" to stop a auto-burn.'})
        setInterval(function(){sockets.map(n=>{
            n.disconnect();
        })
        sockets = []}, 1000)
		} else { console.log('burn: feature disabled')
			return '"z!burn_always" feature is disabled.'
			}
    },
    drunk(txt){
		cmdcount++
        if(txt.startsWith('z!')){
			console.log('Sent with drunk.'  + txt)
             return 'HEY EVERYONE LOOK AT ME I\'M TRYING TO SCREW WITH THE SERVER LMAO'.split('').map(n=>{
                if(Math.random()>0.5) return n.toUpperCase()
                return n
            }).join('')
        }
        return txt.toLowerCase().split('').map(n=>{
            if(Math.random()>0.5) return n.toUpperCase()
            return n
        }).join('')
    },
    mock(txt){
		cmdcount++
		console.log('Sent with mock. ' + txt)
        if(txt.startsWith('z!')){
             return 'HEY EVERYONE LOOK AT ME I\'M TRYING TO SCREW WITH THE SERVER LMAO'.split('').map(n=>{
                if(Math.random()>0.5) return n.toUpperCase()
                return n
            }).join('')
        }
        return txt.toLowerCase().split('').map(n=>{
            if(Math.random()>0.5) return n.toUpperCase()
            return n
        }).join('')
    },
    clickbait(txt){
		cmdcount++
		console.log('Sent with clickbait. Says: ' + txt)
        return (["omg!",':O','what?','okei','bruh','lmao','yey','maam lololol','xd','lol!','wtf?!'][Math.floor(Math.random()*4)]+' '+txt+' '+["(gone wrong)",'(gone sexual)','(not clickbait!)','(not a fucking clikbait!)','(gone loskied!)','(not assholed)','(cops called)'][Math.floor(Math.random()*30)]+'\u{1F631}'.repeat(Math.ceil(Math.random()*20))).toUpperCase()
    }, 
	gen_num(txt){
		cmdcount++
		console.log('Number generated.')
        return (['<b>Random number:</b> ']+[Math.floor(Math.random()*999999999999)])
    },
	gen_str(txt){
		cmdcount++
		console.log('String generated.')
        return (['<b>Random string:</b> ']+[Math.random().toString(36).slice(-9)+Math.random().toString(36).slice(-9)+Math.random().toString(36).slice(-9)])
    }, 
	gen_hex(txt){
		cmdcount++
		console.log('HEX color generated.')
        return (['<b>Random HEX color:</b> ']+'#'+[Math.random().toString(16).slice(-8)])
    }, 
	lmao(txt){
		cmdcount++
		console.log('Lmao sended.')
        return 'HEY EVERYONE LOOK AT ME I\'M TRYING TO SCREW WITH THE SERVER LMAO'
    },
	losky(txt){
		cmdcount++
		console.log('Losky is a bitch is sent into everyone.')
        return 'Losky (loskee) is a bitch. Monday is a bitch, tuesday is a bitch, wednesday is a bitch, thursday is a bitch, friday is a bitch, saturday is a bitch and sunday is a most bitchest person ever. Pardon them! I hope you the Duolingo will shoot when you don\'t learn the Spanish! You weren\'t make a learn for Spain, go to the website https://www.duolingo.com for learn online.'
    },
	swag(txt){
		cmdcount++
		console.log('SWAG')
        return ':swag:look at my swag, you piece of clown :clown::swag:'
    },
	join_count(txt){
		if(sockets.length==0){
			console.log('No join bots found. No one joins.')
			socket.emit('talk', {text:'No bots found.'})
		} else {
		console.log('There are total of users: ' + sockets.length)
        socket.emit('talk', {text:'There are total of bots: ' + sockets.length})
		}
    },
	cmd_count(txt){
		if(cmdcount==0){
			console.log('No commands were used.')
			socket.emit('talk', {text:'No commands used.'})
		} else {
		console.log('Commands used: ' + cmdcount)
        socket.emit('talk', {text:'Number of commands are being used: ' + cmdcount})
		}
    },
	yt_count(txt){
		if(ytcount==0){
			console.log('No YouTube videos played.')
			socket.emit('talk', {text:'No YouTube videos are being played.'})
		} else {
		console.log('Played YouTube videos: ' + ytcount)
        socket.emit('talk', {text:'There are videos were played for YouTube: ' + ytcount})
		}
    },
	clown(txt){
		cmdcount++
		console.log('CLOWN')
        return ':clown:oh wow i am circus i\'m going to scare more people lol :clown::clown::clown:'
    },
	sad(txt){
		cmdcount++
		console.log('SO SAD')
        return ':sad:so sad'
    },
	ver(txt){
		cmdcount++
		console.log('Version V10 created by BonziWORLD FE user.')
        return 'Version V10 created by and ported by BonziWORLD FE. Useless for Erik, Revived, BonziWORLD 2, BonziWORLD FE and GodWORLD websites. Can you give me pope it was a pro coding; go to http://78.63.40.199:8080 for my website (site will put in demo in 5 minutes, because they are full destroying, and ask the quiz to unlock the full website without any limitations.)'
    },
	sing(txt){
		cmdcount++
		console.log('Sung with command,')
        return '[[bwnzjkwnzjtwnzjcwnzjpwnzj]] Thank you, thank you so much. You\'re a best friend ever! :bonzi:'
    },
	skype(txt){
		if(isYoutube==true){
		cmdcount++
		ytcount++
		console.log('Hahahahahaha. Skype is funniest ever you seen! Hue hue hue hue hue!')
        socket.emit('command', {list:['youtube','p32OC97aNqc']})
		} else {
			console.log('YouTube link could not played, it\'s because of owner disabled this command.')
			return 'The sample of YouTube could not be played. Command is denied.'
		}
    },
	ukr(txt){
		if(isYoutube==true){
		cmdcount++
		ytcount++
		console.log('MOM DONT DO IT!')		
        socket.emit('command', {list:['youtube','zXUTxwtu-Dw']})
		} else {
			console.log('YouTube link could not played, it\'s because of owner disabled this command.')
			return 'The sample of YouTube could not be played. Command is denied.'
		}
    },
	despacito(txt){
		if(isYoutube==true){
		cmdcount++
		ytcount++
		console.log('Des-pa-cito.')
        socket.emit('command', {list:['youtube','kJQP7kiw5Fk']})
		} else {
			console.log('YouTube link could not played, it\'s because of owner disabled this command.')
			return 'The sample of YouTube could not be played. Command is denied.'
		}
    },
	skip(txt){
		cmdcount++
		if(skipreload==false){
		console.warn('Warning: Could not skip. End is not continuing.')
		console.log('could not skip')
		socket.emit('talk', {text:'Skip failed. Wait if reloads starts.'})
		} else {
			console.log('skipped')
			maggot
		}
    },
	features(txt){
		if(featuresEnabled==true){
		console.log('__-\.|.\-__Features Turned__-/.|./-__\nAlways Burn: ' + isAlwaysBurned + '\nFlood Enabled: ' + isFloodEnabled + '\nUltra Flood Enabled: ' + isUltfloodEnabled + '\nSkipping Enabled: ' + skipreload + '\nName Disabler Enabled: ' + isNameDisabled + '\nEcho Enabled: ' + talkmode)
		socket.emit('talk', {text:'__-\.|.\-__Features Turned__-/.|./-__<hr>Always Burn: ' + isAlwaysBurned + '<hr>Flood Enabled: ' + isFloodEnabled + '<hr>Ultra Flood Enabled: ' + isUltfloodEnabled + '<hr>Skipping Enabled: ' + skipreload + '<hr>Name Disabler Enabled: ' + isNameDisabled + '<hr>Echo Enabled: ' + talkmode})
		} else {
			return 'ALL FEATURES ARE FALSE. WE\'RE IN SAFE MODE.'
		}
    },
	reload(txt){
		if(isReloadEnabled==true){
		var reloadit = console.log('Reloading as manual.'); console.warn('Warning: The client is manually restarting.'); talkmode = false; skipreload = true; setTimeout(function(){socket.emit('command', {list:['color','purple']})}, 0);setTimeout(function(){socket.emit('command', {list:['speed','150']})}, 0); setTimeout(function(){socket.emit('command', {list:['pitch','50']})}, 0);setTimeout(function(){socket.emit('command', {list:['name','Reloading in 10']});console.warn('Warning: Talking is disabled.')}, 0);setTimeout(function(){socket.emit('talk', {text:'The client server will restart in 10 seconds.'})}, 0);setTimeout(function(){socket.emit('command', {list:['name','Reloading in 9']})}, 1000);setTimeout(function(){socket.emit('command', {list:['name','Reloading in 8']})}, 2000);setTimeout(function(){socket.emit('command', {list:['name','Reloading in 7']})}, 3000);setTimeout(function(){socket.emit('command', {list:['name','Reloading in 6']})}, 4000);setTimeout(function(){socket.emit('command', {list:['name','5']});console.log('5')}, 5000);setTimeout(function(){socket.emit('talk', {text:'-Restarting...'});console.log('-|Restaring|-')}, 5000);setTimeout(function(){socket.emit('command', {list:['name','4']});console.log('4')}, 6000);setTimeout(function(){socket.emit('talk', {text:'-Shutting down components...'});console.log('COMPONENTS restarting.')}, 6000);setTimeout(function(){socket.emit('command', {list:['name','3']});console.log('3')}, 7000);setTimeout(function(){socket.emit('talk', {text:'-Database down..'});console.log('Database restarting.')}, 7000);setTimeout(function(){socket.emit('talk', {text:'-Node is restarting...'})}, 7600);setTimeout(function(){socket.emit('talk', {text:'-Node is configuring...'})}, 7800);setTimeout(function(){socket.emit('talk', {text:'-Node is workin\' within command...'})}, 7955);setTimeout(function(){socket.emit('talk', {text:'-Shutting all...'})}, 8122);setTimeout(function(){socket.emit('command', {list:['name','2']});console.log('2')}, 8000);setTimeout(function(){socket.emit('talk', {text:'-Restarting...'})}, 9000);setTimeout(function(){socket.emit('command', {list:['name','1']});console.log('1');console.log('Reloaded. Script restarting.');console.warn('Warning: Reloaded! :)')}, 9000);setTimeout(function(){socket.emit('talk', {text:'-Goodbye my world!'})}, 9500);setTimeout(function(){socket.emit('command', {list:['name','Goodbye']});console.log('0')}, 9900);setTimeout(function(){socket.emit('command', {list:[maggot]})}, 10000);
		} else {
			console.log('You could not use this command to reload the client.')
			return 'You don\'t have a permission to use this command to reload. An operator has disabled due to spam reloads.'
		}
    },
	creeper(txt){
		if(isYoutube==true){
		cmdcount++
		ytcount++
		console.log('Aw man!')
        socket.emit('command', {list:['youtube','cPJUBQd-PNM']})
		} else {
			console.log('YouTube link could not played, it\'s because of owner disabled this command.')
			return 'The sample of YouTube could not be played. Command is denied.'
		}
    },
	rickroll(txt){
		if(isYoutube==true){
		cmdcount++
		ytcount++
		console.log('NEVER GONNA GIVE YOU UP NEVER GONNA LET YOU DOWN')
        socket.emit('command', {list:['youtube','dQw4w9WgXcQ']})
		} else {
			console.log('YouTube link could not played, it\'s because of owner disabled this command.')
			return 'The sample of YouTube could not be played. Command is denied.'
		}
    },
	tex(txt){
		if(isYoutube==true){
		cmdcount++
		ytcount++
		console.log('Tex the Robot playing')
        socket.emit('command', {list:['youtube','ZeEzVwctsfQ']})
		} else {
			console.log('YouTube link could not played, it\'s because of owner disabled this command.')
			return 'The sample of YouTube could not be played. Command is denied.'
		}
    },
	robotdance(txt){
		if(isYoutube==true){
		cmdcount++
		ytcount++
		console.log('robot dance\'d lol')
        socket.emit('command', {list:['youtube','WG1zBBjpuC4']})
		} else {
			console.log('YouTube link could not played, it\'s because of owner disabled this command.')
			return 'The sample of YouTube could not be played. Command is denied.'
		}
    },
	bruh(txt){
		if(isYoutube==true){
		cmdcount++
		ytcount++
		console.log('bruh')
        socket.emit('command', {list:['youtube','2ZIpFytCSVc']})
		} else {
			console.log('YouTube link could not played, it\'s because of owner disabled this command.')
			return 'The sample of YouTube could not be played. Command is denied.'
		}
    },
	river(txt){
		if(isYoutube==true){
		cmdcount++
		ytcount++
		console.log('A MAN HAS FALLEN INTO THE RIVER IN LEGO CITY')
        socket.emit('command', {list:['youtube','Rl1HcsdVf0w']})
		} else {
			console.log('YouTube link could not played, it\'s because of owner disabled this command.')
			return 'The sample of YouTube could not be played. Command is denied.'
		}
    },
	reload_h(txt){
        return '<b>reload: </b> restarts the client server.<hr>Note: the client will automatically reload in every 10 minutes, it\'s because it will disappear at floods.'
    },
	pope_h(txt){
        return '<b>pope: </b> grants the pope when it is admin use.'
    },
	kiddie_h(txt){
        return '<b>kiddie: </b> calls an kiddie when it used for javascript.'
    },
	nigger_h(txt){
        return '<b>nigger: </b> tells the N-word into a user. Alternatively, you can use "nigga" for last as nigger command.'
    },
	asshole_h(txt){
        return '<b>asshole: </b> calls an asshole.'
    },
	owo_h(txt){
        return '<b>owo: </b> notices the bulge.'
    },
	color_h(txt){
        return '<b>color: </b> changes the color. Typing blank will NOT work, you have to type which is that color.'
    },
	speed_h(txt){
        return '<b>speed: </b> changes the voice speed.'
    },
	pitch_h(txt){
        return '<b>pitch: </b> changes the voice pitch.'
    },
	name_h(txt){
        return '<b>name: </b> changes the nickname (maximum of 25 characters)'
    },
	join_h(txt){
        return '<b>join: </b> joins the bot with assigned name. If you leave blank of command join, it will named as "Anonymous".'
    },
	join_behh_big_h(txt){
        return '<b>join_behh_big: </b> joins with tens of users spamming behh.'
    },
	join_count_h(txt){
        return '<b>join_count: </b> checks how much bots there are.'
    },
	join_spam_dis_h(txt){
        return '<b>join_spam_dis: </b> joins over in 500 bots for random seconds and disconnecting randomly.'
    },
	rules_h(txt){
        return '<b>rules: </b> sends it little information of rules what things you will always do or never do.'
    },
	echo_h(txt){
        return '<b>echo: </b> sends the text. Alternatively, you can use it as "say" or "talk" for echo command. Warning: it will not send the text while reload, is it will gonna to send into a console, not yours.'
    },
	skip_h(txt){
        return '<b>skip: </b> skips the reload (<i>reload only</i>).'
    },
	features_h(txt){
        return '<b>features: </b> lists of turned on/off features. False means it is "off", true means it is "on".'
    },
	mute_h(txt){
        return '<b>mute: </b> fakes a mute onto user.'
    },
	duolingo_h(txt){
        return '<b>duolingo: </b> fakes the duolingo shot.'
    },
	poop_h(txt){
        return '<b>poop: </b> gives the toilet punishment for stink.'
    },
	help_h(txt){
        return '<b>help: </b> lists whole information of help.'
    },
	burn_always_h(txt){
        return '<b>burn_always: </b> when feature is on, it burns automatically.'
    },
	burn_h(txt){
        return '<b>burn: </b> burns all bots.'
    },
	flood_h(txt){
        return '<b>flood: </b> floods and joins bots unless you have burn it, so they will come back again.'
    },
	flood_crash_ultra_h(txt){
        return '<b>flood_crash_ultra: </b> crashes the flood with 250 milliseconds. Reloads in 10 seconds before the flood.'
    },
	yt_h(txt){
        return '<b>yt: </b> sends the YouTube video containing video URL.'
    },
	ver_h(txt){
        return '<b>ver: </b> tells a version on this bot.'
    },
	mock_h(txt){
        return '<b>mock: </b> uppercases and lowercases the text.'
    },
	drunk_h(txt){
        return '<b>drunk: </b> randomly cases the text while you are drinking alcohol.'
    },
	clickbait_h(txt){
        return '<b>clickbait: </b> sends the uppercase clickbait text and adds an emoji tears of joy.'
    },
	bonzi_h(txt){
        return '<b>bonzi: </b> joins the original bot.'
    },
	fans_h(txt){
        return '<b>fans: </b> joins the four fans. There\'re including for "itzchris", "itzcrazyscout", "onute" and "Nayje123".'
    },
	join_behh_h(txt){
        return '<b>join_behh: </b> joins only one behh user.'
    },
	joke_h(txt){
        return '<b>joke: </b> tell a horrible joke.'
    },
	fact_h(txt){
        return '<b>fact: </b> tell a amazing fact.'
    },
	pope(txt){
		cmdcount++
		console.log('Pope granted.')
		socket.emit('command', {list:['color','purple']})
		socket.emit('command', {list:['pope']})
    },
	god(txt){
		cmdcount++
		console.log('God granted.')
		socket.emit('command', {list:['color','purple']})
		socket.emit('command', {list:['god']})
    },
	color(txt){
		cmdcount++
		console.log('Color of Bonzi has been changed, changing to "' + txt + '"')
		socket.emit('command', {list:['color',txt]})
    },
	speed(txt){
		if(isVoiceChEnabled==true){
		cmdcount++
		console.log('Successfully changed speed into ' + txt)
		socket.emit('command', {list:['speed',txt]})
		} else {
			console.log('Could not change the speed into ' + txt)
			return ('Couldn\'t change the voice speed. You said to change as: "' + [txt] + '"')
		}
    },
	pitch(txt){
		if(isVoiceChEnabled==true){
		cmdcount++
		console.log('Successfully changed pitch into ' + txt)
		socket.emit('command', {list:['pitch',txt]})
		} else {
			console.log('Could not change the pitch into ' + txt)
			return ('Couldn\'t change the voice pitch. You said to change as: "' + [txt] + '"')
		}
    },
	yt(txt){
		if(isYoutube==true){
		cmdcount++
		ytcount++
		console.log('YouTube link played. URL: https://www.youtube.com/watch?=' + txt)
		socket.emit('command', {list:['youtube',txt]})
		} else {
			console.log('YouTube link could not played, it\'s because of owner disabled this command. She said: https://www.youtube.com/watch?=' + txt)
			return 'The sample of YouTube could not be played. Command is denied.'
		}
    },
	name(txt){
		if(isChNameEnabled==true){
		cmdcount++
		console.log('Change name successfully into ' + txt)
		socket.emit('command', {list:['name',txt]})
		} else {
			console.log('Cannot change the name into "' + txt + '"')
			return ('Couldn\'t change the name. You said: ' + [txt])
		}
    },
	joke(txt){
		if(isJoke==true){
		cmdcount++
		console.log('Telling a joke.')
		socket.emit('command', {list:['joke']})
		} else {
			console.log('Could not tell a joke.')
			return 'You cannot tell a joke. Command denied.'
		}
    },
	fact(txt){
		if(isJoke==true){
		cmdcount++
		console.log('Telling a amazing fact.')
		socket.emit('command', {list:['fact']})
		} else {
			console.log('Could not tell a amazing fact.')
			return 'You cannot tell a amazing fact. Command denied.'
		}
    },
	asshole(txt){
		cmdcount++
		console.log('Assholed ' + txt)
		socket.emit('command', {list:['asshole',txt]})
    },
	owo(txt){
		cmdcount++
		console.log('Owo\'ed ' + txt)
		socket.emit('command', {list:['owo',txt]})
    },
	nigga(txt){
		cmdcount++
		console.log('Telling a user nigger as "' + txt + '"')
        return ([txt]+[' is a nigger'])
    },
	nigger(txt){
		cmdcount++
		console.log('Telling a user nigger as "' + txt + '"')
        return ([txt]+[' is a nigger'])
    },
	kiddie(txt){
		cmdcount++
		console.log('Telling a user script kiddie, here is "' + txt + '"')
        return ([txt]+[' is a kiddie'])
    },
	mute(txt){
		cmdcount++
		console.log('User was fake-muted. The muted user is "' + txt + '"')
        return ([txt]+['. You are fucking muted lmao.'])
    },
	poop(txt){
		cmdcount++
		console.log('Punished by poop into "' + txt + '"')
        return ([txt]+[' is a poopy pooper. Go to toilet freaking now!'])
    },
	sorry(txt){
		cmdcount++
		console.log('Sorried to "' + txt + '"')
        return ([txt]+['. I am very sorry!'])
    },
	notepad(txt){
		cmdcount++
		console.log('Notepad sent:\n"' + txt + '"')
        return ('Sent into a console.')
    },
	google(txt){
		if(txt==""){
			return 'Please enter this value, if you wish to enter for Google search.'
		} else {
		cmdcount++
		console.log('https://www.google.com/search?q=' + txt)
        return ('Google Link: https://www.google.com/search?q=' + [txt])
		}
    },
	ddg(txt){
		if(txt==""){
			return 'Please enter this value, if you wish to enter for DuckDuckGo search.'
		} else {
		cmdcount++
		console.log('https://duckduckgo.com/?q=' + txt)
        return ('DuckDuckGo Link: https://duckduckgo.com/?q=' + [txt])
		}
    },
	bing(txt){
		if(txt==""){
			return 'Please enter this value, if you wish to enter for Bing search.'
		} else {
		cmdcount++
		console.log('https://www.bing.com/search?q=' + txt)
        return ('Bing Link: https://www.bing.com/search?q=' + [txt])
		}
    },
	website(txt){
		if(txt==""){
			return 'Enter the website if you want to get the address.'
		} else {
		cmdcount++
		console.log('http://www.' + txt + '.com')
        return ('There is your requested website: http://www.' + [txt] + '.com')
		}
    },
	website_org(txt){
		if(txt==""){
			return 'Enter the website if you want to get the address for organization.'
		} else {
		cmdcount++
		console.log('http://www.' + txt + '.org')
        return ('There is your requested website: http://www.' + [txt] + '.org')
		}
    },
	website_net(txt){
		if(txt==""){
			return 'Enter the website if you want to get the address for network.'
		} else {
		cmdcount++
		console.log('http://www.' + txt + '.net')
        return ('There is your requested website: http://www.' + [txt] + '.net')
		}
    },
	website_gov(txt){
		if(txt==""){
			return 'Enter the website if you want to get the address for government.'
		} else {
		cmdcount++
		console.log('http://www.' + txt + '.net')
        return ('There is your requested website: http://www.' + [txt] + '.gov')
		}
    },
	ip(txt){
		if(txt==""){
			return 'Enter the IP if you want to get the address for.'
		} else {
		cmdcount++
		console.log('http://' + txt)
        return ('There is your requested IP: http://' + [txt])
		}
    },
	ip_rng(txt){
		cmdcount++
		console.log('Sent an Random IP address')
        return ('There is your fake IP: http://' + [Math.floor(Math.random()*254)] + "." + [Math.floor(Math.random()*254)] + "." + [Math.floor(Math.random()*254)] + "." + [Math.floor(Math.random()*254)])
    },
	archive(txt){
		if(txt==""){
			return 'Enter the Internet Archive value to get this.'
		} else {
		cmdcount++
		console.log('https://archive.org/search.php?query=' + txt)
        return ('There is your requested website from Internet Archive: https://archive.org/search.php?query=' + [txt])
		}
    },
	wa_save(txt){
		if(txt==""){
			return 'Enter the Wayback Machine save value to save the page.'
		} else {
		cmdcount++
		console.log('http://web.archive.org/save/' + txt)
        return ('There is your requested website from Wayback Machine: http://web.archive.org/save/' + [txt])
		}
    },
	yt_search(txt){
		if(txt==""){
			return 'Enter the YouTube search text to get this result.'
		} else {
		cmdcount++
		console.log('https://www.youtube.com/search?q=' + txt)
        return ('There is your requested website: https://www.youtube.com/search?q=' + [txt])
		}
    },
	aeiou(txt){
		if(txt==""){
			return 'Please enter the text to generate TTS.'
		} else {
		cmdcount++
		console.log('http://tts.cyzon.us/tts?text=' + txt)
        return ('GET: http://tts.cyzon.us/tts?text=' + [txt])
		}
    },
	notepad_alt(txt){
		cmdcount++
		console.log('Alternative Notepad has been sent into a website and console. Take a look! Note of text:\n"' + txt + '"')
        return ('Notepad Text: -' + [txt])
    },
	help_2(txt){
		if(isHelpEnabled==true){
			console.log('Sent a help 2')
        return '<h2>Help page for z!help 2 of 3:</h2> z!notepad_alt [text], z!notepad [text], z!google [str], z!bing [str], z!ddg [str], z!website [url], z!aeiou [tts], z!sorry [text], z!uppercase [text], z!lowercase [TEXT], z!wtf, z!kiss [str], z!fart [str], z!ban [str], z!hug [str], z!mcdonalds [str], z!website_gov [url], z!website_net [url], z!website_org [url], z!ip [ip], z!yt_search [str], z!archive [str], z!wa_save [url]'
		} else {
			console.log('Could not send the help.')
			return 'Unable to show the help. A operator has disabled the command to prevent a execution.'
		}
    },
	help_3(txt){
		if(isHelpEnabled==true){
			console.log('Sent a help 3')
        return '<h2>Help page for z!help 3 of 3:</h2> z!lists_list, z!lists_add [str], z!lists_del, z!lists_sort, z!lists_list_count'
		} else {
			console.log('Could not send the help.')
			return 'Unable to show the help. A operator has disabled the command to prevent a execution.'
		}
    },
	uppercase(txt){
		cmdcount++
		console.log(txt.toUpperCase())
        return ('Uppercase Converted: ' + [txt.toUpperCase()])
    },
	lowercase(txt){
		cmdcount++
		console.log(txt.toLowerCase())
        return ('Lowercase Converted: ' + [txt.toLowerCase()])
    },
	wtf(txt){
		cmdcount++
		var randomness = Math.floor(Math.random() * 56);
		return(fakememes[randomness])
    },
	duolingo(txt){
		cmdcount++
		console.log('Congratulated head due to gunshot, duolingo has shot out in ' + txt)
        return ('*the duolingo shoots '+[txt]+[' with a head*. Congratulations, you got a head from an human! Throw this head named '+[txt]+'. Thank you. Now then throw it! Hooray!!! We throwed into a into '+[txt]+' window!'])
    },
	kiss(txt){
		cmdcount++
		console.log('The bot kisses ' + txt + ' too much times! Yuck!')
        return ('*Bot kisses '+[txt]+'* Fuh! *splats on the ground* It\'s too sexy!')
    },
	fart(txt){
		cmdcount++
		console.log('Bot flutenances for fart to ' + txt + '! Ugh, it smells like a black toxicism!')
        return ('*Bot farts onto '+[txt]+'* FUCK! ITS TOO FUCKIN FARTY!')
    },
	hug(txt){
		cmdcount++
		console.log('Really? Bot hugged into ' + txt + '? It\'s so man!')
        return ('*hugs '+[txt]+'* Oh... Its very cute and embarrassing!')
    },
	ban(txt){
		cmdcount++
		console.log(txt + ' is banned. Just I kidding.')
        return ('{NAME} bans '+[txt]+'. Oh no! You are too admin abusive!')
    },
	mcdonalds(txt){
		cmdcount++
		console.log(txt + ' just went into McDonalds! YEAH HE WILL BE FAT LIKE A ONUTE!! >:)')
        return ([txt]+' just gone from MacDonalds! He said: OH MY GOD I GOT FAT I EATEN TOO MUCH FRENCH FRIES AND 100 CHEESEBURGERS PER DAY OOOOOOOOOOOH I GET... FUCKIN\' DIARRHEA! *poops on the toilet in one day*')
    },
	losky2(txt){
		cmdcount++
		console.log('Losky bitch 2 is posted.')
        return 'Loskys a bitch, she\'s a big fat bitch He\'s the biggest bitch in the whole wide world He a stupid bitch, if there ever was a bitch He\'s a bitch to all the boys and girls On Monday she\'s a bitch On Tuesday she\'s a bitch On Wednesday to Saturday, she\'s a bitch Then on Sunday, just to be different he\'s a super King Kamehameha biyotch! Come on! You all know the words! Have you ever met my friend Losky? He\'s the biggest bitch in the whole wide world He\'s a mean ol\' bitch, and she has stupid hair He\'s a bitch bitch bitch bitch bitch bitch bitch Bitch bitch bitch bitch bitch bitch bitch bitch He\'s a stupid bitch! (Whoa!) Losky\'s a bitch And she\'s such a dirty bitch! (Bitch!)'
    },
	rules(txt){
        return 'Bot includes the rules when you criticize them. RULES you will ALWAYS do: 1. Make a bot most easier. 2. Call the asshole or owo (it\'s recommended). 3. Make a fresh fake jokes. 4. Join more than fake people. RULES THINGS YOU WILL SHOULD NEVER DO: Don\'t hack this bot, it will be through onto a computer. You do NOT flood too many times pasting dozens of times otherwise, the bot consumes too much memory and leaks the website from Bonzi Owner\'s PC. Just you will NEVER give the code. Do NOT destroy this bot code or else it\'ll be broken and unrecoverable. If you don\'t ever to listen the rules, we have to give a temporarily bans from my sites and contacting on my owners to ban you, elsewhere you are such of a kiddie. Farewell.'
    },
	tool_count_reset(txt){
		cmdcount = 0;
		ytcount = 0;
		console.log('Progress count reset.')
        return 'Count progress has been reset.'
    },
	tool_count_modify(txt){
		cmdcount = txt;
		ytcount = txt;
		console.log('Count successfully changed into ' + txt)
        return ('Count changed into ' + [txt])
    },
	tool_count_plus(txt){
		cmdcount++
		ytcount++
		console.log('Progress count has been increased.')
        return 'Increasing count successfully.'
    },
	tool_count_minus(txt){
		cmdcount--
		ytcount--
		console.log('Progress count has been decreased.')
        return 'Decreasing count successfully.'
    },
	tool_talk_enable(txt){
		talkmode = true;
		console.log('Talkmode is enabled, turning true')
        return 'Echo command is enabled.'
    },
	tool_talk_disable(txt){
		talkmode = false;
		console.log('Talkmode is disabled, turning false')
        return 'Echo command is disabled.'
    },
	tool_skip_enable(txt){
		skipreload = true;
		console.log('Skip reload is enabled, turning true')
        return 'Skip command is enabled.'
    },
	tool_skip_disable(txt){
		skipreload = false;
		console.log('Skip reload is disabled, turning false')
        return 'Skip command is disabled.'
    },
	tool_bots_enable(txt){
		isBotsEnabled = true;
		console.log('Bots enabled, turning true')
        return 'Bot/Burn/Flood command are enabled.'
    },
	tool_bots_disable(txt){
		isBotsEnabled = false;
		console.log('Bots disabled, turning false')
        return 'Bot/Burn/Flood command are disabled.'
    },
	tool_name_enable(txt){
		isChNameEnabled = true;
		console.log('Name changing enabled, turning true')
        return 'Name-changing is enabled.'
    },
	tool_name_enable(txt){
		isChNameEnabled = false;
		console.log('Name changing disabled, turning false')
        return 'Name-changing is disabled.'
    },
	tool_spvoice_enable(txt){
		isVoiceChEnabled = true;
		console.log('Speed/Pitch voice are enabled, turning true')
        return 'Speed|Pitch commands are enabled.'
    },
	tool_spvoice_disable(txt){
		isVoiceChEnabled = false;
		console.log('Speed/Pitch voice are disabled, turning false')
        return 'Speed|Pitch commands are disabled.'
    },
	tool_help_enable(txt){
		isHelpEnabled = true;
		console.log('z!help command help enabled, turning true')
        return 'help command is enabled.'
    },
	tool_help_disable(txt){
		isHelpEnabled = false;
		console.log('z!help command help disabled, turning false')
        return 'help command is disabled.'
    },
	tool_reload_enable(txt){
		isReloadEnabled = true;
		console.log('Reload is enabled, turning true')
        return 'Reload command is now enabled.'
    },
	tool_reload_disable(txt){
		isReloadEnabled = false;
		console.log('Reload is disabled, turning true')
        return 'Reload command is now disabled.'
    },
	tool_youtube_enable(txt){
		isYoutube = true;
		console.log('YouTube links are enabled, turning true')
        return 'YouTube command is now enabled.'
    },
	tool_youtube_disable(txt){
		isYoutube = false;
		console.log('YouTube links are disabled, turning false')
        return 'YouTube command is now disabled.'
    },
	tool_joke_enable(txt){
		isJoke = true;
		console.log('Joke & Fact is enabled, turning true')
        return 'Joke and Fact commands are enabled.'
    },
	tool_joke_disable(txt){
		isJoke = false;
		console.log('Joke & Fact is disabled, turning false')
        return 'Joke and Fact commands are disabled.'
    },
	tool_generic_enable(txt){
		if(featuresEnabled==true){
		isHelpEnabled = true;
		isBotsEnabled = true;
		isFloodEnabled = true;
		isChNameEnabled = true;
		talkmode = true;
		isVoiceChEnabled = true;
		skipreload = true;
		isReloadEnabled = true;
		isJoke = true;
		isYoutube = true;
		console.log('All Command Limitations Enabled')
		console.log('----------------------------------------')
		console.log('-                                      -')
		console.log('-       SEMI-SAFE MODE ENABLED.        -')
		console.log('-                                      -')
		console.log('----------------------------------------')
        return 'Command generic all enabled.'
		} else {
		console.log('Command Limitation Failed to Enable. You are in AFK.')
		console.log('----------------------------------------')
		console.log('-                                      -')
		console.log('-       SEMI-SAFE MODE ENABLE FAILED.  -')
		console.log('-                                      -')
		console.log('----------------------------------------')
        return 'Failed to enable the generations.'
		}
    },
	tool_generic_disable(txt){
		isHelpEnabled = false;
		isBotsEnabled = false;
		isFloodEnabled = false;
		isChNameEnabled = false;
		talkmode = false;
		isVoiceChEnabled = false;
		skipreload = false;
		isReloadEnabled = false;
		isJoke = false;
		isYoutube = false;
		console.log('All Command Limitations Disabled')
		console.log('----------------------------------------')
		console.log('-                                      -')
		console.log('-       SEMI-SAFE MODE DISABLED.       -')
		console.log('-                                      -')
		console.log('----------------------------------------')
        return 'Command all generations are disabled.'
    },
	tool_generic_disable_force(txt){
		setInterval(function(){
		isHelpEnabled = false;
		isBotsEnabled = false;
		isFloodEnabled = false;
		isChNameEnabled = false;
		talkmode = false;
		isVoiceChEnabled = false;
		skipreload = false;
		isReloadEnabled = false;
		isJoke = false;
		isYoutube = false;
		featuresEnabled = false;
		}, 100);
		console.log('All Command Limitations Disabled Forcely')
		console.log('----------------------------------------')
		console.log('-                                      -')
		console.log('-   WE\'RE IN SAFE MODE. AFK ENABLED   -')
		console.log('-                                      -')
		console.log('----------------------------------------')
        return 'Command all generations are disabled as force. AFK enabled, reload disabled.'
		clearInterval(reloadhibit);
		clearTimeout(reloadhibit);
    },
	tool(txt){
        return 'Feature tool you are trying to activate/deactivate the bot permissions, and seeing. Access denied.'
    },
	tool_reload_remove(txt){
		clearInterval(reloadhibit);
		clearTimeout(reloadhibit);
		skipreload = false;
		isReloadEnabled = false;
		console.log('Removed auto-reload interval.\nREASON OF REMOVE:\n' + txt)
        return ('Removed auto-reload permission. It is now stays as permanent. Reason: ' + [txt])
    },
	tool_reload_start(txt){
		skipreload = false;
		isReloadEnabled = true;
		var reloadhibit = setInterval(function(){restartthefucking}, 600000); setInterval(function(){socket.emit('command', {list:['name','1']});console.log('Reloaded and cleared!')}, 599000); setInterval(function(){socket.emit('command', {list:['name','2']})}, 598000); setInterval(function(){socket.emit('command', {list:['name','3']})}, 597000); setInterval(function(){socket.emit('command', {list:['name','10 seconds.']})}, 590000); setInterval(function(){socket.emit('command', {list:['name','Reloading time!']})}, 540000); setTimeout(function(){talkmode = false; console.log('Reloading in 60 seconds...');skipreload = true;socket.emit('talk', {text:'Skip command is ready to use! Type the command: z!skip to skip this reload.'});console.warn('Warning: The client will restart after ten minutes in. Use z!skip to skip.')}, 540000);
		console.log('Added auto-reload interval.\nREASON OF START:\n' + txt)
        return ('Added auto-reload permission. It is now stays as 10-minute. Reason: ' + [txt])
    },
	tool_reload_reset(txt){
		skipreload = false;
		isReloadEnabled = false;
		clearInterval(reloadhibit);
		clearTimeout(reloadhibit);
		skipreload = false;
		isReloadEnabled = true;
		var reloadhibit = setInterval(function(){restartthefucking}, 600000); setInterval(function(){socket.emit('command', {list:['name','1']});console.log('Reloaded and cleared!')}, 599000); setInterval(function(){socket.emit('command', {list:['name','2']})}, 598000); setInterval(function(){socket.emit('command', {list:['name','3']})}, 597000); setInterval(function(){socket.emit('command', {list:['name','10 seconds.']})}, 590000); setInterval(function(){socket.emit('command', {list:['name','Reloading time!']})}, 540000); setTimeout(function(){talkmode = false; console.log('Reloading in 60 seconds...');skipreload = true;socket.emit('talk', {text:'Skip command is ready to use! Type the command: z!skip to skip this reload.'});console.warn('Warning: The client will restart after ten minutes in. Use z!skip to skip.')}, 540000);
		console.log('Restarted auto-reload interval.\nREASON OF RESET:\n' + txt)
        return ('Restarted auto-reload permission. Defaulted to 10 minutes. Reason: ' + [txt])
    },
	tool_reset(txt){
		socket.emit('command', {list:['name','z!help (FE)']})
		socket.emit('command', {list:['color','purple']})
		socket.emit('command', {list:['pitch','75']})
		socket.emit('command', {list:['speed','140']})
		var skipreload = false;
		var talkmode = true;
		var cmdcount = 0;
		var ytcount = 0;
		var isBotsEnabled = true;
		var isHelpEnabled = true;
		var isChNameEnabled = true;
		var isVoiceChEnabled = true;
		var isAlwaysBurned = false;
		var isFloodEnabled = false;
		var isNameDisabled = false;
		var isUltfloodEnabled = false;
		var isReloadEnabled = true;
		var isJoke = true;
		var isYoutube = true;
		var featuresEnabled = true;
		clearInterval(reloadhibit);
		clearTimeout(reloadhibit);
		var reloadhibit = setInterval(function(){restartthefucking}, 600000); setInterval(function(){socket.emit('command', {list:['name','1']});console.log('Reloaded and cleared!')}, 599000); setInterval(function(){socket.emit('command', {list:['name','2']})}, 598000); setInterval(function(){socket.emit('command', {list:['name','3']})}, 597000); setInterval(function(){socket.emit('command', {list:['name','10 seconds.']})}, 590000); setInterval(function(){socket.emit('command', {list:['name','Reloading time!']})}, 540000); setTimeout(function(){talkmode = false; console.log('Reloading in 60 seconds...');skipreload = true;socket.emit('talk', {text:'Skip command is ready to use! Type the command: z!skip to skip this reload.'});console.warn('Warning: The client will restart after ten minutes in. Use z!skip to skip.')}, 540000);
		console.log('ALL BOT SETTINGS ARE NOW DEFAULT.')
        return ('All settings have been reset.')
    },
	lists_list(txt){
		cmdcount++
		console.log('List of variables: ' + lists)
        return ('List of Variables: ' + [lists])
    },
	lists_add(txt){
		cmdcount++
		lists.push(" " + txt)
		console.log('Added ' + txt + ' into a list')
        return ('Added - ' + [txt])
    },
	lists_del(txt){
		cmdcount++
		lists.pop()
		console.log('Deleted an variable.')
        return ('Last variable has been deleted')
    },
	lists_sort(txt){
		cmdcount++
		lists.sort()
		console.log('All variables are now alphabetical order')
        return ('All variables are now alphabetical order')
    },
	lists_list_count(txt){
		cmdcount++
		console.log(lists.length + ' lists found')
        return ([lists.length] + " lists found.")
    },
	tool_kick(txt){
		if(txt==""){
			return 'Please enter the valuable ip address to kick a person from the server.'
		} else {
		cmdcount++
		console.log('Kicked ' + txt)
		socket.emit('command', {list:['kick',txt]})
        return ('Successfully kicked. Kicked IP is ' + txt)
		}
    },
	tool_ban(txt){
		if(txt==""){
			return 'Please enter the valuable ip address to ban a person from the server.'
		} else {
		cmdcount++
		console.log('Banned ' + txt)
		socket.emit('command', {list:['ban',txt]})
        return ('Successfully banned. Banned IP is ' + txt)
		}
    },
	tool_mute(txt){
		if(txt==""){
			return 'Please enter the valuable ip address to temporary mute a person from the server.'
		} else {
		cmdcount++
		console.log('Temporarily Muted ' + txt)
		socket.emit('command', {list:['mute',txt]})
        return ('Successfully muted. Muted IP is ' + txt)
		}
    },
	tool_grantadmin(txt){
		if(txt==""){
			return 'Please enter the valuable ip address to grant a person for admin from the server.'
		} else {
		cmdcount++
		console.log('Granted ' + txt + ' an admin')
		socket.emit('command', {list:['addadmin',txt]})
        return ('Successfully granted. Granted IP is ' + txt)
		}
    },
	tool_revokeadmin(txt){
		if(txt==""){
			return 'Please enter the valuable ip address to revoke a person for admin from the server.'
		} else {
		cmdcount++
		console.log('Granted ' + txt + ' an admin')
		socket.emit('command', {list:['removeadmin',txt]})
        return ('Successfully revoked. Revoked IP is ' + txt)
		}
    },
	tool_unmute(txt){
		if(txt==""){
			return 'Please enter the valuable ip address to unmute a person from the server.'
		} else {
		cmdcount++
		console.log('Unmuted ' + txt)
		socket.emit('command', {list:['unmute',txt]})
        return ('Successfully unmuted. IP ' + txt + ' has been unmuted.')
		}
    },
	tool_unban(txt){
		if(txt==""){
			return 'Please enter the valuable ip address to unban a person from the server.'
		} else {
		cmdcount++
		console.log('Unbanned ' + txt)
		socket.emit('command', {list:['unban',txt]})
        return ('Successfully unbanned. IP ' + txt + ' has been unbanned.')
		}
    },
	tool_banlist(txt){
		cmdcount++
		console.log('banlist: ' + banlist)
        return ('banlist: ' + [banlist])
    },
	tool_kicklist(txt){
		cmdcount++
		console.log('kicklist: ' + kicklist)
        return ('kicklist: ' + [kicklist])
    },
	tool_mutelist(txt){
		cmdcount++
		console.log('mutelist: ' + mutelist)
        return ('mutelist: ' + [mutelist])
    },
	tool_adminlist(txt){
		cmdcount++
		console.log('granted admin list: ' + adminlist)
        return ('Granted Admin list: ' + [adminlist])
    },
	tool_bankrupt(txt){
		cmdcount++
		var jobCooldown = false;
	jobIsDeposit = false;
	jobSluts = 0;
	jobWorks = 0;
	haveJob = false;
	bankDepositCount = 0;
	banktokenBank = 0;
	banktokenBankLife = 0;
	banktokens = 0;
	banktokensUnz = 0;
		console.log('bankruptcy removed')
        return ('removed bank')
    },
	bank_new(txt){
		if(haveJob==true){
			console.log('You already have a job. Start decompiling money!')
        return 'You already started the job.'
		} else {
			haveJob = true;
			console.log('Joined an bank.')
			return 'You have a empty bank. Start the job and earn more BW coins!'
		}
	},
	bank(txt){
		console.log('Welcome to the Bonzi bank! On this command for bank, you can earn tokens by any person has a work, only one can work and put in cooldown to work another! Try now! To read this bank, do z!bank_help')
        return 'Welcome to the Bonzi bank! On this command for bank, you can earn tokens by any person has a work, only one can work and put in cooldown to work another! Try now! To read this bank, do z!bank_help'
	},
	bank_help(txt){
		console.log('Help? Okay I got of them. Just try z!bank_new to get a new bank. And basically if you want to work within money, just do z!bank_work or z!bank_slut to make money and your money lifetime will be. To deposit tokens into bank, do z!bank_dep to deposit all tokens.')
        return 'Help? Okay I got of them. Just try z!bank_new to get a new bank. And basically if you want to work within money, just do z!bank_work or z!bank_slut to make money and your money lifetime will be. To deposit tokens into bank, do z!bank_dep to deposit all tokens.'
	},
	bank_work(txt){
		if(jobCooldown==false){
		if(haveJob==true){
		setTimeout(function(){jobCooldown = false}, 10000)
			for (let i = 0; i < Math.floor(Math.random()*500); i++) {banktokensUnz++;banktokens++;banktokenBankLife = banktokens}
			console.log('You got a job earning to ' + banktokensUnz + ' tokens.')
        socket.emit('talk', {text:'You got ' + banktokensUnz + ' BW coin tokens.'})
		banktokensUnz = 0;
		jobCooldown = true;
		jobIsDeposit = true;
		jobWorks++;
		} else {
			console.log('You need to have a bank first.')
			return 'Please get a job doing z!bank_new.'
		}
		} else { return 'On cooldown! Please him rest of the job for 10 seconds.' }
	},
	work(txt){
		if(jobCooldown==false){
		if(haveJob==true){
		setTimeout(function(){jobCooldown = false}, 10000)
			for (let i = 0; i < Math.floor(Math.random()*500); i++) {banktokensUnz++;banktokens++;banktokenBankLife = banktokens}
			console.log('You got a job earning to ' + banktokensUnz + ' tokens.')
        socket.emit('talk', {text:'You got ' + banktokensUnz + ' BW coin tokens.'})
		banktokensUnz = 0;
		jobCooldown = true;
		jobIsDeposit = true;
		jobWorks++;
		} else {
			console.log('You need to have a bank first.')
			return 'Please get a job doing z!bank_new.'
		}
		} else { return 'On cooldown! Please him rest of the job for 10 seconds.' }
	},
	bank_slut(txt){
		if(jobCooldown==false){
		if(haveJob==true){
			for (let i = 0; i < Math.floor(Math.random()*2000); i++) {banktokensUnz++;banktokens++;banktokenBankLife = banktokens}
			console.log('You got a job earning to ' + banktokensUnz + ' tokens with slut to clear his benefits.')
        socket.emit('talk', {text:'You got ' + banktokensUnz + ' BW coin tokens.'})
		banktokensUnz = 0;
		jobCooldown = true;
		jobIsDeposit = true;
		setTimeout(function(){jobCooldown = false}, 10000)
		jobSluts++;
		} else {
			console.log('You need to have a bank first.')
			return 'Please get a job doing z!bank_new.'
		}
		} else { return 'On cooldown! Please him rest of the job for 10 seconds.' }
	},
	slut(txt){
		if(jobCooldown==false){
		if(haveJob==true){
			for (let i = 0; i < Math.floor(Math.random()*2000); i++) {banktokensUnz++;banktokens++;banktokenBankLife = banktokens}
			console.log('You got a job earning to ' + banktokensUnz + ' tokens with slut to clear his benefits.')
        socket.emit('talk', {text:'You got ' + banktokensUnz + ' BW coin tokens.'})
		banktokensUnz = 0;
		jobCooldown = true;
		jobIsDeposit = true;
		setTimeout(function(){jobCooldown = false}, 10000)
		jobSluts++;
		} else {
			console.log('You need to have a bank first.')
			return 'Please get a job doing z!bank_new.'
		}
		} else { return 'On cooldown! Please him rest of the job for 10 seconds.' }
	},
	bank_dep(txt){
		if(haveJob==true){
		if(jobIsDeposit==true){
			console.log('Crawled ' + banktokens + ' BW coin tokens to our bank.')
			socket.emit('talk', {text:'Deposited ' + banktokens + ' BW coin tokens to our bank.'})
			jobIsDeposit = false;
		bankDepositCount++;
		banktokenBank = banktokens;
		banktokens = 0;
		} else {
			console.log('You need to deposit when you have a work.')
			return 'You need to deposit when you have a work. Get a work with z!bank_work for small cash, or z!bank_slut for bigger.'
		}
		} else { return 'Please get a job doing z!bank_new.' }
	},
	bank_deposit(txt){
		if(haveJob==true){
		if(jobIsDeposit==true){
			console.log('Crawled ' + banktokens + ' BW coin tokens to our bank.')
			socket.emit('talk', {text:'Deposited ' + banktokens + ' BW coin tokens to our bank.'})
			jobIsDeposit = false;
		bankDepositCount++;
		banktokenBank = banktokens;
		banktokens = 0;
		} else {
			console.log('You need to deposit when you have a work.')
			return 'You need to deposit when you have a work. Get a work with z!bank_work for small cash, or z!bank_slut for bigger.'
		}
		} else { return 'Please get a job doing z!bank_new.' }
	},
	dep(txt){
		if(haveJob==true){
		if(jobIsDeposit==true){
			console.log('Crawled ' + banktokens + ' BW coin tokens to our bank.')
			socket.emit('talk', {text:'Deposited ' + banktokens + ' BW coin tokens to our bank.'})
			jobIsDeposit = false;
		bankDepositCount++;
		banktokenBank = banktokens;
		banktokens = 0;
		} else {
			console.log('You need to deposit when you have a work.')
			return 'You need to deposit when you have a work. Get a work with z!bank_work for small cash, or z!bank_slut for bigger.'
		}
		} else { return 'Please get a job doing z!bank_new.' }
	},
	deposit(txt){
		if(haveJob==true){
		if(jobIsDeposit==true){
			console.log('Crawled ' + banktokens + ' BW coin tokens to our bank.')
			socket.emit('talk', {text:'Deposited ' + banktokens + ' BW coin tokens to our bank.'})
			jobIsDeposit = false;
		bankDepositCount++;
		banktokenBank = banktokens;
		banktokens = 0;
		} else {
			console.log('You need to deposit when you have a work.')
			return 'You need to deposit when you have a work. Get a work with z!bank_work for small cash, or z!bank_slut for bigger.'
		}
		} else { return 'Please get a job doing z!bank_new.' }
	},
	bank_stats(txt){
		if(haveJob==true){
			console.log('Bank Stats:\nRecent Tokens: ' + banktokens + '\nLifetime tokens: ' + banktokenBankLife + '\nYour bank: ' + banktokenBank + '\nTimes deposited: ' + bankDepositCount + '\nTimes worked: ' + jobWorks + '\nTimes sluted: ' + jobSluts)
        return ('Bank Stats:<br>Recent Tokens: ' + [banktokens] + '<br>Lifetime tokens: ' + [banktokenBankLife] + '<br>Your bank: ' + [banktokenBank] + '<br>Times deposited: ' + [bankDepositCount] + '<br>Times worked: ' + [jobWorks] + '<br>Times sluted: ' + [jobSluts])
		} else {
			return 'Please get a job doing z!bank_new, to view the stats.'
		}
	},
	bank_add(txt){
		if(haveJob==true){
		if(banktokenBank > 10000){
			for (let i = 0; i < Math.floor(Math.random()*5000); i++) {banktokens++;banktokenBank = banktokens++}
			console.log('Added tokens into random.')
        return ('Added tokens for random.')
		} else {
			return 'You need to have least for 10,000 BW coin tokens in the end to unlock this feature.'
		}
		} else { return 'Please get a job doing z!bank_new.'}
	},
	bank_bypass(txt){
		if(haveJob==true){
		if(banktokenBank > 10000){
			jobCooldown = false;
			console.log('Bypassed.')
        return ('Bypassed the job cooldown.')
		} else {
			return 'You need to have least for 10,000 BW coin tokens in the end to unlock this feature.'
		}
		} else { return 'Please get a job doing z!bank_new.'}
	},
	eat(txt){
		if(banktokenBank > 100){
		for (let i = 0; i < 100; i++) {banktokenBank--}
		setTimeout(function(){socket.emit('command', {list:['banana']})}, 5000)
		console.log('Nom nom. Bananas.')
        return 'Yummy!'
		} else { return 'You need earn tokens to order a banana!' }
	},
	ics(txt){
		cmdcount++
		console.log('ICS creepypasta posted.')
        return 'this creepypasta has been removed due to middle finger. sorry man!'
    }
}
socket.on('talk',function(data){
    var text = data.text
    if(text.startsWith('z!')){
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
	console.log('Disconnected from the server. Restarting')
	setTimeout(function(){maggot}, 1000)
}
}, 3000);