import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Client from './pages/Client'
import Admin from './pages/Admin'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index exact path='/client' element={<Client />} />
          <Route exact path='/admin' element={<Admin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
