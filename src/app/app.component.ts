import { Component } from '@angular/core';
import {todoList} from './list';


@Component({
  selector: 'app-root',
  template: `
   <app-list *ngFor= "let punkt of toDOList" 
    [id]="punkt.id" [punkt]="punkt.punkt"></app-list>
   `,
  styles: [''] 
})
export class AppComponent {
  title = 'hw';
  toDOList = todoList;
}
