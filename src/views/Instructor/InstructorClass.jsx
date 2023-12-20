// ClassManagement.jsx
import React,{ useEffect } from 'react';
import './InstructorClass.css'; 
import { Link } from 'react-router-dom';

const ClassManagement = () => {
  const classData = [
    { id: 25, name: 'ELEC498', year: 2017, department: 'ECE' },
    { id: 24, name: 'CMPE454', year: 2016, department: 'ECE' },
    { id: 26, name: 'CMPE458', year: 2019, department: 'ECE' },
  ];

  useEffect(()=>{
    document.body.style.width = '100%';
    document.body.style.height = '570px';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  })

  return (
    <div className="class-management">
      <aside className="sidebar">
      <ul>
          <li><Link to="/Instructor-main">Main</Link></li>
          <li><Link to="/class-management">Class Management</Link></li>
          <li><Link to="/instructor/student">Student Management</Link></li>
          {/* Add more items if needed */}
        </ul>
      </aside>
      <section className="content">
        <h1>Class Management System</h1>
        <table>
          <thead>
            <tr>
              <th>ClassId</th>
              <th>ClassName</th>
              <th>Year</th>
              <th>Faculty</th>
            </tr>
          </thead>
          <tbody>
            {classData.map((classInfo) => (
              <tr key={classInfo.id}>
                <td>{classInfo.id}</td>
                <td>{classInfo.name}</td>
                <td>{classInfo.year}</td>
                <td>{classInfo.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ClassManagement;

