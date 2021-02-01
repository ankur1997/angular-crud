import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from './registration/user';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  onSubmit(user:User)
  {
    const url = "http://localhost:9090/register";
  return  this.http.post(url,user,{responseType : 'text' as 'json'});
  }

  getAllUsers()
  {
    const url = "http://localhost:9090/getAllUsers";
    return this.http.get(url);
  }

  getUserByEmail(email:string)
  {
    const url = "http://localhost:9090//findUser/"+email;
    return this.http.get(url);
  }

  deleteById(id:string)
  {
    const url = "http://localhost:9090/cancel/"+id;
    return this.http.delete(url);
  }
}
