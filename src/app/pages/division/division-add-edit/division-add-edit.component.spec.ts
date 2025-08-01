import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionAddEditComponent } from './division-add-edit.component';

describe('DivisionAddEditComponent', () => {
  let component: DivisionAddEditComponent;
  let fixture: ComponentFixture<DivisionAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisionAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
