import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Personne } from '../interfaces/personne';
import { PersonneService } from './personne.service';
import { catchError, finalize } from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PersonneDataSource {

  private personnesSubject = new BehaviorSubject<Personne[]>([]);

  constructor(private personneService: PersonneService) { }

  connect(collectionViewer: CollectionViewer): Observable<Personne[]> {
    return this.personnesSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.personnesSubject.complete();
  }

  loadPersons() {

    this.personneService.getAll(
    ).pipe(
      catchError(() => of([]))
    )
      .subscribe(personnes => this.personnesSubject.next(personnes));
  }
}
