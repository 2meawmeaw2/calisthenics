"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowRight, FiDownload, FiStar, FiCheck } from "react-icons/fi";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 22, duration: 0.8 },
  },
};

const item = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 22,
      duration: 0.7,
      delay,
    },
  },
});

export default function CTA() {
  return (
    <motion.section
      id="cta"
      aria-labelledby="cta-title"
      className="relative w-full py-12 sm:py-16 lg:py-20 mb-12 sm:mb-20 md:mb-28"
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3, once: true }}
    >
      {/* Decorative background orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 -left-20 h-60 w-60 rounded-full bg-action/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-highlight/10 blur-3xl" />
      </div>

      <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Header card */}
        <motion.header
          variants={container}
          className="rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xs shadow-highlight bg-foreground/60 backdrop-blur-sm ring-1 ring-highlight/10"
        >
          <p className="uppercase tracking-wide text-xs sm:text-sm text-secondary/80 mb-1">
            Take the next step
          </p>
          <h1
            id="cta-title"
            className="text-highlight text-[clamp(2.2rem,6vw,5rem)] leading-[1.05] font-Clash tracking-tight font-medium italic"
          >
            Ready to Transform
          </h1>
          <h2 className="text-primary/90 font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-2">
            Your Fitness Journey?
          </h2>
          <p className="font-rajdhani text-secondary max-w-[70ch] mx-auto text-sm sm:text-base md:text-lg leading-relaxed mt-3">
            Join thousands of athletes mastering calisthenics skills. Build real
            strength with structured programs, clear progress, and pro guidance.
          </p>

          {/* Benefit bullets */}
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-left max-w-4xl mx-auto">
            {[
              "No equipment required to start",
              "Science-backed progressions",
              "Cancel anytime—no hassle",
            ].map((b, i) => (
              <li key={b} className="flex items-start gap-2 sm:gap-3">
                <FiCheck aria-hidden className="mt-0.5 text-action shrink-0" />
                <span className="text-primary text-sm sm:text-base">{b}</span>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-highlight/20 to-transparent" />
        </motion.header>

        {/* CTAs */}
        <div className="mt-8 sm:mt-12 flex flex-col md:flex-row gap-4 sm:gap-6 justify-center items-center">
          <motion.div variants={item(0.05)}>
            <Link
              href="/get-started"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl px-8 sm:px-10 py-4 sm:py-5 bg-action text-black font-black text-base sm:text-lg ring-1 ring-black/10 hover:bg-highlight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
              aria-describedby="cta-note"
            >
              Start Free Trial
              <FiArrowRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
                size={22}
              />
            </Link>
          </motion.div>

          <motion.div variants={item(0.1)}>
            <Link
              href="/download"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl px-8 sm:px-10 py-4 sm:py-5 bg-transparent text-highlight font-black text-base sm:text-lg ring-2 ring-highlight hover:bg-highlight hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
            >
              <FiDownload aria-hidden="true" size={22} />
              Download App
            </Link>
          </motion.div>
        </div>

        {/* Helper note */}
        <p id="cta-note" className="mt-3 text-xs sm:text-sm text-secondary/80">
          7-day free trial. No credit card required to start.
        </p>

        {/* Stats / social proof */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <motion.div
            variants={item(0.15)}
            whileHover={{ y: -3 }}
            className="rounded-2xl p-6 sm:p-8 text-center bg-foreground ring-1 ring-highlight/15"
          >
            <div className="flex justify-center mb-3">
              <FiStar aria-hidden className="text-action" size={28} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-highlight">
              4.9/5
            </h3>
            <p className="text-secondary text-sm sm:text-base">
              Average rating
            </p>
          </motion.div>

          <motion.div
            variants={item(0.18)}
            whileHover={{ y: -3 }}
            className="rounded-2xl p-6 sm:p-8 text-center bg-foreground ring-1 ring-highlight/15"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-highlight">
              50K+
            </h3>
            <p className="text-secondary text-sm sm:text-base">
              Active Athletes
            </p>
          </motion.div>

          <motion.div
            variants={item(0.21)}
            whileHover={{ y: -3 }}
            className="rounded-2xl p-6 sm:p-8 text-center bg-foreground ring-1 ring-highlight/15"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-highlight">
              200+
            </h3>
            <p className="text-secondary text-sm sm:text-base">
              Workout Programs
            </p>
          </motion.div>
        </div>

        {/* Urgency banner */}
        <motion.div
          variants={item(0.26)}
          role="status"
          aria-live="polite"
          className="mt-10 sm:mt-12 max-w-2xl mx-auto"
        >
          <div className="relative rounded-2xl p-4 sm:p-6 bg-highlight/10 ring-1 ring-highlight/30">
            <p className="text-highlight font-semibold text-sm sm:text-base">
              🎯 Limited Time: Get <span className="font-black">50% off</span>{" "}
              your first month when you start today!
            </p>
            {/* subtle animated underline */}
            <span
              aria-hidden
              className="absolute left-4 right-4 bottom-3 h-px bg-gradient-to-r from-transparent via-action/40 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
