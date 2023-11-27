import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CampsitesDirectoryPage from '../src/pages/CampsitesDirectoryPage';
import HomePage from '../src/pages/HomePage';
import ContactPage from '../src/pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className='App'>
    <Header />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='directory' element={<CampsitesDirectoryPage />} />
      </Routes>
    <Footer />
</div>
  );
}

export default App;
