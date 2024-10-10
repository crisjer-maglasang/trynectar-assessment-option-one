"use client";

import React from "react";
import Label from "./common/Label";
import Button from "./common/Button";
import CharacterCard from "./common/CharacterCard";
import character from "@/public/images/characters/one.png";
import avatar from "@/public/images/icons/one.png";

const FantasySection = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Label type="category">AI Fantasis</Label>
        <Label type="title">Live your dream experience</Label>
        <Label type="description" className="w-[440px] text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Label>
      </div>
      <div className="flex justify-between">
        <CharacterCard
          width={382}
          height={255}
          name="Me"
          bio="Hello"
          image={character}
          avatar={avatar}
        />
        <CharacterCard
          width={382}
          height={255}
          name="Me"
          bio="Hello"
          image={character}
        />
        <CharacterCard
          width={382}
          height={255}
          name="Me"
          bio="Hello"
          image={character}
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2">
          <Button type="red" onClick={() => {}}>
            Create Fantasy
          </Button>
          <Button type="primary" onClick={() => {}}>
            Show More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FantasySection;
