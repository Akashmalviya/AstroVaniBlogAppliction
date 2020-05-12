import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private addBlog = "http://localhost:5000/api/addBlog"
  private getBlog = "http://localhost:5000/api/list"
  private delete = "http://localhost:5000/api/delete"


  constructor(private http : HttpClient,private router :Router) { }



  getBlogs(){
    return this.http.get<any>(this.getBlog);

  }
  postFile(fileToUpload: File, values) {

    const formData: FormData = new FormData();
    Object.keys(values).forEach((key)=>{formData.append(key,values[key])});
   // formData.append('data',JSON.stringify(values))

    formData.append('image', fileToUpload, fileToUpload.name);
    console.log(formData);
    return this.http
      .post(this.addBlog, formData)

}
updatePost(id : string, fileToUpload: File, values){
   const update = `http://localhost:5000/api/update/${id}`


  const formData: FormData = new FormData();
  Object.keys(values).forEach((key)=>{formData.append(key,values[key])});
 // formData.append('data',JSON.stringify(values))

  formData.append('image', fileToUpload, fileToUpload.name);
  console.log(formData);
  return this.http
    .put(update, formData)

}

getPostByID(id: string) {
  console.log(id);

  return this.http.get<any>(`${this.getBlog}/${id}`)
}
deletePostByID(id: string) {
  console.log(id);

  return this.http.delete<any>(`${this.delete}/${id}`)
}
}
