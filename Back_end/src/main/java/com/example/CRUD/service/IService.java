package com.example.CRUD.service;

import com.example.CRUD.entity.Task;
import com.example.CRUD.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface IService {
    public Task createTask(Task task);
    public User createUser(User user);
    public List<Task> getallTasks();
    public List<User>getallUsers();
    public Optional<Task> getTaskbyID(int id);
    public Optional<User> getUserbyID(int id);
    public Task updateTask(Task employee, int id);
    public Boolean check_signup(User user);
    public User check_signin(User user);
public User updateuser(int user_id,int task_id);
        public User deleteTask(int user_id,int task_id);
    public void deleteall();
    public void deleteallusers();
}


