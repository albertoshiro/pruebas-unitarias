import { Injectable } from '@angular/core';
import { ValueService } from './value.service'; 
//ejemplo de servicio con dependencias 

@Injectable({
  providedIn: 'root'
})
export class MasterService {
//aca se inyecta
  constructor(
    private valueService : ValueService
  ) { 
  }

  getValue(){
    return this.valueService.getValue();
  }
}
