var playerMoney = 10;
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    window.alert("Welcome to Robot Gladiators");
}

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " Attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
        );
    

// check ememy's health 
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    
    }else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }

// remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

//check player's health
if (playerHealth <= 0){
    window.alert(playerName + " has died!");

} else {
    window.alert(playerName + " still has " + playerHealth + " health left. ");
}

//if player chooses to skip
}else if (promptFight === " skip " || promptFight === "SKIP"){
     //confirm player wants to skip
 var confirmSkip = window.confirm("Are you sure you'd like to quit?");

if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      playerMoney = playerMoney - 2;
  }

else {
    fight();
}
}