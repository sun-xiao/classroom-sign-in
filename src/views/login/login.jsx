import React, { useState } from 'react';
import './login.css';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    netId: '',
    password: '',
    mode: 'student',    // Default Selection
  });
    
  //For further adjustment
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  //For further adjustment
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      const data = await response.json();
      if (response.ok) {
        
        console.log('Login successful', data);
      } else {
        console.log('Login failed', data.message);
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
  
  return (
    <div className='loginStyle'>
      <h2 className='loginHeading'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='loginID_style'>
          <label>NetID:</label>
          <input
            type="text"
            name="netId"
            value={loginData.netId}
            onChange={handleChange}
            style={{ width: '90%', padding: '8px' }}
          />
        </div>
        <div className='password_style'>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            style={{ width: '90%', padding: '8px' }}
          />
        </div>
        <div className='modeSelection'>
          <label>
            <input
              type='radio'
              name='mode'
              value='student'
              checked={loginData.mode==='student'}
              onChange={handleChange}
            />
            Student
          </label>
          <label>
            <input
            type = 'radio'
            name = 'mode'
            value= 'instructor'
            checked={loginData.mode==='instructor'}
            onChange={handleChange}
            />
            Instructor
          </label>
          <label>
            <input
            type='radio'
            name='mode'
            value= 'ta'
            checked={loginData.mode==='ta'}
            onChange={handleChange}
            />
            TA
          </label>
        </div>
        <div className='bottom_style'>
          <button type="submit" className='submit_style'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;