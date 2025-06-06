import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderRxjsComponent } from './sender-rxjs.component';

describe('SenderRxjsComponent', () => {
  let component: SenderRxjsComponent;
  let fixture: ComponentFixture<SenderRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenderRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
