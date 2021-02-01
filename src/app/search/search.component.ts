import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users:any
  constructor(private service:RegisterService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((data) => {
      this.users = data
    })
  }

  getUserByEmail(email:string)
  {
    this.service.getUserByEmail(email).subscribe((data) => {
      this.users = data
    })
  }

  deleteById(id:any)
  {
    this.service.deleteById(id).subscribe((data) => {
      this.users = data
    })
  }
}
