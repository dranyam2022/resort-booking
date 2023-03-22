import React from "react";
import HeroCard from "../../components/HeroCard";
import MiniCards from "../../components/MiniCards";
import Navigation from "../../components/Navigation";
import SectionContainer from "../../layout/SectionContainer";

const Explore = () => {
  return (
    <>
      <SectionContainer>
        <Navigation />
        <HeroCard />
        <MiniCards />
      </SectionContainer>
    </>
  );
};

export default Explore;
