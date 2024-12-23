import React, { useRef } from "react";
import HorizontalScrollGallery from "./HorizontalScrollGallery";

const HeaderLockScroll = () => {
  const comp1Ref = useRef(null);
  const comp2Ref = useRef(null);

  return (
    <div className="w-screen min-h-screen bg-black">
      {/* Component 1 Header */}
      <div
        ref={comp1Ref}
        className="sticky top-0 z-20 w-full bg-blue-500 text-white p-4 shadow-md"
      >
        Component 1 Header (Sticky When It Hits Top)
      </div>

      {/* Component 1 Content */}
      <section className="h-[100vh] flex items-center justify-center bg-blue-200">
        <h1 className="text-4xl">Component 1 Content</h1>
      </section>

      {/* Horizontal Scroll Gallery */}
      <HorizontalScrollGallery />

      {/* Component 2 Header */}
      <div
        ref={comp2Ref}
        className="sticky top-0 z-20 w-full bg-green-500 text-white p-4 shadow-md"
      >
        Component 2 Header (Sticky When It Hits Top)
      </div>

      {/* Component 2 Content */}
      <section className="h-[150vh] flex items-center justify-center bg-green-200">
        <h1 className="text-4xl">Component 2 Content</h1>
      </section>
    </div>
  );
};

export default HeaderLockScroll;
