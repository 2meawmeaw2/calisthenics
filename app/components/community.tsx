"use client";
import { motion, easeInOut } from "motion/react";
import { Star } from "lucide-react";
import type React from "react";

/** Simple custom Card primitives (no shadcn) */
type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-foreground/90 text-foreground shadow-lg ${className}`}
      {...props}
    />
  );
}

export function CardHeader({ className = "", ...props }: DivProps) {
  return <div className={`p-6 ${className}`} {...props} />;
}

export function CardTitle({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-lg font-normal leading-none tracking-tight ${className}`}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }: DivProps) {
  return <div className={`p-6 pt-0 ${className} `} {...props} />;
}

/**
 * Community / Animated section
 * - Polished layout with glassy card grid, animated gradient heading, and subtle parallax glows
 * - Framer Motion variants with sensible defaults + reduced-motion friendliness
 * - Accessible heading structure and semantic layout
 * - Clean Tailwind styling with lightweight custom UI primitives
 */

// Container + child variants
const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
      staggerChildren: 0.18,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeInOut },
  },
};

// Star rating (supports halves)
function StarRating({
  rating = 4.5,
  outOf = 5,
  size = 22,
}: {
  rating?: number;
  outOf?: number;
  size?: number;
}) {
  return (
    <div
      className="flex items-center justify-center gap-1"
      aria-label={`${rating} out of ${outOf} stars`}
    >
      {Array.from({ length: outOf }).map((_, idx) => {
        const progress = Math.max(0, Math.min(1, rating - idx)); // 0..1
        return (
          <div
            key={idx}
            className="relative"
            style={{ width: size, height: size }}
          >
            {/* Base outline */}
            <Star
              className="text-highlight/30"
              width={size}
              height={size}
              strokeWidth={1.5}
            />
            {/* Filled portion */}
            {progress > 0 && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${progress * 100}%` }}
              >
                <Star
                  className="text-highlight"
                  width={size}
                  height={size}
                  strokeWidth={0}
                  fill="currentColor"
                />
              </div>
            )}
          </div>
        );
      })}
      <span className="ml-2 text-sm sm:text-base text-highlight/80 font-semibold tabular-nums">
        {rating.toFixed(1)}/{outOf}
      </span>
    </div>
  );
}

// Reusable glow card wrapper
function GlowCard({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      variants={itemVariants}
      transition={{ delay }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group relative"
    >
      {/* soft glow border */}
      <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-highlight/40 via-highlight/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

      <Card className="relative h-full rounded-2xl border-highlight/40 bg-foreground/90 backdrop-blur supports-[backdrop-filter]:bg-foreground/80">
        <CardHeader className="pb-2 text-center">
          <CardTitle className="font-extralight text-primary text-xl sm:text-2xl md:text-3xl text-shadow-secondary">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 font-extralight">{children}</CardContent>
      </Card>
    </motion.div>
  );
}

export function Animated() {
  return (
    <section
      id="community"
      aria-labelledby="community-title"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* radial gradient wash */}
        <div className="absolute opacity-50 -top-24 left-1/2 h-[52rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,theme(colors.highlight/30)_0%,transparent_60%)] blur-3xl" />
        {/* subtle grid */}
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent_75%)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,theme(colors.white/7)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/7)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.07]" />
        </div>
        {/* noise overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/></svg>')]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.25, once: true }}
        className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24"
      >
        <motion.header
          variants={itemVariants}
          className="text-center max-w-4xl"
        >
          <h1
            id="community-title"
            className="font-clash leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
          >
            <span className="block text-white">We aren&apos;t alone</span>
            <span className="mt-2 inline-block bg-gradient-to-r from-highlight via-white to-highlight bg-clip-text text-transparent italic">
              We’re a community of athletes
            </span>
          </h1>

          <div className="pt-5 sm:pt-7 md:pt-8">
            <StarRating rating={4.5} />
          </div>
        </motion.header>

        {/* Cards */}
        <div className="mt-10 sm:mt-14 md:mt-16 grid w-full grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-3">
          {[
            {
              title: "Training",
              body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nobis eos aliquid, officia mollitia aspernatur aut quisquam accusamus porro repudiandae hic fugiat! Inventore soluta, incidunt facere dolorem veritatis ea eveniet.",
              delay: 0.05,
            },
            {
              title: "Coaching",
              body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nobis eos aliquid, officia mollitia aspernatur aut quisquam accusamus porro repudiandae hic fugiat! Inventore soluta, incidunt facere dolorem veritatis ea eveniet.",
              delay: 0.12,
            },
            {
              title: "Community",
              body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nobis eos aliquid, officia mollitia aspernatur aut quisquam accusamus porro repudiandae hic fugiat! Inventore soluta, incidunt facere dolorem veritatis ea eveniet.",
              delay: 0.2,
            },
          ].map((card, i) => (
            <GlowCard key={i} title={card.title} delay={card.delay}>
              <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-primary/90 font-outfit ">
                {card.body}
              </p>
            </GlowCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default function Community() {
  return <Animated />;
}
