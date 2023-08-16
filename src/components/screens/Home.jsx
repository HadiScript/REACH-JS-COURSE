import React from "react";
import TopNav from "../UI/TopNav";
import Hero from "../UI/Hero";
import Stats from "../UI/Stats";
import Footer from "../UI/Footer";
import Team from "../UI/Team";

const Home = () => {
  return (
    <>
      <TopNav />;
      <Hero />
      <Stats />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
