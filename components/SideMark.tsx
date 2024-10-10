import React from "react";
import Image from "next/image";
import Subtrack from "@/public/images/icons/Subtract.svg";

const SideMark = () => {
  return (
    <div className="bg-[#18181B] w-16 h-[1212px] absolute top-0 left-0">
      <div className="flex flex-row justify-center w-full items-center pt-[22px]">
        <Image src={Subtrack} alt="subtrack" width={28} height={25.7} />
      </div>
    </div>
  );
};

export default SideMark;
