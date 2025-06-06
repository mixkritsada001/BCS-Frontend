import { Component } from '@angular/core';
import { SenderComponent } from '../sender-rxjs/sender-rxjs.component';
import { ReceiverComponent } from '../receiver-rxjs/receiver-rxjs.component';

@Component({
  selector: 'app-rxjs-case',
  standalone: true,
  imports: [SenderComponent, ReceiverComponent],
  templateUrl: './rxjs-case.component.html',
  styleUrl: './rxjs-case.component.scss',
})
export class RxjsCaseComponent {}
