var currentCombo =[]; 
let currentComboChanged = false; 
let turnMessage = document.getElementById('turn__message')
let rows =document.querySelectorAll('.row');

 let getBoxCoordinates = (box) => {
 let n=3;

console.log(box)

 let xTurn = true;
   
//  box.style.background = 'yellow';
 box.style.backgroundSize ='cover';
//  box.classList.append('disabledRow');
if(xTurn){
  box.style.background = `url(https://www.howitworksdaily.com/wp-content/uploads/2015/08/131216Cute-dog-sticking-out-his-tongue-wallpaper-200x200.jpg)`;
  turnMessage.innerText = `Doggo's turn!` 
}
 else{
  box.style.background = `url(https://www.dogalize.com/wp-content/uploads/2017/07/happy-cat-200x200.jpg)`;

 }
  let cIndex = parseInt(box.getAttribute('data-column-index'));
  let rIndex =  parseInt(box.getAttribute('data-row-index'))

  let xCombos,yCombos;
   let coordinate =  [cIndex,rIndex]; 

   localStorage.setItem('combo',coordinate);
     // for the principal diagonal 
     if(rIndex == cIndex){
      // console.log('Diagonala Principala')

    }
     // for the secondary diagonal
     if(rIndex+cIndex==n+1){
 
     }

     // first column
     if(cIndex==1){
        console.log('Prima coloana')
      }
     // second column 
     if(cIndex==2){
       console.log('A doua coloana')
     }
       // second column 
       if(cIndex==3){
        console.log('A treia coloana')
      }




        // first column
     if(rIndex==1){
      console.log('Prima linie')
   }
   // second column 
   if(rIndex==2){
     console.log('A doua linie')
   }
     // second column 
     if(rIndex==3){
      console.log('A treia linie')
    }




  


 }

  // rows.forEach(el=>{
  //    console.log(el);
  // });

console.log(localStorage.getItem('combo'))