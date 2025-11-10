import { cn } from "@/lib/utils";
import Image from "next/image";
import image1 from "@/public/everything-you-need/1.svg";
import image2 from "@/public/everything-you-need/2.svg";
import image3 from "@/public/everything-you-need/3.svg";
import image4 from "@/public/everything-you-need/4.svg";
import image5 from "@/public/everything-you-need/5.svg";

const features = [
  {
    title: "Hold & Manage Your World Currencies",
    description: `Eﬀortlessly manage multiple domestic and international currencies in a single, secure wallet. Convert with competitive rates and track your balances with ease.`,
    fallback: (
      <div className="border border-[#F5F7FA] rounded-[16px] shadow-[0px 0px 0px 2px #1555EB0A]">
        <Image
          src={image1.src}
          alt="Hold & Manage Your World Currencies"
          className="w-full h-full object-cover border border-[#F5F7FA] rounded-[16px] shadow-[0px 0px 0px 2px #1555EB0A]"
          width={1000}
          height={1000}
        />
      </div>
    ),
    className: "lg:col-span-2",
  },
  {
    title: "Send Money, Anywhere, Anytime",
    description: `Experience lightning-fast local transfers and seamless international remittances. Send and receive funds across borders with competitive rates and complete transparency.`,
    fallback: (
      <Image
        src={image2.src}
        alt="Hold & Manage Your World Currencies"
        className="w-full h-full object-cover translate-y-6"
        width={1000}
        height={1000}
      />
    ),
  },
  {
    title: "Your Gateway to the Crypto Economy",
    description: `Engage with the burgeoning
cryptocurrency market through secure P2P and in-app trading. Buy, sell, and manage
your digital assets with confidence.`,
    fallback: (
      <Image
        src={image3.src}
        alt="Hold & Manage Your World Currencies"
        className="w-full h-full object-cover translate-y-6"
        width={1000}
        height={1000}
      />
    ),
  },
  {
    title: "Secure Online Payments, Instantly",
    description: `Generate virtual cards for secure online transactions. Control your spending, protect your primary accounts, and enjoy hassle-free payments. `,
    fallback: (
      <Image
        src={image4.src}
        alt="Hold & Manage Your World Currencies"
        className="w-full h-full object-cover sm:translate-y-9"
        width={1000}
        height={1000}
      />
    ),
  },
  {
    title: "Grow Your Wealth, Your Way",
    description: `Explore flexible and secure savings options designed to help you achieve your financial goals. Lock funds, earn interest, and watch your money grow.`,
    fallback: (
      <Image
        src={image5.src}
        alt="Hold & Manage Your World Currencies"
        className="w-full h-full  max-h-[300px]"
        width={1000}
        height={1000}
      />
    ),
  },
];

const EverythingYouNeed = () => {
  return (
    <section className="w-full bg-white px-4 py-24">
      <div className="mx-auto flex w-full max-w-[1352px] flex-col gap-y-12">
        <div className="mx-auto flex  flex-col gap-4 text-center">
          <h2 className="text-3xl font-medium sm:leading-[64px] max-w-[727px] mx-auto font-twklausanne tracking-tight text-[#0E121B] sm:text-[56px]">
            Everything You Need, In One Smart Platform
          </h2>
          <p className="text-base text-[#525866] max-w-[510px] mx-auto">
            UZEL brings together all the tools you need to send, spend, save,
            and grow locally and globally.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-6 xl:grid-cols-9">
          {features.map(
            ({ title, description, fallback, className }, index) => (
              <div
                key={title}
                className={cn(
                  "flex flex-col gap-6 justify-between rounded-[24px] bg-[#F5F7FA] ",
                  className,
                  index === 0 && "lg:col-span-4 xl:col-span-5",
                  index === 1 && "lg:col-span-3 xl:col-span-4",
                  index !== 1 && index !== 0 && "lg:col-span-2 xl:col-span-3"
                )}
              >
                <div
                  className={cn("relative", index === 2 ? "px-8" : "px-8 pt-8")}
                >
                  {fallback}
                </div>
                <div className="space-y-3 px-8 pb-8">
                  <h3
                    className={cn(
                      "text-xl font-medium  text-[#0E121B] lg:text-2xl",
                      index === 2 || index === 3 ? "max-w-[300px]" : ""
                    )}
                  >
                    {title}
                  </h3>
                  <p className="text-base text-[#525866]">{description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default EverythingYouNeed;
