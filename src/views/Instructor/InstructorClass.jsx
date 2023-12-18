// ClassManagement.jsx
import React from 'react';
import './InstructorClass.css'; // 确保CSS文件的名称和路径是正确的

const ClassManagement = () => {
  const classData = [
    { id: 25, name: 'ELEC498', year: 2017, department: 'ECE' },
    { id: 24, name: 'CMPE454', year: 2016, department: 'ECE' },
    { id: 26, name: 'CMPE458', year: 2019, department: 'ECE' },
  ];

  return (
    <div className="class-management">
      <aside className="sidebar">
        <ul>
          <li>Main</li>
          <li className="active">Class Management</li>
          <li>Instructor Management</li>
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

