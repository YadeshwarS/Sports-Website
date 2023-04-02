import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotputComponent } from './shotput.component';

describe('ShotputComponent', () => {
  let component: ShotputComponent;
  let fixture: ComponentFixture<ShotputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShotputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShotputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
