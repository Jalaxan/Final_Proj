import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the change here
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import About from './components/About';
import Login from './components/Login';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes> {/* Use Routes component */}
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/layout" element={<Layout/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
