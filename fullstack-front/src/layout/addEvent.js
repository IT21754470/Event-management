import React, { useState } from 'react';
import axios from 'axios';

import '../css/addEvent.css';

const AddEvent = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    date: '',
    location: '',
    attendees: []
  });
  const [attendees, setAttendeeName] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleAddAttendee = () => {
    if (attendees.trim() !== '') {
      setFormData({
        ...formData,
        attendees: [...formData.attendees, attendees]
      });
      setAttendeeName('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/addEvent', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      setFormData({
        eventName: '',
        description: '',
        date: '',
        location: '',
        attendees: []
      });
      setMessage('Event successfully registered!');
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Error registering event.');
    }
  };

  return (
    <div>
     
      <div className="addEvent">
        <h1 className="title">Add Event</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="eventName">Event Name</label>
            <input type="text" id="eventName" className="form-control" value={formData.eventName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" className="form-control" value={formData.description} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" className="form-control" value={formData.date} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" className="form-control" value={formData.location} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="attendees">Attendees</label>
            <input type="text" id="attendees" className="form-control" value={attendees} onChange={(e) => setAttendeeName(e.target.value)} />
            <button type="button" className="btn-add" onClick={handleAddAttendee}>Add Attendee</button>
          </div>
          <div className="form-group">
            <ul>
              {formData.attendees.map((attendee, index) => (
                <li key={index}>{attendee}</li>
              ))}
            </ul>
          </div>
          <div className="button-container">
          <button type="submit" className="button2">Add Event</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default AddEvent;