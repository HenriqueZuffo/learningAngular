import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.sass']
})
export class EventosComponent implements OnInit {
  show = true;

  constructor() { }

  ngOnInit(): void {
  }


  showMessage(): void{
    this.show = !this.show;
  }
}
