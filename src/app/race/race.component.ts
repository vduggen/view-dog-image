import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {
  race: string;
  imageDog: string;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService
  ) { }

  ngOnInit(): void {
    this.race = this.route.snapshot.paramMap.get('name');
    this.getSpecificRace();
  }

  getSpecificRace():void {
    this.dogService.getRaceSpecificDog(this.race)
      .subscribe(paramDog => this.imageDog = paramDog.message)
  }
}
