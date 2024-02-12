import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaBattuteComponent } from './categoria-battute.component';

describe('CategoriaBattuteComponent', () => {
  let component: CategoriaBattuteComponent;
  let fixture: ComponentFixture<CategoriaBattuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaBattuteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaBattuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
