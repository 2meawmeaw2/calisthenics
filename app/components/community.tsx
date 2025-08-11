"use client";
import { motion, easeInOut } from "motion/react";

export function Animated() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
        ease: easeInOut,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { ease: easeInOut, duration: 1 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-[5%] py-12 sm:py-16 md:py-20"
    >
      <div className="max-w-[1600px] min-h-full mx-auto bg-foreground rounded-2xl sm:rounded-3xl shadow-xs shadow-white/49 flex flex-col justify-evenly items-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <motion.div
          variants={childVariants}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            We aren&apos;t alone
          </h1>
          <h1 className="text-highlight leading-tight italic font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 sm:mt-4">
            We&apos;re 2 cats <br />
            athletes
          </h1>
          <h2 className="text-highlight pt-4 sm:pt-6 md:pt-8 text-shadow-primary italic font-semibold text-lg sm:text-xl md:text-2xl">
            4.5/5
          </h2>
        </motion.div>

        <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-4 sm:gap-6 md:gap-8 px-0 sm:px-4">
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              variants={childVariants}
              className="flex-1 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 shadow-lg shadow-highlight/30 border border-highlight rounded-xl flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 min-h-[280px] sm:min-h-[320px] md:min-h-[360px]"
            >
              <p className="text-primary font-outfit font-normal sm:font-medium md:font-semibold text-center leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                nobis eos aliquid, officia mollitia aspernatur aut quisquam
                accusamus porro repudiandae hic fugiat! Inventore soluta,
                incidunt facere dolorem veritatis ea eveniet.
              </p>
              <h2 className="font-bold text-primary text-xl sm:text-2xl md:text-3xl text-shadow-secondary text-center">
                a cat
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Community() {
  return <Animated />;
}
