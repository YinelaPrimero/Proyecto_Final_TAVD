var video=null;
var boton1;
var player =
{
    videoPlaying:0,
    currentTime:0,
}

function initPlayer()
{
    console.log("Entramos");
    video = document.getElementById("myVideo");
    boton1 = document.getElementById("boton1");

    video.ontimeupdate = function()
    {
        player.currentTime = video.currentTime;

        if (player.currentTime >=2 && player.videoPlaying == 0)
        {
            boton1.style.display="block";
        }
    };
}

/*Por medio de la variable video accecer al tiempo*/
/*Ontime Update*/
