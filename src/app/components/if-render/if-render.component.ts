import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.sass']
})
export class IfRenderComponent implements OnInit {
  canShow = true;
  name = 'Matheus';

  constructor() { }

  ngOnInit(): void {
  }

}