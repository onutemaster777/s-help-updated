var io = require("socket.io-client")
var socket = io("http://localhost:3000") // You can change the link.
socket.emit('login',{name:'ZANDER MOMENT'})
socket.emit('command',{list:['color','purple']})
var wtf = ['Geri1940 is a sexual harasser confirmed.','HELLO GUYS YOUR FAVORITE TROLLER IS HERE','ZANDER MOMENT','HEY YOU IDIOTS IT\'S TIME FOR YOUR FAVORITE ZANDER MOMENTUMS','SUB TO LOSKY NOW','BonziWORLD Weather will now show the weather status in this server\'s Location: It is currently 1000 degrees celcius.','install cat gamer1kill now','hah hah 2000 fps emulator go bhhhhhhhh','fuck off','Your favorite bonzibuddy fan will post inflation videos and troll other users for you!'] // You can add your quotes here.
setTimeout(function()
{
	socket.emit('talk',{text:wtf[Math.floor(Math.random()*wtf.length)]})
},1000);
var fuckervideos = ['2H7fL_sbExI'] // Put your videos here without the "https://www.youtube.com/watch?v=" part.

setTimeout(function(){socket.emit('command',{list:['youtube',fuckervideos[Math.floor(Math.random()*fuckervideos.length)]]}); console.log("initializing fuckervideo #0")},8000);
var beggarness = ['lol you\'re so funny man! i like your videos. not! hahaha','I SAID INSTALL BONZIKILL RIGHT NOW','i like it that my source code actually makes me post \'fuckervideos\'','want some blueberries? i sure do','HEY YOU IDIOTS IT\'S TIME FOR ANOTHER VIDEO','I SAID INSTALL CAT GAMER1 KILL NOW!','hello fuckers','DON\'T YOU GUYS KNOW THAT GERI IS A SEXUAL HARRASSER?','anonymouses','Dog Gamer2','Dog!','Go play that sonic game on android that you kill the incredibles.','lololololo','Lol im so funny how do i do it?']
setTimeout(function(){socket.emit('talk',{text:beggarness[Math.floor(Math.random()*fuckervideos.length)]}); console.log("initializing fuckervideo #1")},13000);
setTimeout(function(){socket.emit('command',{list:['youtube',fuckervideos[Math.floor(Math.random()*fuckervideos.length)]]}); console.log("posting fuckervideo")},17000);
setTimeout(function(){socket.emit('talk',{text:beggarness[Math.floor(Math.random()*fuckervideos.length)]}); console.log("initializing fuckervideos #2")},28000);
setTimeout(function(){socket.emit('command',{list:['youtube',fuckervideos[Math.floor(Math.random()*fuckervideos.length)]]});  console.log("posting fuckervideo")},35000);
setTimeout(function(){socket.emit('talk',{text:beggarness[Math.floor(Math.random()*fuckervideos.length)]}); console.log("initializing fuckervideos #3")},48000);
setTimeout(function(){socket.emit('command',{list:['youtube',fuckervideos[Math.floor(Math.random()*fuckervideos.length)]]});  console.log("posting fuckervideo")},55000);
setTimeout(function(){socket.emit('talk',{text:beggarness[Math.floor(Math.random()*fuckervideos.length)]}); console.log("initializing fuckervideos #4")},68000);
setTimeout(function(){socket.emit('command',{list:['youtube',fuckervideos[Math.floor(Math.random()*fuckervideos.length)]]});  console.log("posting fuckervideo")},75000);
setTimeout(function(){socket.emit('talk',{text:beggarness[Math.floor(Math.random()*fuckervideos.length)]}); console.log("initializing fuckervideos #5")},128000);
setTimeout(function(){socket.emit('command',{list:['youtube',fuckervideos[Math.floor(Math.random()*fuckervideos.length)]]});  console.log("posting fuckervideo")},135000);
var beggarness2 = ['bye i\'ll be back','sam is a sexy bathbomb','i love egirls, now goodbye','DIOGO IS COOOOOOOOOOOL','Yes Inflation Videos Allowed. I am a robot.']
setTimeout(function(){socket.emit('talk',{text:beggarness2[Math.floor(Math.random()*beggarness2.length)]});  console.log("disconnecting")},175000);
setTimeout(function(){socket.emit("disconnect"); console.log("we have to cause an error to close this thing smh"); maggot()},195000);