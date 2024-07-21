import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/addEvent.css";

const Addattendee = () => {
  const { id } = useParams();
  console.log("Event ID:", id);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setMessage("Name and Email are required.");
      return;
    }

    try {
      await axios.post(`http://localhost:8080/addAttendee/${id}`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      setFormData({ name: "", email: "" });
      setMessage("Attendee successfully registered!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error registering attendee.");
    }
  };

  return (
    <div className="container4">
      <div className="addEvent">
        <h1 className="title">Add Attendee</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="button-container">
            <button type="submit" className="button2">
              Add Attendee
            </button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Addattendee;
