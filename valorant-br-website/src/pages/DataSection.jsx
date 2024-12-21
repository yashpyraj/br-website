import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DataSection = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [pin, setPin] = useState("");
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handlePinSubmit = () => {
    if (pin === "1234") {
      setIsAdmin(true);
      setIsModalOpen(false);
    } else {
      alert("Invalid PIN");
    }
  };

  const handleImageUpload = (e) => {
    setImages([...images, ...e.target.files]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <div>
        <h1 className="text-3xl mb-4">Upload Images for Processing</h1>
        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          className="mb-4"
        />
        <ul>
          {images.map((img, index) => (
            <li key={index}>{img.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataSection;
