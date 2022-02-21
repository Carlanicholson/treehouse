


// 1. Declare variables and capture input.
const adjective = prompt('Please type an adjective.');
const verb = prompt('Please type a verb.');
const noun = prompt('Please type a noun.');


// 2. Combine the input with other words to create a story.
const sentence = `There  once was a ${adjective} programmer who wanted to use Javascript to ${verb} the ${noun}!`


// 3. Display the story as a <p> inside the <main> element.
document.getElementById('one').innerHTML = sentence;






const answer = prompt('What planet is closest to the sun?');

if (answer.toUpperCase() === 'MERCURY') {
    alert("Well done, you are correct!");
}
else {
    alert("That is incorrect, please try again")
}
document.getElementById("two").innerHTML= answer;