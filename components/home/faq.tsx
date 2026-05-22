"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MinusCircle, PlusCircle } from "lucide-react";

const faqs = [
  {
    question: "What can I do with UZEL?",
    answer:
      "You can send and receive money locally or internationally, manage multi-currency wallets, trade crypto, pay bills, create virtual cards, save with interest, and more — all from one secure platform.",
  },
  {
    question: "Is UZEL available in my country?",
    answer:
      "UZEL is rolling out globally. Check the availability list in your account dashboard—new regions are added regularly, and you can join the waitlist if we’re not live in your market yet.",
  },
  {
    question: "Do I need to verify my identity?",
    answer:
      "Yes. Completing KYC keeps your account secure and unlocks all features, including higher transfer limits and access to regulated financial products.",
  },
  {
    question: "What currencies can I hold in my wallet?",
    answer:
      "You can hold major global currencies and a curated list of digital assets. We’re constantly adding support for new currencies based on customer demand.",
  },
  {
    question: "Can I buy and sell crypto on UZEL?",
    answer:
      "Absolutely. UZEL offers in-app crypto trading with transparent fees, instant settlement, and cold-storage custody for long-term protection.",
  },
];

const itemVariants = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="bg-[#EBF1FF] pt-24 pb-40">
      <div className="mx-auto max-w-[1352px] px-6 lg:px-0">
        <h2 className="text-3xl font-medium font-twklausanne leading-tight max-w-[450px]  text-[#122368] sm:text-[56px]">
          Frequently asked questions
        </h2>

        <div className="mt-10 space-y-4 divide-y divide-[#E1E4EA]">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = index === activeIndex;

            return (
              <div key={question} className="overflow-hidden ">
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between gap-6 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="text-base font-medium text-[#122368] sm:text-lg">
                    {question}
                  </span>
                  <span className="flex size-5 items-center justify-center ">
                    {isOpen ? (
                      <MinusCircle className="size-5 text-[#525866]" />
                    ) : (
                      <PlusCircle className="size-5 text-[#525866]" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={itemVariants}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div
                        id={`faq-panel-${index}`}
                        className="  pb-6 text-sm leading-relaxed text-[#525866]"
                      >
                        {answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
