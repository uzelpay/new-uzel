"use client";
import { useCallback, useRef, useState } from "react";
import WaitlistForm from "./form";
import RightWaitlist from "./right";

type PointerState = {
  x: number;
  y: number;
};

const Waitlist = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pointer, setPointer] = useState<PointerState | null>(null);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width;
      const relativeY = (event.clientY - rect.top) / rect.height;

      const centeredX = (relativeX - 0.5) * 2;
      const centeredY = (relativeY - 0.5) * 2;

      setPointer({ x: centeredX, y: centeredY });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setPointer(null);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white lg:h-dvh lg:w-dvw lg:flex-row lg:overflow-hidden"
    >
      <div className="flex h-full w-full flex-col px-6 pb-20 pt-14 sm:px-8 lg:w-1/2 lg:justify-center lg:px-12 lg:pb-24 lg:pt-0">
        <WaitlistForm />
      </div>
      <div className="absolute right-0 top-0 hidden h-full w-1/2 lg:block">
        <RightWaitlist
          pointer={pointer}
          parallax={{
            baseX: 20,
            baseY: 96,
            rangeX: 20,
            rangeY: 96,
            easeMs: 140,
          }}
        />
      </div>
    </div>
  );
};

export default Waitlist;
