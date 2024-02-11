import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompBadgePage } from './comp-badge.page';

describe('CompBadgePage', () => {
  let component: CompBadgePage;
  let fixture: ComponentFixture<CompBadgePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CompBadgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
