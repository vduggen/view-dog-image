import { Component } from '@angular/core';
import { DogService } from './dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dog-website';
  dog: string = 'https://images.dog.ceo/breeds/schipperke/n02104365_7301.jpg';
  
  constructor(private dogService: DogService) {}

  getDog(): void {
    this.dogService.getDog()
      .subscribe(dogParam => {
        this.dog = dogParam.message;
      });
  }
}
