import React from "react";
import { RedHeartSolid } from "./common/icons/Icon";

const SideMark = () => {
  return (
    <div className="bg-[#18181B] w-16 h-[1212px] absolute top-0 left-0">
      <div className="flex flex-row justify-center w-full items-center pt-[22px]">
        <RedHeartSolid width={28} height={25.7} />
      </div>
    </div>
  );
};

export default SideMark;
