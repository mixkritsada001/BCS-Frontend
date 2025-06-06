import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCaseComponent } from './rxjs-case.component';

describe('RxjsCaseComponent', () => {
  let component: RxjsCaseComponent;
  let fixture: ComponentFixture<RxjsCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
