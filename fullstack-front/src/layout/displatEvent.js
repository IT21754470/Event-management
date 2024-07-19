import react from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

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

            
        }catch(error){
            console.error('Error fetching events:',error);
        }


    }
    return(
        <div>
            <h1>Event List</h1>
            {filteredEventNames.length===0?(
                <div>No events found</div>
            ) : (
                <ul>
                  {filteredEventNames.map((event)=>(
                    <li key={event.id}>

<span>{event.eventName}</span>
                        </li>


                  ))}
                </ul>
            )}




        </div>

    )
};
export default DisplayEvent;