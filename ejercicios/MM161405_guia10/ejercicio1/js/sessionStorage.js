function clickCounter(){
    if(typeof(Storage) !== "undefined"){
        if(sessionStorage.clickCounter){
        sessionStorage.clickCounter=Number(sessionStorage.clickCounter)+1;
    }else{
        sessionStorage.clickCounter=1;
    }
    document.getElementById("resultado").innerHTML="ha hecho click en el botton "+ sessionStorage.clickCounter+" veces.";
} else {
    document.getElementById("resultado").innerHTML="Lo s iento, su navegador no soporta Storage...";
}
}
