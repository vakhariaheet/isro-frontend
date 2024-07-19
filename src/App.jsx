import React, { useState } from 'react';
import { Register } from './components/Register';
import { Login } from './components/Login';
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
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {
        // currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </>
  )
}

export default App
