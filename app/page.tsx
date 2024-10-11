import React from "react";
import HeaderSection from "@/components/HeaderSection";
import FantasySection from "@/components/FantasySection";
import RoleplaySection from "@/components/RoleplaySection";
import AiVoiceSection from "@/components/AiVoiceSection";
import AiImageSection from "@/components/AiImageSection";

export default function page() {
  return (
    <div className="xl:w-[1152px] lg:w-[896px] md:w-[640px] sm:w-[512px]  sm:mx-auto mx-10 text-white text-xl flex flex-col gap-16 py-12">
      <HeaderSection />
      <FantasySection />
      <RoleplaySection />
      <AiVoiceSection />
      <AiImageSection />
    </div>
  );
}
