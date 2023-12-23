import React,{ useEffect} from 'react';
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
      <section className='content'>
        <img src={backgroundImage} alt="Background" className="background-image"/>
        <h1 className="overlay-text">Welcome to the Instructor Dashboard</h1>
      </section>
    </div>
  );
};


export default InstructorMain;