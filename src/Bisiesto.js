function Bisiestoentre400(numero) {
  if(numero%400==0)
   return numero,"Es bisiesto";
};
function NoBisesto100(numero){
    if(numero%100==0 && numero%400!=0)
      return numero,"No es bisiesto";
}


export {Bisiestoentre400,NoBisesto100};
