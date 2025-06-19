"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function QA() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData = [
    {
      question: "Question 1 Placeholder",
      answer:
        "Answer 1 placeholder text goes here. This is where the detailed answer to the question would appear.",
    },
    {
      question: "Question 2 Placeholder",
      answer:
        "Answer 2 placeholder text goes here. This is where the detailed answer to the question would appear.",
    },
    {
      question: "Question 3 Placeholder",
      answer:
        "Answer 3 placeholder text goes here. This is where the detailed answer to the question would appear.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full p-[5%] py-20">
      <div className="max-w-[1600px] mx-auto text-center">
        <h1 className="text-4xl md:text-6xl xl:text-[8xl] text-primary font-black tracking-wide text-shadow-primary mb-4">
          Q&A
        </h1>
        <h3 className="text-xl md:text-2xl xl:text-[3xl] text-highlight font-medium text-shadow-primary">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="max-w-[1600px] mx-auto mt-20 px-4">
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="bg-foreground border border-highlight/30 rounded-2xl overflow-hidden"
            >
              <motion.button
                onClick={() => toggleItem(index)}
                className="w-full p-8 text-left flex justify-between items-center hover:bg-highlight/10 transition-colors duration-200"
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-2xl font-bold text-primary">
                  {item.question}
                </h3>
                <motion.div
                  className="text-highlight"
                  animate={{ rotate: openItem === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <FiChevronDown size={24} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openItem === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.4, ease: "easeInOut" },
                        opacity: {
                          duration: 0.3,
                          delay: 0.1,
                          ease: "easeInOut",
                        },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.2, ease: "easeInOut" },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                          delay: 0.2,
                          duration: 0.4,
                          ease: "easeOut",
                        },
                      }}
                      exit={{
                        y: -20,
                        opacity: 0,
                        transition: {
                          duration: 0.2,
                          ease: "easeIn",
                        },
                      }}
                      className="px-8 pb-8"
                    >
                      <p className="text-secondary text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
