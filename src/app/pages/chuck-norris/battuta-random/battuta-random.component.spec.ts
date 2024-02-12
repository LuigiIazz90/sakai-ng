import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattutaRandomComponent } from './battuta-random.component';

describe('BattutaRandomComponent', () => {
  let component: BattutaRandomComponent;
  let fixture: ComponentFixture<BattutaRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BattutaRandomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BattutaRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
