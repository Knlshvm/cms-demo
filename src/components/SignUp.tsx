import React, { useState, useContext } from 'react';
import './SignUp.css'; 
import { useFirebase } from '../context/firebase';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');
  const firebaseContext = useFirebase();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!termsAccepted) {
        setError('Please accept the terms and conditions to sign up.');
        return;
      }
  
      if (firebaseContext) {
        // Create user account directly without checking existing users
        await firebaseContext.signUpUserWithEmailAndPassword(email, password);
        console.log('User signed up successfully!');
        // Reset form fields
        setName('');
        setEmail('');
        setPassword('');
        // Set success message
        setError('Account created successfully!');
        // Additional logic if needed (e.g., redirect to another page)
      } else {
        console.error('Firebase context is not available.');
      }
    } catch (error: any) {
      setError(error.message);
    }
  };
  
  

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} required />
            <span>I accept the terms and conditions</span>
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="signin-link">
        <p>Already have an account? <a href="/login">Sign In</a></p>
      </div>
    </div>
  );
};

export default SignUp;
