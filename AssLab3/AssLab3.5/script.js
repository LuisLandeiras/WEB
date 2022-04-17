var clickedTime = 0;
var reactionTime = 999999999;
var createdTime = 0;

function randomcolor(){
    var color = ["red","blue","green","yellow","orange","purple","pink","black"];
    var codColor;
    codColor = Math.random();
    codColor = Math.floor(codColor*8);
    document.getElementById("divbox").style.backgroundColor = color[codColor];
}

function randomshape(){
    var shape = ["circle","square","triangle","rectangle"];
    var codShape;
    codShape = Math.random();
    codShape = Math.floor(codShape*4);
    document.getElementById("divbox").style.borderRadius = shape[codShape];
}

function makebox(){
    var divbox = document.getElementById("divbox");
    divbox.style.display = "block";
    divbox.style.marginLeft = Math.floor(Math.random() * 600) + "px";
    divbox.style.marginTop = Math.floor(Math.random() * 300) + "px";
    divbox.style.backgroundColor = randomcolor();
    divbox.style.borderRadius = randomshape();
    createdTime = Date.now();
}

function clicked(){
    clickedTime = Date.now();
    var timeDifference = (clickedTime - createdTime) / 1000;
    if(timeDifference < reactionTime) {
        reactionTime = timeDifference;
    }
    document.getElementById("reactionTime").innerHTML = timeDifference;
    document.getElementById("recordTime").innerHTML = reactionTime;
    clickedTime = 0; 
}
