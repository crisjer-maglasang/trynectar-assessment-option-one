import React, { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface ICharacterCard {
  width: number;
  height: number;
  name: string;
  bio: string;
  image: StaticImageData;
  avatar?: StaticImageData;
  buttonGroup?: ReactNode;
}

const CharacterCard: FC<ICharacterCard> = ({
  width,
  height,
  name,
  bio,
  image,
  avatar,
  buttonGroup,
}) => {
  const isWidthGreater = width > height;

  return (
    <div
      className={`relative rounded-2xl overflow-hidden`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={image}
        alt={name}
        className="rounded-2xl"
        style={{
          width: isWidthGreater ? "100%" : "auto",
          height: isWidthGreater ? "auto" : "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-character-gradient rounded-2xl" />
      <div className="absolute inset-0 flex flex-col gap-2 justify-end rounded-2xl p-4">
        {avatar && (
          <div>
            <Image src={avatar} alt="avatar" width={36} height={36} />
          </div>
        )}
        <div>
          <h2 className="text-base font-medium">{name}</h2>
          <p className="text-sm font-normal text-gray-300 truncate line-clamp-2 text-wrap">
            {bio}
          </p>
        </div>
        {buttonGroup}
      </div>
    </div>
  );
};

export default CharacterCard;
