"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Label from "@/components/common/Label";
import { USERS } from "@/data/character";
import { IUsers } from "@/types/character";
import {
  NoiseLeftFrame,
  NoiseRightFrame,
  LeftQuote,
  RightQuote,
  MuteIcon,
} from "@/components/common/icons/Icon";
import Button from "@/components/common/Button";

const AiVoiceSection = () => {
  const [selectedUserId, setSelectedUserId] = useState(1);

  const usersWithSelectedInMiddle = useMemo(() => {
    const selectedUser = USERS.find((user) => user.id === selectedUserId);
    const otherUsers = USERS.filter((user) => user.id !== selectedUserId).slice(
      0,
      4
    );
    return [
      otherUsers[0],
      otherUsers[1],
      selectedUser,
      otherUsers[2],
      otherUsers[3],
    ].filter(Boolean);
  }, [selectedUserId]);

  const isSelectedUser = (user: IUsers) => user.id === selectedUserId;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex md:flex-row flex-col gap-4 md:justify-between">
        <div className="flex flex-col gap-3">
          <Label type="category">AI Voice - Comming Soon</Label>
          <Label type="title">Hear your Companions!</Label>
          <Label type="description" className="md:w-[440px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </Label>
        </div>
        <div className="flex justify-end md:justify-center items-center md:items-end">
          <Button
            type="custome"
            className="px-4 h-8 md:px-[18px] md:h-[37px] rounded-[31px] border border-[#2C2C30]"
          >
            <MuteIcon
              width={18}
              height={18}
              className="w-4 h-4 md:w-[18px] md:h-[18px]"
            />
          </Button>
        </div>
      </div>
      <div
        className="h-[374px] rounded-2xl flex justify-center items-center px-4"
        style={{
          background:
            "linear-gradient(0deg, #202024 0%, rgba(32, 32, 36, 0) 100%)",
        }}
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-row sm:gap-6 md:gap-[30px] items-center justify-center">
            {usersWithSelectedInMiddle.map(
              (user, index) =>
                user && (
                  <div
                    key={index}
                    onClick={() => setSelectedUserId(user.id)}
                    className={`cursor-pointer flex justify-center items-center ${
                      isSelectedUser(user)
                        ? "border-[3px] border-[#D9D9D9] rounded-full w-24 h-24 lg:w-36 lg:h-36"
                        : "hidden md:flex"
                    }`}
                  >
                    <Image
                      src={user.avatar}
                      alt=""
                      className={`sm:w-[72px] lg:w-[109px] ${
                        isSelectedUser(user) ? " scale-125" : ""
                      }`}
                    />
                  </div>
                )
            )}
          </div>
          <div className="flex flex-row justify-between">
            <NoiseLeftFrame className="lg:w-[132px] lg:h-[63.5px] w-0 h-0" />
            <div className="flex flex-row ">
              <LeftQuote width={24} height={24} />
              <div className="sm:w-[351px] text-wrap truncate line-clamp-2 text-center md:text-xl text-sm pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </div>
              <RightQuote width={24} height={24} />
            </div>
            <NoiseRightFrame className="lg:w-[132px] lg:h-[63.5px] w-0 h-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiVoiceSection;
