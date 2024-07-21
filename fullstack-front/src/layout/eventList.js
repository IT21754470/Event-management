import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/eventList.css";
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

  const handleUpdate = (event, e) => {
    e.stopPropagation();
    window.location.href = `/updateEvent/${event.id}`;
  };

  const handleAttendee = (event, e) => {
    e.stopPropagation();
    window.location.href = `/addAttendee/${event.id}`;
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    try {
      await axios.delete(`http://localhost:8080/deleteEvent/${id}`);
      console.log('Event deleted:', id);
      setEvents(events.filter((event) => event.id !== id));
      alert('Event successfully deleted!');
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleRowClick = (event) => {
    setSelectedEvent(event);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="container3">
      <div className="displayEvent">
        <h1 className="title">Event List</h1>
        <div className="card-container">
          {events.length === 0 ? (
            <div>No events found</div>
          ) : (
            events.map((event) => (
              <div className="card" key={event.id} onClick={() => handleRowClick(event)}>
                <h2 className="card-title">{event.eventName}</h2>
                <p><strong>Description:</strong> {event.description}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Attendees:</strong></p>
                <ul className="attendees-list">
                  {event.attendees.length > 3
                    ? `${event.attendees.slice(0, 3).join(", ")}...`
                    : event.attendees.join(", ")}
                </ul>
                <div className="card-actions">
                  <button className="buttons" onClick={(e) => handleUpdate(event, e)}>Update</button>
                  <button className="buttons2" onClick={(e) => handleDelete(event.id, e)}>Delete</button>
                  <button className="buttons3" onClick={(e) => handleAttendee(event, e)}>Register Attendee</button>
                </div>
              </div>
            ))
          )}
        </div>
        {selectedEvent && (
          <EventDetailsPopup event={selectedEvent} onClose={handleClosePopup} />
        )}
      </div>
    </div>
  );
};

export default DisplayEvent;
