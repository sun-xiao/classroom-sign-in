// ClassManagement.jsx
import React, { useState, useEffect } from 'react';

const ClassManagement = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch the course data from the database and set it to the state
    // This is a placeholder for your actual database call
    setCourses([
      { id: 1, name: 'Course 1', department: 'Department 1' },
      // ... more courses
    ]);
  }, []);

  const handleEdit = (courseId) => {
    // Logic to handle edit
  };

  const handleDelete = (courseId) => {
    // Logic to handle delete
  };

  return (
    <div className="course-management">
      <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.department}</td>
              <td>
                <button onClick={() => handleEdit(course.id)}>Edit</button>
                <button onClick={() => handleDelete(course.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassManagement;
