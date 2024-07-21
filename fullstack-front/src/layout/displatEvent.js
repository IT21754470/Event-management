import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/addEvent2.css";

const DisplayEvent = () => {
  const [events, setEvents] = useState([]);
  const [filteredEventNames, setFilteredEventNames] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getEvent');
      console.log('Fetched events:', response.data);
      setEvents(response.data);
      setFilteredEventNames(response.data.map(event => ({
        id: event.id,
        eventName: event.eventName,
      })));
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Event List</h1>
      <div className="card-container">
        {events.length === 0 ? (
          <div>No events found</div>
        ) : (
          events.map((event) => (
            <div className="card" key={event.id}>
              <h2 className="card-title">{event.eventName}</h2>
              <p><strong>Description:</strong> {event.description}</p>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DisplayEvent;
