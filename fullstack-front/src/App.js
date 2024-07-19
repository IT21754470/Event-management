
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './layout/navbar';
import AddEvent from './layout/addEvent';
import Header from './layout/header';
import DisplayEventdetail from './layout/displayEventdetal.js';
import DisplayEvent from './layout/displatEvent.js';

function App() {
  return (
   
  
<BrowserRouter>
<NavBar />
<Routes>



<Route path="/addEvent" element={<AddEvent />} />
<Route path="/getEvents" element={<DisplayEventdetail />} />
<Route path="/displayEvent" element={<DisplayEvent />} />

</Routes>



</BrowserRouter>
  );
}

export default App;
