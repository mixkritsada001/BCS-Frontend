import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { IOptionDropdown } from '../../models/dropdown.model';
@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, DropdownModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input() id!: string;
  @Input() value!: any;
  @Input() options!: IOptionDropdown[];
  @Input() header!: string;
  @Input() placeHolder: string = 'Select';
  @Input() addClass: string = '';
  @Input() disable: boolean = false;
  @Input() isInvalid: any = false;
  @Input() isFull: any = false;
  @Input() errorMessage: any = 'required';
  @Output() onChange = new EventEmitter<string>();
  @Input() filter: boolean = false;

  ngOnInit() {}

  onSeleteChange(Event: DropdownChangeEvent): void {
    console.log('onSeleteChange :', Event.value);
    this.value = Event.value;
    this.onChange.emit(this.value);
  }
}
