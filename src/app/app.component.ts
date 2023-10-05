import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'For Loop in angular';
  
  users = ["anil" , "kunal" , "datta", "rohit"];

  userDetails = [
    {name:'kuanl', email:'kunal@test.com', phone:'555'},
    {name:'datta', email:'datta@test.com', phone:'666'},
    {name:'rohit', email:'rohit@test.com', phone:'777'},

  ]
  
}
