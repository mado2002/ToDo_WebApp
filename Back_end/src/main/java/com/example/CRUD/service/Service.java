package com.example.CRUD.service;

import com.example.CRUD.entity.Task;
import com.example.CRUD.entity.User;
import com.example.CRUD.repostiry.ToDoRepositry;
import com.example.CRUD.repostiry.UserRepositry;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class Service implements IService {
    @Autowired
    ToDoRepositry taskRepo;
    @Autowired
    UserRepositry userRepo;
    @Override
    public Task createTask(Task task) {
        return taskRepo.save(task);
    }

    @Override
    public User createUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public List<Task> getallTasks() {
        return taskRepo.findAll();
    }

    @Override
    public List<User> getallUsers() {
        return userRepo.findAll();
    }

    @Override
    public Optional<Task> getTaskbyID(int id) {
        return taskRepo.findById(id);
    }

    @Override
    public Optional<User> getUserbyID(int id) {
        return userRepo.findById(id);
    }

    @Override
    public Task updateTask(Task task, int id) {
        Task oldtask= taskRepo.findById(id).orElse(null);
        oldtask.setTask(task.getTask());
        taskRepo.save(oldtask);
        return oldtask;
    }
    @Override
public Boolean check_signup(User user)
{
    String username=user.getUser_name();
    String pass=user.getPassword();
    List<User>allusers=userRepo.findAll();
    for(User u:allusers)
    {
        if(u.getUser_name().equals(username))
        {
            return false;
        }
    }
    if(username.equals("") || pass.equals("")) return false;
    return true;
}
@Override
public User check_signin(User user)
{
    String username=user.getUser_name();
    String pass=user.getPassword();
    List<User>allusers=userRepo.findAll();
    for(User u:allusers)
    {
        if(u.getUser_name().equals(username) && u.getPassword().equals(pass))
        {
            return u;
        }
    }
    return null;
}

    @Override
    public User updateuser(int user_id, int task_id) {
        User olduser=userRepo.findById(user_id).orElse(null);
        List<Integer> tasks=olduser.getUser_tasks();
        tasks.add(task_id);
        olduser.setUser_tasks(tasks);
        userRepo.save(olduser);
        return olduser;
    }

    @Override
    public User deleteTask(int user_id,int task_id) {
          taskRepo.deleteById(task_id);
        User user=userRepo.findById(user_id).orElse(null);
        List<Integer> tasks=user.getUser_tasks();
        for(int i=0;i<tasks.size();i++)
        {
            if(tasks.get(i)==task_id)
            {
                tasks.remove(i);
                break;
            }
        }

        user.setUser_tasks(tasks);
        userRepo.save(user);
        return user;
//          List<Task> all= taskRepo.findAll();
//          for(Task task:all)
//          {
//              taskRepo.deleteById(task.getId());
//          }
//          for(Task task:all)
//          {
//              taskRepo.save(task);
//          }
    }
    public void resetAutoIncrementCounter() {
        taskRepo.resetAutoIncrement();
    }
    @Override
    public void deleteall()
    {
        taskRepo.deleteAll();
    }
    @Override
    public void deleteallusers()
    {
        userRepo.deleteAll();
    }
}
