import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DirectionsPage from './pages/DirectionsPage';
import GalleryPage from './pages/GalleryPage';
import DealersPage from './pages/DealersPage';
import CampgroundsPage from './pages/CampgroundsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/directions" element={<DirectionsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/dealers" element={<DealersPage />} />
        <Route path="/campgrounds" element={<CampgroundsPage />} />
      </Routes>
    </Router>
  );
}

export default App;