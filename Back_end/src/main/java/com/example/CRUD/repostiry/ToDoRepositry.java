package com.example.CRUD.repostiry;

import com.example.CRUD.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface ToDoRepositry extends JpaRepository<Task,Integer> {
    @Modifying
    @Transactional
    @Query(value = "ALTER TABLE tasks_table AUTO_INCREMENT = 1", nativeQuery = true)
    void resetAutoIncrement();
}
