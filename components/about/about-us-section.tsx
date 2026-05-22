import Image from "next/image";
import { COMPANY } from "@/lib/company";

const AboutUsSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1352px] px-6 py-16 sm:px-10 lg:py-24">
      <div className="mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#335CFF]">
          About us
        </span>
      </div>

      <div className="mb-12">
        <h1 className="mb-6 font-twklausanne text-4xl font-semibold leading-tight text-[#101828] sm:text-5xl lg:text-6xl">
          Building the Future of Collaborative Impact
        </h1>

        <div className="space-y-4 text-base leading-7 text-[#475467] sm:text-lg">
          <p>
            {COMPANY.brandName} ({COMPANY.legalName}, DBA {COMPANY.dbaName}) is
            a next-generation financial technology company building a borderless
            financial ecosystem that empowers individuals and businesses to
            transact seamlessly across the globe.
          </p>
          <p>
            We are revolutionizing how people manage their finances by
            simplifying global payments, enabling multicurrency transactions,
            and providing innovative financial solutions that break down
            traditional barriers.
          </p>
        </div>
      </div>

      <div className="relative h-[300px] w-full overflow-hidden rounded-2xl sm:h-[400px] lg:h-[500px]">
        <Image
          src="/about/1.jpg"
          alt="Team collaboration"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1352px"
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
