import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receiver-rxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receiver-rxjs.component.html',
  styleUrl: './receiver-rxjs.component.scss',
})
export class ReceiverComponent implements OnInit {
  msg: string = '';
  number: number | null = null;

  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    this.shared.behavior$.subscribe((res) => {
      this.msg = res;
    });

    this.shared.number$.subscribe((res) => {
      this.number = res;
    });
  }
}
