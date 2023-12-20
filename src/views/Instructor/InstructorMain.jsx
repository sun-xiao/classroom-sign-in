import React,{ useEffect} from 'react';
import { Link } from 'react-router-dom';
import './InstructorMain.css'; // Ensure this CSS file exists and is correctly linked
import backgroundImage from './../login/building.jpg';


const InstructorMain = () => {
  useEffect(()=>{
    document.body.style.width = '100%';
    document.body.style.height = '570px';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  })
  return (
    <div className="instructor-main">
      <aside className='sidebar'>
        <ul>
          <li><Link to="/Instructor-main">Main</Link></li>
          <li><Link to="/class-management">Class Management</Link></li>
          <li><Link to="/instructor/student">Student Management</Link></li>
          {/* Add more items if needed */}
        </ul>
      </aside>
      <section className='content'>
        <img src={backgroundImage} alt="Background" className="background-image"/>
        <div className="overlay-text">Welcome to the Instructor Dashboard</div>
      </section>
    </div>
  );
};


export default InstructorMain;