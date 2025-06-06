import { Component } from '@angular/core';
import { TypescriptCaseComponent } from './typescript-case.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-typescript-case',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './typescript-case.component.html',
  styleUrl: './typescript-case.component.scss',
})
export class TypescriptCaseEditComponent extends TypescriptCaseComponent {
  override title: string = 'Edit';
  override onClick(): void {
    this.text += 'Edit ';
  }
}
