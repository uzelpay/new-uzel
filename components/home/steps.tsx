"use client";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import swipe from "@/public/steps/swipe.svg";
import swipeactive from "@/public/steps/swipe-active.svg";
import thumbprint from "@/public/steps/thumbprint.svg";
import thumbprintactive from "@/public/steps/thumbprint-active.svg";
import step1 from "@/public/steps/1.jpg";
import step2 from "@/public/steps/2.jpg";
import step3 from "@/public/steps/3.jpg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SimpleSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Get Started in Minutes",
      description: `Sign up with your email or phone, complete a quick and secure KYC process, and gain instant access to your Uzel account. Enjoy peace of mind with biometric login and Two-Factor Authentication.`,
      activeicon: swipeactive,
      inactiveicon: swipe,
      image: step1,
    },
    {
      title: "Flexible Funding Options",
      description: `Easily fund your multi-currency wallets via
direct bank transfers using your unique Uzel account number, or instantly withdebit/credit card payments. We integrate with local payment gateways for your convenience.`,
      activeicon: thumbprintactive,
      inactiveicon: thumbprint,
      image: step2,
    },
    {
      title: "Seamless Transactions, Total Control.",
      description: `Send money to other Uzel
users or external bank accounts with ease. Manage beneficiaries, track your
transaction history, and receive real-time notifications for all your financial activities.
Uzel keeps you informed and in contro`,
      activeicon: swipeactive,
      inactiveicon: swipe,
      image: step3,
    },
  ];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepCount = steps.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.min(
      stepCount - 1,
      Math.floor(latest * stepCount + 0.00001)
    );

    setActiveStep((prev) => (prev === nextIndex ? prev : nextIndex));
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#EBF1FF] py-16 sm:py-24"
    >
      <div className="flex w-full items-center md:sticky md:top-0 md:min-h-screen">
        <div className="w-full px-4 sm:px-6">
          <div className="mx-auto flex w-full max-w-[1352px] flex-col gap-y-10">
            <h2 className="text-3xl font-semibold leading-tight text-[#122368] sm:max-w-[550px] sm:text-[56px]">
              Simple Steps to Financial Freedom
            </h2>

            <div className="flex flex-col gap-6 rounded-[24px] bg-[#D5E2FF] p-4 sm:gap-8 sm:p-6 lg:flex-row lg:items-stretch lg:justify-between lg:gap-x-12">
              <div className="flex w-full flex-col items-start gap-y-2 lg:w-[400px]">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    layout
                    className={cn(
                      "w-full rounded-[16px] p-4 transition-colors duration-300 sm:p-6",
                      activeStep === index ? "bg-white" : "bg-transparent"
                    )}
                  >
                    <div className="mb-6 size-6">
                      <Image
                        src={
                          activeStep === index
                            ? step.activeicon
                            : step.inactiveicon
                        }
                        width={24}
                        height={24}
                        alt={step.title}
                      />
                    </div>
                    <p
                      className={cn(
                        "pb-3 font-medium transition-colors duration-300",
                        activeStep === index
                          ? "text-[#0E121B]"
                          : "text-[#525866]"
                      )}
                    >
                      {step.title}
                    </p>
                    <p className="text-[#525866] transition-opacity duration-300">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                key={steps[activeStep].title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative mt-4 w-full min-h-[260px] overflow-hidden rounded-[24px] bg-white sm:min-h-[360px] lg:mt-0 lg:min-h-[600px]"
              >
                <Image
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  fill
                  className="h-full w-full rounded-[24px] object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none hidden md:block">
        {steps.map((_step, index) => (
          <div key={`spacer-${index}`} className="h-screen" />
        ))}
      </div>
    </section>
  );
};

export default SimpleSteps;
