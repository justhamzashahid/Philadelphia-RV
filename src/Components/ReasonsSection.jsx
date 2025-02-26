import React from 'react';
import rvImage from '../assets/pic.png';

const ReasonsSection = () => {
    return (
        <div className="w-full bg-white pb-0">
          <div className="w-full mx-auto px-2 md:px-12 py-16">
            {/* Heading */}
            <div className="mb-12">
              <h2 className="text-6xl font-bold text-[#295A4A] leading-tight">
                5 REASONS
              </h2>
              <p className="text-xl md:text-3xl mt-1 text-[#295A4A]">
                To Attend <span className="font-bold">Greater Philadelphia RV Show</span>
              </p>
            </div>
        
        {/* Content Container */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-8">
          {/* Image */}
          <div className="md:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-md">
              <img 
                src={rvImage} 
                alt="RV in scenic landscape" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Reasons List */}
          <div className="md:w-1/2 space-y-6">
            {/* Reason 1 */}
            <div className="flex">
              <div className="mr-6 pt-1">
                <span className="text-xl font-bold text-gray-800">01.</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                  Exclusive Show-Only
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Special pricing, rebates, and financing offers available only at the show.
                  Dealers competing means better prices on new and used RVs.
                </p>
              </div>
            </div>
            
            {/* Reason 2 */}
            <div className="flex">
              <div className="mr-6 pt-1">
                <span className="text-xl font-bold text-gray-800">02.</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                  Latest RV Models
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Explore brand-new 2025 RVs, campers, and trailers from top 
                  manufacturers. Discover the latest luxury interiors, solar power solutions, 
                  and off-grid technology.
                </p>
              </div>
            </div>
            
            {/* Reason 3 */}
            <div className="flex">
              <div className="mr-6 pt-1">
                <span className="text-xl font-bold text-gray-800">03.</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                  One-Stop Shop
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Browse hundreds of vendors offering RV essentials, outdoor gear, and 
                  camping must-haves. Find upgrades, solar kits, awnings, towing 
                  accessories, and more.
                </p>
              </div>
            </div>
            
            {/* Reason 4 */}
            <div className="flex">
              <div className="mr-6 pt-1">
                <span className="text-xl font-bold text-gray-800">04.</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                  Connect with Campgrounds
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Meet representatives from top-rated campgrounds and RV resorts. 
                  Plan your next adventure with exclusive discounts on campsites and 
                  memberships.
                </p>
              </div>
            </div>
            
            {/* Reason 5 */}
            <div className="flex">
              <div className="mr-6 pt-1">
                <span className="text-xl font-bold text-gray-800">05.</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                  Fun for Whole Family
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Giveaways, contests, and interactive exhibits throughout the show. 
                  Kid-friendly activities and live product demonstrations. 
                  Connect with fellow RVers and outdoor enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full mt-16 h-px bg-gray-300 my-8"></div>
      </div>
      
      {/* Footer Banner - Full width without margins */}
      <div className="w-full bg-[#295A4A] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-24">
          <p className="text-center text-2xl md:text-3xl">
            The show is completely <span className="font-bold">indoors</span> so don't let the weather stop you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReasonsSection;