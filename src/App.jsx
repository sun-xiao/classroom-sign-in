// App.jsx
import React from 'react';
import LoginForm from './views/login/login'; 
import './APP.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div className='postiton'>
          <LoginForm/>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
