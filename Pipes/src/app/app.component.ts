import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  name='';
  date='';
  amount=0;
  kilo=0;
  getName(value:string)
  {
    this.name=value;
  }
  getDate(value:string)
  {
    this.date=value;
  }
  getAmount(value:number)
  {
    this.amount=value;
  }
  getKilo(value:string)
  {
    this.kilo=parseFloat(value);
  }
}
