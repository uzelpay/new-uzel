const OurStorySection = () => {
  return (
    <section className="mx-auto w-full max-w-[1352px] px-6 py-16 sm:px-10 lg:py-24">
      <div className="mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#335CFF]">
          Our story
        </span>
      </div>
      
      <h2 className="mb-12 font-twklausanne text-3xl font-semibold leading-tight text-[#101828] sm:text-4xl lg:text-5xl">
        Money Should Move as Fast as You Do.
      </h2>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-base leading-7 text-[#475467] sm:text-lg">
          <p>
            In today&apos;s interconnected world, managing finances across
            multiple currencies shouldn&apos;t be complicated. Yet, traditional
            banking systems have created barriers that slow down transactions,
            increase costs, and limit financial freedom.
          </p>
        </div>
        
        <div className="space-y-4 text-base leading-7 text-[#475467] sm:text-lg">
          <p>
            Uzel SmartPay was founded with a simple vision: to create a platform
            where money moves as fast as ideas, where borders don&apos;t limit
            financial opportunities, and where everyone can manage their global
            finances with the same ease as their local ones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;

