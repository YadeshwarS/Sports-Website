import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LjComponent } from './lj.component';

describe('LjComponent', () => {
  let component: LjComponent;
  let fixture: ComponentFixture<LjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
