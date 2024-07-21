import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/addEvent.css';

const UpdateEvent = (event) => {
    const { id } = useParams();
  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    date: '',
    location: '',
    
  });
  const [attendees, setAttendeeName] = useState('');
  const [message, setMessage] = useState('');


  useEffect(() => {
    fetchEvent();
}, [id]);

const fetchEvent = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/getEvent/${id}`);
        const event = response.data;
        const formattedDate = event.date ? new Date(event.date).toISOString().split('T')[0] : '';
        setFormData({
            eventName: event.eventName || '',
            description: event.description || '',
            date: formattedDate,
            location: event.location || '',
            
        });
    } catch (error) {
        console.error('Error fetching event:', error);
    }
};

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
      const response = await axios.put(`http://localhost:8080/updateEvent/${id}`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
     console.log(response.data);
     
      alert('Event successfully updated!');
      //go to home page
      window.location.href = '/';
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error updating event.');
    }
  };

  return (
    <div className="center-container">
     
      <div className="addEvent">
        <h1 className="title">Update Event</h1>
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
        
         
          <div className="button-container">
          <button type="submit" className="button2">update Event</button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default UpdateEvent;
