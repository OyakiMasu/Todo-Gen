import React, { useState } from 'react';
import Navbar from './Navbar';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        console.log('Signin successful!');
        // Do something after signin is successful, such as redirecting the user to a new page
      } else {
        console.error('Signin failed.');
        // Do something when signin fails, such as displaying an error message to the user
      }
    } catch (error) {
      console.error(error);
      // Do something when there's an error, such as displaying an error message to the user
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Signin</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSignin}>Signin</button>
    </div>
  );
};

export default Signin;