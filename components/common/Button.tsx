import React, { FC, ReactNode } from "react";

interface IButtonProps {
  onClick: () => void;
  type: string;
  children: ReactNode;
  selected?: boolean;
}

const Button: FC<IButtonProps> = ({ onClick, type, children, selected }) => {
  const classNames: { [key: string]: string } = {
    emoji: `rounded-full flex justify-center items-center w-16 h-16  text-2xl hover:bg-[#3B3B42] ${
      selected ? "bg-[#3B3B42]" : "bg-[#2C2C30]"
    }`,
    primary:
      "bg-[#2C2C30] px-[18px] h-10 flex items-center justify-center rounded-full text-sm leading-6 font-normal text-[#ECECF0]",
    red: "bg-[#F43F3F] px-[18px] h-10 flex items-center justify-center rounded-full text-sm leading-6 font-normal text-white",
  };

  return (
    <button onClick={onClick} className={classNames[type]}>
      {/* <div className=""></div> */}
      {children}
    </button>
  );
};

export default Button;
