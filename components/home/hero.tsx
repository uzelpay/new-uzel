import Image from "next/image";
import { Button } from "../ui/button";
import right from "@/public/home/right.svg";
import AppShowcase from "./app-showcase";
import Link from "next/link";

export const Hero = () => {
  return (
    <div>
      <div className="relative">
        <div className="relative z-1 mx-auto flex max-w-[1352px] flex-col items-center justify-between gap-10 px-6 pt-16 md:h-[500px] md:flex-row md:items-center md:gap-0 md:px-0 md:pt-0">
          <div className="max-w-2xl text-left md:text-left">
            <h1 className="font-twklausanne font-medium text-4xl leading-tight pb-4 sm:text-5xl md:text-7xl md:leading-[1.05]">
              Your world, Your
              <br /> money, Your control
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Manage your finances across borders, currencies, and crypto with
              Uzel the all-in-one fintech platform designed for your global
              lifestyle.
            </p>
            <Link href="/waitlist">
              <Button
                variant="default"
                style={{
                  border: "1px solid",
                  borderImageSource:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)",
                  background:
                    "linear-gradient(0deg, var(--primary-base, #335CFF), var(--primary-base, #335CFF)), linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",
                  boxShadow:
                    "0px 0px 0px 1px var(--primary-base), 0px 1px 2px 0px #0E121B3D",
                }}
                className="mt-6 h-12 w-full max-w-[220px] md:mt-4 md:h-10 md:w-auto"
              >
                Join waitlist
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute right-0 top-0 hidden h-[500px] w-1/2 md:block">
          <Image fill src={right.src} alt="Hero" />
        </div>
      </div>
      <div className="translate-y-0 md:pt-0 pt-10 pb-24 md:-translate-y-10">
        <AppShowcase />
      </div>
    </div>
  );
};
