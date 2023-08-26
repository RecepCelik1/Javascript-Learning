
    let comp = 0;
    let player = 0;
    let tie = 0;
    let compChoose;
    let lose = 'computers score :';
    let win = 'your score';
    let friendship = 'tie : ';
function rock() {

    const randomNumber = Math.random();
         let choose;
         if (0 <= randomNumber && randomNumber < 1/3 ){                    //choose = 1  rock
            choose = 1;
            compChoose = 'computer picked rock,';
         } else if ( 1/3 < randomNumber && randomNumber < 2/3) {           //chose = 2  paper
            choose = 2;
            compChoose = 'computer picked paper,' ;
         } else {                            
            choose = 3;                                                     //choose = 3  scissors
            compChoose = 'computer picked scissors,';                                                    
         }

         if(choose === 1) {
            alert('tie!!');
            tie = tie + 1;
         } else if(choose === 2) {
            alert('Haha you loose!!');
            comp=comp + 1
         } else {
            alert('you win!!');
            player = player + 1;
         } 
         
}


function paper() {

    const randomNumber = Math.random();
         let choose;
         if (0 <= randomNumber && randomNumber < 1/3 ){                    //choose = 1  rock
            choose = 1;
            compChoose = 'computer picked rock,';
         } else if ( 1/3 < randomNumber && randomNumber < 2/3) {           //chose = 2  paper
            choose = 2;
            compChoose = 'computer picked paper,' ;
         } else {                            
            choose = 3;                                                     //choose = 3  scissors
            compChoose = 'computer picked scissors,';                                                    
         }

         if(choose === 1) {
            alert('you win!!');
            player = player + 1;
         } else if(choose === 2) {
            alert('tie!!');
            tie = tie + 1;
         } else {
            alert('haha you loose!!');
            comp=comp + 1
         }  

}


function scissors() {


    const randomNumber = Math.random();
         let choose;
         if (0 <= randomNumber && randomNumber < 1/3 ){                    //choose = 1  rock
            choose = 1;
            compChoose = 'computer picked rock,';
         } else if ( 1/3 < randomNumber && randomNumber < 2/3) {           //chose = 2  paper
            choose = 2;
            compChoose = 'computer picked paper,' ;
         } else {                            
            choose = 3;                                                     //choose = 3  scissors
            compChoose = 'computer picked scissors,';                                                    
         }

         if(choose === 1) {
            alert('haha you loose!!');
            comp=comp + 1
         } else if(choose === 2) {
            alert('you win!!');
            player = player + 1;
         } else {
            alert('tie!!');
            tie = tie + 1;
         } 

         

}







