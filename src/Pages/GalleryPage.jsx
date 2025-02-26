import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import w1 from '../assets/w1.jpeg';
import w2 from '../assets/w2.jpeg';
import w3 from '../assets/w3.jpeg';
import w4 from '../assets/w4.jpeg';
import w5 from '../assets/w5.jpeg';
import w6 from '../assets/w6.jpeg';
import w7 from '../assets/w7.jpeg';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    { id: 1, src: w1, alt: "RV Show Image 1" },
    { id: 2, src: w2, alt: "RV Show Image 2" },
    { id: 3, src: w3, alt: "RV Show Image 3" },
    { id: 4, src: w4, alt: "RV Show Image 4" },
    { id: 5, src: w5, alt: "RV Show Image 5" },
    { id: 6, src: w6, alt: "RV Show Image 6" },
    { id: 7, src: w7, alt: "RV Show Image 7" }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-4 py-2 bg-[#295A4A] text-white rounded-full hover:bg-[#1e3d33] transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 pt-24">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#295A4A] mb-4">
            GALLERY
          </h1>
          <div className="w-48 h-0.5 bg-[#295A4A] mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of images from previous RV shows and get excited for the upcoming 2025 Greater Philadelphia RV Show!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="relative aspect-[4/3] bg-gray-100">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 focus:outline-none"
            onClick={closeLightbox}
          >
            <X size={36} />
          </button>
          <div 
            className="max-w-6xl max-h-[90vh]" 
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;