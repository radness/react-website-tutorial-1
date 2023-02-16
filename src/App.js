import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* react-router-dom version 6 이상은 Switch 지원을 하지 않는다.
            Switch -> Routes */}
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
