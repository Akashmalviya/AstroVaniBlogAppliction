import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor(private fb: FormBuilder, private blog:BlogService, private router : Router) { }
  postCreateForm: FormGroup;
  response=[{}]
  fileToUpload :File=null;

  ngOnInit() {
    this.postCreateForm = this.fb.group({
      // 'id' : [null, Validators.required],
      'title' : [null, Validators.required],
      'publishdate' : [Date.now(), Validators.required],
      'excert' : [null, Validators.required],
      'author' : [null, Validators.required]

    });


}
uploadFileToActivity() {
  this.blog.postFile(this.fileToUpload,this.postCreateForm.value).subscribe(data => {
    console.log(data);
    this.router.navigate(['/blog'])

    }, error => {
      console.log(error);
    });
}

handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0)
  console.log(this.fileToUpload)
}


}
