import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtra-candidatos',
  templateUrl: './filtra-candidatos.component.html',
  styleUrls: ['./filtra-candidatos.component.scss']
})
export class FiltraCandidatosComponent implements OnInit {

  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  gender: string;
  race: string;
  educLevel: number;

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

  setEducation(level: number) {
    this.educLevel = level;
    this.emitFilter();
  }

  emitFilter() {
    this.filterChange.emit({
      Genero: this.gender,
      Cor_Raca: this.race,
      cod_grau_instrucao: this.educLevel
    });
  }
}
