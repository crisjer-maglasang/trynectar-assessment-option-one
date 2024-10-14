"use client";

import React, { useState } from "react";
import Label from "@/components/common/Label";
import { CHARACTERS } from "@/data/character";
import { IMAGE_OPTIONS } from "@/data/categories";
import CharacterCard from "@/components/common/CharacterCard";
import Button from "@/components/common/Button";
import { RightArrow } from "./common/icons/Icon";

const AiImageSection = () => {
  const [preferType, setPreferType] = useState("devil");

  const isPreferTypeSelected = (type: string) => type === preferType;

  const filteredCharacters = CHARACTERS.filter(
    (character) => character.type === preferType
  );
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Label type="category">Generate AI Image</Label>
        <Label type="title">Beautiful erotic art in seconds.</Label>
        <Label type="description" className="md:w-[440px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Label>
      </div>
      <div className="bg-gradient-to-r from-[#202024] to-[rgba(19,19,22,0)] bg-[#202024] rounded-2xl p-8 flex flex-col lg:flex-row gap-8 lg:justify-between">
        <div className="flex flex-col gap-4 lg:justify-between">
          <div className="flex flex-col">
            {IMAGE_OPTIONS.map((option, index) => (
              <div
                key={index}
                className={`px-6 py-[14px] flex flex-col gap-1 border-l-2 cursor-pointer ${
                  isPreferTypeSelected(option.type)
                    ? "border-l-[#F43F3F] bg-gradient-to-r from-[#2C2C30] to-[#202024]"
                    : "border-l-[#2C2C30] hover:bg-[#2C2C33]"
                }`}
                onClick={() => setPreferType(option.type)}
              >
                <div className="text-base leading-[21px] font-normal">
                  {option.title}
                </div>
                <div className="font-normal text-xs leading-[21px] text-[#D7D7D7]">
                  {option.description}
                </div>
              </div>
            ))}
          </div>
          <div>
            <Button type="red">
              <div className="flex flex-row gap-[10px] justify-center items-center">
                <div className="font-medium">Generate Image</div>
                <RightArrow width={16} height={16} />
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-[13px] items-center">
          {filteredCharacters.map((ch, index) => (
            <CharacterCard
              className="lg:h-[288px] lg:w-[180px]"
              key={index}
              image={ch.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiImageSection;
