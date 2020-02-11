import { Persons } from './../models/persons';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent implements OnInit {

  persons: Persons[]

  sortState: boolean = false

  constructor(private dataService: DataService) { 
   
  }

  sortMethodA() {
    console.log("into sorting function")
    this.sortState = true
      const newPersons = Object.assign([], this.persons)
      newPersons.sort((a, b) => {
        const nameA = a.name
        const nameB = b.name
        if (nameA < nameB) {
          return -1
        } else if (nameA > nameB) {
          return 1}	
        return 0}
      )
      this.persons = newPersons
    }

  sortMethodD() {
      console.log("into sorting function")
      this.sortState = false
        const newPersons = Object.assign([], this.persons)
        newPersons.sort((a, b) => {
          const nameA = a.name
          const nameB = b.name
          if (nameA < nameB) {
            return 1
          } else if (nameA > nameB) {
            return -1}	
          return 0}
        )
        this.persons = newPersons
      }
  
    deletContact(event, person){
      // console.log("Deleting contact!!!")
      if (window.confirm(`Are you sure to delete ${person.name} from phone book?`)){
      this.dataService.delete(person)}

  }
  
  ngOnInit(): void {
    this.dataService.getPersons().subscribe(persons=>{
      this.persons = persons
    })
    // this.persons =this.dataService.getPersons()
  }

}
