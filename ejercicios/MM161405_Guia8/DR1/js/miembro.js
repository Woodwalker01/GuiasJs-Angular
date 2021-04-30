//Registrar evento click al presionar el botón de envío
function iniciar(){
    var btnenviar = document.getElementById("btnSend");
    //Al producirse un click sobre el botón de envío
    //invocar los métodos del objeto carro que mostrarán
    //los valores ingresados en el formulario

 





    if(btnenviar.addEventListener){
    btnenviar.addEventListener("click", function(){
    var chkvalue, nuevousuario;
    var radiofield = document.frmmat.elements["chkgender"];
    for(var i=0; i<radiofield.length; i++){
    if(radiofield[i].checked){
    chkvalue = radiofield[i].value;
    }
    }
   
   nuevousuario = new miembro(document.frmmat.txtname.value, document.frmmat.txtlastname.value, document.frmmat.txtlastname2.value,document.frmmat.txtage.value, document.frmmat.txtemail.value, chkvalue);

  


    nuevousuario.registrar();
   
    nuevousuario.imprimir();
    }, false);
    }
    else{
    btnenviar.attachEvent("onclik", function(){
    var chkvalue, nuevousuario;
    var radiofield = document.frmmat.elements["chkgender"];
    for(var i=0; i<radiofield.length; i++){
    if(radiofield[i].checked){
    chkvalue = radiofield[i].value;
    }
    }
   
   nuevousuario = new miembro(document.frmmat.txtname.value, document.frmmat.txtlastname.value,document.frmmat.txtlastname2.value,
   document.frmmat.txtage.value, document.frmmat.txtemail.value, chkvalue);

  
   

    nuevousuario.registrar();
    
    nuevousuario.imprimir();
    });
    }

    






   }
  
   function miembro(nombre, apellido, apellido2, edad, email, genero){
    //Propiedades de la clase
    this.nombre = nombre;
    this.apellido = apellido;
    this.apellido2 = apellido2;
    this.edad = edad;
    this.email = email;
 this.genero = genero;
 
 this.numCarnet = null;

 





 //Métodos de la clase
 this.registrar = function(){
     
   
 var fecha = new Date();
 var year = fecha.getFullYear();

 

 var numale = Math.floor(Math.random()*10000);

 //----------------------CARNET ------------------------------
 if(this.apellido2==""){
    this.numCarnet =  this.apellido.substring(0,1)+ this.apellido.substring(0,1)   + year + numale;
}else{
 this.numCarnet =  this.apellido.substring(0,1)+ this.apellido2.substring(0,1)  + year + numale;
}
}

 //-------------------TABLA--------------------------------
 this.imprimir = function(){
 document.write("<!DOCTYPE html>\n");
 document.write("<html lang=\"es\">\n");
 document.write("<head>\n\t");
 document.write("<title>Usuario Registrado</title>\n");
 document.write("<meta charset=\"utf-8\" />");
 document.write("<link rel=\"stylesheet\" href=\"css/info.css\"/>\n");
 document.write("</head>\n");
 document.write("<body>\n");
 document.write("<table class=\"carinfo\"><tr>\n");
 document.write("<th colspan=\"2\">Datos del Usuario</th>\n");
 document.write("<tr><td>Carnet: </td>\n");
 document.write("<td>" + this.numCarnet + "</td></tr>\n");
 document.write("<tr><td>Nombre: </td>\n");
 document.write("<td>" + this.nombre + " " + this.apellido + " " + this.apellido2 + "</td></tr>\n");


 document.write("<tr><td>Edad: </td>\n");
 document.write("<td>" + this.edad + "</td></tr>\n");

 document.write("<tr><td>Email: </td>\n");
 document.write("<td>" + this.email + "</td></tr>\n");

 document.write("<tr><td>Género: </td>\n");
 document.write("<td>" + this.genero + "</td></tr>\n");

 document.write("</tr></table>\n");
 document.write("</head>\n");
 document.write("</html>\n");
 }
 this.formato = function(valor){
 if(valor<10) valor = "0" + valor;
 return valor;
 }
}
//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
 window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 window.attachEvent("onload", iniciar);
}
   