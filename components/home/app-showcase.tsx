import Image from "next/image";
import React from "react";
import herocard from "@/public/home/herocard.png";

const AppShowcase = () => {
  return (
    <div className="max-w-[1352px] mx-auto">
      <Image
        src={herocard}
        alt="App View Showcase"
        width={4000}
        height={4000}
        priority
        className="max-w-[1352px] w-full h-full object-cover"
      />
    </div>
  );
};

export default AppShowcase;
