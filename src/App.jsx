import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import BookList from './pages/BookList';
import Stats from './pages/Stats';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
  );
}

export default App
