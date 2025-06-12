import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('bubUser'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate('/bubbook');
    } else {
      alert("Invalid login 🥲 Try again, bub");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-100 p-4">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <input type="email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="button">Log In</button>
        <p className="text-center mt-4 text-sm">Don't have an account? <Link to="/signup" className="text-pink-600">Sign up</Link></p>
      </form>
    </div>
  );
};

export default Login;
