import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonClickEvent, RadioButtonModule } from 'primeng/radiobutton';
import { IOptionDropdown } from '../../models/dropdown.model';
@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [RadioButtonModule, CommonModule, FormsModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
})
export class RadioButtonComponent {
  @Input() id!: string;
  @Input() value!: any;
  @Input() options!: IOptionDropdown[];
  @Input() disable: boolean = false;
  @Input() canBeNull: boolean = false;
  @Input() noWrap: boolean = false;
  @Output() onChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick(Event: RadioButtonClickEvent): void {
    console.log('Event', Event);
    this.value = Event.value;
    this.onChange.emit(this.value);
  }
}
