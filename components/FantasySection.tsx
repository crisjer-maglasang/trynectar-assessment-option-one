"use client";

import React from "react";
import Label from "@/components/common/Label";
import Button from "@/components/common/Button";
import CharacterCard from "@/components/common/CharacterCard";
import { PlayOutlined, HeartOutlined } from "@/components/common/icons/Icon";

import { STORIES } from "@/data/character";

const FantasySection = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <Label type="category">AI Fantasis</Label>
        <Label type="title">Live your dream experience</Label>
        <Label type="description" className="md:w-[440px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Label>
      </div>
      <div className="flex flex-col items-center md:flex-row md:gap-4 gap-8">
        {STORIES.map((story, index) => (
          <CharacterCard
            name={story.title}
            bio={story.description}
            image={story.image}
            avatar={story.avatar}
            key={index}
            className="h-[255px] w-full md:w-[382px]"
            buttonGroup={
              <div className="flex flex-row gap-[10px]">
                <Button type="subscribe" onClick={() => {}}>
                  <div className="flex flex-row justify-center items-center gap-1">
                    <PlayOutlined width={14} height={14} />
                    {story.watched}
                  </div>
                </Button>
                <Button type="subscribe" onClick={() => {}}>
                  <div className="flex flex-row justify-center items-center gap-1">
                    <HeartOutlined width={14} height={14} />
                    {story.loved}
                  </div>
                </Button>
              </div>
            }
          />
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2">
          <Button type="red">Create Fantasy</Button>
          <Button type="primary">Show More</Button>
        </div>
      </div>
    </div>
  );
};

export default FantasySection;
