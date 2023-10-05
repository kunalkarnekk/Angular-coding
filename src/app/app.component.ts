import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'if-else condition';
  show = true;

  showMessage:boolean = false;

  toggleMessage(){
    this.showMessage = !this.showMessage;
  }
}
