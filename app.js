let choices = document.querySelectorAll('.choice');
let displayWinner = document.querySelector('.display-winner');
let clearBtn = document.getElementById('btn');
let swap = document.getElementById('switch');
let currentPlayer;
let box1 = document.querySelector(".choice-1"),
    box2 = document.querySelector(".choice-2"),
    box3 = document.querySelector(".choice-3"),
    box4 = document.querySelector(".choice-4"),
    box5 = document.querySelector(".choice-5"),
    box6 = document.querySelector(".choice-6"),
    box7 = document.querySelector(".choice-7"),
    box8 = document.querySelector(".choice-8"),
    box9 = document.querySelector(".choice-9");


function clear()
{
choices.forEach((choice)=>{ choice.textContent = ''; });
}

function  winOptions(b1,b2,b3)
{
return b1.innerHTML!='' && b2.innerHTML!='' && b3.innerHTML!='';
}

function comboHandler(e)
{
 // let turn; // Variable to keep track of user turn;
 // let {playerTurn} = switchTurn(turn); // When I call this playerTurn will always be true on each click;
 //
 //  // console.log(playerTurn);


  let userChoice = e.target.className.split(' ')[1].split('-')[1];
  console.log(`Clicked ${ typeof userChoice}`);

 let box = e.target;
 box.textContent = 'X';


let choices =
{
  mainRow:   winOptions(box1,box2,box3),
  secondRow: winOptions(box4,box5,box6),
  thirdRow:  winOptions(box7,box8,box9),
  mainColumn: winOptions(box1,box4,box7),
  secondColumn:winOptions(box2,box5,box8),
  thirdColumn:winOptions(box3,box6,box9)
};

// console.log(Object.values(choices).every(item => item)); // Checks if all object properties return true
//The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
// E.g  {a:1,b:2,c:3 }  ["a","b","c"]
// console.log(Object.keys(choices).every((k) =>choices[k]))

// console.log(...newData);

if(choices.mainRow || choices.secondRow || choices.thirdRow || choices.mainColumn || choices.secondColumn || choices.thirdColumn)
{
  displayWinner.textContent = 'X is the winner';
}

// Switches the player
currentPlayer = currentPlayer === "X" ? "O" : "X";
this.textContent = currentPlayer;



}


choices.forEach((choice)=>{
  choice.addEventListener('click',comboHandler,{once:true}) // once means not trigger the event again;
})


clearBtn.addEventListener('click',clear);
