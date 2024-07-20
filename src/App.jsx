import React, { useState } from 'react';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      {
        // currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </>
  )
}

export default App
