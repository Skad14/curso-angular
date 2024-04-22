import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Rafael';
  age: number = 31;
  job: string = 'Programador';
  hobbies = ['Correr', ' Jogar', ' Estudar'];
  car = {
    name: 'Polo',
    year: 2019
  }

  constructor() { }

  ngOnInit(): void {
  }
}
