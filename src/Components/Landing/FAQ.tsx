import { faqs as initialFaqs } from "@/Constants/data";
import { Title } from ".";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [faqs, setFaqs] = useState<typeof initialFaqs>(initialFaqs);

  const handleClick = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        showAnswer: i === index ? !faq.showAnswer : false,
      }))
    );
  };
  return (
    <div className="my-10 space-y-10 bg-secondary py-10">
      <Title
        title="Frequently Asked Questions"
        description="If you have any questions, please don't hesitate to contact us."
      />

      <main className="main">
        <ul className="space-y-4 md:w-[700px] mx-auto">
          {faqs.map((faq, index) => (
            <li data-aos="fade-up" key={index} onClick={() => handleClick(index)} className="border-b border-line py-5 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-sora font-bold">
                  {faq.question}
                </h3>
                <button >
                  <ChevronDown
                    size={20}
                    className={clsx(
                      "transition-transform duration-300",
                      faq.showAnswer && "rotate-180 text-primary"
                    )}
                  />
                </button>
              </div>
              <AnimatePresence>
              {faq.showAnswer && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-muted"
                >{faq.answer}</motion.p>
              )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default FAQ;
