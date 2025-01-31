import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import ArticlesPage from './ArticlesPage';
import CreateArticlesPage from './CreateArticlesPage';
import Navbar from './Navbar';
import Footer from './Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Future Route for Articles Page */}
          {/* <Route path="/articles" element={<ArticlesPage />} /> */}
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/create" element={<CreateArticlesPage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
