import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textfield',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './textfield.component.html',
  styleUrl: './textfield.component.scss',
})
export class TextfieldComponent {
  @Input() id: string = '';
  @Input() placeHolder: string = 'Input';
  @Input() disable: boolean = false;
  @Input() value!: any;
  @Input() isInvalid: any = false;
  @Input() errorMessage: any = 'required';

  onInput(event: Event): void {}
}
