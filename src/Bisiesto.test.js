import {Bisiestoentre400,NoBisesto100,BisiestoEntre4} from "./Bisiesto.js";

describe("Ver si es divisible entre 400", () => {
  it("Deberia identificar si es divisible entre 400", () => {
    expect(Bisiestoentre400(1600)).toEqual("Es bisiesto");
  });
  it("Deberia Mostrar cuando un anio no es bisiesto",()=>{
    expect(NoBisesto100(1000)).toEqual("No es bisiesto");
  });
  it("Deberia saber si un cualquier anio es bisiesto o no",()=>{
    expect(BisiestoEntre4(2012)).toEqual(true);
  })
  it("Deberia saber si un cualquier anio no es bisiesto o no",()=>{
    expect(BisiestoEntre4(2010)).toEqual(false);
  })
});

  
