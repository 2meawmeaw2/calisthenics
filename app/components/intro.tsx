"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function Intro() {
  return (
    <>
      <motion.section
        id="programs"
        aria-labelledby="programs-title"
        // More breathing room on desktop
        className="w-full py-10 sm:py-14 lg:py-20 mb-16 sm:mb-24 lg:mb-32 relative"
      >
        <div className="w-full mx-auto max-w-screen-xl 2xl:max-w-screen-2xl px-5 sm:px-6 lg:px-8">
          {/* Header / Hero (constrained width for desktop to reduce line length) */}
          <motion.header
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 1, once: true }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 22,
              duration: 2,
              delay: 0.01,
            }}
            className="rounded-2xl mx-auto max-w-4xl lg:max-w-5xl p-5 sm:p-7 md:p-8 lg:p-10 shadow-2xs shadow-highlight bg-foreground/60 backdrop-blur-sm ring-1 ring-highlight/10"
          >
            <p className="uppercase tracking-wide text-xs sm:text-sm text-secondary/80 text-center mb-1.5 sm:mb-2">
              Programs & Sessions
            </p>
            <h1
              id="programs-title"
              className="text-highlight text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.05] font-Clash tracking-tight text-center font-medium italic"
            >
              Workouts
            </h1>
            <h2 className="text-primary/90 text-center font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-2 sm:mt-3">
              To achieve your goals
            </h2>
            <p className="font-rajdhani text-center text-secondary max-w-[65ch] mx-auto text-sm sm:text-base md:text-lg leading-relaxed mt-2">
              Different ways of training for different goals
            </p>

            {/* subtle divider to separate header from grid */}
            <div className="mt-5 sm:mt-6 lg:mt-8 h-px w-full bg-gradient-to-r from-transparent via-highlight/20 to-transparent" />
          </motion.header>

          {/* Cards Grid */}
          {/* 12-col grid on lg: 2 columns (6/12 each). On xl+: 4 columns (3/12 each). */}
          <div className="mt-8 sm:mt-12 lg:mt-16 grid gap-4 sm:gap-6 lg:gap-x-8 lg:gap-y-10 xl:gap-x-10 2xl:gap-x-12 lg:grid-cols-12">
            {/* Card 1 */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 1, once: true }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 22,
                duration: 2,
                delay: 0.04,
              }}
              className="group relative overflow-hidden rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 bg-foreground ring-1 ring-highlight/15 hover:ring-action/40 shadow-sm hover:shadow-md transition-all ease-out hover:-translate-y-1 focus-within:ring-action h-full min-h-[220px] lg:min-h-[240px] lg:col-span-6 xl:col-span-3"
              tabIndex={0}
              aria-label="Programs"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 rounded-2xl bg-highlight/10 ring-1 ring-highlight/20 p-2 sm:p-3 md:p-4 lg:p-5">
                  <Image
                    width={128}
                    height={128}
                    src="/programb.png"
                    alt="Programs"
                    className="group-hover:hidden w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                    sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
                  />
                  <Image
                    width={128}
                    height={128}
                    src="/programg.png"
                    alt="Programs (hover)"
                    className="hidden group-hover:block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                    sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-primary text-balance text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                    Programs
                  </h3>
                  <p className="mt-1 font-rajdhani text-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-[50ch]">
                    Discover well prepared programs for different goals:
                    strength, skills, hypertrophy.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* Card 2 */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 1, once: true }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 22,
                duration: 2,
                delay: 0.09,
              }}
              className="group relative overflow-hidden rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 bg-foreground ring-1 ring-highlight/15 hover:ring-action/40 shadow-sm hover:shadow-md transition-all ease-out hover:-translate-y-1 h-full min-h-[220px] lg:min-h-[240px] lg:col-span-6 xl:col-span-3"
              tabIndex={0}
              aria-label="Sessions"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 rounded-2xl bg-highlight/10 ring-1 ring-highlight/20 p-2 sm:p-3 md:p-4 lg:p-5">
                  <Image
                    width={128}
                    height={128}
                    src="/sessionb.png"
                    alt="Sessions"
                    className="group-hover:hidden w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                    sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
                  />
                  <Image
                    width={128}
                    height={128}
                    src="/sessiong.png"
                    alt="Sessions (hover)"
                    className="hidden group-hover:block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                    sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-primary text-balance text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                    Sessions
                  </h3>
                  <p className="mt-1 font-rajdhani text-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-[50ch]">
                    Build must-have calisthenics knowledge with our professional
                    sessions.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* Card 3 */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 1, once: true }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 22,
                duration: 2,
                delay: 0.14,
              }}
              className="group relative overflow-hidden rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 bg-foreground ring-1 ring-highlight/15 hover:ring-action/40 shadow-sm hover:shadow-md transition-all ease-out hover:-translate-y-1 h-full min-h-[220px] lg:min-h-[240px] lg:col-span-6 xl:col-span-3"
              tabIndex={0}
              aria-label="Challenges"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 rounded-2xl bg-highlight/10 ring-1 ring-highlight/20 p-2 sm:p-3 md:p-4 lg:p-5">
                  <Image
                    width={128}
                    height={128}
                    src="/challengesb.png"
                    alt="Challenges"
                    className="group-hover:hidden w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                    sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
                  />
                  <Image
                    width={128}
                    height={128}
                    src="/challengesg.png"
                    alt="Challenges (hover)"
                    className="hidden group-hover:block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                    sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-primary text-balance text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                    Challenges
                  </h3>
                  <p className="mt-1 font-rajdhani text-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-[50ch]">
                    Train your discipline muscle with exciting, time-bound
                    challenges.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* Card 4 */}
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 1, once: true }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 22,
                duration: 2,
                delay: 0.19,
              }}
              className="group relative overflow-hidden rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 bg-foreground ring-1 ring-highlight/15 hover:ring-action/40 shadow-sm hover:shadow-md transition-all ease-out hover:-translate-y-1 h-full min-h-[220px] lg:min-h-[240px] lg:col-span-6 xl:col-span-3"
              tabIndex={0}
              aria-label="Session Creator"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 rounded-2xl bg-highlight/10 ring-1 ring-highlight/20 p-2 sm:p-3 md:p-4 lg:p-5">
                  <Image
                    width={128}
                    height={128}
                    src="/sessionb.png"
                    alt="Session Creator"
                    className="group-hover:hidden w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                    sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
                  />
                  <Image
                    width={128}
                    height={128}
                    src="/sessiong.png"
                    alt="Session Creator (hover)"
                    className="hidden group-hover:block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                    sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-primary text-balance text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                    Session Creator
                  </h3>
                  <p className="mt-1 font-rajdhani text-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-[50ch]">
                    Customize and make training plans based on your goals.
                  </p>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </motion.section>
    </>
  );
}
