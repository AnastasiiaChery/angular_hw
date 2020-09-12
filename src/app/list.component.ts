import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `<div> {{id}}-{{punkt}} </div>`,
  styles: ['']
})
export class ListComponents {
  @Input()
  id:number;
  @Input()
  punkt: string
}
