import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";
import { AnimatedTooltip } from "./topTip";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      name: "BR discord",
      href: "https://discord.gg/saVAkZjgPB",
      icon: <FaDiscord />,
    },
    {
      id: 2,
      name: "BR youtuber",
      href: "https://www.youtube.com/@dungrokf2p",
      designation: "dũng rok",
      icon: <FaYoutube />,
    },
  ];
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          Created by Yammy
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          <AnimatedTooltip items={socialLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
