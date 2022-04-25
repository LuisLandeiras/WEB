function equal(){
    var a = document.getElementById("pass").innerHTML;
    var b = document.getElementById("repitepass").innerHTML;
    if(b != a){
        alert("É necessário que as senhas sejam iguais");
    }
}