"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export type CursorParallaxProps = {
  children: React.ReactNode;
  baseX?: number;
  baseY?: number;
  rangeX?: number;
  rangeY?: number;
  easeMs?: number;
  containerClassName?: string;
  contentClassName?: string;
  position?: {
    x: number;
    y: number;
  };
};

type TranslateState = {
  x: number;
  y: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const CursorParallax = ({
  children,
  baseX = 0,
  baseY = 0,
  rangeX = 16,
  rangeY = 16,
  easeMs = 120,
  containerClassName,
  contentClassName,
  position,
}: CursorParallaxProps) => {
  const [translate, setTranslate] = useState<TranslateState>({
    x: baseX,
    y: baseY,
  });

  useEffect(() => {
    setTranslate({ x: baseX, y: baseY });
  }, [baseX, baseY]);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width;
      const relativeY = (event.clientY - rect.top) / rect.height;

      const centeredX = (relativeX - 0.5) * 2;
      const centeredY = (relativeY - 0.5) * 2;

      setTranslate({
        x: baseX + centeredX * rangeX,
        y: baseY + centeredY * rangeY,
      });
    },
    [baseX, rangeX, baseY, rangeY]
  );

  const handlePointerLeave = useCallback(() => {
    setTranslate({ x: baseX, y: baseY });
  }, [baseX, baseY]);

  const target = useMemo(() => {
    if (!position) {
      return translate;
    }

    const clampedX = clamp(position.x, -1, 1);
    const clampedY = clamp(position.y, -1, 1);

    return {
      x: baseX + clampedX * rangeX,
      y: baseY + clampedY * rangeY,
    };
  }, [position, translate, baseX, rangeX, baseY, rangeY]);

  return (
    <div
      className={cn("relative", containerClassName)}
      onPointerMove={position ? undefined : handlePointerMove}
      onPointerLeave={position ? undefined : handlePointerLeave}
    >
      <div
        className={cn("relative", contentClassName)}
        style={{
          transform: `translateY(${target.y}px) translateX(${target.x}px)`,
          transition: `transform ${easeMs}ms ease-out`,
        }}
        onPointerLeave={position ? handlePointerLeave : undefined}
      >
        {children}
      </div>
    </div>
  );
};

export default CursorParallax;
