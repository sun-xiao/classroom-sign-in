// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './InstructorSidebar.css'; // Make sure to create a corresponding CSS file

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <ul>
        <li><Link to="/instructor-main">Main</Link></li>
        <li><Link to="/class-management">Class Management</Link></li>
        <li><Link to="/student-management">Students Management</Link></li>
        {/* Add more items if needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;
