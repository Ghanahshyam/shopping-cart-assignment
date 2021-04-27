import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryOverviewCardComponent } from './category-overview-card.component';

describe('CategoryOverviewCardComponent', () => {
  let component: CategoryOverviewCardComponent;
  let fixture: ComponentFixture<CategoryOverviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryOverviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
