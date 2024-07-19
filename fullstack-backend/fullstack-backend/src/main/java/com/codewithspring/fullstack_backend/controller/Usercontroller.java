package com.codewithspring.fullstack_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.codewithspring.fullstack_backend.model.Event;
import com.codewithspring.fullstack_backend.repository.UserRepository;

@RestController


public class Usercontroller {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/addEvent")
    public Event addEvent(@RequestBody Event event) {
        try {
            return userRepository.save(event);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }
    

  @GetMapping("/getEvent")
    public ResponseEntity<List<Event>> getEvent() {
        List<Event> events = userRepository.findAll();
        return ResponseEntity.ok(events);
    } 

    @DeleteMapping("/deleteEvent/{id}")
        public  ResponseEntity<String> deleteEvent(@PathVariable Long id){
            if(userRepository.existsById(id)) {
                userRepository.deleteById(id);
                return ResponseEntity.ok("Event deleted successfully.");
        }else{
            return ResponseEntity.status(404).body("Event not found.");
        }
           
    }
}
    

