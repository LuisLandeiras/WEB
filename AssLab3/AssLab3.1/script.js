let catchphrase = ["Ay Caramba!", "D'Oh!", "Avengers Assemble!", "Hulk Smash!"];

function quote(){
    var bart = document.getElementById("bart");
    var homer = document.getElementById("homer");
    var captain = document.getElementById("captain");
    var hulk = document.getElementById("hulk");
    
    if(bart.checked){
        document.getElementById("print").innerHTML = " ";
        document.getElementById("print").innerHTML = document.getElementById("print").innerHTML + catchphrase[0];

    }
    if(homer.checked){
        document.getElementById("print").innerHTML = " ";
        document.getElementById("print").innerHTML = document.getElementById("print").innerHTML + catchphrase[1];
    }
    if(captain.checked){
        document.getElementById("print").innerHTML = " ";
        document.getElementById("print").innerHTML = document.getElementById("print").innerHTML + catchphrase[2];
    }
    if(hulk.checked){
        document.getElementById("print").innerHTML = " ";
        document.getElementById("print").innerHTML = document.getElementById("print").innerHTML + catchphrase[3];
    }
}