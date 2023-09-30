import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHomeComponent } from './sub-home.component';

describe('SubHomeComponent', () => {
  let component: SubHomeComponent;
  let fixture: ComponentFixture<SubHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubHomeComponent]
    });
    fixture = TestBed.createComponent(SubHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
