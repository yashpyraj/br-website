import React from "react";
import Story from "../components/Story";
import HeaderLockScroll from "../components/HeaderLockScroll";
import { motion, useSpring, useScroll } from "framer-motion";

const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="relative z-10 w-full overflow-x-clip">
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088   ",
        }}
      />
      <Story />
      <HeaderLockScroll />
    </div>
  );
};

export default AboutUs;
