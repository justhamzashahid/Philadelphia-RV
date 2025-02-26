import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DirectionsPage from './Pages/DirectionsPage';
import GalleryPage from './Pages/GalleryPage';
import DealersPage from './Pages/DealersPage';
import CampgroundsPage from './Pages/CampgroundsPage';
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