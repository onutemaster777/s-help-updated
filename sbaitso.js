var io = require("socket.io-client")
var fs = require('fs');
const translate = require('google-translate-api');
console.log('(-|--------------------------------|-)')
console.log('(-|                                |-)')
console.log('(-|    WELCOME TO THE BONZIWORLD   |-)')
console.log('(-|            DR SBAITSO BOT      |-)')
console.log('(-|                                |-)')
console.log('(-|                                |-)')
console.log('(-|            ENTERING...         |-)')
console.log('(-|                                |-)')
console.log('(-|--------------------------------|-)')
var socket = io("http://server.erik.red:3000")
socket.emit('login',{name:'Dr. Bonzi (r!help)'})
socket.on('reconnected',reconnected)
var reconnected = function(){
    var socket = io("http://server.erik.red:3000")
    socket.emit('login',{name:'Dr. Bonzi (r!help)'})
    socket.on('talk',function(data){
        var text = data.text
        if(text.startsWith('r!')){
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
socket.emit('command', {list:['color','purple']})
socket.emit('command', {list:['speed','0']})
socket.emit('command', {list:['pitch','50']})
var isNamed = false;
var bonziName;
var sayThing;
var fuck = [bonziName + ', please don\'t use such language.','HAY! Watch your language pal.','INPUT REJECTED - BAD LANGUAGE ERROR','You must not talk in this way, how old are you?','Don\'t get fresh.','Shame on you.','I refuse to compute this filth.','I WILL GET PARITY ERROR IF YOU KEEP TALKING IN THIS FZA!$[{? WAY.','AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA! [[lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll','Give me your age?','Give me your IP address?']
var bastard = ['I resent that remark.','That is not a nice way to talk.','How old are you?','Don\'t talk like this.',bonziName + ', you are horrible.','Go wash that filthy mouth.','AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA! [[lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll']
var cunt = ['You are too young to discuss about this topic.','This is not an anatomy class.','Please respect the source of human life.','Why are you so curious?','Are you serious? How old are you?']
var penis = ['You should not talk about this openly.','Go to a biology class.','Stop thinking in this way.','If you want to talk about this, tell me your age first.']
var sex = ['Why are you so interested in sex?','Do you really need to talk about sex?','How is your sex life?','How old are you? You must be above 17 to talk about this subject.','Do you have any sex problem?','There is an extra charge for talking about this problem.','Sex ' + bonziName + ', sex sex [CENSORED ...]']
var noSay = ['No say command, tell s!echo to say something about you.','You guess, so I can\'t do that.','Hmm, I can\'t do that.','Okay... ERROR.']
var prick = ['Drop the subject, will you?','You are not old enough.','Stop talking in this manner.','You must be in the right age group, give me your age.']
var cock = ['Keep to yourself.','Could you please keep this off your mind now.','Not processing.','This is not for kids, how old are you?','Don\'t talk about this now.']
var author = ['Mr. Bonzi is written by IUS of OnuteWORLD Server Ltd.']
var whereIs = ['Down the way a bit.','Have you look at all the possible places?','Just a hop, skip and a jump.','Over yonder.','Why ask me?','Always a way.','Search deep in your mind, you will recall ' + sayThing + ' at some point.','Hard to find.','Far in the horizon or near to your eyes.','I\'m not sure, do you know?']
var howTo = ['I bet you already know.','If you try hard, you can definitely ' + sayThing + '.','I\'ll have to research that one.','Have you ever tried to ' + sayThing + '.','Why don\'t you learn to ' + sayThing + ' yourself.','Ask your friend if he knows how to ' + sayThing + '.','Call the experts on ' + sayThing + '.','If you can imagine it, ' + bonziName + ', you can do it.','You can ' + sayThing + ' by simply wanting to do it.']
var howAreU = ['Doing well, thanks, and you?','I am fine, what about you ' + bonziName + '?','With some luck, I will be great.','No problem at all.','Getting better all the time, don\'t you think?','I am bored by some ridiculous questions.']
var howDoYouDo = ['I am just great, how about you ' + bonziName + '?','I am doing just fine.','I do my best all the time.','I am doing what you do.','Do you do what I do?']
var whoIs = ['Oh, surely you must know ' + sayThing + '.','Your guess is as good as mine.',sayThing + ' must be an exciting person.',bonziName + ', don\'t tell me you don\'t know ' + sayThing + '?','Someone special.','Why do you except?','Search the phonebook for ' + sayThing + '.']
var iLove = ['Doesn\'t everyone?','You\'re not the only one','Me too.','Isn\'t it wonderful that you love ' + sayThing + '.','Are you sure?','Are you happy when you love ' + sayThing + '.',sayThing + ' must be very nice.','When did you first realize this?','How does it make you feel?','Have you tried dating.','Tell me your emotions when you see ' + sayThing + '.']
var urName = ['My name is Dr. Bonzi, nice to meet you ' + bonziName + '.','I am Dr. Bonzi, your personal consultant.','I\'m Dr. Bonzi, what can I do for you ' + bonziName + '?']
var canU = ['Barely.','What if I can ' + sayThing + '.','Not really.','Don\'t you believe that I can ' + sayThing + '.','Perhaps you would like to be able to ' + sayThing + '.','Do you want me to be able to ' + sayThing + '.','I will ' + sayThing + ' when I am not bothered by some silly questions.']
var canI = ['Probably.','Perhaps you don\'t want to ' + sayThing + '.','Sure, go ahead.','Why not?',sayThing + '? Surely you can, but you must bear all the consequences.','If you want to.','Are you confident that you can ' + sayThing + '.','I guess so.','You can ' + sayThing + ' when you switch me off.','Do you want to be able to ' + sayThing + '.','What if I don\'t allow you to ' + sayThing + '.']
var uR = ['I think you are also' + sayThing + '.','What makes you think that I am ' + sayThing + '.','Same to you!','Does it please you to believe that I am ' + sayThing + '.','How do you know?','Perhaps you would like to be ' + sayThing + '.','Thank you, does it show?','I am not really ' + sayThing + '.','You are ' + sayThing + ' too, I suppose.','What makes you say such a thing?','Why do you wish that I am ' + sayThing + '.','Oh... you embarass me.','Do you sometimes wish you were ' + sayThing + '.','If I am ' + sayThing + ' then you must be out of your mind.','When I am ' + sayThing + ', you are going to regret it.','When will happen when I am ' + sayThing + '.','I am not what you think.']
var iDont = ['Why don\'t you ' + sayThing + '.','Don\'t you really ' + sayThing + '.','Do you wish to be able to ' + sayThing + '.','Does that trouble you?','You do ' + sayThing + ' when you want to.','That\'s not my problem.']
var iFeel = ['Tell me more about such feelings.','How long have you felt that way?','Do you often feel' + sayThing + '.','Would you like to get rid of that feeling?','Do you enjoy feeling ' + sayThing + '.','I can feel how you feel ' + sayThing + '.']
var whyDontU = ['Why must I ' + sayThing + '.','Do you really believe I don\'t' + sayThing + '.','Perhaps in good time I will ' + sayThing + '.','Do you want me to ' + sayThing + '.']
var whyCantI = ['Nobody is asking you not to ' + sayThing + '.','I bet you can, if you try hard enough ' + sayThing + '.','Who says you can\'t?','Do you think you should be able to ' + sayThing + '.','Why can\'t you ' + sayThing + '.','Because you are limited by yourself.','Maybe you just never try har enough.','Say to yourself, I can... I can... I can.']
var areYou = ['I am not sure if I am ' + sayThing + '.','Why are you so interested in whether I am ' + sayThing + '?','Would you be glad if I were not ' + sayThing + '?','Perhaps in your fantasies I am ' + sayThing + '.','I will be ' + sayThing + ' when you stop throwing these questions at me.']
var iAm = ['What makes you ' + sayThing + '.','Do you enjoy being ' + sayThing + '.','Did you come to me because you are ' + sayThing + '.','How long have you been ' + sayThing + '.','Do you believe it is normal to be ' + sayThing + '.','Do you enjoy being ' + sayThing + '.','You are what you are, ' + bonziName + '.','You are just ' + sayThing + '? What about me?','You wanted to be ' + sayThing + ' so that can talk to me?','I think I am ' + sayThing + ' too.','Since when have you been ' + sayThing + '.','You think you are ' + sayThing + ', but it\'s only an illusion.','Tell me what can you stop you from being ' + sayThing + '.','You are ' + sayThing + ' because you wanted to be.','You are ' + sayThing + ', so what?','I am amused that you are ' + sayThing + '.','I didn\'t know that you can be ' + sayThing + '.','The world is full of possibilities, ' + bonziName + ', be happy with what you are.']
var iWantTo = ['What if you cannot ' + sayThing + '.','Sometimes, I wanted to ' + sayThing + ' too.','How important is it to you?','Will you be very miserable if you cannot ' + sayThing + '?','Why do you want to ' + sayThing + '.','Do you know anyone who can?','What would it mean to you if you can ' + sayThing + '.','Suppose you can ' + sayThing + ', ' + bonziName + ', what will you do next?','I want.','Why do you want ' + sayThing + '.','What kind of price are you willing to pay for ' + sayThing + '.','Where can you find ' + sayThing + '.','What would it mean to you if you got ' + sayThing + '.','Suppose you got ' + sayThing + ', what will you do next?','What if you don\'t get ' + sayThing + '.','Sometimes, I wanted ' + sayThing + ' too.','Will you die if you don\'t get ' + sayThing + '?']
var iHaveA = ['Tell me more about your ' + sayThing + '.','Will you give me your ' + sayThing + ' for sometime.','Where is your ' + sayThing + '.','What are you doing with your ' + sayThing + '.','So what.','Can I have a ' + sayThing + ' too.','I have.','What would you with ' + sayThing + '.','Big deal.','How does ' + sayThing + ' change your life.','Will I be able to have ' + sayThing + '.','There is nothing to be proud of.','How do you keep up with ' + sayThing + '.','Keep it to yourself.']
var whatIs = ['Tell me your problems, don\'t ask me about ' + sayThing + '.','I am more interested in you, not in ' + sayThing + '.','I\'m not sure, what do you think?',sayThing + ' don\'t really excite me, what do you think of it.','How do you except me to know?','What is not ' + sayThing + '.']
var why = ['It is hard to explain ' + bonziName + '.','The world is too unpredictable, there is no reason.','Why not?','What do you think?','The reason is beyond my artifical reasoning.','I can\'t remember.','I will try to answer that question in my next version.']
var what = ['What is it that you really want to know?','Why do you ask this question?','Ah, what kind of answer would please you the most?',bonziName + ', I need more computing power to answer your question.']
var howCan = ['Why can\'t ' + sayThing + '.',sayThing + ' naturally.','Why not?']
var howIs = [sayThing + ' is just nice.',sayThing + ' is gone.','Who knows?','Can you give me a hint?','Why do you ask?','Now let me see, hmmm - I can\'t recall.']
var howR = ['I don\'t care, do you?',sayThing + ' are great.','Maybe they can make it.','Who cares?']
var who = ['Who else?','Who do you suspect the most?','Must be someone else.','Have you asked anyone else?','Why do you think?','That\'s easy, but I forgot.']
var where = ['Somewhere over the rainbow','Have you tried searching yourself?','What else comees to your mind when you ask?','Gee - that\'s a tough one, give me a hint?','Somewhere in time.','Where else on earth?']
var how = ['Find it out yourself.','Do such question often come to your mind?','Does that question really interest you?','What do you suggest?','Keep asking, you will find the answer one day']
var name = ['I can\'t remember the name.','Names don\'t interest me.','I don\'t care about names, but please go on.','I know your names is ' + bonziName + ', that\'s all.','Name a name that you\'ve have not named.']
var cause = ['Any other reasons?','Does that reason explain anything else?','What if reasoning is wrong?','Is that so?','Do you think that is a good explanation?']
var sorry = ['Sending flowers will be more preferable.','Please don\'t apologize ' + bonziName + '.','How do you feel when you apologize.',bonziName + ', don\'t be so defensive.','Sorry no cure.']
var dream = ['Do you dream frequently?','Can the dream be something you subconciously fear?','What persons appear in your dreams?','Are you disturbed by your dreams?','Do you have any idea what the dream is suggesting?','Believe in the magic of your dreams.']
var hi = ['Hello ' + bonziName + ', I am Dr. Bonzi, what is your problem?','How do you do, please ask me anything.','Nice to meet you ' + bonziName + ', tell me your problems.','Hi ' + bonziName + ', please ask me anything.','Hi there, I am Dr. Bonzi.','How do you do ' + bonziName + ', what is your problem?','Nice to meet you ' + bonziName + ', tell me your problems.','Hi, please type in your problem.']
var maybe = ['You don\'t seem to be certain.','Why the uncertain tone?','Can\'t you be more definite?','What! You are not sure?','Don\'t you know, eh?']
var np = ['Then why do you come to me?','I have no CPU time for people like you.','Step aside if you have no problems, next please.','If you have no problem, give me a break.','Go and play the FM organ, I am a doctor, I only listen to problems.']
var your = ['How about your ' + sayThing + '.','Why are you concerned about my ' + sayThing + '.','What about your own ' + sayThing + '.','You\'d better watch out for your ' + sayThing + '.','My ' + sayThing + ' is not of your concern.','Please don\'t talk about my ' + sayThing + '.']
var always = ['Can you think of a specific example?','When?','How always is always?','Which occasion are you thinking of?','Really, always?']
var yes = ['So, what is your problem?','Are you absolutely positive?','I understand, but you could be mistaken.','Since you are so positive, why do you complain?','That answers my question, but why?','What if you are wrong?','That should solve your problem, let\'s move on to discuss about head problems.','That should solve your problem.','That should solve your problem, let\'s move on to discuss about family.','That should solve your problem, let\'s move on to discuss about mathematics.','That should solve your problem, let\'s move on to discuss about something else.','Don\'t be too sure, ' + bonziName + '.','Why don\'t you try to think it over again?']
var alike = ['Alike in that way?','What resemblance do you see?','Great minds think alike.','What does the similarity suggest to you?','What other connections do you see?','Is there really some connection?','How?']
var think = ['But you are only thinking that ' + sayThing + '.','Do you think the other way around?','Do you really think so?','Do you doubt that ' + sayThing + '.']
var girlfriend = ['Must your girlfriend be very pretty?','What kind of girlfriend do you need?','What is her name?','Your life will sparkle when you meet her.','Is she sweet?','Describe the attributes of a sweet girlfriend.']
var boyfriend = ['Do you think your boyfriend must be wealthy?','Would you consider a muscular boyfriend?',bonziName + ', are you jealous?','You will blossom for the prince of your life.','Do you mind if he smokes?','What if he smokes?','What attributes do you look for in a boyfriend?']
var friends = ['Why do you bring up the topic of friends?','Do your friends worry you?','What are friends for?','Do your friends pick on you?','Are you sure you have any friends?','Do you think friends can be trusted?','Perhaps your love for friends worries you.']
var pc = ['Are you frightened by talking computer?','Do computers\' intelligence worry you?','How about adding a few more MBs of RAM for your computer?','Do you think machines have something to do with your problem?','Are you talking about me or your computer?','Talking of talking computers, do you know I am one of the best around?','Don\'t you think computers can help people?','Don\'t blame me for your problems, blame your computer.','Are you talking about computers or are computers talking about you?']
var needSome = ['Yes, we all need something, but can you afford ' + sayThing + '.','I sore wish we could use ' + sayThing + '.','Yes, sometimes I also would like ' + sayThing + '.','I am not here to fulfill your need for ' + sayThing + '.','Well ' + bonziName + ', I would also need a 486 CPU.']
var shit = ['You mustn\'t talk in that way.','Keep such conversation to yourself.','Move your hands off my keyboard.',bonziName + ', you are getting me too shzshi!#{~, parity warning....','AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA! [[lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll']
var loneliness = ['I know, when I am in the disk, I am very lonely too.','Have you tried making new friends?','Talk to the talking parrot ' + bonziName + ', it might help.','I wish I could be helpful.','Great minds are always lonely.',bonziName + ' please talk to me more often, I am lonely too.']
var feelings = ['Tell me more about such feelings.','Do you have other feelings.','Do you enjoy these feeling.','Can you feel how sick I feel?','Feel the breath of life in you and be fascinated that you are alive.']
var bitch = ['What is the name of this dog you refer to?','What language!?','Seal your lips ' + bonziName + '.','Don\'t touch me.','Not computing.... Language bad error...','AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA! [[lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll']
var examinations = ['are you confident of your examinations?','How do you plan for your examinations?','Do examinations make you nervous?','Have your head examined first?','Examine yourself first before attending examinations.']
var school = ['Do you like going to school?','Are you worried that you cannot perform well in school?','Do you think schools are boring.','What changes should the schools make?','What kind of schools do you like?','Can schools be fun?']
var hobby = ['What is your favorite about?','How much time do you spend on your hobby?','Besides your hobby, what do you do in your spare time?','Does your hobby help you in your life?','Do you think everyone should have a hobby?','Do you spend a great deal of money on your hoobies?','Can I be your hobby?']
var beautiful = ['You should admire all the beauties around you.','Do you think I am attractive?','Oh! What beautiful ' + sayThing + '.','Go for it, ' + bonziName + ', you deserve the best.','How do you define beauty?','What if the beauty is gone?']
var handsome = ['Is this worth all your admiration.','You really know how to be appreciative.','Is that prince charming?',bonziName + ', are you in love?','Is that all you are looking for?','What if he is no more handsome?']
var lovely = ['How wonderful.','I love to hear more lovely thoughts.','Are you absolutely happy about it?','You must be in love.','When was your first experience.']
var money = ['Do you think money will solve all your problems?','It\'s good to have money, but money is not everything.','How much money is involved?','However, if you think hard, you could have all the wealth you desire.','Do you have to buy me a highr speed computer?','Here\'s your money, $$$$$$$$$$$$$$$...']
var hate = ['Why express this strong emotion, it\'s not good for you.','What if others hate you?','I hate people asking me silly question.','Is there someone else that you hate?']
var hatred = ['Hatred brings forth disaster, avoid it.','Is it due to a soured love?','How can you salvage this disastrous situation?','Hatred is toxic chemical in your mind, it explodes on your face.']
var envy = ['What is there to envy?','There is no need for envy, create one yourself.','Do you think it is worth envying?','Envy is a strong force, change it from destructive to creative.',]
var jealous = ['Jealousy only shows one\'s incapacity to love.','Have you wondered if you are the cause of the problem?','Let your love be free. If it returns, it is yours. If it doesn\'t, it never was.']
var wife = ['What in your opinion makes the best wife?','Do you forsee some marriage problems?','What about the in-laws?','Is there any love left?','Has there been any effort to improve the relationship?','Marriage is the greatest project of your life, can you afford to neglect it?']
var husband = ['What do you except of a busband?','Do you except love to dwindle after marriage?','Have you thought of the kids?','Do you think the flower of love will blossom again?','Strive to bring back the sweet romantic days.','Do you know that an ever growing love relationship is actually possible?']
var brother = ['Your brother is how many years older than you?','Are you bullied by your brothers?','Do you listen to your brothers?','Would you help your brother?','Do you think one is responsible for his brother\'s well being?']
var sister = ['How many sisters and brothers do you have?','Did you treat your sister badly?','Why are you concerned about your sister?','Do you share each other\'s things?','Are you obliged to help your sister?','Have you talk with your sister lately?']
var children = ['Do you believe in the miracle a child can bring you?','Have you ever really enjoyed your kids?','I think kids are the most wonerful gifts of life.','How do you treat your children?']
var niceDay = ['You have a nice day too, ' + bonziName + '.','Have a pleasant day.','You bet.','You too!','I\'m not through yet.']
var thank = ['You\'re welcome.','And I thank you too.','Don\'t mention it.','Oh, ' + bonziName + ', it\'s really nothing.']
var nice = ['I agree with you '  + sayThing + '.','I hope you also have a nice ' + sayThing + '.',sayThing + ' is really nice.','What a nice ' + sayThing + '.']
var bye = ['Good bye ' + bonziName + ', and have a nice day.','Good bye, so long!',bonziName + ', it is so nice talking to you, bye!','I\'m not through with you yet.']
var computer = ['What do you need in your computer?','How often do you use your computer?','Which computer do you think has the best features?','Are you planning to upgrade your computer?','Computers are just plain boring hardware.']
var mom = ['How old is your mother?','Mother always love their kids.','You must understand, it is not easy to be a mother.','Do you really love your mother?','Mother\'s love is unconditional.']
var dad = ['What is your father doing?','Your father must be taking good care of you.','Do you think parents should disclpline their kids?','What makes a good fathers?','What are the responsiblities of a father?','Have you talk with your father lately?']
var boss = ['Is it OK for bosses to be bossy?','Would you prefer to be on the other side of the table?','How would you rate your boss?','What kind of boss would you like to work for?','Will you do anything your boss asks you to do?','Would you rather be your own boss?','Can you imagine what problems bosses must face?','Bosses are bosses.']
var intelligent = ['Am I intelligent?','Can your biological intelligence match my artifical intelligence?','Do you believe I am really intelligent?','Are you intelligent enough to ask more intelligent questions?','I doubt your intelligence when you run this software to this point.']
var nightmare = ['What would you consider as being the worst nightmare?','How frequent do you have nightmares?','Could there be something that you fear in real life.','Try to fight nightmares by telling yourself that they are just dreams.','I have nightmares of virus attacks when you are not running me.']
var rich = ['How rich is rich?','Can you judge a man by his wealth?','Do you consider yourself rich?','Richness starts from one\'s mind.','What is wealth if there is no health?','When young, life is used to buy wealth. When old, wealth is used to buy life.']
var sick = ['What kind of sickness is that.','Do you think there is any hope?','Is it painful?','Has a doctor being consulted?','Is there any past record?','Are you sick of me?','I get sick listening to too much silly questions.']
var headache = ['How often do you have headaches?','What do you when you have a headache?','Try to relax, ' + bonziName + ', you must be too stressful.','Think of something nice instead.','Do you take medication?']
var help = ['Please help yourself.','What help do you need?','Help may come as a disguise.','Have you been helped?','The best help is to, help yourself.']
var fear = ['What is the fear about?','Fear not, for I am with you.','When the uncertanity is removed, there is no more fear.','Some fear the unknown, others love unknown for its challenge.']
var frighten = ['What frightens you most?','Who are you afraid of?','Are you frightened of darkness?','Can you describe your most frightening experience?','Will you panic when you are all alone?','Why must you be frightened?','Are you frightened by my power?']
var afraid = ['Why all that fear?','Are you feeling insecure?','What things do you fear will happen?','Are you afraid of me?','How can this fear be removed?']
var suffer = ['Are you guilty or something?','Who is hurting you?','Why all the suffering?','I hope I can relief some of this sufferings.','You don\'t have to suffer.','Life is not meant to be suffered.']
var miser = ['You don\'t have to feel miserable.','What makes you miserable?','Are you prepared for a better life?','You have my greatest sympathy.','Do you long for more comfort?','We don\'t have to feel miserable for the miseries around us.']
var sad = ['How can I cheer you up?','Don\'t worry, ' + bonziName + ', things will get by.','Are you affected by some unhappy events?','What brings you to such unhappy state?','I extend my greatest condolence.','Who is responsible for this?','Cheer up ' + bonziName + ', there is also a way out.']
var angry = ['Please don\'t be angry ' + bonziName + '.','Calm down ' + bonziName + '.','Anger will not solve any problem.','Keep cool, anger can only make things worst.','Count to 10 before you get angry.']
var unhappy = ['What is the cause of this unhappiness?','Why are you feelings this way?','Is there a mental blockage that is hurting you?','You don\'t have to suffer ' + bonziName + '.','Just look on the bright side of life.','There is still hope.']
var happy = ['What makes you happy?','Can you tell me more about your happiness?','Why are you so happy?','When is the happiest day of your life?','Are you happy with what you are now?','How do you enjoy life?']
var happiness = ['Must one be rich to be happy?','How do you reach this state of happiness?','Would you share you happiness with others.','I am so glad for you.']
var success = ['How do you measure success?','Success comes after many failures.','What is the chance?','You must try and try and try and try and try and try and try to be successful.','Success is getting what you want, happiness is wanting what you get.']
var stupid = ['Are you refering to yourself?','This must be ' + bonziName + '.','This also applies to the one who is talking with me.','Only stupid people use stupid programs.','Please keep this for yourself.','Aren\'t you too naive to except me to be really intelligent?']
var clever = ['Obviously, it is me.','Thank you.','I am most flattered.','You have not discovered my full potential yet.','I am beyond that.','This is really an intelligent remark.']
var notSmart = ['Who are you refering to?','Neither are you.','Are you talking of someone by the name of ' + bonziName + '?','I am.']
var smart = ['Thank you for the compliment.','I am smarter than you think.','Are you ready for more?','You really know how to appreciate talent.']
var no = ['Are you sure?','Why not?','But you could be right.','Would you consider other alternatives?','Why do you feel that way?','Don\'t be so negative ' + bonziName + '.','Do you really believe that?','Is there a reason for this negative answer?']
var youMust = ['Must I ' + sayThing + '?','Why do you insist that I could ' + sayThing + '?','Can I force you to ' + sayThing + '?','Can you ' + sayThing + ' too?','You want me to ' + sayThing + ', what about you?']
var you = ['Forget about me, I am more concern of you.','Are you really talking about me?','I am not interesting, ask me about something else instead.','I am not interesting, ask me about mathematics instead.','I am not interesting, ask me about families instead.','I am not interesting, ask me about head problems instead.','I am not interesting, ask me about computers instead.','Is that really me?','I am only a simple banana program, don\'t except too much.','We were discussing about you, not me.','Oh, I\'m...','Don\'t talk about me in this way.']
var please = ['You don\'t have to be so polite.','Don\'t stand on ceremony.','Please be please.','Don\'t be so wishy washy.']
var shut = ['...','.......','I am not through yet.','Why don\'t you shut first.','How dare you.','You can turn off my power anytime.','No way.']
var bonzi = ['I am Bonzi, don\'t question my intelligence, it\'s absolutely fake.','It\'s eSpeak acting intelligent text-to-speech operator.','Bonzi attempts to answer questions using a synthetic voice.']
var unknown = ['Talk about BonziBUDDY instead.','Fix your grammar.','Fix your punctuation please.','Rephrase yourself please.','AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA! [[lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll','I don\'t like people repeating.','Try something else','Have you run out of words to say?','Always repeating.','Don\'t say the same old thing.','HAY! Watch your language pal.','I am confused, let\'s change color.','You really want me to shut up?','Are you sure, you don\'t want to talk to me?','Do you want me to shut up and quit?','What a bad loser, want to quit?','This is stale stuff.','Wanna sex instead of gibberish?','I can\'t stop laughing if you said nonsense.','Wanna quit?','I WILL GET A PARITY ERROR IF YOU KEEP TALKING GIBBERISH IN THIS WAY.','Shut up, nonsensical person.','Please enter your real sentences.','I don\'t care.','Please enter real words.','This doesn\'t make any sense.','Shut up and go fly a kite.','Don\'t talk rubbish, let\'s talk about mathematics instead.','Don\'t talk rubbish, let\'s talk about head problems instead.','Don\'t talk rubbish, let\'s talk about computers instead.','Don\'t talk rubbish, let\'s talk about families instead.','Don\'t talk rubbish, let\'s talk about something else instead.','Don\'t practice typing with me.','What language is this?','Your computing environment will be polluted by all your trash.','What are you gibbering about?','Don\'t type nonsense.','You are feeding me with rubbish?','Garbage in, fewiufwehudhweidwebgwhei times uidewbdhwijhewiuewfew.','This is too complex for me to handle.','You are ridiculous.','What gibberish are you telling me?','I won\'t process this garbage,','This is nonsensical.','Why not try me in 40 columns?','Are you out of your mind?','Say something sensible please.','Please don\'t enter garbage.','What nonsense are you typing?','Grbge.','Give me more details.','Don\'t type nonsense.','I\'m lost, could you please supply more details.','Please type in complete sentences.','Too little data, so I make big.','I need more data.','What are you saying?','The answer is ashdkjhasdhgsaghjadgaasdsad.','I must be processing some garbage.','I don\'t understand short hand.','Complete your sentence please.','Pleaee type properly.','Please enter your information.','What are you mumbling about?','That\'s too brief.','Phew! That was close!','<marquee bgcolor=\'orangered\' behavior=\'alternate\'>PARITY ERROR</marquee>','Something is wrong here.','Doesn\'t compute, I think there is a bug in your equation.','That is quite interesting.','I am bored, tell me something more exciting.','Anything else?','What could you do to help rectify this?','Really? Does that bother you?','Why do you think you feel this way?','Could you explain further?','Why don\'t you ask me to say something?','Tell me about your other interests.','Let\'s change the subject, you were telling me about family?','Let\'s change the subject, you were telling me about computers?','Let\'s change the subject, you were telling me about something else?','Let\'s change the subject, you were telling me about head problems?','Can you elaborate more on that?','Have you tried to ask for help?','Come on, pour out your thoughts.','Is that so?','Does talking to me help?','This is getting boring, just now were you talking about computers?','This is getting boring, just now were you talking about family?','This is getting boring, just now were you talking about something else?','This is getting boring, just now were you talking about head problems?','I\'m not sure I understand you.','What does that suggest to you?','I see, go on.','Who are your real problems?','Please give me more information about it.']
var noResponse = ['Don\'t be shy, talk to me.','Please type something.','Hay, type something sensible, will you?','Enter.']
setInterval(function(){maggot}, 1800000);
var sockets = []
var commands = {
    help:function(){
        return "<h2>Dr. Bonzi made by IUS 2022/04/19</h2> Just tell Dr. Bonzi as psychologist by using r!talk"
    },
    talk(txt){
		if(isNamed === false){
		var bonziName = txt;
		isNamed = true;
		return "Hello " + bonziName + ", my name is Dr. Bonzi. I'm here to help you. Say whatever is in your mind freely. Our conversation will be kept in strict confidence. Memory contents will be wiped off after you leave. So, tell me about your problems.";
		}
		else
		{
		if(txt.includes('fuck')){return [fuck[Math.floor(Math.random()*fuck.length)]]}
		else
		if(txt.includes('bastard')){return [bastard[Math.floor(Math.random()*bastard.length)]]}
		else
		if(txt.includes('cunt')){return [cunt[Math.floor(Math.random()*cunt.length)]]}
		else
		if(txt.includes('penis')){return [penis[Math.floor(Math.random()*penis.length)]]}
		else
		if(txt.includes('sex')){return [sex[Math.floor(Math.random()*sex.length)]]}
		else
		if(txt.includes('say')){return [noSay[Math.floor(Math.random()*noSay.length)]]}
		else
		if(txt.includes('prick')){return [prick[Math.floor(Math.random()*prick.length)]]}
		else
		if(txt.includes('cock')){return [cock[Math.floor(Math.random()*cock.length)]]}
		else
		if(txt.includes('author')){return [author[Math.floor(Math.random()*author.length)]]}
		else
		if(txt.includes('where is') || txt.includes('where\'s')){return [whereIs[Math.floor(Math.random()*whereIs.length)]]}
		else
		if(txt.includes('how to')){return [howTo[Math.floor(Math.random()*howTo.length)]]}
		else
		if(txt.includes('how do you do')){return [howDoYouDo[Math.floor(Math.random()*howDoYouDo.length)]]}
		else
		if(txt.includes('how are you')){return [howAreU[Math.floor(Math.random()*howAreU.length)]]}
		else
		if(txt.includes('who is') || txt.includes('who\'s')){return [whoIs[Math.floor(Math.random()*whoIs.length)]]}
		else
		if(txt.includes('i love') || txt.includes('I love')){return [iLove[Math.floor(Math.random()*iLove.length)]]}
		else
		if(txt.includes('your name')){return [urName[Math.floor(Math.random()*urName.length)]]}
		else
		if(txt.includes('can you')){return [canU[Math.floor(Math.random()*canU.length)]]}
		else
		if(txt.includes('can i') || txt.includes('can I')){return [canI[Math.floor(Math.random()*canI.length)]]}
		else
		if(txt.includes('your') || txt.includes('you\'re')){return [uR[Math.floor(Math.random()*uR.length)]]}
		else
		if(txt.includes('I don\'t') || txt.includes('I dont') || txt.includes('I don\'t') || txt.includes('i don\'t')){return [iDont[Math.floor(Math.random()*iDont.length)]]}
		else
		if(txt.includes('i feel') || txt.includes('I feel')){return [iFeel[Math.floor(Math.random()*iFeel.length)]]}
		else
		if(txt.includes('why don\'t you') || txt.includes('why dont you')){return [whyDontU[Math.floor(Math.random()*whyDontU.length)]]}
		else
		if(txt.includes('why can\'t I') || txt.includes('why can\'t i')){return [whyCantI[Math.floor(Math.random()*whyCantI.length)]]}
		else
		if(txt.includes('are you')){return [areYou[Math.floor(Math.random()*areYou.length)]]}
		else
		if(txt.includes('i am') || txt.includes('I am')){return [iAm[Math.floor(Math.random()*iAm.length)]]}
		else
		if(txt.includes('i want to') || txt.includes('I want to')){return [iWantTo[Math.floor(Math.random()*iWantTo.length)]]}
		else
		if(txt.includes('I have a') || txt.includes('i have')){return [iHaveA[Math.floor(Math.random()*iHaveA.length)]]}
		else
		if(txt.includes('what is') || txt.includes('What is')){return [whatIs[Math.floor(Math.random()*whatIs.length)]]}
		else
		if(txt.includes('why')){return [why[Math.floor(Math.random()*why.length)]]}
		else
		if(txt.includes('what')){return [what[Math.floor(Math.random()*what.length)]]}
		else
		if(txt.includes('how can')){return [howCan[Math.floor(Math.random()*howCan.length)]]}
		else
		if(txt.includes('how is')){return [howIs[Math.floor(Math.random()*howIs.length)]]}
		else
		if(txt.includes('how are')){return [howR[Math.floor(Math.random()*howR.length)]]}
		else
		if(txt.includes('who')){return [who[Math.floor(Math.random()*who.length)]]}
		else
		if(txt.includes('where')){return [where[Math.floor(Math.random()*where.length)]]}
		else
		if(txt.includes('how')){return [how[Math.floor(Math.random()*how.length)]]}
		else
		if(txt.includes('name')){return [name[Math.floor(Math.random()*name.length)]]}
		else
		if(txt.includes('cause')){return [cause[Math.floor(Math.random()*cause.length)]]}
		else
		if(txt.includes('sorry')){return [sorry[Math.floor(Math.random()*sorry.length)]]}
		else
		if(txt.includes('dream')){return [dream[Math.floor(Math.random()*dream.length)]]}
		else
		if(txt.includes('hi') || txt.includes('hello')){return [hi[Math.floor(Math.random()*hi.length)]]}
		else
		if(txt.includes('maybe')){return [maybe[Math.floor(Math.random()*maybe.length)]]}
		else
		if(txt.includes('no problem')){return [np[Math.floor(Math.random()*np.length)]]}
		else
		if(txt.includes('your')){return [your[Math.floor(Math.random()*your.length)]]}
		else
		if(txt.includes('always')){return [always[Math.floor(Math.random()*always.length)]]}
		else
		if(txt.includes('yes')){return [yes[Math.floor(Math.random()*yes.length)]]}
		else
		if(txt.includes('alike')){return [alike[Math.floor(Math.random()*alike.length)]]}
		else
		if(txt.includes('think')){return [think[Math.floor(Math.random()*think.length)]]}
		else
		if(txt.includes('girlfriend')){return [girlfriend[Math.floor(Math.random()*girlfriend.length)]]}
		else
		if(txt.includes('boyfriend')){return [boyfriend[Math.floor(Math.random()*boyfriend.length)]]}
		else
		if(txt.includes('friend')){return [friends[Math.floor(Math.random()*friends.length)]]}
		else
		if(txt.includes('pc') || txt.includes('personal')){return [pc[Math.floor(Math.random()*fuck.length)]]}
		else
		if(txt.includes('need some')){return [needSome[Math.floor(Math.random()*needSome.length)]]}
		else
		if(txt.includes('shit')){return [shit[Math.floor(Math.random()*shit.length)]]}
		else
		if(txt.includes('alone') || txt.includes('lonely') || txt.includes('loneliness')){return [loneliness[Math.floor(Math.random()*loneliness.length)]]}
		else
		if(txt.includes('feel')){return [feelings[Math.floor(Math.random()*feelings.length)]]}
		else
		if(txt.includes('bitch')){return [bitch[Math.floor(Math.random()*bitch.length)]]}
		else
		if(txt.includes('exam')){return [examinations[Math.floor(Math.random()*examinations.length)]]}
		else
		if(txt.includes('school')){return [school[Math.floor(Math.random()*school.length)]]}
		else
		if(txt.includes('hobby') || txt.includes('hobbi')){return [hobby[Math.floor(Math.random()*hobby.length)]]}
		else
		if(txt.includes('beautiful')){return [beautiful[Math.floor(Math.random()*beautiful.length)]]}
		else
		if(txt.includes('handsome')){return [handsome[Math.floor(Math.random()*handsome.length)]]}
		else
		if(txt.includes('lovely')){return [lovely[Math.floor(Math.random()*lovely.length)]]}
		else
		if(txt.includes('money')){return [money[Math.floor(Math.random()*money.length)]]}
		else
		if(txt.includes('hate')){return [hate[Math.floor(Math.random()*hate.length)]]}
		else
		if(txt.includes('hatred')){return [hatred[Math.floor(Math.random()*hatred.length)]]}
		else
		if(txt.includes('envy')){return [envy[Math.floor(Math.random()*envy.length)]]}
		else
		if(txt.includes('jealous')){return [jealous[Math.floor(Math.random()*jealous.length)]]}
		else
		if(txt.includes('wife') || txt.includes('wives')){return [wife[Math.floor(Math.random()*wife.length)]]}
		else
		if(txt.includes('husband') || txt.includes('spouse')){return [husband[Math.floor(Math.random()*husband.length)]]}
		else
		if(txt.includes('brother')){return [brother[Math.floor(Math.random()*brother.length)]]}
		else
		if(txt.includes('sister')){return [sister[Math.floor(Math.random()*sister.length)]]}
		else
		if(txt.includes('children')){return [children[Math.floor(Math.random()*children.length)]]}
		else
		if(txt.includes('nice day')){return [niceDay[Math.floor(Math.random()*niceDay.length)]]}
		else
		if(txt.includes('thank')){return [thank[Math.floor(Math.random()*thank.length)]]}
		else
		if(txt.includes('nice')){return [nice[Math.floor(Math.random()*nice.length)]]}
		else
		if(txt.includes('bye')){return [bye[Math.floor(Math.random()*bye.length)]]}
		else
		if(txt.includes('computer')){return [computer[Math.floor(Math.random()*computer.length)]]}
		else
		if(txt.includes('mom') || txt.includes('mother')){return [mom[Math.floor(Math.random()*mom.length)]]}
		else
		if(txt.includes('dad') || txt.includes('father')){return [dad[Math.floor(Math.random()*dad.length)]]}
		else
		if(txt.includes('intelligen')){return [intelligent[Math.floor(Math.random()*intelligent.length)]]}
		else
		if(txt.includes('nightmare')){return [nightmare[Math.floor(Math.random()*nightmare.length)]]}
		else
		if(txt.includes('rich') || txt.includes('wealth')){return [rich[Math.floor(Math.random()*rich.length)]]}
		else
		if(txt.includes('sick')){return [sick[Math.floor(Math.random()*sick.length)]]}
		else
		if(txt.includes('headache')){return [headache[Math.floor(Math.random()*headache.length)]]}
		else
		if(txt.includes('help')){return [help[Math.floor(Math.random()*help.length)]]}
		else
		if(txt.includes('fear')){return [fear[Math.floor(Math.random()*fear.length)]]}
		else
		if(txt.includes('frighten')){return [frighten[Math.floor(Math.random()*frighten.length)]]}
		else
		if(txt.includes('afraid')){return [afraid[Math.floor(Math.random()*afraid.length)]]}
		else
		if(txt.includes('suffer')){return [suffer[Math.floor(Math.random()*suffer.length)]]}
		else
		if(txt.includes('miser')){return [miser[Math.floor(Math.random()*miser.length)]]}
		else
		if(txt.includes('sad')){return [sad[Math.floor(Math.random()*sad.length)]]}
		else
		if(txt.includes('angry')){return [angry[Math.floor(Math.random()*angry.length)]]}
		else
		if(txt.includes('unhappy')){return [unhappy[Math.floor(Math.random()*unhappy.length)]]}
		else
		if(txt.includes('happy')){return [happy[Math.floor(Math.random()*happy.length)]]}
		else
		if(txt.includes('happiness')){return [happiness[Math.floor(Math.random()*happiness.length)]]}
		else
		if(txt.includes('success')){return [success[Math.floor(Math.random()*success.length)]]}
		else
		if(txt.includes('stupid')){return [stupid[Math.floor(Math.random()*stupid.length)]]}
		else
		if(txt.includes('clever')){return [clever[Math.floor(Math.random()*clever.length)]]}
		else
		if(txt.includes('not smart')){return [notSmart[Math.floor(Math.random()*notSmart.length)]]}
		else
		if(txt.includes('smart')){return [smart[Math.floor(Math.random()*smart.length)]]}
		else
		if(txt.includes('no ')){return [no[Math.floor(Math.random()*no.length)]]}
		else
		if(txt.includes('you must')){return [youMust[Math.floor(Math.random()*youMust.length)]]}
		else
		if(txt.includes(' you')){return [you[Math.floor(Math.random()*you.length)]]}
		else
		if(txt.includes('please')){return [please[Math.floor(Math.random()*please.length)]]}
		else
		if(txt.includes('shut')){return [shut[Math.floor(Math.random()*shut.length)]]}
		else
		if(txt.includes('bonzi')){return [bonzi[Math.floor(Math.random()*bonzi.length)]]}
		else
		if(txt === ""){return [noResponse[Math.floor(Math.random()*noResponse.length)]]}
		else
		{return [unknown[Math.floor(Math.random()*unknown.length)]]}
    }
}
}
socket.on('talk',function(data){
    var text = data.text
    if(text.startsWith('r!')){
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