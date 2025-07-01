import React from "react";
import NavBar from "../../components/custom/NavBar";
import Hero from "../../components/custom/Hero";
import HowItWorks from "../../components/custom/HowItWorks";


const Home = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] p-10">
      <NavBar />
      <Hero />
      <HowItWorks />
    </div>
  );
};

export default Home;
