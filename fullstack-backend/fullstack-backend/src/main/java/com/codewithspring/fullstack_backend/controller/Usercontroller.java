package com.codewithspring.fullstack_backend.controller;

import java.util.ArrayList;
import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.codewithspring.fullstack_backend.model.Event;
import com.codewithspring.fullstack_backend.model.User;
import com.codewithspring.fullstack_backend.repository.User2Repository;
import com.codewithspring.fullstack_backend.repository.UserRepository;

@RestController


public class Usercontroller {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private User2Repository user2Repository;
  

   

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

    @PutMapping ("/updateEvent/{id}")
    public ResponseEntity<Event>updateEvent(
        @PathVariable Long id,
        @RequestBody Event event

    ){
        Event existingEvent = userRepository.findById(id).orElse(null);
        if(existingEvent == null){
            return ResponseEntity.notFound().build();

        }
        existingEvent.setEventName(event.getEventName());
        existingEvent.setDescription(event.getDescription());
        existingEvent.setDate(event.getDate());
        existingEvent.setLocation(event.getLocation());
        existingEvent.setAttendees(event.getAttendees());
        Event updatedEvent = userRepository.save(existingEvent);
        return ResponseEntity.ok(updatedEvent);
    }


    @PostMapping("/addAttendee/{id}")
    public ResponseEntity<Event> addAttendee(
        @PathVariable Long id,
        @RequestBody User user
    ) {
        Event event = userRepository.findById(id).orElse(null);
        if (event == null) {
            return ResponseEntity.notFound().build();
        }
        if (event.getAttendees() == null) {
            event.setAttendees(new ArrayList<>());
        }
        event.getAttendees().add(user.getName());
        userRepository.save(event);
        return ResponseEntity.ok(event);
    }
    
    
    

@GetMapping("/getEvent/{id}")
public ResponseEntity<Event> getEventById(@PathVariable Long id) {
    Optional<Event> event = userRepository.findById(id);
    return event.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(null));
}



}
    

