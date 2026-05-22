import Image from "next/image";

const OurVisionSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1352px] px-6 py-16 sm:px-10 lg:py-24">
      <div className="mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#335CFF]">
          Our vision
        </span>
      </div>
      
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="flex-1">
          <h2 className="mb-6 font-twklausanne text-3xl font-semibold leading-tight text-[#101828] sm:text-4xl lg:text-5xl">
            To create a borderless world of multicurrencies, where every user
            can transact, save, and grow financially without limits, anytime,
            anywhere.
          </h2>
        </div>
        
        <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[400px] lg:h-[500px] lg:w-[500px]">
          <Image
            src="/about/2.jpg"
            alt="Business meeting"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 500px"
          />
        </div>
      </div>
    </section>
  );
};

export default OurVisionSection;

