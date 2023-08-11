import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class CurrentuserService {
currentuser:User;
  constructor() {
    this.currentuser=new User("","",[])
   }
}
