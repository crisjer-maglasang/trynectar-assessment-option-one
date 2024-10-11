import React, { FC, ReactNode } from "react";

interface IButtonProps {
  onClick?: () => void;
  type: string;
  children: ReactNode;
  selected?: boolean;
  className?: string;
  url?: string;
}

const Button: FC<IButtonProps> = ({
  onClick,
  type,
  children,
  selected,
  className,
  url,
}) => {
  const classNames: { [key: string]: string } = {
    emoji: `rounded-full flex justify-center items-center w-12 h-12 md:w-16 md:h-16 text-md md:text-2xl hover:bg-[#3B3B42] ${
      selected ? "bg-[#3B3B42]" : "bg-[#2C2C30]"
    }`,
    primary:
      "bg-[#2C2C30] px-[18px] h-10 flex items-center justify-center rounded-full text-xs md:text-sm leading-6 font-normal text-[#ECECF0]",
    red: "bg-[#F43F3F] px-[18px] h-10 flex items-center justify-center rounded-full text-xs md:text-sm leading-6 font-normal text-white",
    subscribe:
      "text-xs md:text-sm font-normal text-[#E2E9ED] rounded-full px-4 py-[3px] bg-[#2C2C30]",
    filter:
      "text-xs md:text-sm font-normal text-[#ECECF0] rounded-full px-4 py-1 bg-[#26272B]",
    custome: className || "",
  };

  const handleClick = () => {
    if (url) {
      window.location.href = url;
    } else if (onClick) {
      onClick();
    } else {
      window.location.href = "https://nectar.ai";
    }
  };

  return (
    <button onClick={handleClick} className={classNames[type]}>
      {children}
    </button>
  );
};

export default Button;
