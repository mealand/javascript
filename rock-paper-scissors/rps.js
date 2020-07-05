function playerschoice(){
    let player_rock = document.getElementById("rock-button").value;
    let player_paper = toString(document.getElementsByName("paper").value);
    let player_scissors = document.getElementById("scissors-button").value;

    let compt_rock;
    let compt_paper;
    let compt_scisoors;

    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    let range = Math.floor(Math.random() * 3);

    if (rock == player_rock){
        alert(player_rock);
        //document.getElementById("choose-img").src = "http://sprezzint.com/wp-content/uploads/2020/06/rock1.jpg";
    }
    else if (paper == "paper") {
        alert("paper");
        //document.getElementById("choose-img").src = "http://sprezzint.com/wp-content/uploads/2020/06/paper1.jpg";
    }
    else if (scissors == player_scissors){
        document.getElementById("choose-img").src = "http://sprezzint.com/wp-content/uploads/2020/06/scissors1.jpg";
    }
    else{
        alert("Please Make a choice between Rock, Paper and Scissors")
    }

}