import { CommonModule } from '@angular/common';
import { Component, SimpleChanges, ViewChild } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { ConsoleService } from '../../services/console';

@Component({
  selector: 'app-typescript-case',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './typescript-case.component.html',
  styleUrl: './typescript-case.component.scss',
})
export class TypescriptCaseComponent {
  @ViewChild(CardComponent) card!: CardComponent;
  title: string = 'Add';
  text: string = '';
  camelCase: string = 'camelCase';
  pascalCase: string = 'PascalCase';
  snakeCase: string = 'snake_case';
  kebabCase: string = 'kebab-case';
  cardLists = [
    { id: 'card-001', number: 1, title: 'card1' },
    { id: 'card-002', number: 2, title: 'card2' },
    { id: 'card-003', number: 3, title: 'card3' },
    { id: 'card-004', number: 4, title: 'card4' },
    { id: 'card-005', number: 5, title: 'card5' },
  ];
  constructor(private consoleService: ConsoleService) {}

  ngOnChanges(changes: SimpleChanges): void {
    // ทำงานเมื่อ: @Input() property มีการเปลี่ยนแปลงจาก parent component
    // ใช้สำหรับ: ตรวจจับและตอบสนองต่อการเปลี่ยนแปลงของ input ค่า เช่น เช็คว่าค่าใหม่แตกต่างจากเดิมไหม
    // ทำงานก่อน: ngOnInit
    // หมายเหตุ: ต้องมี @Input() ถึงจะถูกเรียกใช้งาน
  }

  ngOnInit(): void {
    // ทำงานเมื่อ: component ถูกสร้างครั้งแรกหลังจาก constructor
    // ใช้สำหรับ: เริ่มต้นค่า, เรียก API, ตั้งค่า default
    // ทำงานเพียงครั้งเดียว: ไม่ว่าค่า @Input() จะเปลี่ยนกี่รอบ
  }

  ngDoCheck(): void {
    // ทำงานเมื่อ: Angular ตรวจสอบการเปลี่ยนแปลง (change detection) ทุกครั้ง
    // ใช้สำหรับ: เขียน custom change detection logic แทนการพึ่ง ngOnChanges
    // ข้อควรระวัง: เรียกบ่อยมาก อาจส่งผลกับ performance ถ้าใช้ไม่ระวัง
  }

  ngAfterContentInit(): void {
    // ทำงานเมื่อ: content projection (ng-content) เสร็จสมบูรณ์
    // ใช้สำหรับ: อ่านค่า/ตั้งค่า element ที่ถูกแทรกเข้ามาผ่าน <ng-content>
  }

  ngAfterContentChecked(): void {
    // ทำงานเมื่อ: Angular ตรวจสอบ content ที่ projected แล้ว (เช่นหลัง ngDoCheck)
    // ใช้สำหรับ: ตอบสนองต่อ content ที่อาจเปลี่ยนจากภายนอก
  }

  ngAfterViewInit(): void {
    // ทำงานเมื่อ: view template (ของ component เอง) และ child views ถูกสร้างเสร็จ
    // ใช้สำหรับ: เข้าถึง @ViewChild, @ViewChildren เพื่อทำงานกับ DOM หรือ component ภายใน
    // มักใช้กับ: library ที่ต้องเข้าถึง DOM เช่น Chart.js, jQuery
  }

  ngAfterViewChecked(): void {
    // ทำงานเมื่อ: Angular ตรวจสอบและ update view และ child views แล้ว
    // ใช้สำหรับ: ตรวจสอบหรือปรับค่าที่อิงกับ DOM หรือ component ภายในอีกครั้ง
    // ข้อควรระวัง: เหมือน ngDoCheck คือถูกเรียกบ่อย อาจส่งผล performance
  }

  ngOnDestroy(): void {
    // ทำงานเมื่อ: component ถูกทำลาย (เช่นถูก *ngIf ซ่อน หรือ navigate ออกไป)
    // ใช้สำหรับ: ล้างค่า, unsubscribe จาก observable, clearInterval, ลบ listener
  }

  onClick(): void {
    this.text += 'Add ';
    this.onLog(this.text);
  }

  onCardClick(): void {
    this.text += 'Card ';
    this.onLog(this.text);
  }

  onCardNumberClick(number: any) {
    this.text += `${number} `;
    this.onLog(this.text);
  }

  onToCardClick(): void {
    this.card.onClick();
  }

  onLog(text: string): void {
    this.consoleService.console(text);
  }
}
