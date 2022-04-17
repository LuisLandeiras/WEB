let nome = ["Triãngulo", "Quadrilatero", "Pentagono", "Hexagono", "Heptagono", "Octagono", "Eneagono", "Decagono"];

function poligono(){
    var valor = document.getElementById("valor").value;
    switch(valor){
        case "3":
            document.getElementById("print").innerHTML = " ";
            document.getElementById("print").innerHTML = nome[0];
            break;
        case "4":
            document.getElementById("print").innerHTML = " ";
            document.getElementById("print").innerHTML = nome[1];
            break;
        case "5":
            document.getElementById("print").innerHTML = " ";
            document.getElementById("print").innerHTML = nome[2];
            break;
        case "6":
            document.getElementById("print").innerHTML = " ";
            document.getElementById("print").innerHTML = nome[3];
            break;
        case "7":
            document.getElementById("print").innerHTML = " ";
            document.getElementById("print").innerHTML = nome[4];
            break;
        case "8":
            document.getElementById("print").innerHTML = " ";
            document.getElementById("print").innerHTML = nome[5];
            break;
        case "9":
            document.getElementById("print").innerHTML = " ";
            document.getElementById("print").innerHTML = nome[6];
            break;
        case "10":
            document.getElementById("print").innerHTML = " ";
            document.getElementById("print").innerHTML = nome[7];
            break;
        default:
            document.getElementById("print").innerHTML = " ";
            document.getElementById("print").innerHTML = "Não existe";
    }
}