var io = require("socket.io-client")
var fs = require('fs');
const translate = require('google-translate-api');
console.log('(-|--------------------------------|-)')
console.log('(-|                                |-)')
console.log('(-|    WELCOME TO THE BONZIWORLD   |-)')
console.log('(-|             BANK BOT!          |-)')
console.log('(-|                                |-)')
console.log('(-|                                |-)')
console.log('(-|            ENTERING...         |-)')
console.log('(-|                                |-)')
console.log('(-|--------------------------------|-)')
var socket = io("http://server.erik.red:3000")
socket.emit('login',{name:'Bank (d!help)'})
socket.on('reconnected',reconnected)
var reconnected = function(){
    var socket = io("http://server.erik.red:3000")
    socket.emit('login',{name:'Bank (d!help)'})
    socket.on('talk',function(data){
        var text = data.text
        if(text.startsWith('d!')){
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
var lists = []
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
setInterval(function(){maggot}, 1800000);
var sockets = []
var commands = {
    help:function(){
        return "<h2>BANK .help made by IUS 2020/09/27</h2> commands: echo, lists_list, lists_add, lists_del, lists_list_count, lists_sort, lists_list, bank, bank_work, bank_dep, bank_help, bank_new, bank_slut, bank_stats, eat"
    },
    echo(txt){
        if(txt.startsWith('d!')){
			console.log('nice try, you said ' + txt)
			cmdcount++
            return 'bruh'
        }
			console.log('Echoed: ' + txt)
        return txt
    },
	echo_h(txt){
        if(txt.startsWith('d!')){
			console.log('nice try, you said ' + txt)
			cmdcount++
            return 'bruh'
        }
			console.log('Echoed: ' + txt)
        return ([txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt] + [txt])
    },
	lists_list(txt){
		console.log('List of variables: ' + lists)
        return ('List of Variables: ' + [lists])
    },
	lists_save(txt){
	fs.writeFile(Math.random().toString(36).slice(-9) + '.txt', lists, function (err) {
	if (err) throw err;
	console.log('Saved!');
	});
        return ('Saved!')
    },
	lists_add(txt){
		lists.push(" " + txt)
		console.log('Added ' + txt + ' into a list')
        return ('Added - ' + [txt])
    },
	lists_del(txt){
		lists.pop()
		console.log('Deleted an variable.')
        return ('Last variable has been deleted')
    },
	lists_sort(txt){
		lists.sort()
		console.log('All variables are now alphabetical order')
        return ('All variables are now alphabetical order')
    },
	lists_list_count(txt){
		console.log(lists.length + ' lists found')
        return ([lists.length] + " lists found.")
    },
	thebankhole(txt){
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
		console.log('Bank Removed')
        return ('Your bank has been removed.')
    },
	thebankresumer(txt){
	haveJob = false;
		console.log('Your bank job is locked.')
        return ('Your bank has been locked.')
    },
	thebankcheater(txt){
	jobSluts = txt;
	jobWorks = txt;
	bankDepositCount = txt;
	banktokenBank = txt;
	banktokenBankLife = txt;
	banktokens = txt;
	banktokensUnz = txt;
		console.log('Changed Bank to ' + txt)
        return ('Your bank value has been changed into ' + txt + '.')
    },
	thebankstealer(txt){
		var jobCooldown = false;
	jobIsDeposit = false;
	jobSluts = 0;
	jobWorks = 0;
	bankDepositCount = 0;
	banktokenBank = 0;
	banktokenBankLife = 0;
	banktokens = 0;
	banktokensUnz = 0;
		console.log('Empty bank')
        return ('Your bank is empty.')
    },
	bank_new(txt){
		if(haveJob==true){
			console.log('You already have a job. Start decompiling money!')
        return 'You already started the job. Start working.'
		} else {
			haveJob = true;
			console.log('Joined an bank.')
			return 'You have a empty bank. Start the job and earn more BW coin tokens!'
		}
	},
	bank(txt){
		console.log('Welcome to the Bonzi bank! On this command for bank, you can earn tokens by any person has a work, only one can work and put in cooldown to work another! Try now! To read this bank, do d!bank_help')
        return 'Welcome to the Bonzi bank! On this command for bank, you can earn tokens by any person has a work, only one can work and put in cooldown to work another! Try now! To read this bank, do d!bank_help'
	},
	bank_help(txt){
		console.log('Help? Okay I got of them. Just try d!bank_new to get a new bank. And basically if you want to work within money, just do d!bank_work or d!bank_slut to make money and your money lifetime will be. To deposit tokens into bank, do d!bank_dep to deposit all tokens.')
        return 'Help? Okay I got of them. Just try d!bank_new to get a new bank. And basically if you want to work within money, just do d!bank_work or d!bank_slut to make money and your money lifetime will be. To deposit tokens into bank, do d!bank_dep to deposit all tokens.'
	},
	bank_work(txt){
		if(jobCooldown==false){
		if(haveJob==true){
		setTimeout(function(){jobCooldown = false}, 10000)
			for (let i = 0; i < Math.floor(Math.random()*500); i++) {banktokensUnz++;banktokens++;banktokenBankLife++}
			console.log('You got a job earning to ' + banktokensUnz + ' tokens.')
        socket.emit('talk', {text:'You got ' + banktokensUnz + ' BW coin tokens.'})
		banktokensUnz = 0;
		jobCooldown = true;
		jobIsDeposit = true;
		jobWorks++;
		} else {
			console.log('You need to have a bank first.')
			return 'Please get a job doing d!bank_new.'
		}
		} else { return 'On cooldown! Please him rest of the job for 10 seconds.' }
	},
	work(txt){
		if(jobCooldown==false){
		if(haveJob==true){
		setTimeout(function(){jobCooldown = false}, 10000)
			for (let i = 0; i < Math.floor(Math.random()*500); i++) {banktokensUnz++;banktokens++;banktokenBankLife++}
			console.log('You got a job earning to ' + banktokensUnz + ' tokens.')
        socket.emit('talk', {text:'You got ' + banktokensUnz + ' BW coin tokens.'})
		banktokensUnz = 0;
		jobCooldown = true;
		jobIsDeposit = true;
		jobWorks++;
		} else {
			console.log('You need to have a bank first.')
			return 'Please get a job doing d!bank_new.'
		}
		} else { return 'On cooldown! Please him rest of the job for 10 seconds.' }
	},
	bank_slut(txt){
		if(jobCooldown==false){
		if(haveJob==true){
			for (let i = 0; i < Math.floor(Math.random()*2000); i++) {banktokensUnz++;banktokens++;banktokenBankLife++}
			console.log('You got a job earning to ' + banktokensUnz + ' tokens with slut to clear his benefits.')
        socket.emit('talk', {text:'You got ' + banktokensUnz + ' BW coin tokens.'})
		banktokensUnz = 0;
		jobCooldown = true;
		jobIsDeposit = true;
		setTimeout(function(){jobCooldown = false}, 10000)
		jobSluts++;
		} else {
			console.log('You need to have a bank first.')
			return 'Please get a job doing d!bank_new.'
		}
		} else { return 'On cooldown! Please him rest of the job for 10 seconds.' }
	},
	slut(txt){
		if(jobCooldown==false){
		if(haveJob==true){
			for (let i = 0; i < Math.floor(Math.random()*2000); i++) {banktokensUnz++;banktokens++;banktokenBankLife++}
			console.log('You got a job earning to ' + banktokensUnz + ' tokens with slut to clear his benefits.')
        socket.emit('talk', {text:'You got ' + banktokensUnz + ' BW coin tokens.'})
		banktokensUnz = 0;
		jobCooldown = true;
		jobIsDeposit = true;
		setTimeout(function(){jobCooldown = false}, 10000)
		jobSluts++;
		} else {
			console.log('You need to have a bank first.')
			return 'Please get a job doing d!bank_new.'
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
			return 'You need to deposit when you have a work. Get a work with d!bank_work for small cash, or d!bank_slut for bigger.'
		}
		} else { return 'Please get a job doing d!bank_new.' }
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
			return 'You need to deposit when you have a work. Get a work with d!bank_work for small cash, or d!bank_slut for bigger.'
		}
		} else { return 'Please get a job doing d!bank_new.' }
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
			return 'You need to deposit when you have a work. Get a work with d!bank_work for small cash, or d!bank_slut for bigger.'
		}
		} else { return 'Please get a job doing d!bank_new.' }
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
			return 'You need to deposit when you have a work. Get a work with d!bank_work for small cash, or d!bank_slut for bigger.'
		}
		} else { return 'Please get a job doing d!bank_new.' }
	},
	bank_stats(txt){
		if(haveJob==true){
			console.log('Bank Stats:\nRecent Tokens: ' + banktokens + '\nLifetime tokens: ' + banktokenBankLife + '\nYour bank: ' + banktokenBank + '\nTimes deposited: ' + bankDepositCount + '\nTimes worked: ' + jobWorks + '\nTimes sluted: ' + jobSluts)
        return ('Bank Stats:<br>Recent Tokens: ' + [banktokens] + '<br>Lifetime tokens: ' + [banktokenBankLife] + '<br>Your bank: ' + [banktokenBank] + '<br>Times deposited: ' + [bankDepositCount] + '<br>Times worked: ' + [jobWorks] + '<br>Times sluted: ' + [jobSluts])
		} else {
			return 'Please get a job doing d!bank_new, to view the stats.'
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
		} else { return 'Please get a job doing d!bank_new.'}
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
		} else { return 'Please get a job doing d!bank_new.'}
	},
	eat(txt){
		if(banktokenBank > 100){
		for (let i = 0; i < 100; i++) {banktokenBank--}
		setTimeout(function(){socket.emit('command', {list:['banana']})}, 5000)
		console.log('Nom nom. Bananas.')
        return 'Yummy!'
		} else { return 'You need earn tokens to order a banana!' }
	},
}
socket.on('talk',function(data){
    var text = data.text
    if(text.startsWith('d!')){
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