package com.codewithspring.fullstack_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithspring.fullstack_backend.model.Event;
import com.codewithspring.fullstack_backend.model.User;








public interface User2Repository extends JpaRepository<User,Long>{

    Event save(String user);




	
}
