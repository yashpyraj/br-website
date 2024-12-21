import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TopHome from "../components/TopHome";
import NavBar from "../components/Navbar";
import About from "../components/About";
import Features from "../components/Features";

const Home = () => {
  const { setIsAdmin } = useAuthStore();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <TopHome />
      <About />
      <Features />

      <section className="z-0 min-h-screen bg-blue-500" />
    </main>
  );
};

export default Home;
