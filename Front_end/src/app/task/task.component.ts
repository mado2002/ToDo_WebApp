import { Component, OnInit } from '@angular/core';
import { Myservice } from '../service';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Task } from '../Task';
import { CurrentuserService } from '../currentuser.service';
import { User } from '../User';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  title = 'login';
  private count:number;
  private new_task=new Task("");
  constructor(private service:Myservice,private http:HttpClient,private router:Router,private curr:CurrentuserService) { this.count=0}

  ngOnInit(): void {
    this.start()  
  }
  start()
  { console.log(this.curr.currentuser.user_tasks)
    this.service.gettasks(this.curr.currentuser.id).subscribe(res=>{
      const list:Task[]=res
      for(const task of list)
      { 
        this.AddTask(task)
      }
    })
  }
 add_task()
 {
  
  const task=document.getElementById("task") as HTMLInputElement;
  const taskValue=task.value;
  const task_obj=new Task(taskValue)

  this.service.saveTask(task_obj).subscribe(res=>{
  console.log(res)
   this.new_task= res;
   console.log(this.new_task)
  this.service.updateuser(this.curr.currentuser.id,this.new_task.id).subscribe(res=>{
    this.curr.currentuser=res
    console.log(this.curr.currentuser)
    this.reloadPage()
  })
  })

  // const parent=document.getElementById("todo-list");
  // const space=document.createElement("br");
  // parent?.appendChild(space);
  // const newChildElement = document.createElement("input");
  // newChildElement.type="text";
  // newChildElement.className="text"
  // newChildElement.value=taskValue
  // newChildElement.readOnly=true
  // newChildElement.id=this.new_task.id.toString()+"1"
  // newChildElement.style.padding='10px'
  // newChildElement.style.flex='1'
  // newChildElement.style.border='none'
  // newChildElement.style.fontSize='18px'
  // newChildElement.style.borderColor='black'
  // newChildElement.style.backgroundColor='#272727'
  // newChildElement.style.color='#fff'
  // newChildElement.style.borderRadius='5px 0 0 5px'
  // const edit=document.createElement("button");

  // edit.classList.add("edit")
  // edit.textContent="Edit"
  // edit.classList.add("edit")
  // edit.id=this.new_task.id.toString()+"2"
  // edit.style.padding='10px 20px'
  // edit.style.backgroundColor='#4CAF50'
  // edit.style.border='none'
  // edit.style.color='#fff'
  // edit.style.borderRadius='0 5px 5px 0'
  // edit?.addEventListener("click", () => {
  //         this.edit(edit.id)
  
  // });
  // const del=document.createElement("button");
  // del.className="delete-btn"
  // del.textContent="Delete"
  // del.id=this.new_task.id.toString()+"3"
  // del.style.padding='10px 20px'
  // del.style.backgroundColor='#ff2d2d'
  // del.style.border='none'
  // del.style.color='#fff'
  // del.style.borderRadius='0 5px 5px 0'
  // del?.addEventListener("click", () => {
  //         this.delete(del.id)
  // });  
  // parent?.appendChild(newChildElement)
  // parent?.appendChild(edit)
  // parent?.appendChild(del)
  const inp=document.getElementById('task') as HTMLInputElement
  inp.value=""
  
 }
 AddTask(task:Task)
 {
      const id=task.id
      this.count=id
      const content=task.task
      const task_elem=document.getElementById("task") as HTMLInputElement;
  const parent=document.getElementById("todo-list");
  const space=document.createElement("br");
  parent?.appendChild(space);
  const newChildElement = document.createElement("input");
  newChildElement.type="text";
  newChildElement.className='text'
  newChildElement.value=content
  newChildElement.readOnly=true
  newChildElement.id=id.toString()+"1"
  newChildElement.style.padding='10px'
  newChildElement.style.flex='1'
  newChildElement.style.border='none'
  newChildElement.style.fontSize='18px'
  newChildElement.style.borderColor='black'
  newChildElement.style.backgroundColor='#272727'
  newChildElement.style.color='#fff'
  newChildElement.style.borderRadius='5px 0 0 5px'
  const edit=document.createElement("button");
  edit.className="edit"
  edit.textContent="Edit"
  edit.id=id.toString()+"2"
  edit.classList.add("edit")
  edit.style.padding='10px 20px'
  edit.style.backgroundColor='#4CAF50'
  edit.style.border='none'
  edit.style.color='#fff'
  edit.style.borderRadius='0 5px 5px 0'
  edit?.addEventListener("click", () => {
          this.edit(edit.id)
    
  });
  const del=document.createElement("button");
  del.className="delete"
  del.textContent="Delete"
  del.id=id.toString()+"3"
  del.style.padding='10px 20px'
  del.style.backgroundColor='#ff2d2d'
  del.style.border='none'
  del.style.color='#fff'
  del.style.borderRadius='0 5px 5px 0'
  del?.addEventListener("click", () => {
          
    this.delete(del.id)
  });
  parent?.appendChild(newChildElement)
  parent?.appendChild(edit)
  parent?.appendChild(del)


 }
 edit(id:string)
 {  
 const id_num=id.substring(0,id.length-1)
  const bar=document.getElementById(id_num+"1") as HTMLInputElement
  const editbutton = document.getElementById(id_num+"2") as HTMLButtonElement
  let text=''
  if(editbutton.textContent=="Edit")
  { bar.readOnly=false;
    editbutton.textContent="Save";
  }
  else if(editbutton.textContent=="Save")
  { text=bar.value
    const task=new Task(text)
    this.service.update(task,parseInt(id_num)).subscribe(res=>{
      console.log(res)
    })
    editbutton.textContent="Edit"
    bar.readOnly=true;
  } 
 }
 refreshPage()
 {
  location.reload();
 }
 delete(id:string)
 {
  const id_num=id.substring(0,id.length-1)
  console.log(id_num)
 
  this.service.Delete(this.curr.currentuser.id,parseInt(id_num)).subscribe(res=>{
    console.log(res)
    const user:User=res
    this.curr.currentuser=user
    console.log(user.user_tasks)
//   this.curr.currentuser.user_tasks.forEach((task,index)=>{
//     console.log(task)
//     this.Remove(task.toString())
//   })
//  this.start()
  this.reloadPage()
  })
 }
 reloadPage() {
  const currentRoute = this.router.url; // Get the current route URL
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate([currentRoute]); // Navigate back to the current route
  });
}
 Remove(id:string)
 {
  const bar=document.getElementById(id+"1") as HTMLInputElement
  const editbutton = document.getElementById(id+"2") as HTMLButtonElement
  const deletebutton = document.getElementById(id+"3") as HTMLButtonElement
  bar.remove();
 editbutton.remove();
 deletebutton.remove();

 }
}
