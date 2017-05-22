import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is Test';
  test_val = 8000;
  test_list:number[] = [];
  
  constructor(){
      console.log('this is constructor');
      for (let i=0; i<100; i++){
        this.test_list.push(i);
      }
  }
}
