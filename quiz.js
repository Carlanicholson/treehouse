/*
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correct= 0;

// 2. Store the rank of a player

let rank;

// 3. Select the <main> HTML element

document.getElementById("three").innerHTML;

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const answer1 = prompt ("how many legs does a spider have?")
if (answer1.toUpperCase() === '8') { correct += 1;
}
const answer2 = prompt ("how many legs does a girrafe have?")
if (answer2.toUpperCase() === '4') { correct += 1;
}
const answer3 = prompt ("how many legs does a butterfly have?")
if (answer3.toUpperCase() ==='0') { correct +=1;
}
const answer4 = prompt ("how many legs does a dog have?")
if (answer4.toUpperCase() === '4') { correct +=1;
}
const answer5 = prompt ("how many legs does a cat have?")
if (answer5.toUpperCase() ==='4') { correct +=1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if (correct === 5)
{ rank = "Gold";
}
else if (correct >= 3) {
    rank = "Silver";
}
else if (correct >= 2) {
    rank = "Bronze";
}
else {
    rank = "None";
}



// 6. Output results to the <main> element

document.getElementById("three").innerHTML = ` You got ${correct} out of 5 questions correct. Crown earned: ${rank}`;