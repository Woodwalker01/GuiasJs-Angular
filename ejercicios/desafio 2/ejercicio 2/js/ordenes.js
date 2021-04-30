//Iniciando el manejador para los enlaces de la página.
function inicio(){
 
}
    
  
        
        function capturar()
    {
     
        var CM1=document.getElementById("C1");
        var CM2=document.getElementById("C2");
        var CM3=document.getElementById("C3");
        var Chkb=document.getElementsByName("chk");
        var Chkb1=document.getElementsByName("chk")[0].id;
        var pedido;
        var nom=["Ensalada",",Papas Frita",",Pieza de pollo grande",",Pieza de pollo pequeña",",Bebida grande",",bebida mediana",",bebida pequeña",",cafe",",postre"];
        /* var ide= document.getElementById("Ensalada") */
        if(CM1.checked){
            var suma=parseFloat(CM1.value);
            var pedido="Super Combo,";
        }
        else if(CM2.checked){
            var suma=parseFloat(CM2.value);
            var pedido="Combo personal,";
        }
        else if(CM3.checked){
            var suma=parseFloat(CM3.value);
            var pedido="Combo Infantil,";
        }
        else{
            suma=0;
            var pedido="";    
        }
        var long=Chkb.length;
        for(i=0;i<Chkb.length;i++){
            if(Chkb[i].checked){
            suma=suma+(parseFloat(Chkb[i].value));
            pedido= pedido+nom[i] ; 
        }
        else{
            long=long-1;
        }    
        }
        
        var tot=document.getElementById("total").value="$"+suma+"";
        document.getElementById("pedido").innerHTML=pedido;
   }

    
  


   
   