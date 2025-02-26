import React from 'react';

const ParkingSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-[#295A4A]">
            PARKING
          </h2>
          <div className="w-48 h-0.5 bg-[#295A4A] mx-auto mt-4"></div>
        </div>

        {/* Map Container */}
        <div className="w-full mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.9003673826335!2d-75.45650492363143!3d40.12762047821343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c691f2e142e2ff%3A0x2c1a3845b6b5b7eb!2sGreater%20Philadelphia%20Expo%20Center!5e0!3m2!1sen!2sus!4v1708974533657!5m2!1sen!2sus"
            className="w-full h-[400px] md:h-[500px] rounded-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Parking Note */}
        <div className="text-center mt-4">
          <p className="text-gray-600 font-medium mb-6">
            Plenty of parking on site
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-8">
          <p className="text-xl md:text-2xl">
            <span className="font-semibold">Please call </span>
            <span className="font-bold">(800) 290-6886</span>
            <span className="font-semibold"> for additional information</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParkingSection;