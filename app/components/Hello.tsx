"use client";
import Image from "next/image";
import {
  backOut,
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "motion/react";
import { useRef, useEffect } from "react";
const COLORS_TOP = ["#ffffff", "#22d3ee", "#0d0d0d"];

export function Hello() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    });
  }, [color]);

  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
      <motion.section
        style={{ boxShadow }}
        className="w-full p-[2em]  flex flex-col items-center justify-center bg-foreground shadow-xl/10 shadow-white  rounded-4xl"
      >
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
      </motion.section>
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
  const y = useTransform(scrollYProgress, [1, 0.8], [0, -200]);
  const opacity2 = useTransform(scrollYProgress, [1, 0.4], [1, 0]);
  /*       */

  const color = useMotionValue(COLORS_TOP[0]);
  const imageOp = useMotionValue(0);
  useEffect(() => {
    animate(imageOp, [1, 1, 0.7], {
      ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    });
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    });
  }, [COLORS_TOP, color, imageOp]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <>
      <motion.div
        style={{
          backgroundImage,
          opacity: opacity2,
        }}
        className="fixed inset-0 -z-10 "
      />
      <div
        ref={ref}
        className=" w-full h-[100vh] flex flex-col justify-start items-center pt-[2rem] "
      >
        <motion.div
          style={{ opacity: opacity, y: y }}
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
            <motion.div style={{ opacity: imageOp }}>
              <Image
                src="/dark-nb.svg"
                alt="Background"
                fill
                className="sticky top-10 object-contain max-h-160"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
