"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
export default function Intro() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll progresssss:", latest);
  });

  const opacity = useTransform(
    scrollYProgress,
    [0.7762106252938411, 0.7240896358543417],
    [0, 1]
  );
  const yt = useTransform(
    scrollYProgress,
    [0.7762106252938411, 0.7240896358543417],
    [0, 50]
  );
  const y = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const op = useSpring(opacity, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const work1 = useTransform(
    scrollYProgress,
    [0.7801120448179272, 0.4084682440846824],
    [0, 1]
  );
  const work11 = useSpring(work1, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const work2 = useTransform(
    scrollYProgress,
    [0.4084682440846824, 0.31980073199622505],
    [0, 1]
  );
  const work22 = useSpring(work2, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const work3 = useTransform(
    scrollYProgress,
    [0.31980073199622505, 0.16687422166874222],
    [0, 1]
  );
  const work33 = useSpring(work3, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const work4 = useTransform(scrollYProgress, [0.16687422166874222, 0], [0, 1]);
  const work44 = useSpring(work4, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y1 = useSpring(
    useTransform(
      scrollYProgress,
      [0.7801120448179272, 0.4084682440846824],
      [100, 0]
    ),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  const y2 = useSpring(
    useTransform(
      scrollYProgress,
      [0.4084682440846824, 0.31980073199622505],
      [100, 0]
    ),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  const y3 = useSpring(
    useTransform(
      scrollYProgress,
      [0.31980073199622505, 0.16687422166874222],
      [100, 0]
    ),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  const y4 = useSpring(
    useTransform(scrollYProgress, [0.16687422166874222, 0], [100, 0]),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  /*
          style={{ opacity: op }}
        whileInView={{ y: -400, opacity: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ ease: easeInOut, duration: 0.5 }}
   */
  return (
    <>
      <motion.section
        style={{ opacity: op, y: y }}
        ref={ref}
        className="w-full border-2 border-action h-[150vh] py-3  "
      >
        <div className="w-full sticky top-0 h-screen flex flex-col justify-center items-center ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, boxShadow: "none" }}
            transition={{ duration: 2 }}
            className="p-10 w-full flex flex-col justify-center items-center h-[20%] md:h-[30%] bg-background shadow-2xs shadow-highlight "
          >
            <h1 className="text-highlight  text-center font-black text-5xl lg:text-6xl italic py-2 ">
              Workouts
            </h1>
            <h1 className="text-primary text-center  font-semibold text-2xl lg:text-5xl py-1 ">
              To achieve your goals
            </h1>
            <h1 className="font-rajdhani text-center  text-secondary">
              Different ways of training for different goals
            </h1>
          </motion.div>
          <div className="flex w-full flex-col justify-center items-center lg:flex-row gap-[2%] h-[80%] md:h-[70%] max-w-[1600px] mx-auto px-2 py-3">
            <motion.div
              style={{ opacity: work11, y: y1 }}
              className="border-1 border-highlight bg-foreground rounded-2xl w-full  h-full lg:h-[60%] max-h-140 p-3 flex  flex-col justify-center gap-4"
            >
              <h1 className="text-highlight ">icon</h1>
              <h1 className="text-primary text-shadow-xs text-shadow-highlight font-semibold text-3xl py-1 md:text-4xl xl:text-5xl">
                workout
              </h1>
              <p className="font-rajdhani text-secondary text-lg md:text-l xl:text-xl ">
                Different ways of training for different goals
              </p>
            </motion.div>
            <motion.div
              style={{ opacity: work22, y: y2 }}
              className="border-1 border-highlight bg-foreground rounded-2xl w-full  h-full lg:h-[60%] max-h-140 p-3 flex  flex-col justify-center gap-4"
            >
              <h1 className="text-highlight ">icon</h1>
              <h1 className="text-primary text-shadow-xs text-shadow-highlight font-semibold text-3xl py-1 md:text-4xl xl:text-5xl">
                workout
              </h1>
              <p className="font-rajdhani text-secondary text-lg md:text-l xl:text-xl ">
                Different ways of training for different goals
              </p>
            </motion.div>
            <motion.div
              style={{ opacity: work33, y: y3 }}
              className="border-1 border-highlight bg-foreground rounded-2xl w-full  h-full lg:h-[60%] max-h-140 p-3 flex  flex-col justify-center gap-4"
            >
              <h1 className="text-highlight ">icon</h1>
              <h1 className="text-primary text-shadow-xs text-shadow-highlight font-semibold text-3xl py-1 md:text-4xl xl:text-5xl">
                workout
              </h1>
              <p className="font-rajdhani text-secondary text-lg md:text-l xl:text-xl ">
                Different ways of training for different goals
              </p>
            </motion.div>
            <motion.div
              style={{ opacity: work44, y: y4 }}
              className="border-1 border-highlight bg-foreground rounded-2xl w-full  h-full lg:h-[60%] max-h-140 p-3 flex  flex-col justify-center gap-4"
            >
              <h1 className="text-highlight ">icon</h1>
              <h1 className="text-primary text-shadow-xs text-shadow-highlight font-semibold text-3xl py-1 md:text-4xl xl:text-5xl">
                workout
              </h1>
              <p className="font-rajdhani text-secondary text-lg md:text-l xl:text-xl ">
                Different ways of training for different goals
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
