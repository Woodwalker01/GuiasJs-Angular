//Registrar evento click del ratón al presionar botones de envío
function iniciar(){
    var btnarea = document.getElementById("area");
    var btnperim = document.getElementById("perimetro");
    if(btnarea.addEventListener){
    btnarea.addEventListener("click", calculararea, false);
    }
    else{
    btnarea.attachEvent("onclick", calculararea);
    }
    if(btnperim.addEventListener){
    btnperim.addEventListener("click", calcularperimetro, false);
    }
    else{
    btnperim.attachEvent("onclick", calcularperimetro);
    }
   }
   function calculararea(){
    var rect = new potencias(document.frmrectangulo.txtbase.value, document.frmrectangulo.txtaltura.value);
    rect.mostrar(rect.carea(), "Potencia");
    return false;
   }
   function calcularperimetro(){
    var peri = new potencias(document.frmrectangulo.txtbase.value, document.frmrectangulo.txtaltura.value);
    peri.resultado=Math.pow(document.frmrectangulo.txtbase.value,document.frmrectangulo.txtaltura.value);
    peri.Res(peri.base,document.frmrectangulo.txtaltura.value,peri.resultado);
    return false;
    
   }
   //Creando una clase rectángulo
   function potencias(base, potencia, resultado){
    //Propiedades de la clase
    this.base = parseFloat(base);
    this.altura = parseFloat(potencia);
  
    //Métodos de la clase
    //definidos usando el constructor Function()
    this.carea = new Function("return Math.pow(this.base,this.altura)");
    this.cperimetro = new Function("return 2*this.base + 2*this.altura");
    this.Res = new Function("valor","valor2","tipoc","alert('base: ' + valor + ' potencia: ' + valor2 +' Resultado:' + tipoc)");
    this.mostrar = new Function("valor","tipoc","alert('El ' + tipoc + ' es: ' + valor)");
   }
   //Asociando función que manejará el evento load al cargar la página
   if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
   }
   else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
   }
      