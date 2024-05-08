// App.tsx

import React from 'react';
// import AppRouter from './routes/AppRoutes';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';

const App: React.FC = () => {
  return (
    <div>
      {/* <h1>My App</h1> */}
      {/* <AppRouter /> */}
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </div>
  );
};

export default App;
