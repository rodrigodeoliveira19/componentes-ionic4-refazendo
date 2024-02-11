import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompAlertPage } from './comp-alert.page';

describe('CompAlertPage', () => {
  let component: CompAlertPage;
  let fixture: ComponentFixture<CompAlertPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CompAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
