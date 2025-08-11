"use client";
import Image from "next/image";
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
  const y = useSpring(yt, {
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
    useTransform(scrollYProgress, [0.16687422166874222, 0.1], [100, 0]),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  return (
    <>
      <motion.section
        style={{ opacity: op, y: y }}
        ref={ref}
        className="w-full h-[180vh] py-1 sm:py-3 mb-[3rem] sm:mb-[5rem] md:mb-[10rem] relative"
      >
        <div className="w-full sticky top-0 h-screen flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, boxShadow: "none" }}
            transition={{ duration: 2 }}
            className="p-2 sm:p-4 md:p-6 lg:p-10 w-full flex flex-col justify-center items-center h-[20%] sm:h-[25%] md:h-[20%] lg:h-[30%] shadow-2xs shadow-highlight"
          >
            <h1 className="text-highlight text-center font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic py-0.5 sm:py-1 md:py-2">
              Workouts
            </h1>
            <h1 className="text-primary text-center font-semibold text-base xs:text-lg sm:text-xl md:text-2xl lg:text-5xl py-0.5 sm:py-1">
              To achieve your goals
            </h1>
            <h1 className="font-rajdhani text-center text-secondary text-xs xs:text-sm sm:text-base md:text-lg leading-tight">
              Different ways of training for different goals
            </h1>
          </motion.div>

          <div className="flex w-full flex-col justify-center items-center lg:flex-row gap-2 xs:gap-2 sm:gap-3 lg:gap-[2%] h-[80%] xs:h-[75%] sm:h-[80%] md:h-[70%] max-w-[1600px] mx-auto px-2 sm:px-4 py-1 sm:py-3">
            <motion.div
              style={{ opacity: work11, y: y1 }}
              className="pl-3 xs:pl-4 sm:pl-6 md:pl-10 border-1 border-highlight group cursor-pointer hover:border-action transition-all ease-in-out bg-foreground rounded-xl sm:rounded-2xl w-full h-full lg:h-[60%] max-h-140 p-1.5 xs:p-2 sm:p-3 flex flex-col justify-center gap-3  xs:gap-2 sm:gap-3 md:gap-4"
            >
              <div className="h-[15%] xs:h-[18%] sm:h-[16%] md:h-[14%] w-8 xs:w-10 sm:w-16 md:w-20 lg:w-[20%] max-w-20">
                <Image
                  width={256}
                  height={256}
                  src="/programb.png"
                  alt="challenge"
                  className="group-hover:hidden w-full h-auto"
                />
                <Image
                  width={256}
                  height={256}
                  src="/programg.png"
                  alt="challenge"
                  className="hidden group-hover:block w-full h-auto"
                />
              </div>
              <h1 className="text-primary text-shadow-xs group-hover:text-action uppercase text-shadow-highlight font-semibold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-0.5 sm:py-1">
                Programs
              </h1>
              <p className="font-rajdhani text-secondary group-hover:text-action transition-all ease-in-out duration-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-snug xs:leading-relaxed">
                Discover well prepared programs for different goals, Strength,
                Skills, Hypertrophy
              </p>
            </motion.div>

            <motion.div
              style={{ opacity: work22, y: y2 }}
              className="pl-3 xs:pl-4 sm:pl-6 md:pl-10 border-1 border-highlight group cursor-pointer hover:border-action bg-foreground rounded-xl sm:rounded-2xl w-full h-full lg:h-[60%] max-h-140 p-1.5 xs:p-2 sm:p-3 flex flex-col justify-center gap-3  xs:gap-2 sm:gap-3 md:gap-4"
            >
              <div className="h-[15%] xs:h-[18%] sm:h-[16%] md:h-[14%] w-8 xs:w-10 sm:w-16 md:w-20 lg:w-[20%] max-w-20">
                <Image
                  width={256}
                  height={256}
                  src="/sessionb.png"
                  alt="challenge"
                  className="group-hover:hidden w-full h-auto"
                />
                <Image
                  width={256}
                  height={256}
                  src="/sessiong.png"
                  alt="challenge"
                  className="hidden group-hover:block w-full h-auto"
                />
              </div>
              <h1 className="text-primary text-shadow-xs group-hover:text-action transition-all ease-in-out duration-300 uppercase text-shadow-highlight font-semibold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-0.5 sm:py-1">
                Sessions
              </h1>
              <p className="font-rajdhani text-secondary group-hover:text-action transition-all ease-in-out duration-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-snug xs:leading-relaxed">
                Build a must have knowledge for Calisthenics with our
                professional sessions
              </p>
            </motion.div>

            <motion.div
              style={{ opacity: work33, y: y3 }}
              className="pl-3 xs:pl-4 sm:pl-6 md:pl-10 border-1 border-highlight group cursor-pointer hover:border-action bg-foreground rounded-xl sm:rounded-2xl w-full h-full lg:h-[60%] max-h-140 p-1.5 xs:p-2 sm:p-3 flex flex-col justify-center gap-3  xs:gap-2 sm:gap-3 md:gap-4"
            >
              <div className="h-[15%] xs:h-[18%] sm:h-[16%] md:h-[14%] w-8 xs:w-10 sm:w-16 md:w-20 lg:w-[20%] max-w-20">
                <Image
                  width={256}
                  height={256}
                  src="/challengesb.png"
                  alt="challenge"
                  className="group-hover:hidden w-full h-auto"
                />
                <Image
                  width={256}
                  height={256}
                  src="/challengesg.png"
                  alt="challenge"
                  className="hidden group-hover:block w-full h-auto"
                />
              </div>
              <h1 className="text-primary text-shadow-xs group-hover:text-action transition-all ease-in-out duration-300 uppercase text-shadow-highlight font-semibold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-0.5 sm:py-1">
                Challenges
              </h1>
              <p className="font-rajdhani text-secondary group-hover:text-action transition-all ease-in-out duration-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-snug xs:leading-relaxed">
                Train your discipline muscle without realizing with our exciting
                challenges
              </p>
            </motion.div>

            <motion.div
              style={{ opacity: work44, y: y4 }}
              className="pl-3 xs:pl-4 sm:pl-6 md:pl-10 border-1 border-highlight group cursor-pointer hover:border-action bg-foreground rounded-xl sm:rounded-2xl w-full h-full lg:h-[60%] max-h-140 p-1.5 xs:p-2 sm:p-3 flex flex-col justify-center gap-3  xs:gap-2 sm:gap-3 md:gap-4"
            >
              <div className="h-[15%] xs:h-[18%] sm:h-[16%] md:h-[17%] w-8 xs:w-10 sm:w-16 md:w-20 lg:w-[20%] max-w-20">
                <Image
                  width={256}
                  height={256}
                  src="/sessionb.png"
                  alt="challenge"
                  className="group-hover:hidden w-full h-auto"
                />
                <Image
                  width={256}
                  height={256}
                  src="/sessiong.png"
                  alt="challenge"
                  className="hidden group-hover:block w-full h-auto"
                />
              </div>
              <h1 className="text-primary text-shadow-xs group-hover:text-action transition-all ease-in-out duration-300 uppercase text-shadow-highlight font-semibold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl py-0.5 sm:py-1">
                Session Creator
              </h1>
              <p className="font-rajdhani text-secondary group-hover:text-action transition-all ease-in-out duration-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-snug xs:leading-relaxed">
                Customize and make training plans based on your goals
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
