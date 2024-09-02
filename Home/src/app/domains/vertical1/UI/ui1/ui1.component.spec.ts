import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UI1Component } from './ui1.component';

describe('UI1Component', () => {
  let component: UI1Component;
  let fixture: ComponentFixture<UI1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UI1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UI1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
