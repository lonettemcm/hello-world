var questions = 17;
var questionsLeft = ' [' + questions + ' questions left]';
var sillyName = prompt('Please type a silly name' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var profession = prompt('Please type an unrealistic profession' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var country = prompt('Please type name a country' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var sillyNameTwo = prompt('Please type another silly name' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var color = prompt('Please name a color' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adverb = prompt('Please type an adverb' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var sillyNameThree = prompt('Please type another silly (woman\'s) name' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var sillyNameFour = prompt('Please type another silly name' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var face = prompt('Please type a facial feature' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var sillyNameFive = prompt('Please type another silly name' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var city = prompt('Please type name a US city' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var sillyNameSix = prompt('Last silly name, promise ;)' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb = prompt('Please type a verb (without -ing)' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var actor = prompt('Please type a former awesome actor' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var nounTwo = prompt('Please name your last noun' + questionsLeft);

alert('Congrats! You made it. Ready for the message?');
var sentence = '<h2>Meet our hero ' + sillyName + ', a super intelligent ' + profession + '. ';
sentence += 'A run-in with the country ' + country + ' leads him to create his alter ego ' + sillyNameTwo + ' a ' + color + ' ' + adjective + ' giant capable of great destruction.;
sentence += ' He ' + adverb + ' battles the military with his girlfriend ' + sillyNameThree + '.';
sentence += ' Eventually it is discovered that our hero\'s long-time colleague ' + sillyNameFour + ', distinguished by his ' + face + ' is trying to turn ' + sillyNameFive + ' into a weapon, leading to a climactic (if pointless) battle in downtown ' + city + ' with an evil version of the same giant alter-ego called ' + sillyNameSix + '.';
sentence += ' Eventually the enemy is subdued by ' + verb + 'ing him with a ' + noun + '. in the final reel, ' + actor + ' appears to propose joining him in a ' + nounTwo + '.';
document.write(sentence);
