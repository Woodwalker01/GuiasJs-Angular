var myVar = setInterval(reloj, 5000);
    function reloj() {
        var d = new Date();
        document.getElementById("reloj").innerHTML = d.toLocaleTimeString();
        console.log("han pasado 3 segundos");
        var myName = document.getElementById("nombre");
        var pais = document.getElementById("pais");
        var biografia= document.getElementById("Bio");
        //Verificar si se puede utilizar localStorage en el navegador
      
            localStorage.setItem("nombre", myName.value);
        localStorage.setItem("pais", pais.value);
        localStorage.setItem("Bio" ,biografia.value)
        
        console.log("Datos guardados en el localStorage.");  
        console.log(msg);
        //Mostrar al usuario mensaje de estado
        divState.innerHTML = "<p>" + msg + "</p>";
    }
 
 
 function save() {
    var myName = document.getElementById("nombre");
    var pais = document.getElementById("pais");
    var biografia= document.getElementById("Bio");
    //Verificar si se puede utilizar localStorage en el navegador
    try {
        localStorage.setItem("nombre", myName.value);
    localStorage.setItem("pais", pais.value);
    localStorage.setItem("Bio" ,biografia.value)
    myName.value = "";
    pais.value = "";
    biografia.value="";
    msg = "Datos guardados en el localStorage.";
    console.log(msg);
    //Mostrar al usuario mensaje de estado
    divState.innerHTML = "<p>" + msg + "</p>";
    }
    catch (e) {
    //Verificar si el límite de almacenamiento no se ha sobrepasado
    if (e >= QUOTA_EXCEEDED_ERR) {
   console.log("Error: Límite para almacenamiento local se ha alcanzado.");
    }
    else {
    console.log("Error: Guardando en el almacenamiento local.");
    }
    }
   }

   function obtain() {
    var msg = "Obteniendo el dato " + localStorage.key(0) + " y " +
    localStorage.key(1) + " desde el localStorage.";
     var myName = document.getElementById("nombre");
     var pais = document.getElementById("pais");
    var biografia=document.getElementById("Bio");
     console.log(msg);
   
     myName.value = localStorage.getItem("name");
     pais.value = localStorage.getItem("pais");
     document.getElementById("Bio").innerHTML=localStorage.getItem("Biografia");

     biografia.value=localStorage.getItem("Biografia");
    }
