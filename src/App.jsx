import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './views/login/login';
import InstructorClass from './views/Instructor/InstructorClass';
// import InstructorMain from './views/Instructor/InstructorMain';
import './APP.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/instructor-class" element={<InstructorClass />} />
            {/* <Route path="/instructor-main" element={<InstructorMain />} /> */}
          </Routes>
        </main>
        <footer>
        </footer>
      </div>
    </Router>
  );
}

export default App;
