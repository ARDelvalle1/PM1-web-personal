// const sumar=(a,b)=>a+b;

const filtrar=(arr)=>arr.filter((num)=>num%2===0);

describe("La funcion filtrar",()=>{
    it("Debe estar definida",()=>{
        expect(filtrar).toBeDefined();
    });

    it("Debe retorna un array",()=>{
        expect(Array.isArray(filtrar([1,2,3,4,5,6]))).toBe(true);
    })
})

// describe("Este es mi primer grupo de test", () => {
//     it("El numero 2 debe ser igual al numero 2", () => {
//         expect(2).toEqual(2);
//     });
// });

// describe("La funcion sumar",()=>{

//     it("Debe estar definida",()=>{
//         expect(sumar).toBeDefined();
//     });

//     it("Debe sumar dos numeros enviados como argumentos",()=>{
//         expect(sumar(2, 2)).toBe(4);
//         expect(sumar(4, 4)).toBe(8);
//         expect(sumar(5, 0)).toBe(5);
//     });

//     it("Yo espero que dos objetos iguales sean iguales", ()=>{
//         expect({nombre: "Jorge"}).toEqual({nombre:"Jorge"});
//     })
// });

// Para numeros y string se utiliza toBe para comprobar su igualdad, pero para los objetos el "toBe" no funciona.
// Para comparar objetos y arrays se utliza toEqual

