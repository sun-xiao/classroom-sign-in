import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './views/login/login';
import InstructorClass from './views/Instructor/InstructorClass';
import InstructorMain from './views/Instructor/InstructorMain';
import './APP.css';
import Sidebar from './views/Instructor/InstructorSidebar'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/class-management" element={<><Sidebar /><InstructorClass /></>} />
          <Route path="/instructor-main" element={<><Sidebar /><InstructorMain /></>} /> 
        </Routes>
      </div>
    </Router>
  );
}


export default App;
