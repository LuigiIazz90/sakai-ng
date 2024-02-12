import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElixirDetailComponent } from './elixir-detail.component';

describe('ElixirDetailComponent', () => {
  let component: ElixirDetailComponent;
  let fixture: ComponentFixture<ElixirDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElixirDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElixirDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
