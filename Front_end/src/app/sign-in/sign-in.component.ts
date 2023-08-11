import { Component, OnInit } from '@angular/core';
import { Myservice } from '../service';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Task } from '../Task';
import { User } from '../User';
import { CurrentuserService } from '../currentuser.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private service:Myservice,private http:HttpClient,private router:Router,private curr:CurrentuserService){}

sign_in(username:string,password:string)
{
const user=new User(username,password,[])
this.service.checksignin(user).subscribe(data=>{
  if(data==null)alert("Invalid username or password")
  else
{
  this.curr.currentuser=data;
  this.router.navigate(["/Task"])
}
})
}
}
