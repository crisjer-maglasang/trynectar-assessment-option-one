import React, { FC, ReactNode } from "react";

interface ILabelProps {
  type: string;
  className?: string;
  children: ReactNode;
}

const Label: FC<ILabelProps> = ({ type, children, className }) => {
  const classNames: { [key: string]: string } = {
    title: "font-bold text-2xl text-[#E2E9ED]",
    category: "font-bold text-base text-[#F43F3F]",
    description: "font-normal text-base text-[#ADADAD]",
  };

  return <div className={`${classNames[type]} ${className}`}>{children}</div>;
};

export default Label;
