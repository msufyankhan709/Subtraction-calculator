import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {

  constructor() { }
  public a:number;
  public b:number;
  public result:number;
  Subtraction()
  {
    return this.result=Number.parseInt(this.a.toString()) - Number.parseInt(this.b.toString());
  }
  Clear()
  {
    return this.result=this.a=this.b=0;
  }

  ngOnInit(): void {
  }

}
