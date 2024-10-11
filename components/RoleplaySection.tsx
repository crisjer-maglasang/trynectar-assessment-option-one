"use client";

import React from "react";
import Label from "@/components/common/Label";
import Button from "./common/Button";
import { CATEGORIES } from "@/data/categories";
import { CHARACTERS } from "@/data/character";
import CharacterCard from "./common/CharacterCard";
import useDragScroll from "@/hooks/useDragScroll";

const RoleplaySection = () => {
  const { ref, handleMouseDown } = useDragScroll();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Label type="category">AI RolePlay</Label>
        <Label type="title">Recommended For You</Label>
        <div className="flex flex-row gap-2 overflow-x-hidden cursor-grab">
          <div
            ref={ref}
            className="flex flex-row gap-2 overflow-x-auto scrollbar-none"
            onMouseDown={handleMouseDown}
          >
            {CATEGORIES.map((category, index) => (
              <Button type="filter" key={index}>
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {CHARACTERS.slice(4, 8).map((ch, index) => (
          <CharacterCard
            name={ch.name}
            bio={ch.bio}
            image={ch.image}
            key={index}
            className="h-[412px]"
          />
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2">
          <Button type="red">Create AI Boyfriends</Button>
          <Button type="primary">Show More</Button>
        </div>
      </div>
    </div>
  );
};

export default RoleplaySection;
