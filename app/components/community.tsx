"use client";
import { motion, easeInOut, backInOut } from "motion/react";

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
      viewport={{ amount: 0.5, once: true }}
      className="min-h-screen p-[5%] py-20"
    >
      <div className="max-w-[1600px] min-h-full mx-auto bg-foreground rounded-3xl shadow-xs shadow-white/49 flex flex-col justify-evenly items-center">
        <motion.div variants={childVariants}>
          <h1 className="text-white font-bold py-0 text-[300%] text-center">
            We aren&apos;t alone
          </h1>
          <h1 className="text-highlight leading-9 italic py-0 font-bold text-[300%] text-center">
            We&apos;re 2 cats <br />
            athletes
          </h1>
          <h2 className="text-highlight pt-[1em] text-shadow-primary italic py-0 font-semibold text-[100%] text-center">
            4.5/5
          </h2>
        </motion.div>

        <div className="my-10  lg:h-full flex flex-col lg:flex-row justify-center gap-[1em] px-[1em]">
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              variants={childVariants}
              className="px-[1em] py-[2em] shadow-lg shadow-highlight/30 h-full border-1 border-highlight rounded-xl flex flex-col justify-center gap-10"
            >
              <p className="text-primary font-outfit md:font-semibold md:text-center leading-auto pt-[1em] md:pt-0 text-[1em] md:text-[1.2em]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
                nobis eos aliquid, officia mollitia aspernatur aut quisquam
                accusamus porro repudiandae hic fugiat! Inventore soluta,
                incidunt facere dolorem veritatis ea eveniet.
              </p>
              <h2 className="font-bold text-primary text-[1.3em]  text-shadow-secondary md:text-center">
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
