"use client";

import React from "react";
import Label from "@/components/common/Label";
import Button from "./common/Button";
import { CATEGORIES } from "@/data/categories";
import { CHARACTERS } from "@/data/character";
import CharacterCard from "./common/CharacterCard";

const RoleplaySection = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Label type="category">AI RolePlay</Label>
        <Label type="title">Recommended For You</Label>
        <div className="flex flex-row gap-2 overflow-x-hidden">
          {CATEGORIES.map((category, index) => (
            <Button type="subscribe" key={index} onClick={() => {}}>
              {category}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        {CHARACTERS.slice(4, 8).map((ch, index) => (
          <CharacterCard
            name={ch.name}
            bio={ch.bio}
            image={ch.image}
            key={index}
            height={412}
            width={277.5}
          />
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2">
          <Button type="red" onClick={() => {}}>
            Create AI Boyfriends
          </Button>
          <Button type="primary" onClick={() => {}}>
            Show More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoleplaySection;
