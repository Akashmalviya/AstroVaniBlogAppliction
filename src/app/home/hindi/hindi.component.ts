import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrls: ['./hindi.component.css']
})
export class HindiComponent implements OnInit {

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
