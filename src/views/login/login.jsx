import React, { useState } from 'react';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    netId: '',
    password: ''
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <div style={{ width: '300px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '50px' }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '10px 0' }}>
          <label>NetID:</label>
          <input
            type="text"
            name="netId"
            value={loginData.netId}
            onChange={handleChange}
            style={{ width: '90%', padding: '8px' }}
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            style={{ width: '90%', padding: '8px' }}
          />
        </div>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <button type="submit" style={{ padding: '10px 15px' }}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
