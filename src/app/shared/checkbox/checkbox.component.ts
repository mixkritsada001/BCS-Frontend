import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CheckboxType } from '../../models/checkbox.model';
import { CheckboxChangeEvent, CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [FormsModule, CheckboxModule, CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() value: boolean = false;
  @Input() text!: string;
  @Input() fromTable: boolean = false;
  @Input() type: CheckboxType = CheckboxType.Normal;
  @Input() addClass = '';
  @Input() disable: boolean = false;
  @Output() onChange = new EventEmitter<boolean>();
  private static selectedCheckbox: CheckboxComponent | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  onClick(event: CheckboxChangeEvent): void {
    const checked = event.checked;

    if (this.type === CheckboxType.OneCheckbox) {
      // Deselect the previously selected checkbox
      if (
        CheckboxComponent.selectedCheckbox &&
        CheckboxComponent.selectedCheckbox !== this
      ) {
        CheckboxComponent.selectedCheckbox.value = false;
        CheckboxComponent.selectedCheckbox.cdr.detectChanges();
      }

      // Select the current checkbox
      this.value = checked;
      CheckboxComponent.selectedCheckbox = this;
    }

    this.onChange.emit(checked);
  }

  ngOnChanges(): void {
    this.cdr.detectChanges();
  }

  getClasses() {
    return {
      'table-checkbox':
        this.type === CheckboxType.Table || CheckboxType.OneCheckbox,
      'menu-checkbox': this.type === CheckboxType.MenuCheckbox,
      'normal-checkbox': this.type === CheckboxType.Normal,
      [this.addClass]: this.addClass && this.addClass !== ``,
    };
  }
}
