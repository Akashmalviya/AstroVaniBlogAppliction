import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'project';
  constructor(private auth : AuthService , private Lang : LanguageService){}
  ngOnInit() {

  }
  lang(value){
    this.Lang.setLang(value);
  }
}
