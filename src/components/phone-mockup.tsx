"use client";

import { FC } from "react";
import Image from "next/image";

interface PhoneMockupProps {
  imgUrl: string;
}

const PhoneMockup: FC<PhoneMockupProps> = ({ imgUrl }) => (
  <div className="bg-ft-background border-ft-surface-variant relative h-142.5 w-65 overflow-hidden rounded-[2.5rem] border-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-4 ring-[#111] md:h-170 md:w-75">
    <div className="absolute inset-x-0 top-3 z-20 mx-auto h-4.5 w-4.5 rounded-full bg-[#0a0a0a] shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]">
      <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-800/40" />
    </div>

    <div className="bg-ft-surface relative h-full w-full">
      <Image
        fill
        sizes="100%, 100%"
        src={imgUrl}
        alt="App Screen"
        className="object-cover object-center opacity-90"
      />
    </div>
  </div>
);

export default PhoneMockup;
