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
        <Sidebar />
        <header className="App-header">
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/instructor-class" element={<InstructorClass />} />
            <Route path="/instructor-main" element={<InstructorMain />} /> 
          </Routes>
        </main>
        <footer>
        </footer>
      </div>
    </Router>
  );
}

export default App;
