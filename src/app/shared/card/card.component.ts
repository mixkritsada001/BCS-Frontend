import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  ///Input > Output > ViewChild > ตัวแปรทั่วไป > constructor > lifecycle > methods
  @Input() id = '';
  @Input() number: number = 0;
  @Output() buttonClick = new EventEmitter<void>();
  @Output() numberButtonClick = new EventEmitter<number>();
  text: string = '';

  constructor() {}

  ngOnInit(): void {}
  onClick(): void {
    this.buttonClick.emit();
  }

  onNumberButtonClick(): void {
    this.numberButtonClick.emit(this.number);
  }
}
