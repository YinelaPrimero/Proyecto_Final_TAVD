var video=null;
var tiempoDeReproduccion=0;
/*var Player
{
    videoPlaying=0;
    timer=0;
}*/

function initPlayer()
{
    console.log("Entramos");
    video = document.getElementById("myVideo");

}

function GetTime()
{
    tiempoDeReproduccion = video.currentTime;
    console.log(tiempoDeReproduccion);
}

/*Por medio de la variable video accecer al tiempo*/
/*Ontime Update*/
