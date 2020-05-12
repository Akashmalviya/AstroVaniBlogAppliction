import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private register = "http://localhost:5000/api/register"
    private login = "http://localhost:5000/api/login"
    private getEnq = "http://localhost:5000/api/getEnq"



  constructor(private http : HttpClient,private router :Router) { }

  registerUser(user){
    return this.http.post<any>(this.register,user);
  }

  sendEnq(data){
    return this.http.post<any>(this.getEnq,data)
  }


  loginUser(user){
     return this.http.post<any>(this.login,user);
  }




  loggedIn(){
    return !!localStorage.getItem('token')
  }

  gettoken(){
    return localStorage.getItem('token')

  }
  loggedOut(){
    localStorage.removeItem('token')
    this.router.navigate(['./home'])
  }

}
