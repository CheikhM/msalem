import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSuppressionSalarieComponent } from './popup-suppression-salarie.component';

describe('PopupSuppressionSalarieComponent', () => {
  let component: PopupSuppressionSalarieComponent;
  let fixture: ComponentFixture<PopupSuppressionSalarieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupSuppressionSalarieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSuppressionSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
