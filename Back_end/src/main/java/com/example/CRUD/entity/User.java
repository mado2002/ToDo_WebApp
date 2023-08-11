package com.example.CRUD.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "user_table")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String user_name;
    @Column
    private String password;
    @Column
    private List<Integer> user_tasks;

    public User(String user_name, String password, List<Integer> user_tasks) {
        this.user_name = user_name;
        this.password = password;
        this.user_tasks = user_tasks;
    }
    public User(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Integer> getUser_tasks() {
        return user_tasks;
    }

    public void setUser_tasks(List<Integer> user_tasks) {
        this.user_tasks = user_tasks;
    }
}
