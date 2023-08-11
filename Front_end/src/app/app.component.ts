import { Component, OnInit } from '@angular/core';
import { Myservice } from './service';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Task } from './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private service:Myservice,private http:HttpClient,private router:Router) {
    this.router.navigate(["/signup"])
   }

  

}
