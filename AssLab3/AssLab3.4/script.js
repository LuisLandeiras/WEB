function registar(){
    let numero = prompt("Introduza o número de registos");
    let registo = [];
    for(let i = 0; i < numero; i++){
        let nome = prompt("Introduza o nome");
        let idade = prompt("Introduza a idade");
        let registo1 = {nome, idade: parseInt(idade)};
        registo.push(registo1);
    }

    var maior = -1;
    for(let i = 0; i < registo.length; i++){
        if(registo[i].idade > maior){
            maior = registo[i].idade;
        }
    }
    let menor = 999999;
    for(let i = 0; i < registo.length; i++){
        if(registo[i].idade < menor){
            menor = registo[i].idade;
        }
    }
    let aux = 0;
    for(let i = 0; i < registo.length; i++){
        aux = aux + registo[i].idade;
    }
    let media = aux / registo.length;

    document.getElementById("participantes").innerHTML = document.getElementById("participantes").innerHTML + registo.length;
    document.getElementById("media").innerHTML = document.getElementById("media").innerHTML + media;
    document.getElementById("minimo").innerHTML = document.getElementById("minimo").innerHTML + menor;
    document.getElementById("maximo").innerHTML = document.getElementById("maximo").innerHTML + maior;
    
    
    
}