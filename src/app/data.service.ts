import { Persons } from './models/persons';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  itemsCollection: AngularFirestoreCollection<Persons> // type of Persons
  persons: Observable<Persons[]>

  personDoc: AngularFirestoreDocument<Persons>

  addPerson(person: Persons){
    this.itemsCollection.add({
      "name": person.name,
      "number": person.number
    })
  }

  getPersons(){
    return this.persons
  }

  delete(person: Persons){
    this.personDoc = this.afs.doc(`persons/${person.id}`)
    this.personDoc.delete();
  }

  constructor(public afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('persons')
    this.persons = this.itemsCollection.snapshotChanges().pipe(map(actions=> actions.map(a=>{
        const data = a.payload.doc.data() as Persons
        data.id = a.payload.doc.id
        return data
      }))
    )
   }
}

