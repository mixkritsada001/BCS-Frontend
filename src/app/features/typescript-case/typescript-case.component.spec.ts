import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptCaseComponent } from './typescript-case.component';

describe('TypescriptCaseComponent', () => {
  let component: TypescriptCaseComponent;
  let fixture: ComponentFixture<TypescriptCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
