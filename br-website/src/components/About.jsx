import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to BR
        </p>

        <AnimatedTitle
          title="<b>Forged in Battle,</b> <br /><b>United for Victory!</b>"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>War-Ready and Fierce</p>
          <p className="text-gray-500">
            BR is a highly active war-focused alliance in Call of Dragons. We
            dominate the battlefield, strength, and teamwork, always prepared to
            defend our territory and conquer new lands.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="public/assets/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
            onError={(e) => console.log("Image failed to load:", e.target.src)}
            onLoad={() => console.log("Image loaded successfully")}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
