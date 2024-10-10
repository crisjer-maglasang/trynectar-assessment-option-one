"use client";

import React, { useState } from "react";
import CharacterCard from "@/components/common/CharacterCard";
import Button from "@/components/common/Button";
import { CHARACTERS } from "@/data/character";

const HeaderSection = () => {
  const [characterType, setCharacterType] = useState("devil");

  const isTypeSelected = (type: string) => type === characterType;

  const filteredCharacters = CHARACTERS.filter(
    (character) => character.type === characterType
  );

  return (
    <div className="bg-gradient-to-r from-[#202024] to-transparent rounded-3xl shadow-2xl py-12 px-12 flex flex-row justify-between">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-5">
          <p className="text-lg leading-6 text-[#C9C9C9] font-medium font-mono">
            Are you
          </p>
          <p className="text-3xl leading-6 font-medium font-mono">
            Into a bit danger?
          </p>
          <p className="text-base font-mono text-[#C9C9C9] w-[353px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className="flex flex-row gap-3 mb-6">
          <Button
            type="emoji"
            onClick={() => setCharacterType("devil")}
            selected={isTypeSelected("devil")}
          >
            😈
          </Button>
          <Button
            type="emoji"
            onClick={() => setCharacterType("fire")}
            selected={isTypeSelected("fire")}
          >
            🔥
          </Button>
          <Button
            type="emoji"
            onClick={() => setCharacterType("smile")}
            selected={isTypeSelected("smile")}
          >
            🤓
          </Button>
          <Button
            type="emoji"
            onClick={() => setCharacterType("lol")}
            selected={isTypeSelected("lol")}
          >
            😎
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-[18px]">
        {filteredCharacters.map((ch, index) => (
          <CharacterCard
            key={index}
            width={199}
            height={285}
            name={ch.name}
            bio={ch.bio}
            image={ch.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderSection;
