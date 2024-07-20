import react from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../css/addEvent2.css';
const DisplayEvent = () => {

    const [events, setEvents] = useState([]);
    const [filteredEventNames, setFilteredEventNames] = useState([]);

    useEffect(()=>{
        fetchEvents();
    },[]);


    const fetchEvents=async()=>{

        try{
            const response=await axios.get('http://localhost:8080/getEvent');
            console.log('fetched events:',response.data);
            setEvents(response.data);
            setFilteredEventNames(response.data.map(event => ({ id: event.id, eventName: event.eventName })));
            
        }catch(error){
            console.error('Error fetching events:',error);
        }


    }
    return(
        <div className='container'>
            <div className='container2'>
            <h1 className='title'>Event List</h1>
            {filteredEventNames.length=== 0?(
                <div>No events found</div>
            ) : (
                <ul className='list'>
                  {filteredEventNames.map((event)=>(
                  <li className='list2'key={event.id}>

            <span className='span'>{event.eventName}</span>

            
                        </li>


                  ))}
                </ul>
            )}




        </div>
        </div>

    )
};
export default DisplayEvent;