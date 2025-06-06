import { Routes } from '@angular/router';
import { TutorialComponent } from './features/tutorial/tutorial.component';
import { TypescriptCaseComponent } from './features/typescript-case/typescript-case.component';
import { TypescriptCaseEditComponent } from './features/typescript-case/typescript-case.edit.component';
import { SenderComponent } from './features/sender-rxjs/sender-rxjs.component';
import { ReceiverComponent } from './features/receiver-rxjs/receiver-rxjs.component';
import { RxjsCaseComponent } from './features/rxjs-case/rxjs-case.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tutorial', pathMatch: 'full' },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'typescript-case', component: TypescriptCaseComponent },
  { path: 'edit-typescript-case', component: TypescriptCaseEditComponent },
  { path: 'rxjs-case', component: RxjsCaseComponent },
];
