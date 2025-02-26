import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import bgImage from '../../assets/bg.png';
import DiscountForm from '../DiscountForm';
import petPolicyPDF from '../../assets/Pet_Policy.pdf';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDiscountForm, setShowDiscountForm] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };
  
  const openPetPolicy = () => {
    window.open(petPolicyPDF, '_blank');
    setMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Overlay for darker background */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Main content container */}
      <div className="relative z-10 px-12 md:px-16 lg:px-24 py-4">
        {/* Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="pl-6 md:pl-10">
            <img src={logo} alt="RV Show Logo" className="h-20 md:h-24" />
          </div>

          {/* Desktop Navigation Links - hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 justify-center">
            <div className="flex space-x-12 text-white font-medium">
              <button onClick={() => handleNavigation('/')} className="hover:text-gray-300 transition-colors">Home</button>
              <button onClick={() => handleNavigation('/directions')} className="hover:text-gray-300 transition-colors">Directions</button>
              <button onClick={() => setShowDiscountForm(true)} className="hover:text-gray-300 transition-colors">Discount Coupons</button>
              <button onClick={() => handleNavigation('/gallery')} className="hover:text-gray-300 transition-colors">Gallery</button>
              <button onClick={() => handleNavigation('/dealers')} className="hover:text-gray-300 transition-colors">Dealers</button>
              {/* <button onClick={() => handleNavigation('/campgrounds')} className="hover:text-gray-300 transition-colors">Campgrounds</button>
              <button onClick={openPetPolicy} className="hover:text-gray-300 transition-colors">Pet Policy</button> */}
            </div>
          </div>

          {/* Menu Button */}
          <div className="pr-6 md:pr-10">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {!menuOpen && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="mt-16 md:mt-28 mx-4 md:ml-20 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
            The 2025 Greater<br />
            Philadelphia RV<br />
            Show
          </h1>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-white max-w-2xl">
            Find the perfect RV, plan your adventure, and experience the freedom of the open road like never before.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#" 
              className="w-[200px] sm:w-auto px-6 md:px-8 py-2 bg-white rounded-full text-gray-900 font-medium hover:bg-gray-100 transition-colors text-center"
            >
              Two Day Pass
            </a>
            <a 
              href="#" 
              className="w-[200px] sm:w-auto px-6 md:px-8 py-2 text-white font-medium text-center border border-white rounded-full"
            >
              Show Display Map
            </a>
          </div>
        </div>

        {/* Feature Cards - Mobile responsive adjustments */}
        <div className="mt-16 sm:mt-32 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pb-16 px-4 sm:px-0 mx-auto" 
            style={{ maxWidth: '900px', marginLeft: 'auto', marginRight: '-30px' }}>
          {/* Card 1 */}
          <div className="bg-black bg-opacity-30 p-4 sm:p-6 rounded-lg h-auto sm:h-48 w-full sm:w-[280px] mx-auto">
            <h2 className="text-lg sm:text-xl font-semibold text-white">Latest RV Models</h2>
            <div className="w-full sm:w-56 h-0.5 bg-white my-2 sm:my-3"></div>
            <p className="text-white text-xs sm:text-sm">
              Explore Brand-New 2025 RVs, Campers, And Trailers From Top Manufacturers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black bg-opacity-30 p-4 sm:p-6 rounded-lg h-auto sm:h-48 w-full sm:w-[280px] mx-auto">
            <h2 className="text-lg sm:text-xl font-semibold text-white">One-Stop Shop</h2>
            <div className="w-full sm:w-56 h-0.5 bg-white my-2 sm:my-3"></div>
            <p className="text-white text-xs sm:text-sm">
              Browse Hundreds Of Vendors & Offering RV Essentials
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black bg-opacity-30 p-4 sm:p-6 rounded-lg h-auto sm:h-48 w-full sm:w-[280px] mx-auto">
            <h2 className="text-lg sm:text-xl font-semibold text-white">Easy Bookings</h2>
            <div className="w-full sm:w-56 h-0.5 bg-white my-2 sm:my-3"></div>
            <p className="text-white text-xs sm:text-sm">
              Best in class ticket booking system.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50" onClick={toggleMenu}></div>
          
          {/* Menu */}
          <div className="relative w-full max-w-xs bg-white h-full overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <img src={logo} alt="RV Show Logo" className="h-10" />
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4">
              <button 
                onClick={() => handleNavigation('/')} 
                className="flex items-center py-3 px-4 rounded hover:bg-gray-100 w-full text-left"
              >
                <svg className="h-5 w-5 mr-3 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/directions')} 
                className="flex items-center py-3 px-4 rounded hover:bg-gray-100 w-full text-left"
              >
                <svg className="h-5 w-5 mr-3 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Directions
              </button>
              <button 
                onClick={() => {
                  setShowDiscountForm(true);
                  setMenuOpen(false);
                }} 
                className="flex items-center py-3 px-4 rounded hover:bg-gray-100 w-full text-left"
              >
                <svg className="h-5 w-5 mr-3 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Discount Coupon
              </button>
              <button 
                onClick={() => handleNavigation('/gallery')} 
                className="flex items-center py-3 px-4 rounded hover:bg-gray-100 w-full text-left"
              >
                <svg className="h-5 w-5 mr-3 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Gallery
              </button>
              <button 
                onClick={() => handleNavigation('/dealers')} 
                className="flex items-center py-3 px-4 rounded hover:bg-gray-100 w-full text-left"
              >
                <svg className="h-5 w-5 mr-3 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 21V7L13 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 21V12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9V9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 13V13.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 17V17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Dealers
              </button>
              <button 
                onClick={() => handleNavigation('/campgrounds')} 
                className="flex items-center py-3 px-4 rounded hover:bg-gray-100 w-full text-left"
              >
                <svg className="h-5 w-5 mr-3 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 18L5 21L2 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 17V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 6L19 3L22 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Campgrounds
              </button>
              <button 
                onClick={openPetPolicy} 
                className="flex items-center py-3 px-4 rounded hover:bg-gray-100 w-full text-left"
              >
                <svg className="h-5 w-5 mr-3 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15 8L22 9L17 14L18 21L12 17.5L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Pet Policy
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Discount Form Modal */}
      {showDiscountForm && <DiscountForm onClose={() => setShowDiscountForm(false)} />}
    </div>
  );
};

export default Hero;