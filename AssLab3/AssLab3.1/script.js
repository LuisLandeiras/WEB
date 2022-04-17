let catchphrase = ["Ay Caramba!", "D'Oh!"];

function quote(){
    var bart = document.getElementById("bart");
    var homer = document.getElementById("homer");
    
    if(bart.checked){
        bart.innerHTML = catchphrase[0];
        document.getElementById("print").innerHTML = bart.innerHTML;
    }else{
        homer.innerHTML = catchphrase[1];
        document.getElementById("print").innerHTML = homer.innerHTML;
    }
}