import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Client from './client'; // Corrected import statement

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/members" element={<Client />} /> {/* Wrap Client component with curly braces */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;