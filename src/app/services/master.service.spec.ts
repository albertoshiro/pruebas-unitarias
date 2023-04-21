import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
 
  
  it('should be return "My value" fron real service', () => {
    let valueService = new ValueService();
    let masterService = new MasterService(valueService);    

    expect(masterService.getValue()).toBe('my value');
  });
});
