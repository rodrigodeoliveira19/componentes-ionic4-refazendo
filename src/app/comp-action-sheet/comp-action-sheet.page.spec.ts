import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompActionSheetPage } from './comp-action-sheet.page';

describe('CompActionSheetPage', () => {
  let component: CompActionSheetPage;
  let fixture: ComponentFixture<CompActionSheetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CompActionSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
