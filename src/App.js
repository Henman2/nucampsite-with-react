import {React, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CampsitesDirectoryPage from '../src/pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import HomePage from '../src/pages/HomePage';
import ContactPage from '../src/pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsite/campSitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { fetchComments } from './features/comments/commentsSlice';
import './App.css';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners());
    dispatch(fetchPromotions());
    dispatch(fetchComments());
}, [dispatch]);

  return (
    <div className='App'>
    <Header />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='directory' element={<CampsitesDirectoryPage />} />
          <Route path='directory/:campsiteId' element={<CampsiteDetailPage />} />
      </Routes>
    <Footer />
</div>
  );
}

export default App;
