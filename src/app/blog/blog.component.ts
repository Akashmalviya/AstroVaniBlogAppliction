import { Component, OnInit } from '@angular/core';

import { BlogService } from '../blog.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogs : BlogService,
      private auth : AuthService) { }
  response=[];

  ngOnInit() {
    this.blogs.getBlogs().subscribe(res=>this.response=res)
    console.log(this.response);

  }

}
