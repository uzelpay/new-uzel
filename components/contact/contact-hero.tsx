import Image from "next/image";

const ContactHero = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1352px] px-6 py-16 sm:px-10 lg:py-24">
      <div className="mb-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#335CFF]">
          Contact us
        </span>
      </div>
      
      <div className="mb-12">
        <h1 className="mb-6 font-twklausanne text-4xl font-semibold leading-tight text-[#101828] sm:text-5xl lg:text-6xl">
          Get in Touch with Us
        </h1>
        
        <p className="max-w-2xl text-base leading-7 text-[#475467] sm:text-lg">
          Have a question or want to learn more about Uzel SmartPay? We&apos;re
          here to help. Reach out to us and our team will get back to you as
          soon as possible.
        </p>
      </div>

      <div className="relative h-[300px] w-full overflow-hidden rounded-2xl sm:h-[400px] lg:h-[500px]">
        <Image
          src="/about/1.jpg"
          alt="Contact us"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1352px"
        />
      </div>
    </section>
  );
};

export default ContactHero;

