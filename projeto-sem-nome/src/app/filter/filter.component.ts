import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  gender: string;
  race: string;

  filter: {[k: string]: any} = {};

  constructor() { }

  ngOnInit() {
  }

  setGender(gender: string) {
    this.gender = gender;
    this.emitFilter();
    
  }

  setRace(race: string) {
    this.race = race;
    this.emitFilter();
  }

  emitFilter() {
    console.log(this.gender, this.race)
    this.filterChange.emit(
      {Genero: this.gender,
      Cor_Raca: this.race}
    ); 
  }
}
