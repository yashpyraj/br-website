import React, { useState } from "react";
import AnimatedTitle from "../components/AnimatedTitle";
import { EvervaultCard, Icon } from "../components/ToolsCard";
import { FollowerPointerCard } from "../components/FollowingPointer";
import { FaTools } from "react-icons/fa";
import SpeedUpModal from "../components/SpeedUpModal";
import ResourceModal from "../components/ResourceModal";

// Modal Component
const Modal = ({ title, content, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded-lg p-6 w-[90%] max-w-lg">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="mb-6">{content}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

// ImageClipBox Component
const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="clip" />
  </div>
);

// Title Component
const TitleComponent = ({ title }) => (
  <div className="flex space-x-2 items-center">
    <p className="text-lg font-semibold text-white">{title}</p>
  </div>
);

export default function Tools() {
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showRssModal, setRssShowModal] = useState(false);

  // Function to open modal
  const openModal = (title, content) => {
    setModalContent({ title, content });
  };

  // Function to close modal
  const closeModal = () => setModalContent(null);

  return (
    <div id="contact" className="min-h-screen w-screen bg-black">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="assets/clip1.jpg"
            clipClass="contact-clip-path-3"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <AnimatedTitle
            title="<b>tools sections</b>"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {/* Tool 1 - Speed Ups Counter */}
        <FollowerPointerCard
          title={<TitleComponent title={"Speed Ups"} />}
          onClick={() => setShowModal(true)}
        >
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center max-w-sm p-4 relative h-[20rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard text="Speed Ups" />
          </div>
        </FollowerPointerCard>

        {/* Tool 2 - Resources Counter */}
        <FollowerPointerCard
          title={<TitleComponent title={"Resources"} />}
          onClick={() => setRssShowModal(true)}
        >
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center max-w-sm p-4 relative h-[20rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard text="Resources" />
          </div>
        </FollowerPointerCard>

        {/* Tool 3 - Hero Tokens */}
        <FollowerPointerCard title={<TitleComponent title={"Coming soon"} />}>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center max-w-sm p-4 relative h-[20rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard text="Hero Tokens" />
          </div>
        </FollowerPointerCard>

        {/* Tool 4 - Training Cost */}
        <FollowerPointerCard title={<TitleComponent title={"Coming soon"} />}>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center max-w-sm p-4 relative h-[20rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard text="Training Cost" />
          </div>
        </FollowerPointerCard>
      </div>

      {/* Modal Rendering */}
      {modalContent && (
        <Modal
          title={modalContent.title}
          content={modalContent.content}
          onClose={closeModal}
        />
      )}
      {showRssModal && (
        <ResourceModal
          title="Resource Counter"
          onClose={() => setRssShowModal(false)}
        />
      )}
      {showModal && (
        <SpeedUpModal
          title="Speed Ups Calculator"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
