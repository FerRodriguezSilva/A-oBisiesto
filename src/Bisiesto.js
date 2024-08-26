function Bisiestoentre400(numero) {
  if(numero%400==0)
   return numero,"Es bisiesto";
};
function NoBisesto100(numero){
    if(numero%100==0 && numero%400!=0)
      return numero,"No es bisiesto";
}
function BisiestoEntre4(numero){
 let con=true;
  if(numero%4==0)
    con=true
  else con=false

  return con;

}

export {Bisiestoentre400,NoBisesto100,BisiestoEntre4};
