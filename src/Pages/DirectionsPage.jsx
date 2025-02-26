import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const DirectionsPage = () => {
  const navigate = useNavigate();

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

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#295A4A] mb-4">
            DIRECTIONS
          </h1>
          <div className="w-48 h-0.5 bg-[#295A4A] mx-auto"></div>
        </div>

        {/* Map */}
        <div className="w-full mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.9003673826335!2d-75.45650492363143!3d40.12762047821343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c691f2e142e2ff%3A0x2c1a3845b6b5b7eb!2sGreater%20Philadelphia%20Expo%20Center!5e0!3m2!1sen!2sus!4v1708974533657!5m2!1sen!2sus"
            className="w-full h-[400px] md:h-[500px] rounded-lg shadow-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Directions Content */}
        <div className="prose max-w-none text-[#0E261E]">
          {/* GPS Users Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">GPS Users</h2>
            <p className="mb-4">
              We apologize for any confusion caused by the inability of some mobile apps to find the Expo Center by its address:
              <br />
              <strong>100 Station Avenue, Oaks, PA 19456</strong>
            </p>
            <p className="mb-4">
              If your device cannot find the above address, use the following address:
              <br />
              <strong>1601 Egypt Road, Phoenixville, PA 19460</strong> (Upper Providence Township)
            </p>
            <p>
              This will bring you to the Oaks Deli and Pizzeria, from which you can follow the signs to the Expo Center.
            </p>
          </div>

          {/* From Route 76 Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">From Route 76 (Schuylkill Expressway)</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Follow Route 76 west to King of Prussia</li>
              <li>Exit to Route 202 south (West Chester)</li>
              <li>Stay in right lane for Route 422 west (Pottstown)</li>
              <li>Exit Route 422 at Oaks, turn left onto Egypt Road</li>
              <li>Turn left at Station Avenue (3rd traffic light)</li>
              <li>Follow signs to the Expo Center</li>
            </ol>
          </div>

          {/* From PA Turnpike Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">From PA Turnpike</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Exit at Valley Forge and stay to the right</li>
              <li>Exit to Route 202 south (West Chester)</li>
              <li>Stay in right lane for Route 422 west (Pottstown)</li>
              <li>Exit Route 422 at Oaks, turn left onto Egypt Road</li>
              <li>Turn left at Station Avenue (3rd traffic light)</li>
              <li>Follow signs to the Expo Center</li>
            </ol>
          </div>

          {/* From Route 422 west Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">From Route 422 west</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Exit Route 422 at Oaks, turn left onto Egypt Road</li>
              <li>Turn left at Station Avenue (3rd traffic light)</li>
              <li>Follow signs to the Expo Center</li>
            </ol>
          </div>

          {/* From Route 422 east Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">From Route 422 east</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Exit Route 422 at Oaks, turn left onto Egypt Road</li>
              <li>Turn left at Station Avenue (2nd traffic light)</li>
              <li>Follow signs to the Expo Center</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectionsPage;