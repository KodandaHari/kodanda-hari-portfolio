import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import CenteredNav from './components/CenteredNav';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background-dark">
        <CenteredNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
