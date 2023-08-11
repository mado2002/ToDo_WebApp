import { Component, OnInit } from '@angular/core';
import { Myservice } from '../service';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Task } from '../Task';
import { User } from '../User';
import { CurrentuserService } from '../currentuser.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private service:Myservice,private http:HttpClient,private router:Router,private curr:CurrentuserService){}
  signup(username:string,password:string)
  { const user=new User(username,password,[])
    this.service.checksignup(user).subscribe(data=>{
     console.log(data)
     if(data=="yes")
     {
this.service.saveUser(user).subscribe(data=>{
      const new_user: User = data;
      user.setid(new_user.id)
      this.curr.currentuser=user;
      this.router.navigate(["/Task"])
    })
     }
     else if(data=="no")
     {
      alert("Username already exists")
     }
    })
    
  }
}
