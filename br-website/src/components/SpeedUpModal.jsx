import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";

const SpeedUpModal = ({ title, onClose }) => {
  const initialState = [
    { label: "1m", typeSpecific: 0, universal: 0, value: 1 },
    { label: "5m", typeSpecific: 0, universal: 0, value: 5 },
    { label: "10m", typeSpecific: 0, universal: 0, value: 10 },
    { label: "15m", typeSpecific: 0, universal: 0, value: 15 },
    { label: "30m", typeSpecific: 0, universal: 0, value: 30 },
    { label: "1h", typeSpecific: 0, universal: 0, value: 60 },
    { label: "3h", typeSpecific: 0, universal: 0, value: 180 },
    { label: "8h", typeSpecific: 0, universal: 0, value: 480 },
    { label: "15h", typeSpecific: 0, universal: 0, value: 900 },
    { label: "24h", typeSpecific: 0, universal: 0, value: 1440 },
    { label: "7d", typeSpecific: 0, universal: 0, value: 10080 },
  ];

  const [data, setData] = useState(initialState);

  const handleInputChange = (index, field, value) => {
    const updatedData = [...data];
    updatedData[index][field] = Number(value) || 0;
    setData(updatedData);
  };

  const calculateTotal = (key) => {
    const totalMinutes = data.reduce(
      (sum, item) => sum + item[key] * item.value,
      0
    );
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;
    return `${days}d ${hours}h ${minutes}m`;
  };

  const clearAllInputs = () => {
    setData(
      initialState.map((item) => ({ ...item, typeSpecific: 0, universal: 0 }))
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 p-4 font-general ">
      <div className="bg-black text-white rounded-lg p-6 shadow-lg w-[90%] max-w-lg border-2 border-gray-700 relative">
        {/* Clear Button at Top Right */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={clearAllInputs}
          className="absolute top-4 right-4 text-black bg-yellow-300 rounded-full hover:bg-yellow-300 text-sm tracking-wide group  z-10 w-fit cursor-pointer   px-7 py-2 overflow-hidden "
        >
          <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
              Clear
            </div>
            <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              Clear
            </div>
          </span>
        </motion.button>

        <h2 className="text-2xl font-bold mb-4 tracking-wide">{title}</h2>
        <div className="grid grid-cols-3 gap-4 text-center font-semibold mb-2">
          <p className="text-gray-400 tracking-wider">Duration</p>
          <p className="text-yellow-300 tracking-wider">Type-Specific</p>
          <p className="text-yellow-300 tracking-wider">Universal</p>
        </div>
        {data.map((item, index) => (
          <div
            key={item.label}
            className="grid grid-cols-3 gap-4 py-1 items-center border-b border-gray-700"
          >
            <p className="text-gray-400 tracking-wider">{item.label}</p>
            <input
              type="number"
              className="bg-gray-800 text-yellow-300 placeholder-gray-500 text-center p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="0"
              value={item.typeSpecific || ""}
              onChange={(e) =>
                handleInputChange(index, "typeSpecific", e.target.value)
              }
            />
            <input
              type="number"
              className="bg-gray-800 text-yellow-300 placeholder-gray-500 text-center p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="0"
              value={item.universal || ""}
              onChange={(e) =>
                handleInputChange(index, "universal", e.target.value)
              }
            />
          </div>
        ))}

        {/* Totals Section */}
        <div className="mt-4">
          <p
            className="text-lg font-semibold tracking-wider"
            style={{
              fontFamily: "Arial, sans-serif",
            }}
          >
            Total:{" "}
            <span className="text-yellow-300 font-bold">
              {calculateTotal("typeSpecific")}
            </span>
          </p>
          <p
            className="text-lg font-semibold tracking-wider mt-2"
            style={{
              fontFamily: "'Courier New', monospace",
            }}
          >
            +Universal:{" "}
            <span
              className="text-yellow-300 font-bold"
              style={{
                fontFamily: "'Courier New', monospace",
              }}
            >
              {calculateTotal("universal")}
            </span>
          </p>
        </div>

        {/* Close Button */}
        <div className="mt-6 flex justify-end">
          <Button
            id="watch-trailer"
            onClick={onClose}
            title="close"
            leftIcon={<IoIosClose />}
            containerClass="bg-yellow-300 flex-center gap-1"
          />
        </div>
      </div>
    </div>
  );
};

export default SpeedUpModal;
