import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SharedService {
  private behaviorSubject = new BehaviorSubject<string>('เริ่มต้น');
  private normalSubject = new Subject<number>();

  behavior$ = this.behaviorSubject.asObservable(); // ใช้ใน receiver
  number$ = this.normalSubject.asObservable().pipe(
    tap((val) => console.log('🟡 tapped:', val)), // แสดงค่าไว้ดูเฉยๆ
    map((val) => val * 10) // ดัดแปลงค่า
  );

  updateMessage(newMsg: string) {
    this.behaviorSubject.next(newMsg); // update ค่า
  }

  emitNumber(num: number) {
    this.normalSubject.next(num); // emit ค่าใหม่ (Subject)
  }
}
