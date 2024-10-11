import React from "react";
import { RedHeartSolid } from "./common/icons/Icon";

const SideMark = () => {
  return (
    <div className="bg-[#18181B] 2xl:w-16 md:w-14 sm:w-12 w-8 h-[1212px] absolute top-0 left-0">
      <div className="flex flex-row justify-center w-full items-center pt-[22px]">
        <RedHeartSolid className="w-5 h-5 sm:w-7 sm:h-6" />
      </div>
    </div>
  );
};

export default SideMark;
