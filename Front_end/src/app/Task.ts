export class Task{
    id=0
    task=''

     constructor (task:string)
    {
    
        this.task=task;
    }
setid(id:number)
{
  this.id=id;
}
getid()
{
    return this.id
}
settask(task:string)
{
 this.task=task
}
gettask()
{
    return this.task;
}
}