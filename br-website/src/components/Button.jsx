import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Button = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  link,
  navigateTo,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  const buttonContent = (
    <motion.button
      id={id}
      onClick={onClick || handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      )}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </motion.button>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {buttonContent}
    </a>
  ) : (
    buttonContent
  );
};

export default Button;
