import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const DealersPage = () => {
  const navigate = useNavigate();
  
  // This data structure is directly based on the HTML table
  const dealers = [
    {
      name: 'Campers Inn RV',
      website: 'http://www.campersinn.com/philadelphia',
      contact: 'Hadden Smith',
      address1: '1651 Route 309',
      address2: 'Hatfield, PA 19440',
      phone: '(215) 822-1345',
      fax: '(215) 822-0339',
      booth: 'B 19 - 26, C 17, 19',
      email: ''
    },
    {
      name: 'Colton RV',
      website: 'http://www.coltonrv.com/',
      contact: '',
      address1: '489 Bush Kill Plaza Lane',
      address2: 'Wind Gap, PA 18091',
      phone: '(610) 863-5239',
      fax: '',
      booth: 'A 29, 30, 30r',
      email: 'wlehto@coltonrv.com'
    },
    {
      name: 'Dylan`s RV',
      website: '',
      contact: '',
      address1: '940 Stone Hill Road',
      address2: 'Denver, PA 17517',
      phone: '(855) 395-2677',
      fax: '',
      booth: 'C 13, 14, 15, 16',
      email: 'emmafisher@campersinn.com'
    },
    {
      name: 'Fretz Enterprises, Inc.',
      website: 'http://www.fretzrv.com/',
      contact: 'Steve Fretz',
      address1: '3479 Bethlehem Pike',
      address2: 'Souderton, PA 18964',
      phone: '(215) 723-3121',
      fax: '(215) 723-0373',
      booth: 'B 11 - 18',
      email: 'sfretz@fretzrv.com'
    },
    {
      name: 'General RV',
      website: 'http://www.generalrv.com/',
      contact: 'Bob Cox',
      address1: '1335 Wilmington Pike',
      address2: 'West Chester, PA 19382',
      phone: '(610) 399-0628',
      fax: '(610) 399-1436',
      booth: 'A 25 - 30, B 1-10',
      email: 'bcox@generalrv.com'
    },
    {
      name: 'Indian Valley Camping Center',
      website: 'http://www.ivccrv.com/',
      contact: 'Claire Keller',
      address1: '3400 Bethlehem Pike',
      address2: 'Souderton, PA 18964',
      phone: '(215) 723-4852',
      fax: '(215) 723-7799',
      booth: 'C 1 - 8',
      email: ''
    },
    {
      name: 'Parkview RV Center',
      website: 'http://www.parkviewrv.com/',
      contact: 'Mike West',
      address1: '5511 Dupont Parkway',
      address2: 'Smyrna, DE 19977',
      phone: '(302) 363-5382',
      fax: '',
      booth: 'C 9, 10, 11, 12',
      email: 'mwest@parkviewrv.com'
    },
    {
      name: 'RV Value Mart',
      website: 'http://www.rvvaluemart.com/',
      contact: 'Lester Martin',
      address1: '647 E. 28th Division Hwy.',
      address2: 'Lititz, PA 17543',
      phone: '(717) 738-0385',
      fax: '',
      booth: 'A 1 - 17, 19 Hall D, E',
      email: 'rvvaluemart@ymail.com'
    },
    {
      name: 'Shady Maple RV',
      website: 'http://www.shadymaplerv.com/',
      contact: 'Scot Ash',
      address1: '4536 Division Highway',
      address2: 'East Earl, PA 17519',
      phone: '(717) 351-0087',
      fax: '',
      booth: 'A 21-24',
      email: 'rvmanager@shady-maple.com'
    },
    {
      name: 'Stoltzfus RVs of Adamstown',
      website: 'http://www.stoltzfusrvs.com/',
      contact: '',
      address1: '3280 N. Reading Road',
      address2: 'Adamstown, PA 19501',
      phone: '(717) 484-4344',
      fax: '',
      booth: 'A 18, 20',
      email: 'lester@stoltzfusrvs.com'
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
            DEALERS
          </h1>
          <div className="w-48 h-0.5 bg-[#295A4A] mx-auto mb-8"></div>
        </div>

        {/* Dealers Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            {dealers.map((dealer, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="py-2 w-[40%]">
                    {dealer.website ? (
                      <a 
                        href={dealer.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {dealer.name}
                      </a>
                    ) : (
                      <span className="font-medium">{dealer.name}</span>
                    )}
                  </td>
                  <td className="py-2 w-[40%]">{dealer.address1}</td>
                  <td className="py-2 w-[2%]"></td>
                  <td className="py-2 w-[18%]">{dealer.phone}</td>
                </tr>
                <tr>
                  <td className="py-2">
                    {dealer.contact && <span>{dealer.contact}</span>}
                    {dealer.email && (
                      <a 
                        href={`mailto:${dealer.email}`}
                        className="text-blue-600 hover:underline block"
                      >
                        {dealer.contact ? '' : dealer.email}
                      </a>
                    )}
                  </td>
                  <td className="py-2">{dealer.address2}</td>
                  <td className="py-2">{dealer.fax ? 'Fax:' : ''}</td>
                  <td className="py-2">{dealer.fax}</td>
                </tr>
                <tr>
                  <td colSpan={4} className="py-2 pb-4">
                    Booth Number(s): {dealer.booth}
                  </td>
                </tr>
                {/* Space between dealers */}
                {index < dealers.length - 1 && (
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

export default DealersPage;