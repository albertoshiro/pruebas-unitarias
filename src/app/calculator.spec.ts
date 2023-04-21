import { Calculator } from './calculator';

describe('Pruebas para calculator',()=>{
//set de pruebas 
    describe("Test for multiply", ()=>{
        it('#should return a nine',()=>{
            //AAA
            //Arrange, que e slo que se necesita para correr nuestra prueba  
            //en este caso necesitamos una instancia de la clase "Calculadora"
            const calculator = new Calculator();
    
            //Act, ejecutar el codigo a probar o como deberia actuar 
            const rta = calculator.multiply(3,3);
    
            //Assert, lo que esperas se lleve a cabo a ejecutar el codigo 
            //existen muchos uno de ellos uno de ellos  el "toEqual" , se puene negar algunos de ellos
            expect(rta).toEqual(9);
        });
    
        //Se deben colocar varios esenarios de prueba, aun no se sabe como se tendria que hacer.
        it('#should return a four',()=>{
            //AAA
            //Arrange,
            const calculator = new Calculator();    
            //Act, 
            const rta = calculator.multiply(1,4);    
            //Assert, 
            expect(rta).toEqual(4);
            }
        );



    });
    
    describe("Test for divide",()=>{
        //Se deben colocar varios esenarios de prueba, aun no se sabe como se tendria que hacer.
        it('#should return a some numbers',()=>{
            //AAA
            //Arrange,
            const calculator = new Calculator();    
            //Act como Assert juntos 
            expect( calculator.divide(6,3)).toEqual(2);
            expect( calculator.divide(5,1)).toEqual(5);
            }
        );

        it("tests Matchers",()=>{
            const name = "nicolas";
            let name2;

            expect(name).toBeDefined();
            expect(name2).toBeUndefined();
            //con toBeTruethy se puede evaluar si es true o false
            expect(1 + 3 === 4).toBeTruthy();
            expect(1 + 1 === 3).toBeFalse();

            //toBeLessThan es para evaluar si es menor que
            expect(5).toBeLessThan(10);
            expect(20).toBeGreaterThan(10);

            //toMatch es para evaluar si es igual a una expresion regular
            expect('123456').toMatch(/123/);
            //toContain es para evaluar si un arreglo contiene un elemento
            expect(['apples','oranges','pears']).toContain('oranges');
    }   );
    });

    

});
