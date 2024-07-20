package com.codewithspring.fullstack_backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithspring.fullstack_backend.model.Event;






public interface UserRepository extends JpaRepository<Event,Long>{




	
}
