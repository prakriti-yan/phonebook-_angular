import { Persons } from './../models/persons';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit {

  person: Persons = {
    name: '',
    number: ''
  } 
  alert: boolean = false
  notice: boolean = false

  
  constructor(
    private dataService: DataService,
    ) { 

    }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.person.name  || !this.person.number){
      this.alert = true
      setTimeout(()=>{
        this.alert = false
      }, 3000)
    }
    else if (this.person.name && this.person.number){
      this.dataService.addPerson(this.person)
      this.person.name=''
      this.person.number=''
      this.notice = true
      setTimeout(()=>{
        this.notice = false
      }, 3000)
      }
       
    }
  
}
