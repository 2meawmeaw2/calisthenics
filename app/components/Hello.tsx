"use client";
import Link from "next/link";
import {
  backOut,
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  animate,
} from "motion/react";
import { useRef, useEffect } from "react";

/**
 * Color system — pulled from your @theme CSS variables
 */
const PALETTE = {
  background: "#000405",
  foreground: "#010809",
  primary: "#f4f4f5",
  secondary: "#a1a1aa",
  highlight: "#22d3ee", // cyan accent
};

// Cycle between cyan and near-white only (green removed)
const GLOW_CYCLE = [PALETTE.highlight, PALETTE.primary];

function HeadingBlock() {
  const prefersReduced = useReducedMotion();
  const glow = useMotionValue(GLOW_CYCLE[0]);

  useEffect(() => {
    if (prefersReduced) return;
    const controls = animate(glow, GLOW_CYCLE, {
      ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    });
    return () => controls.stop();
  }, [glow, prefersReduced]);

  const cardShadow = useMotionTemplate`0 0 0 1px rgba(255,255,255,0.06), 0 10px 40px ${glow}`;
  const accentGradient = useMotionTemplate`linear-gradient(90deg, ${PALETTE.highlight}, ${PALETTE.primary}, ${PALETTE.highlight})`;

  return (
    <motion.section
      aria-labelledby="hero-title"
      style={{ boxShadow: cardShadow }}
      className="w-full max-w-[1200px] p-7 md:p-10 rounded-3xl border border-white/10 bg-[var(--color-foreground)]/90 backdrop-blur-md"
    >
      <h1
        id="hero-title"
        className="font-Clash tracking-tight text-center text-[clamp(2.25rem,6vw,5rem)] leading-[1.05] text-[var(--color-primary)]"
      >
        Master your body with{" "}
        <motion.span
          className="inline-block bg-clip-text text-transparent"
          style={{
            backgroundImage: accentGradient,
            backgroundSize: "200% 200%",
          }}
          initial={{ backgroundPositionX: "0%" }}
          animate={
            prefersReduced ? undefined : { backgroundPositionX: ["0%", "100%"] }
          }
          transition={
            prefersReduced
              ? undefined
              : {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }
          }
        >
          Calisthenics
        </motion.span>
      </h1>

      <p className="mt-4 md:mt-6 text-center font-rajdhani text-[clamp(1.05rem,2.6vw,1.6rem)] leading-relaxed text-[var(--color-secondary)] max-w-[80ch] md:max-w-[90ch] mx-auto">
        Workouts for all levels and goals. Build muscle, gain strength, and
        become who you want to be.
      </p>

      <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="#get-started"
          className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[var(--color-foreground)] font-outfit font-medium bg-[var(--color-highlight)] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-highlight)]"
        >
          Get started
          <svg
            className="size-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M7 4l6 6-6 6" />
          </svg>
        </Link>
        <Link
          href="#programs"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-outfit font-medium text-[var(--color-primary)] border border-white/15 hover:border-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-highlight)]"
        >
          Browse programs
        </Link>
      </div>

      {/* Thin accent rule (green removed) */}
      <div className="mt-8 h-px w-full bg-gradient-to-r from-[rgba(34,211,238,0.35)] via-transparent to-[rgba(34,211,238,0.35)]" />

      {/* Trust strip */}
      <ul className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs md:text-sm text-[var(--color-secondary)]">
        <li className="rounded-xl border border-white/10 px-3 py-2">
          No equipment required
        </li>
        <li className="rounded-xl border border-white/10 px-3 py-2">
          Beginner → Advanced plans
        </li>
        <li className="rounded-xl border border-white/10 px-3 py-2">
          Video form cues
        </li>
        <li className="rounded-xl border border-white/10 px-3 py-2">
          Progress tracking
        </li>
      </ul>
    </motion.section>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start start"],
  });
  useMotionValueEvent(scrollYProgress, "change", () => {});

  const opacity = useTransform(scrollYProgress, [1, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [1, 0.85], [0, -120]);
  const opacityBkg = useTransform(scrollYProgress, [1, 0.5], [1, 0]);

  // Animated background glow (green removed)
  const glow = useMotionValue(GLOW_CYCLE[0]);

  useEffect(() => {
    if (prefersReduced) return;
    const a2 = animate(glow, GLOW_CYCLE, {
      ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    });
    return () => {
      a2.stop();
    };
  }, [glow, prefersReduced]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${PALETTE.background} 0%, ${PALETTE.foreground} 45%, ${glow} 100%)`;

  return (
    <div className="relative w-full min-h-[100svh] overflow-hidden" ref={ref}>
      {/* Animated background */}
      <motion.div
        aria-hidden
        style={{ backgroundImage, opacity: opacityBkg }}
        className="fixed inset-0 -z-10"
      />

      {/* Content only */}
      <motion.div
        style={prefersReduced ? undefined : { opacity, y }}
        className="mx-auto flex min-h-[100svh] w-full max-w-[1600px] items-center justify-center px-4 md:px-8"
      >
        <div className="w-full px-2 md:px-6 flex items-center justify-center">
          <HeadingBlock />
        </div>
      </motion.div>
    </div>
  );
}
