"use client";
import Image from "next/image";
import {
  backOut,
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
export function Hello() {
  return (
    <>
      <section className="w-full p-[2em]  flex flex-col items-center justify-center bg-foreground shadow-xl/10 shadow-white  rounded-4xl">
        <h1 className="text-2xl md:text-4xl xl:text-[6xl] m-3 md:m-4 xl:m-6  text-center text-primary text-nowrap text-shadow-md/25 text-shadow-primary font-Clash font-[500] tracking-wide  ">
          Master your body with{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 1],
            }}
            transition={{
              times: [0, 0.5, 1],
              duration: 2,
              delay: 1,
              ease: [backOut, easeInOut],
            }}
          >
            Calithenics
          </motion.span>
        </h1>

        <p className="text-xl md:text-xl xl:text-[3xl] text-highlight text-shadow-md/20 font-medium font-rajdhani text-shadow-primary max-w-300  text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 1],
            }}
            transition={{
              times: [0, 0.5, 1],
              duration: 2,
              delay: 1,
              ease: [backOut, easeInOut],
            }}
          >
            Calisthenics{" "}
          </motion.span>{" "}
          workouts for all levels and goals. Gain muscle, get stronger and
          become who you want to be
        </p>
      </section>
    </>
  );
}
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll progress:", latest);
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8], [1, 0]);
  /*       */

  return (
    <div
      ref={ref}
      className=" w-full h-[100vh] flex flex-col justify-start items-center pt-[2rem] bg-background "
    >
      <motion.div
        style={{ opacity: opacity }}
        className="h-screen w-full max-w-[1600px] p-3 flex flex-col  justify-center items-center gap-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 110 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: backOut, duration: 2, delay: 1 }}
          className="w-full h-fit  px-6 max-w-[1200px]  "
        >
          <Hello />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 110 }}
          animate={{
            opacity: [0, 0.5, 1],
            y: 0,
          }}
          transition={{
            ease: backOut,
            duration: 2,
            delay: 1,
            opacity: {
              times: [0, 0.5, 1],
              duration: 2,
              delay: 1,
              ease: [backOut, easeInOut],
            },
          }}
          className="relative w-full h-[30%]"
        >
          <Image
            src="/dark-nb.svg"
            alt="Background"
            fill
            className="sticky top-10 object-contain max-h-160"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
