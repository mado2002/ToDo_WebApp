import { Task } from "./Task";

export class User{
    id=0
    user_name=''
    password=''
    user_tasks:number[]
    constructor (username:string,password:string,tasks:number[])
    {
        
        this.user_name=username;
        this.password=password;
        this.user_tasks=tasks;
    }
setid(id:number)
{
  this.id=id;
}
getid()
{
    return this.id
}
setusername(username:string)
{
 this.user_name=username
}
getusername()
{
    return this.user_name;
}
setpassword(password:string)
{
 this.password=password
}
getpassword()
{
    return this.password;
}
settasks(tasks:number[])
{
 this.user_tasks=tasks
}
gettasks()
{
    return this.user_tasks;
}
}