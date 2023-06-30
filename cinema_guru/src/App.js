import React from 'react';
import './App.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';
import { useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      fetch('http://localhost:8000/api/auth', null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          setIsLoggedIn(true);
          setUsername(response.data.username);
        })
        .catch((error) => {
          setIsLoggedIn(false);
          setUsername('');
        });
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard userUsername={username} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Authentication
          setIsLoggedIn={setIsLoggedIn}
          userUsername={setUsername}
        />
      )}
    </div>
  );
}

export default App;
