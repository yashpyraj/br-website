import React, { useState, useEffect } from "react";
import { Timeline } from "../components/TimeLine";

export default function TimelineScreen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [zoomedImage, setZoomedImage] = useState(null);

  // Function to handle image click
  const handleImageClick = (imageSrc) => {
    setZoomedImage(imageSrc); // Show the image in zoom mode
  };

  // Function to close the zoomed image
  const handleCloseZoom = () => {
    setZoomedImage(null); // Hide the zoomed image
  };
  const data = [
    {
      title: "BR vs UNA",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl  font-normal mb-8">
            BR first total domination and absorbed few players.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* Image 1 */}
            <div className="relative">
              <img
                src="assets/clip2.jpg"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/clip2.jpg")} // On click, show zoomed image
              />
            </div>

            {/* Image 2 */}
            <div className="relative">
              <img
                src="assets/about.jpg"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/about.jpg")} // On click, show zoomed image
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "B&R + BAD vs REM HoA HoB DS 13Ro",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl   font-normal mb-8">
            Zone 1: DA (Iamra Bearto Arthur Pendragon) lost against DS. SUN
            (Sinvo Phoneix) lost against BAD RES. DA/SUN merged with B&R. HO
            family (mega alliance OSI ETER etc.) avoided the statue fight.
            Fighters like Ale, Mia, and Zoro fought in HO's zone. Kingkraazer
            betrayed and tried breaking B&R but was defeated and moved to DS.
            Dragon zone: HO built a barrage against B&R. DS (Kingkraazer) and
            Bro (Bro Skywalker/Cat) built to dragon. After intense fighting, B&R
            defeated HO/DS and helped BAD beat RES.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="assets/clip2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="assets/about.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "BR UWU vs SLS SLN",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl   font-normal mb-8">
            Z1: BR chat PVP with SLS and SLN, fought statue 3 rounds (1
            unofficial when gate opened), BR 1:2 SLS+SLN (official). Z2: BR
            played very aggressive and SLS builder messed up. BR got ROC but
            couldn't box SLS, leading to a stalemate. Z3: BR+UWU boxed SLS; BAD
            vs DM stalemate. Final zone: BR asked UWU for help at dragon, UWU
            ignored. BR took the dragon and gave BAD access to last zone, boxing
            DM.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* Image 1 */}
            <div className="relative">
              <img
                src="assets/bad1.PNG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/bad1.PNG")} // On click, show zoomed image
              />
            </div>

            {/* Image 2 */}
            <div className="relative">
              <img
                src="assets/bad2.PNG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/bad2.PNG")} // On click, show zoomed image
              />
            </div>
            <div className="relative">
              <img
                src="assets/bad3.JPG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/bad3.JPG")} // On click, show zoomed image
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "BR GC vs SUN BABY",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl   font-normal mb-8">
            BR fought 2v1 against SUN and BABY as GC was weak. In the end zone,
            BR locked SUN and BABY, winning the season. Many BABY and some SUN
            players joined BR, including the creator of this website, Great
            Yammy.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {/* Image 1 */}
            <div className="relative">
              <img
                src="assets/b1.JPG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/b1.JPG")} // On click, show zoomed image
              />
            </div>

            {/* Image 2 */}
            <div className="relative">
              <img
                src="assets/b2.JPG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/b2.JPG")} // On click, show zoomed image
              />
            </div>
            <div className="relative">
              <img
                src="assets/b3.JPG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/b3.JPG")} // On click, show zoomed image
              />
            </div>
            <div className="relative">
              <img
                src="assets/b4.JPG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/b4.JPG")} // On click, show zoomed image
              />
            </div>
            <div className="relative">
              <img
                src="assets/b5.JPG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/b5.JPG")} // On click, show zoomed image
              />
            </div>
            <div className="relative">
              <img
                src="assets/b6.JPG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/b6.JPG")} // On click, show zoomed image
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "BR BTR IL vs ROG IM EDS",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl   font-normal mb-8">
            Good PVP experience in this first large-scale KVK. ROG defended well
            despite low power. One of the biggest allies got blocked—Viva—and
            one more, big EDS.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img
                src="assets/r3.PNG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/r3.PNG")} // On click, show zoomed image
              />
            </div>
            <div className="relative">
              <img
                src="assets/r4.JPG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/r4.JPG")} // On click, show zoomed image
              />
            </div>

            <div className="relative">
              <img
                src="assets/r1.PNG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/r1.PNG")} // On click, show zoomed image
              />
            </div>
            <div className="relative">
              <img
                src="assets/r2.JPG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/r2.JPG")} // On click, show zoomed image
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "BR CMAR vs OPA SHP",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl   font-normal mb-8">
            Another great KVK against OPA, a Korean powerhouse that carried the
            enemy team to victory. Good experience overall.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img
                src="assets/o1.PNG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/o1.PNG")} // On click, show zoomed image
              />
            </div>
            <div className="relative">
              <img
                src="assets/o2.JPG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/o2.JPG")} // On click, show zoomed image
              />
            </div>

            <div className="relative">
              <img
                src="assets/r1.PNG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/r1.PNG")} // On click, show zoomed image
              />
            </div>
            <div className="relative">
              <img
                src="assets/o3.JPG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/o3.JPG")} // On click, show zoomed image
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "BR ZOO vs ROG EDS",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl   font-normal mb-8">
            Bad matchmaking as BTR planned to migrate out between seasons. Very
            boring.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img
                src="assets/td.JPG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/td.JPG")} // On click, show zoomed image
              />
            </div>
            <div className="relative">
              <img
                src="assets/ch.JPG"
                alt="startup template"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick("assets/ch.JPG")} // On click, show zoomed image
              />
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bg-black">
      <Timeline data={data} />
      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 cursor-pointer"
          onClick={handleCloseZoom} // Close modal on any click
        >
          <img
            src={zoomedImage}
            alt="Zoomed view"
            className="rounded-lg max-w-full max-h-full shadow-lg transition-transform duration-300 transform scale-100"
          />
        </div>
      )}
    </div>
  );
}
