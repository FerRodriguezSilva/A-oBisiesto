import Bisiestoentre400 from "./Bisiesto.js";

describe("Ver si es divisible entre 400", () => {
  it("Deberia identificar si es divisible entre 400", () => {
    expect(Bisiestoentre400(1600)).toEqual("Es bisiesto");
  });
});
