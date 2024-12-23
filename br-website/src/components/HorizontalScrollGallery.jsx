import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalScrollGallery = () => {
  const containerRef = useRef(null); // Ref for tracking the scrollable section

  // Array of images
  const images = [
    "https://via.placeholder.com/400x300?text=Image+1",
    "https://via.placeholder.com/400x300?text=Image+2",
    "https://via.placeholder.com/400x300?text=Image+3",
    "https://via.placeholder.com/400x300?text=Image+4",
  ]; // Replace these URLs with your own images.

  // Total scrollable width
  const totalScrollWidth = images.length * 400; // Each image is 400px wide

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"], // Track when it enters the viewport
  });

  // Map vertical scroll to horizontal movement
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [
      `${window.innerWidth / 2 - 200}px`,
      `-${totalScrollWidth - window.innerWidth / 2 - 200}px`,
    ]
  );

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-gray-100">
      {/* Sticky Container for Horizontal Scroll */}
      <div className="sticky top-0 z-10 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }} // Apply horizontal scroll animation
          className="flex h-[300px] items-center"
        >
          {images.map((src, index) => (
            <div key={index} className="min-w-[400px] h-full flex-shrink-0 p-4">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="h-full w-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollGallery;
