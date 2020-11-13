import {Component, OnInit} from '@angular/core';
import {Personne} from "./interfaces/personne";
import {PersonneDataSource} from "./services/personne-data-source.service";
import {PersonneService} from "./services/personne.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  personne: Personne;
  dataSource: PersonneDataSource;

  displayedColumns = ["id","nom", "prenom"];

  constructor(private personneService : PersonneService) {
  }

  ngOnInit(): void
  {
    this.dataSource = new PersonneDataSource(this.personneService);

    this.dataSource.loadPersons();
  }

}
