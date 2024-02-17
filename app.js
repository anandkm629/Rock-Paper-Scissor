function getComputerChoice(){
    const randnum = Math.floor(Math.random()*3+1);
    let Com_choice;

    if(randnum==1){
        Com_choice="rock";
    }
    else if(randnum==2){
        Com_choice="paper";
    }
    else {
        Com_choice="scissor";
    }
    return Com_choice;
}

function playGame(numOfRounds){
    let Cscore=0;
    let Pscore=0;

    for(let i=0;i<numOfRounds;i++){

        let playerChoice=prompt("Choose! rock , paper , scissor");
        let ComputerChoice=getComputerChoice();
        console.log(playerChoice);
        console.log(ComputerChoice);

        if(playerChoice.toLowerCase()=="rock"){

            if(ComputerChoice=="scissor"){
                Pscore+=1;
                alert(`Computer:${ComputerChoice} , Player Choice:${playerChoice} You WIN! ---->Score:${Cscore}/${Pscore}`); 
            }
            else if(ComputerChoice=="paper"){
                Cscore+=1;
                alert(`Computer:${ComputerChoice} , Player Choice:${playerChoice} You LOSE! ---->Score:${Cscore}/${Pscore}`);
            }
            else{
                alert(`Computer:${ComputerChoice} , Player Choice:${playerChoice} Its a Tie! ---->Score:${Cscore}/${Pscore}`);
            }
        }
        else if(playerChoice.toLocaleLowerCase()=="paper"){
            
            if(ComputerChoice=="rock"){
                Pscore+=1;
                alert(`Computer:${ComputerChoice} , Player Choice:${playerChoice} You WIN! ---->Score:${Cscore}/${Pscore}`);
            }
            else if(ComputerChoice=="scissor"){
                Cscore+=1;
                alert(`Computer:${ComputerChoice} , Player Choice:${playerChoice} You LOSE! ---->Score:${Cscore}/${Pscore}`);
            }
            else {
                alert(`Computer:${ComputerChoice} , Player Choice:${playerChoice} Its a Tie! ---->Score:${Cscore}/${Pscore}`);
            }
        }
        else if(playerChoice.toLocaleLowerCase()=="scissor"){
            if(ComputerChoice == "paper"){
                Pscore+=1;
                alert(`Computer: ${ComputerChoice} , Player Choice: ${playerChoice} You WIN! -----> Score: ${Cscore} / ${Pscore}`);
             }else if(ComputerChoice == "rock"){
                 Cscore+=1;
                 alert(`Computer: ${ComputerChoice} , Player Choice: ${playerChoice} You Lose! -----> Score: ${Cscore} / ${Pscore}`);
             }else{
                 alert(`Computer: ${ComputerChoice} , Player Choice: ${playerChoice} Its A Tie! -----> Score: ${Cscore} / ${Pscore}`);
             }
        }

    }

    if (Cscore > Pscore ){
        alert("COMPUTER WINS!");
    }else if(Pscore > Cscore){
        alert("YOU WIN!");
    }else{
        alert("It's A tie!");
    }
}
playGame(5);