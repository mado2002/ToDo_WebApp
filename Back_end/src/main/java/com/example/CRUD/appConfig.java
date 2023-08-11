package com.example.CRUD;

import com.example.CRUD.service.Service;
import com.example.CRUD.service.IService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class appConfig {
    @Bean
    public IService employeeService() {
        return new Service();
    }
}
