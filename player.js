var video=null;

var btn1;
var btn2;
var btn3;
var btn4;
var btn5;
var btn6;
var btnback;

var player =
{
    videoPlaying:0,
    currentTime:0,
}

function initPlayer()
{
    console.log("Entramos");
    video = document.getElementById("myVideo");
    btn1 = document.getElementById("btn1");
    btn2 = document.getElementById("btn2");
    btn3 = document.getElementById("btn3");
    btn4 = document.getElementById("btn4");
    btn5 = document.getElementById("btn5");
    btn6 = document.getElementById("btn6");
    btnback = document.getElementById("btnback");

    video.ontimeupdate = function()
    {
        player.currentTime = video.currentTime;

        if (player.currentTime >=2 && player.videoPlaying == 0)
        {
            displaybuttons();
        } 
    };

    btn1.onclick = function() {

        video.src = "Video_Ejemplo.mp4";
        btnback.style.display = "block";
        player.videoPlaying = 1; 
    }
}

function hidenbuttons(){
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
    btn5.style.display = "none";
    btn6.style.display = "none";
}
function displaybuttons(){

    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
    btn4.style.display = "block";
    btn5.style.display = "block";
    btn6.style.display = "block";
}



/*Por medio de la variable video accecer al tiempo*/
/*Ontime Update*/
