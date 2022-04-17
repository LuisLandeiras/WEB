function area(a){
    return Math.floor(Math.PI * a * a);
}
function areaciclo(){
    for(var i = 2; i <= 10; i++){
        console.log(area(i));
    }
}
function calcarea(){
    let r = document.getElementById("radius").value;
    document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + area(r);
}
function text(){
    for (var i = 2; i <= 10; i++) {
        document.getElementById("text").value = document.getElementById("text").value + area(i) + "\n";
    }
}