import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import dragonBackground from "../assets/dragon.webp"; // Dragon-themed background image

const Home = () => {
  const { setIsAdmin } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handlePinSubmit = () => {
    if (pin === "1234") {
      setIsAdmin(true);
      setIsModalOpen(false);
      navigate("/data");
    } else {
      alert("Invalid PIN");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col"
      style={{ backgroundImage: `url(${dragonBackground})` }}
    >
      {/* Navigation Bar */}
      <div className="flex justify-between items-center p-5 ">
        <h1 className="text-3xl font-bold text-white"> </h1>
        <div className="flex space-x-6">
          <Link
            to="/about"
            className="border border-white text-white px-4 py-2 rounded-lg backdrop-blur-lg bg-opacity-30 hover:scale-110 transform transition-all duration-300 shadow-lg"
          >
            About Us
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-white text-white px-4 py-2 rounded-lg backdrop-blur-lg bg-opacity-30 hover:scale-110 transform transition-all duration-300 shadow-lg"
          >
            Data
          </button>
        </div>
      </div>

      {/* <div className="flex-grow flex flex-col items-center justify-end">
        <h1 className="text-7xl font-extrabold mb-10 text-center  drop-shadow-lg">
          Call of Dragon Alliance Hub
        </h1>
        <p className="text-lg mb-8 animate-fade-in text-center max-w-2xl drop-shadow-md">
          Join the ranks of warriors in Cod Alliance.
        </p>
        <div className="flex space-x-4 animate-fade-in"></div>
      </div> */}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="bg-gray-800 p-6 rounded shadow-lg max-w-md mx-auto mt-20 animate-slide-in-down drop-shadow-lg"
        overlayClassName="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center"
      >
        <h1 className="text-3xl mb-4 text-white text-center font-bold drop-shadow-md">
          🔒 Enter PIN
        </h1>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="text-black p-2 rounded mb-4 w-full border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
        />
        <button
          onClick={handlePinSubmit}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded w-full font-bold shadow-lg"
        >
          Submit
        </button>
      </Modal>
    </div>
  );
};

export default Home;
