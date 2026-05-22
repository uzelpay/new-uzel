import Image from "next/image";

const OurCommitmentSection = () => {
  return (
    <section className="mx-auto w-full max-w-[1352px] px-6 py-16 sm:px-10 lg:py-24">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[400px] lg:h-[500px] lg:w-[500px]">
          <Image
            src="/about/3.jpg"
            alt="Team collaboration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 500px"
          />
        </div>

        <div className="flex-1">
          <div className="mb-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#335CFF]">
              Our Commitment
            </span>
          </div>

          <h2 className="font-twklausanne text-3xl font-semibold leading-tight text-[#101828] sm:text-4xl lg:text-5xl">
            We are committed to trust, transparency, and technology. Our
            platform delivers secure, scalable, and globally connected financial
            solutions that empower users to achieve their financial goals
            without boundaries.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default OurCommitmentSection;
