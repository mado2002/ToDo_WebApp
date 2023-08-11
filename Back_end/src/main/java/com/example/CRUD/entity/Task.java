package com.example.CRUD.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Tasks_table")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String task;


    public Task(String task) {
        this.task=task;
    }

    public Task() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setTask(String task)
    {
        this.task=task;
    }
    public String getTask()
    {
        return task;
    }
}
