import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import WeProvideSection from "./WeProvideSection";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WeProvideSection />
    </div>
  );
};

export default HomePage;
