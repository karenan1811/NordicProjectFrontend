import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuggestionComponent } from './updatesuggestion.component';

describe('UpdatesuggestionComponent', () => {
  let component: UpdateSuggestionComponent;
  let fixture: ComponentFixture<UpdateSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
