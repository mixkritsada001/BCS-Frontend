import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
})
export class ToggleComponent {
  @Input() id: string = '';
  @Input() value: boolean = false;
  @Input() disable: boolean = false;
  @Output() onChange = new EventEmitter<boolean>();

  onClick(): void {
    if (!this.disable) {
      this.onChange.emit(!this.value);
    }
  }
}
