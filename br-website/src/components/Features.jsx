import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { IoBanOutline } from "react-icons/io5";
import Button from "./Button";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
  isCompleted,
  isRestricted,
  isCompletedData,
  isImage,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      {!isImage ? (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      ) : (
        <img
          src={src}
          alt="mage"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
        <div>
          {isComingSoon && (
            <div
              ref={hoverButtonRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
            >
              {/* Radial gradient hover effect */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                  opacity: hoverOpacity,
                  background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                }}
              />
              <TiLocationArrow className="relative z-20" />
              <p className="relative z-20">coming soon</p>
            </div>
          )}
          {isCompleted && (
            <Button
              id="watch-trailer"
              title={isCompletedData.title}
              navigateTo={isCompletedData.navigateTo}
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1 rounded-full"
            />
          )}

          {isRestricted && (
            <div
              ref={hoverButtonRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-red-900 px-5 py-2 mt-5 text-xs uppercase text-white/20"
            >
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                  opacity: hoverOpacity,
                  background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #ff6b6b88, #00000026)`,
                }}
              />
              <IoBanOutline className="relative z-20" />
              <p className="relative z-20">Restricted</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10 pt-10">
      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
        <BentoCard
          src="assets/event.webp"
          title={
            <>
              <b>Events</b>
            </>
          }
          description="Engage in thrilling alliance events designed to test your strategy, teamwork, and competitive spirit. Compete for glory, exclusive rewards, and dominance in the Call of Dragons universe. Stay tuned for exciting challenges and opportunities to showcase your skills."
          isCompleted
          isCompletedData={{
            title: "Enter Event Zone",
            navigateTo: "/about",
          }}
          isImage
        />
      </BentoTilt>
      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7 ">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="assets/mage.webp"
            title={
              <>
                <b>Hero's</b>
              </>
            }
            description="Look into the top players' builds and talent tree strategies to optimize your gameplay. Explore detailed insights and tactics for every hero."
            isComingSoon
            isImage
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            isCompleted
            isCompletedData={{
              title: "Enter Tools Zone",
              navigateTo: "/tools",
            }}
            title={
              <>
                <b>Alliance Tools</b>
              </>
            }
            description="Exclusive tools and features designed to enhance collaboration, strategy planning, and resource management for alliance mates."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                <b>Player's Data</b>
              </>
            }
            description="Advanced analytics and insights tailored for alliance members to track performance, optimize strategies, and improve gameplay."
            isRestricted
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <BentoCard
            src="assets/cod.mp4"
            title={
              <>
                <b>BR Season</b>
              </>
            }
            description="Embark on an epic journey through the BR Season—where alliances are forged, battles are fought, and legends are born. Experience thrilling events, strategic challenges, and rewards that define the Call of Dragons universe. Join forces, conquer territories, and etch your name in history."
            isCompleted
            isCompletedData={{
              title: "Chronicles of BR",
              navigateTo: "/timeline",
            }}
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
