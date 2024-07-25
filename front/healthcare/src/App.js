import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/authContext'

import MainPage from './Pages/mainPage'
import MainPage_login from './Pages/mainPage_login'
import Login from './Pages/login'
import SignUp from './Pages/signUp'
import Navbar from './Components/navbar'


function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/mainpage_login' element={<MainPage_login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App
