import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import DiscountForm from './DiscountForm';
import petPolicyPDF from '../../assets/Pet_Policy.pdf';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDiscountForm, setShowDiscountForm] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
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
    <>
      {/* Navigation */}
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="py-2">
          <img src={logo} alt="RV Show Logo" className="h-14 md:h-16" />
        </div>

        {/* Desktop Navigation Links - hidden on mobile */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <button onClick={scrollToTop} className="hover:text-gray-300 transition-colors">
            Home
          </button>
          <button 
            onClick={() => handleNavigation('/directions')} 
            className="hover:text-gray-300 transition-colors"
          >
            Directions
          </button>
          <button 
            onClick={() => setShowDiscountForm(true)} 
            className="hover:text-gray-300 transition-colors"
          >
            Discount Coupons
          </button>
          <button 
            onClick={() => handleNavigation('/gallery')} 
            className="hover:text-gray-300 transition-colors"
          >
            Gallery
          </button>
          {/* <button 
            onClick={() => handleNavigation('/dealers')} 
            className="hover:text-gray-300 transition-colors"
          >
            Dealers
          </button>
          <button 
            onClick={() => handleNavigation('/campgrounds')} 
            className="hover:text-gray-300 transition-colors"
          >
            Campgrounds
          </button>
          <button 
            onClick={openPetPolicy} 
            className="hover:text-gray-300 transition-colors"
          >
            Pet Policy
          </button> */}
        </div>

        {/* Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="text-white focus:outline-none md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {!menuOpen && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black opacity-50" onClick={toggleMenu}></div>
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
              <button onClick={scrollToTop} className="w-full flex items-center py-3 px-4 rounded hover:bg-gray-100">
                <svg className="h-5 w-5 mr-3 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Home
              </button>
              
              <button 
                onClick={() => handleNavigation('/directions')}
                className="w-full flex items-center py-3 px-4 rounded hover:bg-gray-100"
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
                className="w-full flex items-center py-3 px-4 rounded hover:bg-gray-100"
              >
                <svg className="h-5 w-5 mr-3 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Discount Coupons
              </button>
              
              <button 
                onClick={() => handleNavigation('/gallery')}
                className="w-full flex items-center py-3 px-4 rounded hover:bg-gray-100"
              >
                <svg className="h-5 w-5 mr-3 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Gallery
              </button>
{/*               
              <button 
                onClick={() => handleNavigation('/dealers')}
                className="w-full flex items-center py-3 px-4 rounded hover:bg-gray-100"
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
                className="w-full flex items-center py-3 px-4 rounded hover:bg-gray-100"
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
                className="w-full flex items-center py-3 px-4 rounded hover:bg-gray-100"
              >
                <svg className="h-5 w-5 mr-3 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15 8L22 9L17 14L18 21L12 17.5L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Pet Policy
              </button> */}
            </div>
          </div>
        </div>
      )}

      {/* Discount Form Modal */}
      {showDiscountForm && <DiscountForm onClose={() => setShowDiscountForm(false)} />}
    </>
  );
};

export default Navbar;