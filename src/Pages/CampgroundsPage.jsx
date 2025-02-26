import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CampgroundsPage = () => {
  const navigate = useNavigate();
  
  // Campground data directly based on the HTML table
  const campgrounds = [
    {
      name: 'Blue Rocks Family Campground',
      website: 'http://www.bluerockscampground.com/',
      contact: 'Jed Wood',
      address1: '341 Sousley Road',
      address2: 'Lenhartsville, PA 19534',
      phone: '(610) 972-8532',
      fax: '(610) 756-3006',
      booth: 'C 38, 39, 40',
      email: 'jed@bluerockscampground.com'
    },
    {
      name: 'Buttonwood Campground & Juniata River Adventures',
      website: 'http://www.buttonwoodcamp.com/',
      contact: 'Lacy Beverlin',
      address1: '1515 E. River Road',
      address2: 'Mifflintown, PA 17059',
      phone: '(717) 436-8334',
      fax: '(717) 436-7523',
      booth: 'B 31, 32',
      email: 'camp@buttonwoodcamp.com'
    },
    {
      name: 'Candy Hill Campground',
      website: '',
      contact: '',
      address1: '165 Ward Avenue',
      address2: 'Winchester, VA 22602',
      phone: '(540) 662-8010',
      fax: '(540) 662-8464',
      booth: 'B 27',
      email: ''
    },
    {
      name: 'Colonial Woods Family Camping Resort',
      website: 'http://www.colonialwoods.com/',
      contact: 'Nathan Hawbert',
      address1: '545 Lonely Cottage Drive',
      address2: 'Upper Black Eddy, PA 18972',
      phone: '267-897-3838',
      fax: '',
      booth: 'C 28',
      email: 'camping@colonialwoods.com'
    },
    {
      name: 'Deer Run Camping Resort',
      website: 'http://www.deerruncampingresort.com/',
      contact: 'Zach Hill',
      address1: '111 Sheet Iron Roof Road',
      address2: 'Gardners, PA 17324',
      phone: '717-253-5906',
      fax: '',
      booth: 'C 22',
      email: 'southpenn14@gmail.com'
    },
    {
      name: 'Knoebels Amusement Resort & Campground',
      website: 'http://www.knoebels.com/',
      contact: 'Alisha Mack',
      address1: '391 Knoebels Blvd.',
      address2: 'Elysburb, PA 17824',
      phone: '(570) 672-2572',
      fax: '',
      booth: 'C 27',
      email: 'amack@knoebels.com'
    },
    {
      name: 'Little Mexico Campground',
      website: 'http://www.littlemexico.net/',
      contact: 'Melissa Loy',
      address1: '1640 Little Mexico Road',
      address2: 'Winfield, PA 17889',
      phone: '(570) 374-9742',
      fax: '',
      booth: 'C 23',
      email: 'camping@littlemexico.net'
    },
    {
      name: 'Sea Pirate Campground',
      website: 'http://www.sea-pirate.com/',
      contact: 'Matthew Benn',
      address1: 'P.O. Box 271',
      address2: 'West Creek, NJ 08092',
      phone: '(609) 296-7400',
      fax: '(609) 296-8385',
      booth: 'C 26',
      email: 'info@sea-pirate.com'
    },
    {
      name: 'Sleepy Hollow Campground',
      website: 'http://www.sleepyhollowcamground.com/',
      contact: 'Noah Priclott',
      address1: '134 Bevis Mill Road',
      address2: 'Egg Harbor Twp., NJ 08234',
      phone: '609-927-1969',
      fax: '',
      booth: 'C 25',
      email: 'sleepyhollowcampground@gmail.com'
    },
    {
      name: 'Travel Resorts of America',
      website: 'http://www.travelresortsofamerica.com/',
      contact: 'Stephanie Wilson',
      address1: '1930 N. poplar Street',
      address2: 'Southern Pines, NC 28387',
      phone: '585-474-0038',
      fax: '',
      booth: 'B 34',
      email: 'swilson@travelresorts.com'
    },
    {
      name: 'Twin Bridge Campground',
      website: 'http://www.twinbridgecampground.com/',
      contact: 'Randy Quinby',
      address1: '1345 Twin Bridge Road',
      address2: 'Chambersburg, PA 17202',
      phone: '(267) 377-6233',
      fax: '',
      booth: 'B 30',
      email: 'twinbridgecampground@gmail.com'
    }
  ];

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

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 pt-24">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#295A4A] mb-4">
            CAMPGROUNDS
          </h1>
          <div className="w-48 h-0.5 bg-[#295A4A] mx-auto mb-8"></div>
        </div>

        {/* Campgrounds Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {campgrounds.map((campground, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="py-2 w-[40%]">
                    {campground.website ? (
                      <a 
                        href={campground.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {campground.name}
                      </a>
                    ) : (
                      <span className="font-medium">{campground.name}</span>
                    )}
                  </td>
                  <td className="py-2 w-[40%]">{campground.address1}</td>
                  <td className="py-2 w-[2%]"></td>
                  <td className="py-2 w-[18%]">{campground.phone}</td>
                </tr>
                <tr>
                  <td className="py-2">
                    {campground.email && (
                      <a 
                        href={`mailto:${campground.email}`}
                        className="text-blue-600 hover:underline block"
                      >
                        {campground.contact}
                      </a>
                    )}
                    {!campground.email && campground.contact && (
                      <span>{campground.contact}</span>
                    )}
                  </td>
                  <td className="py-2">{campground.address2}</td>
                  <td className="py-2">{campground.fax ? 'Fax:' : ''}</td>
                  <td className="py-2">{campground.fax}</td>
                </tr>
                <tr>
                  <td colSpan={4} className="py-2 pb-4">
                    Booth Number(s): {campground.booth}
                  </td>
                </tr>
                {/* Space between campgrounds */}
                {index < campgrounds.length - 1 && (
                  <tr>
                    <td colSpan={4} className="h-6"></td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default CampgroundsPage;