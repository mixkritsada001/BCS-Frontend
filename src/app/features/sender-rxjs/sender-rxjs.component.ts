import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sender-rxjs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sender-rxjs.component.html',
  styleUrl: './sender-rxjs.component.scss',
})
export class SenderComponent {
  message: string = '';
  number: number = 0;

  constructor(private shared: SharedService) {}

  send() {
    this.shared.updateMessage(this.message);
  }

  sendNumber() {
    this.shared.emitNumber(this.number);
  }
}
