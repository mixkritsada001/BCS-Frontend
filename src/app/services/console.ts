import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsoleService {
  constructor() {}

  console(text: string) {
    console.log(text);
  }
}
