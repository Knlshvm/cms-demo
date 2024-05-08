import React, { useState, useContext } from 'react';
// import { FirebaseContext } from '../context/firebase';
import './LoginForm.css';
import { useFirebase } from '../context/firebase';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const firebaseContext = useFirebase();
  const navigate = useNavigate();  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (firebaseContext) {
        console.log(email,password)
        await firebaseContext.signinUserWithEmailAndPassword(email, password);
        navigate('/dashboard');
        // console.log('User signed in successfully!');
      } else {
        setError('Firebase context is not available.');
      }
    } catch (error: any) {
      setError(error.message); // Set error message if email/password don't match
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LoginForm;