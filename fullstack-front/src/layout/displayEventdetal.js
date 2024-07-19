import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../css/displayEvent.css';

const DisplayEvent = () => {
    const [events, setEvents] = useState([]);

    useEffect(()=>{
        fetchEvents();
    },[]);


    const fetchEvents=async()=>{

        try{
            const response=await axios.get('http://localhost:8080/getEvent');
            console.log('fetched events:',response.data);
            setEvents(response.data);

            
        }catch(error){
            console.error('Error fetching events:',error);
        }


    }

    const handleDelete=async(id)=>{
        try{
            await axios.delete(`http://localhost:8080/deleteEvent/${id}`);
            console.log('Event deleted:',id);
            setEvents(events.filter(event => event.id !== id));
        }catch(error){
            console.error('Error deleting event:',error);
        }

    }


    return(
        <div className='displayEvent'>
            <h1 className="title">Event List</h1>
            <table className="eventTable">
                <thead>
                    <tr>
                        <th>EventName</th>
                        <th>description</th>
                        <th>date</th>
                        <th>location</th>
                        <th>attendees</th>
                        <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {events.map((event,index)=>(
                        <tr key={index}>
                    <td>{event.eventName}</td>
                    <td>{event.description}</td>
                    <td>{event.date}</td>
                    <td>{event.location}</td>
                    <td>{event.attendees.join(', ')}</td>
                    <td>{event.status}
                    <td>
                    <button className='buttons'>Update</button>
               
                    <button className='buttons2' onClick={()=>handleDelete(event.id)}>delete</button>
                </td>
</td>
                    </tr>
                    ))}
                </tbody>
              

            </table>

        </div>
    )
}
export default DisplayEvent;    
