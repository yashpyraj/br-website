import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import bgImg from "../../public/assets/dragon.webp";

gsap.registerPlugin(ScrollTrigger);

const TopHome = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black"
      >
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-0 text-blue-75">
          <b>A</b>lliance
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              b<b>r</b>
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Server - 156 <br /> Call of Dragons
            </p>

            <Button
              id="watch-trailer"
              title="Join Us"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
        <img
          src={bgImg}
          alt="Dragon Background"
          className="absolute left-0 top-0 size-full object-cover object-center -z-50"
        />
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        <b>A</b>lliance
      </h1>
    </div>
  );
};

export default TopHome;
