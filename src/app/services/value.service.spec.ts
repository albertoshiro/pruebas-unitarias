import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;
  beforeEach(()=>{
    //el codigo de aca se ejecutara antes de ejecutar cada prueba, por ejemplo crear el objeto que se utilizara en cada prueba 
    service = new ValueService();
  });

  //cada it es un ecsenario de prueba, y cada una es independiente de otra , es decir lo qu salga de una prueba no puede ser utilizada en otra
  //lo que se hace es que se crea una instancia de la clase que se va a probar
  //ver si el servicio fue creado de forma exitosa
  it('should be created',()=>{    
    expect(service).toBeTruthy();
  });


  describe("Tests for  get value",()=>{    
    //Arrenge
    it('Should return "My value"',()=>{
      expect(service.getValue()).toBe('my value');
    });   
  });

  describe('Tests for setValue',()=>{
    it("Should change the value ",()=>{
      expect(service.getValue()).toBe('my value');
      service.setValue('change');
      expect(service.getValue()).toBe('change');
    });
  })

  //para probar metodos asincronos se utiliza el metodo "doneFn" que se pasa como parametro a la funcion "it", 
  //luego la colocaras el doneFn() al final de la prueba o donde quieras que termine la prueba 
  describe('Tests for getPromiseValues',()=>{
    
    it('Should return "Promise value" from promise',(doneFn)=>{
      service.getPromiseValue().then((value) =>{
        expect(value).toBe('Promise value');
        //aca es cuando necesito que termines la prueba 
        doneFn();
      });
    });

    //otro metodo asincrono, pero ahora utilizando async , luce mas facil de leer
    it('should return "promise value" from promise ',async()=>{
      const rta =await service.getPromiseValue();
      expect(rta).toBe('Promise value');
    })

  })

  //pruebas a observables 
  describe('Test for Observable',()=>{
    it('it should return "observable value" from observable',(donefn)=>{
      service.getObservableValue().subscribe((value)=>{
        expect(value).toBe('Observable value');
        donefn();
      });
    });
  })

});
