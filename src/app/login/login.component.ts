import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router,private auth : AuthService) { }

  ngOnInit() {
  }
  invaildEmail = false
  invaildpass = false
  LoginUserData={

  }
  LoginUser()
  {
    this.auth.loginUser(this.LoginUserData).subscribe(
      res=>{ console.log(res)
        localStorage.setItem('token',res.token)
          this.router.navigate(['/addBlog'])},
      err=> {
        if(err instanceof HttpErrorResponse){
          if(err.status===404){
            this.invaildEmail = true;
          }else if(err.status===401)
          {this.invaildpass=true}
        }
      }
      )




  }
}
