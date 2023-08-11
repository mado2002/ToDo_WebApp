package com.example.CRUD.controller;

import com.example.CRUD.entity.Task;
import com.example.CRUD.entity.User;
import com.example.CRUD.service.Service;
import com.example.CRUD.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/todo")
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {
    @Autowired
    IService service;

    public Controller() {
        this.service =new Service();
    }

    @PostMapping("/save")
    public Task saveEmp(@RequestBody Task task)
    {
        return service.createTask(task);
    }

    @PostMapping("/saveuser")
    public User saveuser(@RequestBody User user){return service.createUser(user);}
    @GetMapping("/All")
    public List<Task> getAllTasks()
    {
        return service.getallTasks();
    }

    @GetMapping("/Allusers")
    public List<User> getAllUsers(){return service.getallUsers();}
    @GetMapping("/getEmp/{id}")
    public Optional<Task> getbyID(@PathVariable int id)
    {
        return service.getTaskbyID(id);
    }

    @GetMapping("/getUser/{id}")
    public Optional<User> getuserbyid(@PathVariable int id){return service.getUserbyID(id);}

    @GetMapping("/gettasks/{id}")
    public List<Task> gettasks(@PathVariable int id)
    {
        User user=service.getUserbyID(id).orElse(null);
        List<Integer> tasks_id= user.getUser_tasks();
        List<Task> tasks=new ArrayList<>();
        for(int task_id:tasks_id)
        {
            tasks.add(service.getTaskbyID(task_id).orElse(null));
        }
        return tasks;
    }
    @PostMapping("/checksignup")
    public String checksignup(@RequestBody User user)
    {
        if(service.check_signup(user))return "yes";

        else return "no";
    }
    @PostMapping("/checksignin")
    public User checksignin(@RequestBody User user)
    {
        return service.check_signin(user);
    }
    @PutMapping("/{id}")
    public Task update(@RequestBody Task task, @PathVariable int id)
    {
        return service.updateTask(task,id);
    }
    @GetMapping("/{id1}/{id2}")
    public User updateuser(@PathVariable int id1,@PathVariable int id2)
    {
        return service.updateuser(id1,id2);
    }
    @GetMapping("/delete/{id1}/{id2}")
    public User Delete(@PathVariable int id1,@PathVariable int id2)
    {
        return service.deleteTask(id1,id2);

    }
    @DeleteMapping("/deleteall")
    public void deletealltasks()
    {
        service.deleteall();
    }
    @DeleteMapping("/deleteallusers")
    public void deleteallusers()
    {
        service.deleteallusers();
    }
}
