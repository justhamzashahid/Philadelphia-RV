import React from 'react';
import Hero from '../Components/Hero/Hero';
import ShowSection from '../Components/ShowSection';
import ReasonsSection from '../Components/ReasonsSection';
import TicketsSection from '../Components/TicketsSection';
import ParkingSection from '../Components/ParkingSection';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <ShowSection />
      <ReasonsSection />
      <TicketsSection />
      <ParkingSection />
      <Footer />
    </div>
  );
};

export default HomePage;