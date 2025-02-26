import React from 'react';
import expositionImage from '../assets/image.png';

const ShowSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-12 lg:px-24">
      {/* Image Container with border */}
      <div className="max-w-4xl mx-auto border border-blue-400 rounded-lg overflow-hidden relative">
        <img 
          src={expositionImage} 
          alt="Greater Philadelphia Expo Center" 
          className="w-full h-auto object-cover"
        />
        
        {/* View Map Button */}
        <div className="absolute bottom-4 right-4 flex items-center bg-white bg-opacity-80 rounded-full px-4 py-1.5 text-sm cursor-pointer hover:bg-opacity-100 transition-all duration-200">
          <div className="bg-gray-200 rounded-full p-1 mr-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          View Map
        </div>
      </div>
      
      {/* Heading */}
      <div className="text-center mt-4 mb-16">
        <h2 className="text-2xl md:text-3xl text-gray-800 font-normal">
          Happening at <span className="font-semibold">Greater Philadelphia Expo Center</span>
        </h2>
      </div>
      
     {/* Info Cards Container */}
     <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4">
  {/* Dates Card */}
  <div className="border border-gray-800 rounded-3xl p-8 flex flex-col items-center max-w-md h-fit">
  <h3 className="text-4xl md:text-5xl font-bold text-[#295A4A] tracking-wider uppercase">
    DATES
  </h3>
  <div className="w-40 h-0.5 bg-gray-800 my-4"></div>
  <p className="text-xl md:text-2xl text-gray-800 font-normal mb-1">
    February 27th - March 2nd
  </p>
</div>
        
        {/* Show Hours Card */}
        <div className="border border-gray-800 rounded-3xl p-8 flex flex-col items-center">
          <h3 className="text-4xl md:text-5xl font-bold text-[#295A4A] tracking-wider uppercase">
            SHOW HOURS
          </h3>
          <div className="w-72 h-0.5 bg-gray-800 my-5"></div>
          <div className="text-center">
            <p className="text-lg text-gray-800 my-1 font-normal">Thursday 12:00 pm - 8:00 pm</p>
            <p className="text-lg text-gray-800 my-1 font-normal">Friday 10:00 am - 8:00 pm</p>
            <p className="text-lg text-gray-800 my-1 font-normal">Saturday 10:00 am - 8:00 pm</p>
            <p className="text-lg text-gray-800 my-1 font-normal">Sunday 11:00 am - 5:00 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSection;

