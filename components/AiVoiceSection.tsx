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
import Button from "./common/Button";

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
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-3">
          <Label type="category">AI Voice - Comming Soon</Label>
          <Label type="title">Hear your Companions!</Label>
          <Label type="description" className="w-[440px] text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </Label>
        </div>
        <div className="flex justify-center items-end">
          <Button
            type="custome"
            className="px-[18px] h-[37px] rounded-[31px] border border-[#2C2C30]"
            onClick={() => {}}
          >
            <MuteIcon width={18} height={18} />
          </Button>
        </div>
      </div>
      <div
        className="h-[374px] rounded-2xl flex justify-center items-center"
        style={{
          background:
            "linear-gradient(0deg, #202024 0%, rgba(32, 32, 36, 0) 100%)",
        }}
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-[30px] items-center">
            {usersWithSelectedInMiddle.map(
              (user, index) =>
                user && (
                  <div
                    key={index}
                    onClick={() => setSelectedUserId(user.id)}
                    className={`cursor-pointer flex justify-center items-center ${
                      isSelectedUser(user)
                        ? "border-[3px] border-[#D9D9D9] rounded-full w-[154px] h-[154px]"
                        : ""
                    }`}
                  >
                    <Image
                      src={user.avatar}
                      width={isSelectedUser(user) ? 130 : 109}
                      height={isSelectedUser(user) ? 130 : 109}
                      alt=""
                      className={isSelectedUser(user) ? "scale-110" : ""}
                    />
                  </div>
                )
            )}
          </div>
          <div className="flex flex-row justify-between">
            <NoiseLeftFrame width={132} height={63.5} />
            <div className="flex flex-row ">
              <LeftQuote width={24} height={24} />
              <div className="w-[351px] text-wrap truncate line-clamp-2 text-center pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </div>
              <RightQuote width={24} height={24} />
            </div>
            <NoiseRightFrame width={132} height={63.5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiVoiceSection;
