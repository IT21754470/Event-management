import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/allEvent.css";
import EventDetailsPopup from "./EventDetailsPopup";

const DisplayEvent = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getEvent');
      console.log('Fetched events:', response.data);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="container2">
      <div className="container">
        <h1 className="title">All Events</h1>
        <div className="card-container">
          {events.length === 0 ? (
            <div>No events found</div>
          ) : (
            events.map((event) => (
              <div
                className="card"
                key={event.id}
                onClick={() => handleCardClick(event)}
              >
                <h2 className="card-title">{event.eventName}</h2>
                <p><strong>Description:</strong> {event.description}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
              </div>
            ))
          )}
        </div>
      </div>
      {selectedEvent && (
        <EventDetailsPopup event={selectedEvent} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default DisplayEvent;
