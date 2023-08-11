import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { from } from 'rxjs';
import { Task } from './Task';
import { User } from './User';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable()
export class Myservice {

  constructor(private http: HttpClient) { }
  getAllTasks():Observable<any>
  {
    return this.http.get("http://localhost:8080/" + "todo/" + "All");
  }
  gettasks(id:number):Observable<any>
  {
    return this.http.get("http://localhost:8080/"+"todo/gettasks/"+id.toString());
  }
  checksignup(user:User):Observable<any>
  {
    return this.http.post("http://localhost:8080/"+"todo/"+"checksignup",user,{ responseType: 'text' });
  }
  checksignin(user:User):Observable<any>
  {
    return this.http.post<any>("http://localhost:8080/"+"todo/"+"checksignin",user);
  }
  saveTask(task:Task):Observable<any>
  {
    return this.http.post<any>("http://localhost:8080/"+"todo/"+"save",task)
  }
  saveUser(user:User):Observable<any>
  {
    return this.http.post<any>("http://localhost:8080/"+"todo/"+"saveuser",user)
  }
update(task:Task,id:number):Observable<any>
{
 return this.http.put<any>("http://localhost:8080/"+"todo/"+id.toString(),task)
}
updateuser(user_id:number,task_id:number):Observable<any>
{
 return this.http.get<any>("http://localhost:8080/"+"todo/"+user_id.toString()+"/"+task_id.toString())
}
Delete(user_id:number,task_id:number):Observable<any>
{
  return this.http.get<any>("http://localhost:8080/"+"todo/"+"delete/"+user_id.toString()+"/"+task_id.toString())
}
  
}