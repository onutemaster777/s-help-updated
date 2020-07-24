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
var socket = io("http://bonzi.erik.red:3000")
socket.emit('login',{name:'s!help (FE)'})
socket.on('reconnected',reconnected)
var reconnected = function(){
    var socket = io("http://bonzi.erik.red:3000")
    socket.emit('login',{name:'s!help (FE)'})
    socket.on('talk',function(data){
        var text = data.text
        if(text.startsWith('s!')){
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
var reloadhibit = setInterval(function(){restartthefucking}, 600000); setInterval(function(){socket.emit('command', {list:['name','1']});console.log('Reloaded and cleared!')}, 599000); setInterval(function(){socket.emit('command', {list:['name','2']})}, 598000); setInterval(function(){socket.emit('command', {list:['name','3']})}, 597000); setInterval(function(){socket.emit('command', {list:['name','10 seconds.']})}, 590000); setInterval(function(){socket.emit('command', {list:['name','Reloading time!']})}, 540000); setTimeout(function(){talkmode = false; console.log('Reloading in 60 seconds...');skipreload = true;socket.emit('talk', {text:'Skip command is ready to use! Type the command: s!skip to skip this reload.'});console.warn('Warning: The client will restart after ten minutes in. Use s!skip to skip.')}, 540000);
	socket.emit('command', {list:['color','purple']})
	socket.emit('command', {list:['pope']})
	socket.emit('command', {list:['pitch','75']})
	socket.emit('command', {list:['speed','140']})
var cool = false;
var reloadit;
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
var sockets = []
var commands = {
    help:function(){
		if(isHelpEnabled==true){
		console.log('Sent an help')
		cmdcount++
        return "<h2>s!help, a publisher of FE.</h2><h3>Commands:</h3>s!help, s!echo (talk, say) [text], s!join [user], s!join_behh [user], s!join_behh_big [user], s!join_spam_dis [user], s!burn, s!drunk [text], s!mock [text], s!clickbait [text], s!lmao, s!losky, s!swag, s!reload, s!rules, s!ics, s!gen_num, s!gen_str, s!gen_hex, s!ver, s!kiddie [str], s!nigger (s!nigga) [str], s!poop, s!sad, s!clown, s!pope, s!color [str], s!asshole [str], s!owo [str], s!speed [str], s!pitch [str], s!yt [url], s!name [str], s!despacito, s!ukr, s!skype, s!bruh, s!river, s!robotdance, s!tex, s!bruh, s!rickroll, s!creeper, s!sing, s!mute [str], s!poop [str], s!duolingo [str], s!skip (reload only), s!features, s!joke, s!fact"
		} else {
			console.log('Could not send the help')
			return 'Unable to show the help. A operator has disabled the command to prevent a execution.'
		}
    },
    echo(txt){
        if(txt.startsWith('s!')){
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
        if(txt.startsWith('s!')){
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
        if(txt.startsWith('s!')){
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
            var sock = io("http://bonzi.erik.red:3000")
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
        var sock = io("http://bonzi.erik.red:3000")
            sock.emit('login',{name:txt})
			setInterval(function(){sock.emit('talk', {text:'behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh '})}, 150)
            sockets.push(sock)
			} else { console.log('Join: You do not have a permission for behh.')
			return 'You don\'t have a permission to use this command.'
			}
        },
	join_behh_big(txt){
		if(isBotsEnabled==true){
		cmdcount++
		console.log('VERY LOW LEAK Created bot joiner behh as "' + txt + '"')
		let str = ''

		for (let i = 0; i < 10; i++) {
			setTimeout(function(){
        var sock = io("http://bonzi.erik.red:3000")
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
        var sock = io("http://bonzi.erik.red:3000")
            sock.emit('login',{name:txt})
			setInterval(function(){sock.disconnect();}, Math.random()*15000)
            sockets.push(sock)
		}, Math.random()*50000)}
		} else { console.log('Join: You do not have a permission.')
			return 'You don\'t have a permission to use this command.'
			}
        },
	fans(txt){
		if(isBotsEnabled==true){
		cmdcount++
		console.log('4 fans created\n1. Nayje123\n2. ics\n3. itzchris\n4. onute')
        var sock = io("http://bonzi.erik.red:3000")
            sock.emit('login',{name:'Nayje123'})
			sock.emit('command', {list:['color','blue']})
            sockets.push(sock)
			var sock = io("http://bonzi.erik.red:3000")
            sock.emit('login',{name:'itzcrazyscout'})
			sock.emit('command', {list:['color','green']})
            sockets.push(sock)
			var sock = io("http://bonzi.erik.red:3000")
            sock.emit('login',{name:'itzchris'})
			sock.emit('command', {list:['color','purple']})
            sockets.push(sock)
			var sock = io("http://bonzi.erik.red:3000")
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
        var sock = io("http://bonzi.erik.red:3000")
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
        setInterval(function(){var sock = io("http://bonzi.erik.red:3000");sock.emit('login',{name:txt});sockets.push(sock)}, 1000)
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
        setInterval(function(){var sock = io("http://bonzi.erik.red:3000");sock.emit('login',{name:txt});sockets.push(sock)}, 250)
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
		socket.emit('talk', {text:'Always Burn is on. It\'ll be permanent after this one, but it will not be deactivated. <hr>If you want to stop this auto-burn, type this command: "s!reload" and then "s!skip" to stop a auto-burn.'})
        setInterval(function(){sockets.map(n=>{
            n.disconnect();
        })
        sockets = []}, 1000)
		} else { console.log('burn: feature disabled')
			return '"s!burn_always" feature is disabled.'
			}
    },
    drunk(txt){
		cmdcount++
        if(txt.startsWith('s!')){
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
        if(txt.startsWith('s!')){
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
		console.log('Version V8 created by BonziWORLD FE user.')
        return 'Version V8 created by and ported by BonziWORLD FE. Useless for Erik, Revived, BonziWORLD 2, BonziWORLD FE and GodWORLD websites. Can you give me pope it was a pro coding; go to http://78.63.40.199:8080 for my website (site will put in demo in 5 minutes, because they are full destroying, and ask the quiz to unlock the full website without any limitations.)'
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
        return ([txt]+['. I sm very sorry!'])
    },
	notepad(txt){
		cmdcount++
		console.log('Notepad sent:\n"' + txt + '"')
        return ('Sent into a console.')
    },
	google(txt){
		if(txt==""){
			return 'Enter the google text to search'
		} else {
		cmdcount++
		console.log('https://www.google.com/search?q=' + txt)
        return ('Google Link: https://www.google.com/search?q=' + [txt])
		}
    },
	ddg(txt){
		if(txt==""){
			return 'Enter the duckduckgo text to search'
		} else {
		cmdcount++
		console.log('https://duckduckgo.com/?q=' + txt)
        return ('DuckDuckGo Link: https://duckduckgo.com/?q=' + [txt])
		}
    },
	bing(txt){
		if(txt==""){
			return 'Enter the bing text to search'
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
	aeiou(txt){
		if(txt==""){
			return 'Enter the text, to get the speech.'
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
			console('Sent a help 2')
        return 'help page 2 of 2: s!notepad_alt [text], s!notepad [text], s!google [str], s!bing [str], s!ddg [str], s!website [url], s!aeiou [text], s!sorry [str]'
		} else {
			console.log('Could not send the help')
			return 'Unable to show the help. A operator has disabled the command to prevent a execution.'
		}
    },
	duolingo(txt){
		cmdcount++
		console.log('Congratulated head due to shot. Duolingo has shot in ' + txt)
        return ('*duolingo shoots '+[txt]+[' with a head* Congratulations you got a head! Throw this head named '+[txt]+'. Thank you.'])
    },
	losky2(txt){
		cmdcount++
		console.log('Losky bitch 2 is posted.')
        return 'Loskys a bitch, she\'s a big fat bitch He\'s the biggest bitch in the whole wide world He a stupid bitch, if there ever was a bitch He\'s a bitch to all the boys and girls On Monday she\'s a bitch On Tuesday she\'s a bitch On Wednesday to Saturday, she\'s a bitch Then on Sunday, just to be different he\'s a super King Kamehameha biyotch! Come on! You all know the words! Have you ever met my friend Losky? He\'s the biggest bitch in the whole wide world He\'s a mean ol\' bitch, and she has stupid hair He\'s a bitch bitch bitch bitch bitch bitch bitch Bitch bitch bitch bitch bitch bitch bitch bitch He\'s a stupid bitch! (Whoa!) Losky\'s a bitch And she\'s such a dirty bitch! (Bitch!)'
    },
	rules(txt){
        return 'bot includes the rules when you criticize them. RULES you will ALWAYS do: 1. Make a bot most easier. 2. Call the asshole or owo (it\'s recommended). 3. Make a fresh fake jokes. 4. Join more than fake people. RULES THINGS YOU WILL SHOULD NEVER DO: Don\'t hack this bot, it will be through onto a computer. You do NOT flood too many times pasting dozens of times otherwise, the bot consumes too much memory and leaks the website from Bonzi Owner\'s PC. Just you will NEVER give the code. Do NOT destroy this bot code or else it\'ll be broken and unrecoverable. If you don\'t ever to listen the rules, we have to give a temporarily bans from my sites and contacting on my owners to ban you, elsewhere you are such of a kiddie. Farewell.'
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
		console.log('s!help command help enabled, turning true')
        return 'help command is enabled.'
    },
	tool_help_disable(txt){
		isHelpEnabled = false;
		console.log('s!help command help disabled, turning false')
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
		var reloadhibit = setInterval(function(){restartthefucking}, 600000); setInterval(function(){socket.emit('command', {list:['name','1']});console.log('Reloaded and cleared!')}, 599000); setInterval(function(){socket.emit('command', {list:['name','2']})}, 598000); setInterval(function(){socket.emit('command', {list:['name','3']})}, 597000); setInterval(function(){socket.emit('command', {list:['name','10 seconds.']})}, 590000); setInterval(function(){socket.emit('command', {list:['name','Reloading time!']})}, 540000); setTimeout(function(){talkmode = false; console.log('Reloading in 60 seconds...');skipreload = true;socket.emit('talk', {text:'Skip command is ready to use! Type the command: s!skip to skip this reload.'});console.warn('Warning: The client will restart after ten minutes in. Use s!skip to skip.')}, 540000);
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
		var reloadhibit = setInterval(function(){restartthefucking}, 600000); setInterval(function(){socket.emit('command', {list:['name','1']});console.log('Reloaded and cleared!')}, 599000); setInterval(function(){socket.emit('command', {list:['name','2']})}, 598000); setInterval(function(){socket.emit('command', {list:['name','3']})}, 597000); setInterval(function(){socket.emit('command', {list:['name','10 seconds.']})}, 590000); setInterval(function(){socket.emit('command', {list:['name','Reloading time!']})}, 540000); setTimeout(function(){talkmode = false; console.log('Reloading in 60 seconds...');skipreload = true;socket.emit('talk', {text:'Skip command is ready to use! Type the command: s!skip to skip this reload.'});console.warn('Warning: The client will restart after ten minutes in. Use s!skip to skip.')}, 540000);
		console.log('Restarted auto-reload interval.\nREASON OF RESET:\n' + txt)
        return ('Restarted auto-reload permission. Defaulted to 10 minutes. Reason: ' + [txt])
    },
	tool_reset(txt){
		socket.emit('command', {list:['name','s!help (FE)']})
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
		var reloadhibit = setInterval(function(){restartthefucking}, 600000); setInterval(function(){socket.emit('command', {list:['name','1']});console.log('Reloaded and cleared!')}, 599000); setInterval(function(){socket.emit('command', {list:['name','2']})}, 598000); setInterval(function(){socket.emit('command', {list:['name','3']})}, 597000); setInterval(function(){socket.emit('command', {list:['name','10 seconds.']})}, 590000); setInterval(function(){socket.emit('command', {list:['name','Reloading time!']})}, 540000); setTimeout(function(){talkmode = false; console.log('Reloading in 60 seconds...');skipreload = true;socket.emit('talk', {text:'Skip command is ready to use! Type the command: s!skip to skip this reload.'});console.warn('Warning: The client will restart after ten minutes in. Use s!skip to skip.')}, 540000);
		console.log('ALL BOT SETTINGS ARE NOW DEFAULT.')
        return ('All settings have been reset.')
    },
	ics(txt){
		cmdcount++
		console.log('ICS creepypasta posted.')
        return 'itzcrazyscout is a related person who live in United States of America, so I hate him so much, why? Because she\'s a predator and hypocriticizer. Do you know what? I\'ll get the revenge on ICS when worst you have been ever done! So fuck u. Nigga.'
    }
}
socket.on('talk',function(data){
    var text = data.text
    if(text.startsWith('s!')){
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