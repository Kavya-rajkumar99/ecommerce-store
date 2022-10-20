import React from "react";
import FeaturedProduct from "./components/FeaturedProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = "Cosmo Store";
  return (
    <>
      <HeroSection data={data} />
      <FeaturedProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
