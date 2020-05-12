import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiesComponent } from './servies/servies.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AppComponent } from './app.component';
import { AskComponent } from './ask/ask.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'ask', component: AskComponent},
  { path: 'servies', component: ServiesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'blog/:id', component: BlogDetailsComponent},

  { path: 'app', component: AppComponent},
  { path: 'addBlog', component: AddBlogComponent,canActivate:[AuthGuard]},
  { path: 'register', component: RegisterComponent,canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
