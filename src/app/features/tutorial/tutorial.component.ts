import { Component } from '@angular/core';
import { TopNavBarComponent } from '../../layouts/top-nav-bar/top-nav-bar.component';
import { SideNavBarComponent } from '../../layouts/side-nav-bar/side-nav-bar.component';
import { TextfieldComponent } from '../../shared/textfield/textfield.component';
import { CheckboxComponent } from '../../shared/checkbox/checkbox.component';
import { DropdownComponent } from '../../shared/dropdown/dropdown.component';
import { RadioButtonComponent } from '../../shared/radio-button/radio-button.component';
import { ToggleComponent } from '../../shared/toggle/toggle.component';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [
    TopNavBarComponent,
    SideNavBarComponent,
    TextfieldComponent,
    CheckboxComponent,
    DropdownComponent,
    RadioButtonComponent,
    ToggleComponent,
  ],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss',
})
export class TutorialComponent {
  handleToggleChange($event: boolean) {
    throw new Error('Method not implemented.');
  }
  handleGenderChange($event: string) {
    throw new Error('Method not implemented.');
  }
  handleCheckboxChange($event: boolean) {
    throw new Error('Method not implemented.');
  }
  handleCountryChange($event: string) {}
}
