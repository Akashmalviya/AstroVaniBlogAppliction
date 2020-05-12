import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-servies',
  templateUrl: './servies.component.html',
  styleUrls: ['./servies.component.css']
})
export class ServiesComponent implements OnInit {

  constructor(private auth : AuthService,private Lang : LanguageService) { }

  ngOnInit( ) {
  }
  disabled=false

  submit={
    name : '',
    email:'',
    moblie:'',
    DOB:'',
    Time:'',
    subject : '',
    message:''}

    onSubmit(){
      console.log();

      this.auth.sendEnq(this.submit).subscribe(res=>
          this.disabled=true

        ,err => console.log(err))
    }


}
