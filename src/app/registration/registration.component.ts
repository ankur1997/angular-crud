import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from './user';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  domainArray = ['full stack','front end','back end'];
  userData = new User('','',0,'');
  



  constructor(private service:RegisterService) { }

  ngOnInit(): void {
    
  }

  onSubmit(user:User)
  {
    this.service.onSubmit(user).subscribe((data) =>{
      console.log(data);
      alert(data);
    })
  }

}
