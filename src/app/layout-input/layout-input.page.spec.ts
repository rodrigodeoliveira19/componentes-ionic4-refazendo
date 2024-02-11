import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutInputPage } from './layout-input.page';

describe('LayoutInputPage', () => {
  let component: LayoutInputPage;
  let fixture: ComponentFixture<LayoutInputPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LayoutInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
