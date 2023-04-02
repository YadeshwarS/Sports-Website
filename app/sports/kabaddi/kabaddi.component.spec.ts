import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabaddiComponent } from './kabaddi.component';

describe('KabaddiComponent', () => {
  let component: KabaddiComponent;
  let fixture: ComponentFixture<KabaddiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KabaddiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KabaddiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
