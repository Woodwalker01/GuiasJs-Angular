console.log("Mi Mensaje");
var full_nombre:string = "jorge cano";
var age:number = 27;
var developer:boolean = true;
var skills:Array<String> = ['JavaScript','TypeScript','Angular'];
var numberArray:number[] = [123,123,1213,1231];
enum Role {Employee, Manager, Admin, Developer }
var role:Role = Role.Employee
functionhello():void {
}
functionsetName(name:string):void{
}
functionsetName(name:string, surName:string ):string {return"string";
}
// Teniendo la función
functionsetName(name:string):string{
    var variableInterna:string = "Uriel";
    return"Hola" + name;
   }
   // No se puede acceder a la variable Interna console.log("Hola" + variableInterna );
   // Teniendo la misma función pero con la variable fuera de ella
var variableExterna:string = "Uriel";
functionsetName(name:string):string{
 // Accedemos a la variable externa usando "this" this.variableExterna = name;
 return"Hola" + name;
}
// Desde aquí podemos igualmente acceder a la variable
console.log("Hola" + variableExterna );