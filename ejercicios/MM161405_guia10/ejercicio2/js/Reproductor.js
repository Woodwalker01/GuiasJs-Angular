window.addEventListener('load', () =>{
    //Almaceno las canciones en un array
    var canciones = ["jojos","bananas","mocca","say my name"];
    //Indice de la cancion por defecto a 0
    var current = 0;
    //Objeto con referencia a la etiqueta audio     
    myAudio = document.querySelector("#myAudio");
    //Objeto con referencia al boton play
    playBtn = document.querySelector("#play");
    //Objeto con referencia al boton pause
    pauseBtn = document.querySelector("#pause");
    //Objeto con referencia al boton stop
    stopBtn = document.querySelector("#stop");
    //Objeto con referencia al boton anterior
    anteriorBtn = document.querySelector("#anterior");
    //Objeto con referencia al boton siguiente
    siguienteBtn = document.querySelector("#siguiente");

    //Funciones del reproductor de musica
    playBtn.addEventListener('click', function play(){
        //Cambia la cancion
        myAudio.innerHTML = "<source src='Canciones/"+canciones[current]+".mp3' type='audio/mpeg'>";
        console.log(myAudio);
        //Carga la cancion
        myAudio.load();
        //Reproduce la canción
        myAudio.play();
        document.querySelector("#musicaactual").innerHTML = "Reproduciendo ahora: "+canciones[current];
    });

    pauseBtn.addEventListener('click', function pause(){
        //Pausar canción
        myAudio.pause();
    });

    stopBtn.addEventListener('click', function stop(){
        //Pausar canción
        myAudio.pause();
        //El contador lo dejo a 0 para que empieze desde nuevo
        myAudio.currentTime = 0;
    });

    anteriorBtn.addEventListener('click', function anterior(){
        if(current > 0){
            current--;

        }
        myAudio.play();

    });

    siguienteBtn.addEventListener('click', function siguiente(){
        if(current < canciones.length-1){
            current++;
        }

        myAudio.play();

    });
});