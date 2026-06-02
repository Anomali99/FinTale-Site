"use client";

import { FC } from "react";
import PhoneMockup from "./phone-mockup";
import { Features } from "@/data/types";

interface FeatureSectionProps {
  feature: Features;
  index: number;
}

const FeatureSection: FC<FeatureSectionProps> = ({ feature, index }) => {
  const isImageLeft = index % 2 === 0;
  const bgClass = isImageLeft
    ? "bg-gradient-to-b from-ft-background to-ft-surface/30"
    : "bg-gradient-to-b from-ft-surface/30 to-ft-background";

  return (
    <section
      key={feature.id}
      className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-20 md:h-screen md:snap-start md:snap-always md:px-16 lg:px-32 xl:px-48 ${bgClass}`}
    >
      <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-24">
        <div
          className={`animate-hidden relative flex w-full flex-1 justify-center pt-8 md:pt-0 ${isImageLeft ? "md:order-1" : "md:order-2"}`}
        >
          <div className="bg-ft-primary/5 pointer-events-none absolute top-1/2 left-1/2 -z-10 h-62.5 w-62.5 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] md:h-75 md:w-75" />
          <PhoneMockup imgUrl={feature.image} />
        </div>

        <div
          className={`flex flex-1 flex-col text-center md:text-left ${isImageLeft ? "md:order-2" : "md:order-1"}`}
        >
          <div className="animate-hidden bg-ft-surface border-ft-surface-variant mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border shadow-lg md:mx-0 md:h-20 md:w-20">
            {feature.icon}
          </div>
          <h3 className="animate-hidden mb-6 text-3xl leading-tight font-bold text-white delay-100 md:text-5xl">
            {feature.title}
          </h3>
          <p className="animate-hidden text-ft-text-secondary mb-8 text-lg leading-relaxed delay-200 md:text-xl">
            {feature.description}
          </p>
          {feature.note && (
            <div className="animate-hidden bg-ft-surface border-ft-warning text-ft-text-secondary mt-auto flex gap-4 rounded-r-xl border-l-4 p-5 text-left text-sm shadow-md delay-300">
              <span className="text-ft-warning min-w-max text-xl">⚠️</span>
              <p className="leading-relaxed">{feature.note}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
