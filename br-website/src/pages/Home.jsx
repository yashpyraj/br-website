import React, { useState } from "react";
import TopHome from "../components/TopHome";
import NavBar from "../components/Navbar";
import About from "../components/About";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

// import TournamentBracket from "../components/TournamentBracket";

const Home = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <TopHome />
      <About />
      <Features />
      <Contact />
      <Footer />

      {/* <TournamentBracket /> */}
    </main>
  );
};

export default Home;
