
export class FakeValueService {

  constructor() { }

  getValue(){
    return "fake value";
  }
  //se generan valores 
  setValue(valor :string){
  }
  getPromiseValue(){
    //una promesa que inmediatamente se resuelve
    return Promise.resolve('Fake Promise value');
  }
}
