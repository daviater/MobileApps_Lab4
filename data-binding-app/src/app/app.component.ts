import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  i_buttonPresses:number =0;
  b_starLook:boolean = true;

  onClick(){
    this.i_buttonPresses++;
  }
  onDblClick(){
    this.b_starLook = !this.b_starLook;
  }
}
