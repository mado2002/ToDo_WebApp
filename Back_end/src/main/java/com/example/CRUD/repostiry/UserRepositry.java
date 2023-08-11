package com.example.CRUD.repostiry;
import com.example.CRUD.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface UserRepositry extends JpaRepository<User,Integer> {

}
