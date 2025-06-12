import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem('bubUser', JSON.stringify({ email, password }));
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-lime-200 p-4">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <input type="email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="button">Sign Up</button>
        <p className="text-center mt-4 text-sm">Already have an account? <Link to="/" className="text-green-600">Log in</Link></p>
      </form>
    </div>
  );
};

export default Signup;
