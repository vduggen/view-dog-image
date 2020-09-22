import { Component, OnInit } from '@angular/core';
import { race } from 'rxjs';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-list-races',
  templateUrl: './list-races.component.html',
  styleUrls: ['./list-races.component.css']
})
export class ListRacesComponent implements OnInit {
  races: object[] = [];

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.getRacesDog();
  }

  getRacesDog(): void {
    this.dogService.getRacesDog().subscribe(races => {
      let obj = races["message"];
      
      for (let race in obj) {
        this.races.push({name: race, subraces: obj[race]})
      }
    })
  }
}
