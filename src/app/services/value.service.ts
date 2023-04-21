import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  private value ='my value';

  constructor() { }

  getValue(){
    return this.value;
  }
  //se generan valores 
  setValue(valor :string){
    this.value = valor;
  }
  getPromiseValue(){
    //una promesa que inmediatamente se resuelve
    return Promise.resolve('Promise value');
  }
  
  getObservableValue(){
    return of('Observable value');
  }
}
