import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
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

  //This step is to connect BE and to route different modes.
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
    
      if (response.ok) {
        const data = await response.json(); 
        console.log('Login successful', data);
        // Based on different mode
        switch (loginData.mode) {
          case 'student':
            navigate('/student-class'); // student mode
            break;
          case 'instructor':
            navigate('/instructor-class'); // Instructor mode
            break;
          case 'ta':
            navigate('/ta-class'); // TA mode
            break;
          default:
            navigate('/'); // Default
            break;
        }
      } else {
        // if login failed
        const errorMessage = await response.text(); 
        console.log('Login failed', errorMessage);
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