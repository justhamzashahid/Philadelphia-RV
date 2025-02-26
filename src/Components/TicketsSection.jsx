import React from 'react';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';

const TicketsSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-[#295A4A]">
            TICKET PRICES
          </h2>
          <div className="w-48 h-0.5 bg-[#295A4A] mx-auto mt-4"></div>
        </div>

        {/* Tickets Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Ticket 1 */}
          <div className="w-full max-w-sm">
            <img 
              src={s1} 
              alt="Adult Ticket" 
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
            />

              {/* Door Purchase Note */}
    <p className="text-xl font-bold text-gray-800 mt-4 text-center lg:text-left">
      *Tickets can be purchased at the door
    </p>
          </div>

          {/* Ticket 2 */}
          <div className="w-full max-w-sm">
            <img 
              src={s2} 
              alt="Adult Ticket with Parking" 
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Ticket 3 */}
          <div className="w-full max-w-sm">
            <img 
              src={s3} 
              alt="Family Ticket" 
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Door Purchase Note */}
        {/* <div className="text-center mt-8">
          <p className="text-xl font-bold text-gray-800">
            *Tickets can be purchased at the door
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default TicketsSection;