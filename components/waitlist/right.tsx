"use client";

import Image from "next/image";
import CursorParallax, {
  type CursorParallaxProps,
} from "@/lib/cursor-parallax";
import { cn } from "@/lib/utils";
import right from "@/public/waitlist/screen.svg";

type RightWaitlistProps = {
  parallax?: Partial<
    Pick<
      CursorParallaxProps,
      | "baseX"
      | "baseY"
      | "rangeX"
      | "rangeY"
      | "easeMs"
      | "contentClassName"
      | "containerClassName"
    >
  >;
  pointer?: {
    x: number;
    y: number;
  } | null;
};

const RightWaitlist = ({ parallax, pointer }: RightWaitlistProps) => {
  const {
    baseX = 20,
    baseY = 96,
    rangeX = 20,
    rangeY = 96,
    easeMs = 140,
    contentClassName,
    containerClassName,
  } = parallax ?? {};

  const position = pointer ?? undefined;

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <div className="relative h-[95%] w-full rounded-[24px] border-[3px] border-[#FFFFFF33] bg-[#396AFC]" />

      <CursorParallax
        baseX={baseX}
        baseY={baseY}
        rangeX={rangeX}
        rangeY={rangeY}
        easeMs={easeMs}
        containerClassName={cn("absolute inset-0", containerClassName)}
        contentClassName={cn("relative h-dvh w-full", contentClassName)}
        position={position}
      >
        <Image src={right.src} alt="Mobile app preview" fill priority />
      </CursorParallax>
    </div>
  );
};

export default RightWaitlist;
