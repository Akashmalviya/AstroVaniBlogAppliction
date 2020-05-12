import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  constructor(
     private route : ActivatedRoute,
     private blog : BlogService,
     private auth : AuthService,
     private router : Router,
     private fb: FormBuilder
    ) { }
    postCreateForm: FormGroup;
    fileToUpload :File=null;
    response = {title: '', excert:'', author:''}
    istrue = false;
    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      this.getPostById(id);
      console.log(id);

      this.postCreateForm = this.fb.group({
        // 'id' : [null, Validators.required],
        'title' : [this.response.title, Validators.required],
        'publishdate' : [Date.now(), Validators.required],
        'excert' : [this.response.excert, Validators.required],
        'author' : [this.response.author, Validators.required]

      });

      // this.post = this.getPostById(id);
    }
    uploadFileToActivity() {
      const id = this.route.snapshot.paramMap.get('id');
      this.blog.updatePost(id,this.fileToUpload,this.postCreateForm.value).subscribe(data => {
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


    getPostById(id) {
      return this.blog.getPostByID(id).subscribe(res=>this.response=res);
    }



    delete(){
      const id = this.route.snapshot.paramMap.get('id');
      return this.blog.deletePostByID(id).subscribe(res=> {
        this.router.navigate(['/blog'])
      }

      )

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


