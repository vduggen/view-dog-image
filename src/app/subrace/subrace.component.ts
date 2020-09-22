import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-subrace',
  templateUrl: './subrace.component.html',
  styleUrls: ['./subrace.component.css']
})
export class SubraceComponent implements OnInit {
  race: string;
  subrace: string;
  imageDog: string;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService
  ) { }

  ngOnInit(): void {
    this.race = this.route.snapshot.paramMap.get('race');
    this.subrace = this.route.snapshot.paramMap.get('subrace');
    this.getSpecificSubrace();
  }

  getSpecificSubrace():void {
    this.dogService.getRaceSpecificSubrace(this.race, this.subrace)
      .subscribe(paramDog => this.imageDog = paramDog.message)
  }
}
