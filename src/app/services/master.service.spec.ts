import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
 
  
  it('should be return "My value" fron real service', () => {
    let valueService = new ValueService();
    let masterService = new MasterService(valueService); 
    expect(masterService.getValue()).toBe('my value');
  });

  it('should be return "other value" fron the fake service', () => {
    let valueService = new ValueService();
    let masterService = new MasterService(valueService); 
    expect(masterService.getValue()).toBe('my value');
  });
});
