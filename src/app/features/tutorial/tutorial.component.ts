import { Component } from '@angular/core';
import { TopNavBarComponent } from '../../layouts/top-nav-bar/top-nav-bar.component';
import { SideNavBarComponent } from '../../layouts/side-nav-bar/side-nav-bar.component';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [TopNavBarComponent, SideNavBarComponent],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss',
})
export class TutorialComponent {}
