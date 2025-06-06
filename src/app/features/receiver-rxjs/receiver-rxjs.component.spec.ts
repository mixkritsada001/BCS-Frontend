import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverRxjsComponent } from './receiver-rxjs.component';

describe('ReceiverRxjsComponent', () => {
  let component: ReceiverRxjsComponent;
  let fixture: ComponentFixture<ReceiverRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiverRxjsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
