import React from "react";
import HeaderSection from "@/components/HeaderSection";
import FantasySection from "@/components/FantasySection";
import RoleplaySection from "@/components/RoleplaySection";
import AiVoiceSection from "@/components/AiVoiceSection";
import AiImageSection from "@/components/AiImageSection";

export default function page() {
  return (
    <div className="w-[1182px] mx-auto text-white text-xl flex flex-col gap-12 py-12">
      <HeaderSection />
      <FantasySection />
      <RoleplaySection />
      <AiVoiceSection />
      <AiImageSection />
    </div>
  );
}
