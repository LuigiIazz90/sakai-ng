import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaFilmsComponent } from './ricerca-films.component';

describe('RicercaFilmsComponent', () => {
  let component: RicercaFilmsComponent;
  let fixture: ComponentFixture<RicercaFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RicercaFilmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RicercaFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
