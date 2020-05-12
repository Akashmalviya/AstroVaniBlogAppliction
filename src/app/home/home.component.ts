import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LanguageService } from '../language.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth : AuthService, private Lang : LanguageService) { }
 public mode : boolean

  ngOnInit(){

    this.mode=this.Lang.getlang();
  }
  submit={
    name : '',
    email:'',
    moblie:'',
    DOB:'',
    Time:'',
    subject : '',
    message:'',
    place:''}

  disabled = false
  onSubmit(){
    console.log(this.submit);

    this.auth.sendEnq(this.submit).subscribe(res=>
        this.disabled=true

      ,err => console.log(err))
  }

}
