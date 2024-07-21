
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './layout/navbar';
import AddEvent from './layout/addEvent';
import DisplayEventdetail from './layout/eventList.js';
import DisplayEvent from './layout/allEvents.js';
import UpdateEvent from './layout/updateEvent.js';
import Addattendee from './layout/addAttendee.js';
import Home from './layout/Home';


function App() {
  return (
   
  
<BrowserRouter>
<NavBar />
<Routes>


<Route path="/" element={<DisplayEvent />} />
<Route path="/addEvent" element={<AddEvent />} />
<Route path="/getEvents" element={<DisplayEventdetail />} />
<Route path="/displayEvent" element={<DisplayEvent />} />
<Route path="/updateEvent/:id" element={<UpdateEvent />} />
<Route path="/addAttendee/:id" element={<Addattendee />} />


</Routes>



</BrowserRouter>
  );
}

export default App;
