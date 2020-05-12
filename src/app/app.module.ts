import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from './about/about.component';
import { ServiesComponent } from './servies/servies.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AskComponent } from './ask/ask.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { TokenService } from './token.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EnglishComponent } from './home/english/english.component';
import { HindiComponent } from './home/hindi/hindi.component';

@NgModule({
  declarations: [
    AppComponent,


    AboutComponent,
    ServiesComponent,
    BlogComponent,
    HomeComponent,
    ContactComponent,
    AskComponent,



    AddBlogComponent,

    LoginComponent,

    RegisterComponent,

    BlogDetailsComponent,

    NavbarComponent,

    FooterComponent,

    EnglishComponent,

    HindiComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService,AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
