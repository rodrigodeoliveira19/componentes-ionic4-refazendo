import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTodoconahackPage } from './app-todoconahack.page';

describe('AppTodoconahackPage', () => {
  let component: AppTodoconahackPage;
  let fixture: ComponentFixture<AppTodoconahackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppTodoconahackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
