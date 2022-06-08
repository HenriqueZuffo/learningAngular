import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.sass']
})
export class EmitterComponent implements OnInit {
  number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(): void{
    this.number = Math.floor(Math.random() * 10);
  }

}
