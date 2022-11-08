import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeSuggestionComponent } from './make-suggestion.component';

describe('MakeSuggestionComponent', () => {
  let component: MakeSuggestionComponent;
  let fixture: ComponentFixture<MakeSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeSuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
