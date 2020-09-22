import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dog: string;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.getDog();
  }

  getDog(): void {
    this.dogService.getDog()
      .subscribe(dogParam => {
        this.dog = dogParam.message;
      });
  }
}
