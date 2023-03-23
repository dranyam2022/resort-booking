import React from "react";
import HeroCard from "../../components/HeroCard";
import MiniCards from "../../components/MiniCards";
import Navigation from "../../components/Navigation";
import Container from "../../layout/Container";
import Section from "../../layout/Section";

const Explore = () => {
  return (
    <>
      <Section bgColor={"bg--brown"}>
        <Container>
          <Navigation />
          <HeroCard />
          <MiniCards />
        </Container>
      </Section>
    </>
  );
};

export default Explore;
