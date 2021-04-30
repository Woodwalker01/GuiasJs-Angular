class Rombo {
   diagonalVertical:number;
   diagonalHorizontal:number;
   calcularArea():number{
     return this.diagonalHorizontal*this.diagonalVertical;
 
   };
   constructor (diagonalVertical:number, diagonalHorizontal:number){
     this.diagonalVertical=8;
     this.diagonalHorizontal=5;

   }
   document.write(diagonalHorizontal*diagonalVertical);
}