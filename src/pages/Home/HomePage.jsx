import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import WeProvideSection from "./WeProvideSection";
import DelevoperSection from "./DelevoperSection";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WeProvideSection />
      <DelevoperSection />
    </div>
  );
};

export default HomePage;
