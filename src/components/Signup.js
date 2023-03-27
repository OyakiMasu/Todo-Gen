import React, { useState } from 'react';
import Navbar from './Navbar';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email })
      });

      if (response.ok) {
        console.log('Signup successful!');
        // Do something after signup is successful, such as redirecting the user to a new page
      } else {
        console.error('Signup failed.');
        // Do something when signup fails, such as displaying an error message to the user
      }
    } catch (error) {
      console.error(error);
      // Do something when there's an error, such as displaying an error message to the user
    }
  };

  return (
    <div>
    <Navbar/>

      <h1>Signup</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
