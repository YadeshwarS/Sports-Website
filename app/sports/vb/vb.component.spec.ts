import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VbComponent } from './vb.component';

describe('VbComponent', () => {
  let component: VbComponent;
  let fixture: ComponentFixture<VbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
