import gsap from "gsap";
import { useRef, useEffect } from "react";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null); // Ref for the image
  const animationFrame = useRef(null); // Animation frame tracker
  const mousePos = useRef({ x: 0, y: 0 }); // Store mouse position

  useEffect(() => {
    const element = frameRef.current;
    if (!element) return;

    // Use GSAP's quickSetter for GPU-optimized updates
    const setRotationX = gsap.quickSetter(element, "rotationX", "deg");
    const setRotationY = gsap.quickSetter(element, "rotationY", "deg");

    const handleMouseMove = (e) => {
      // Cache mouse position
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Cancel any existing animation frame
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      // Use requestAnimationFrame for smoother animations
      animationFrame.current = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (mousePos.current.x - centerX) / rect.width;
        const deltaY = (mousePos.current.y - centerY) / rect.height;

        // Smooth rotations based on mouse position
        const rotateX = deltaY * -15; // Vertical tilt
        const rotateY = deltaX * 15; // Horizontal tilt

        // Apply transforms using GSAP quickSetter
        setRotationX(rotateX);
        setRotationY(rotateY);
      });
    };

    const handleMouseLeave = () => {
      // Reset animation when mouse leaves
      gsap.to(element, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    // Attach event listeners
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup listeners
    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  src="/img/entrance.webp"
                  alt="entrance.webp"
                  className="object-contain will-change-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
