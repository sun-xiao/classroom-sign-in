// ClassManagement.jsx
import React, { useState, useEffect } from 'react';

const ClassManagement = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/classes'); // 调整URL以匹配你的API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const coursesData = await response.json();
        setCourses(coursesData);
      } catch (error) {
        console.error('Fetch courses failed:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleAdd = async (newCourse) => {
    try {
      const response = await fetch('http://localhost:3000/api/classes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse), 
      });
      if (response.ok) {
        const addedCourse = await response.json(); 
        setCourses([...courses, addedCourse]); 
      } else {
        throw new Error('Add request failed');
      }
    } catch (error) {
      console.error('Failed to add the course:', error);
    }
  };

  const handleDelete = async (courseId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/classes/${courseId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setCourses(courses.filter(course => course.id !== courseId));
      } else {
        throw new Error('Delete request failed');
      }
    } catch (error) {
      console.error('Failed to delete the course:', error);
    }
  };

  return (
    <div className="instructor-class">
      <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Department</th>
            <th>Year</th>
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
                <button onClick={() => handleAdd(course.id)}>Add</button>
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
