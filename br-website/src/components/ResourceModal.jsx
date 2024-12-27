import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { IoIosClose } from "react-icons/io";

const ResourceModal = ({ title, onClose }) => {
  const initialResources = {
    Gold: [
      { label: "1K", value: 0, multiplier: 1000 },
      { label: "10K", value: 0, multiplier: 10000 },
      { label: "50K", value: 0, multiplier: 50000 },
      { label: "150K", value: 0, multiplier: 150000 },
      { label: "500K", value: 0, multiplier: 500000 },
      { label: "1.5M", value: 0, multiplier: 1500000 },
      { label: "5M", value: 0, multiplier: 5000000 },
    ],
    Wood: [
      { label: "1K", value: 0, multiplier: 1000 },
      { label: "10K", value: 0, multiplier: 10000 },
      { label: "50K", value: 0, multiplier: 50000 },
      { label: "150K", value: 0, multiplier: 150000 },
      { label: "500K", value: 0, multiplier: 500000 },
      { label: "1.5M", value: 0, multiplier: 1500000 },
      { label: "5M", value: 0, multiplier: 5000000 },
    ],
    Ore: [
      { label: "750", value: 0, multiplier: 750 },
      { label: "7.5K", value: 0, multiplier: 7500 },
      { label: "38K", value: 0, multiplier: 38000 },
      { label: "113K", value: 0, multiplier: 113000 },
      { label: "375K", value: 0, multiplier: 375000 },
      { label: "1.1M", value: 0, multiplier: 1100000 },
      { label: "3.8M", value: 0, multiplier: 3800000 },
    ],
    Mana: [
      { label: "500", value: 0, multiplier: 500 },
      { label: "3K", value: 0, multiplier: 3000 },
      { label: "15K", value: 0, multiplier: 15000 },
      { label: "50K", value: 0, multiplier: 50000 },
      { label: "200K", value: 0, multiplier: 200000 },
      { label: "600K", value: 0, multiplier: 600000 },
      { label: "2M", value: 0, multiplier: 2000000 },
    ],
  };

  const [resources, setResources] = useState(initialResources);

  const handleInputChange = (resourceType, index, value) => {
    const updatedResources = { ...resources };
    updatedResources[resourceType][index].value = Number(value) || 0;
    setResources(updatedResources);
  };

  const calculateTotal = (resourceType) => {
    return resources[resourceType].reduce(
      (total, item) => total + item.value * item.multiplier,
      0
    );
  };

  const clearAllInputs = () => {
    const resetResources = { ...initialResources };
    for (let type in resetResources) {
      resetResources[type] = resetResources[type].map((item) => ({
        ...item,
        value: 0,
      }));
    }
    setResources(resetResources);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 p-4">
      <div className="bg-black text-white rounded-lg p-6 shadow-lg w-[90%] max-w-4xl border-2 border-gray-700 relative">
        {/* Clear Button - Top Right */}
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

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 tracking-wide">{title}</h2>

        {/* Resource Counters */}
        <div className="grid grid-cols-4 gap-6">
          {Object.keys(resources).map((resourceType) => (
            <div key={resourceType} className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{resourceType}</h3>
              {resources[resourceType].map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between mb-2"
                >
                  <span className="text-gray-400">{item.label}</span>
                  <input
                    type="number"
                    className="bg-gray-800 text-yellow-300 placeholder-gray-500 text-center p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 w-24"
                    placeholder="0"
                    value={item.value || ""}
                    onChange={(e) =>
                      handleInputChange(resourceType, index, e.target.value)
                    }
                  />
                </div>
              ))}
              {/* Totals */}
              <p
                className="text-yellow-300 font-bold mt-4 break-words whitespace-normal"
                style={{
                  fontFamily: "'Courier New', monospace",
                }}
              >
                Total: {calculateTotal(resourceType).toLocaleString()}
              </p>
            </div>
          ))}
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

export default ResourceModal;
