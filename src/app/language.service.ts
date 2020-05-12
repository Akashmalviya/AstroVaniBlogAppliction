import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }
   mode = false

 setLang(lang :boolean){
    this.mode = lang
    console.log(this.mode);

 }

 getlang(){
   return this.mode
 }

}
