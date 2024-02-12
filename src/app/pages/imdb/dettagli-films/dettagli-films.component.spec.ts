import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliFilmsComponent } from './dettagli-films.component';

describe('DettagliFilmsComponent', () => {
  let component: DettagliFilmsComponent;
  let fixture: ComponentFixture<DettagliFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettagliFilmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DettagliFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
