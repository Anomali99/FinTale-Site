"use client";

import { FC } from "react";
import Image from "next/image";

interface PhoneMockupProps {
  imgUrl: string;
}

const PhoneMockup: FC<PhoneMockupProps> = ({ imgUrl }) => (
  <div className="bg-ft-background border-ft-surface-variant relative h-135 w-65 overflow-hidden rounded-[2.5rem] border-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-4 ring-[#111] md:h-155 md:w-75">
    <div className="bg-ft-surface-variant absolute inset-x-0 top-0 z-20 mx-auto flex h-6 w-32 items-center justify-center gap-2 rounded-b-xl">
      <div className="h-1.5 w-12 rounded-full bg-[#111]" />
      <div className="h-2 w-2 rounded-full bg-[#111]" />
    </div>
    <div className="bg-ft-surface relative h-full w-full">
      <Image
        fill
        src={imgUrl}
        alt="App Screen"
        className="h-full w-full object-cover opacity-90"
      />
    </div>
  </div>
);

export default PhoneMockup;
