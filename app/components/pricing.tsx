"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FiCheck } from "react-icons/fi";

type BillingCycle = "monthly" | "yearly";

const container = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 22, duration: 0.8 },
  },
};

const card = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 22,
      duration: 0.9,
      delay,
    },
  },
});

const featuresVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
  },
};

const featureItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

const PLANS = [
  {
    id: "free",
    name: "Free",
    blurb: "Perfect for getting started",
    priceMonthly: 0,
    priceYearly: 0,
    cta: "Get Started",
    highlighted: false,
    borderClass: "border-highlight/30 hover:border-action",
    shadowClass: "shadow-sm hover:shadow-md",
    features: [
      "Access to basic workouts",
      "3 beginner programs",
      "Progress tracking",
      "Community access",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    blurb: "For serious athletes",
    priceMonthly: 19,
    priceYearly: 190, // ~2 months free
    cta: "Start Pro Trial",
    highlighted: true,
    badge: "MOST POPULAR",
    borderClass: "border-2 border-action",
    shadowClass: "shadow-lg shadow-action/20",
    features: [
      "Everything in Free",
      "Unlimited programs",
      "Advanced analytics",
      "Personalized plans",
      "Video tutorials",
      "Priority support",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    blurb: "For elite performers",
    priceMonthly: 39,
    priceYearly: 390, // ~2 months free
    cta: "Go Premium",
    highlighted: false,
    borderClass: "border-highlight/30 hover:border-action",
    shadowClass: "shadow-sm hover:shadow-md",
    features: [
      "Everything in Pro",
      "1-on-1 coaching",
      "Custom programs",
      "Nutrition guidance",
      "Recovery tracking",
      "24/7 support",
    ],
  },
] as const;

export default function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  return (
    <motion.section
      id="pricing"
      aria-labelledby="pricing-title"
      className="w-full py-12 sm:py-16 lg:py-20 mb-12 sm:mb-20 md:mb-28 relative"
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.3, once: true }}
    >
      <div className="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          variants={container}
          className="rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xs shadow-highlight bg-foreground/60 backdrop-blur-sm ring-1 ring-highlight/10"
        >
          <p className="uppercase tracking-wide text-xs sm:text-sm text-secondary/80 text-center mb-1 sm:mb-2">
            Plans & Pricing
          </p>
          <h1
            id="pricing-title"
            className="text-highlight text-[clamp(2.2rem,6vw,5rem)] leading-[1.05] font-Clash tracking-tight text-center font-medium italic"
          >
            Pricing
          </h1>
          <h2
            id="pricing-subtitle"
            className="text-primary/90 text-center font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl mt-2 sm:mt-3"
          >
            Start for free, master it with Pro
          </h2>
          <p className="font-rajdhani text-center text-secondary max-w-[65ch] mx-auto text-sm sm:text-base md:text-lg leading-relaxed mt-2">
            Simple tiers that grow with your training.
          </p>

          {/* Billing toggle */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span
              className={`text-sm sm:text-base ${
                billing === "monthly" ? "text-primary" : "text-secondary/70"
              }`}
            >
              Monthly
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={billing === "yearly"}
              aria-label="Toggle billing period"
              onClick={() =>
                setBilling((b) => (b === "monthly" ? "yearly" : "monthly"))
              }
              className="relative inline-flex h-9 w-16 items-center rounded-full bg-highlight/20 ring-1 ring-highlight/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
            >
              <motion.span
                layout
                className={`inline-block h-7 w-7 rounded-full bg-action shadow-md translate-x-1`}
                animate={{ x: billing === "yearly" ? 36 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span
              className={`text-sm sm:text-base ${
                billing === "yearly" ? "text-primary" : "text-secondary/70"
              }`}
            >
              Yearly
            </span>
            <span className="ml-2 text-xs sm:text-sm text-action/90 bg-action/10 ring-1 ring-action/20 rounded-full px-2 py-0.5">
              Save ~2 months
            </span>
          </div>

          {/* divider */}
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-highlight/20 to-transparent" />
        </motion.header>

        {/* Cards */}
        <div className="mt-8 sm:mt-12 grid items-stretch grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 2xl:gap-10">
          {PLANS.map((plan, idx) => {
            const isYearly = billing === "yearly";
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;
            const per = isYearly ? "year" : "month";

            return (
              <motion.article
                key={plan.id}
                variants={card(0.04 + idx * 0.05)}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                tabIndex={0}
                aria-labelledby={`${plan.id}-title`}
                className={[
                  "group relative overflow-hidden rounded-2xl p-6 sm:p-7 md:p-8 bg-foreground",
                  "ring-1",
                  plan.highlighted
                    ? "ring-action"
                    : "ring-highlight/15 hover:ring-action/40",
                  plan.shadowClass,
                  "transition-all ease-out focus-within:ring-action h-full",
                ].join(" ")}
              >
                {/* Popular badge */}
                {plan.highlighted && plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-action text-black px-3 py-1 rounded-full text-xs font-black ring-1 ring-black/10">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3
                    id={`${plan.id}-title`}
                    className="text-primary font-Clash text-2xl sm:text-3xl font-normal tracking-tight"
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <motion.span
                      key={`${plan.id}-${billing}-price`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`text-4xl md:text-5xl font-black ${
                        plan.highlighted ? "text-action" : "text-highlight"
                      }`}
                    >
                      ${price}
                    </motion.span>
                    <span className="text-secondary">/{per}</span>
                  </div>
                  <p className="text-secondary text-sm mt-1">{plan.blurb}</p>
                </div>

                {/* Features */}
                <motion.ul
                  role="list"
                  variants={featuresVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.6 }}
                  className="space-y-3 sm:space-y-4 mb-8"
                >
                  {plan.features.map((f) => (
                    <motion.li
                      key={`${plan.id}-${f}`}
                      variants={featureItem}
                      className="flex items-start gap-3 text-primary"
                    >
                      <FiCheck
                        aria-hidden="true"
                        className="mt-0.5 text-action flex-shrink-0"
                      />
                      <span className="leading-relaxed">{f}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA */}
                <div className="mt-auto">
                  <button
                    className={[
                      "w-full py-3.5 px-6 rounded-lg font-black transition-colors duration-300",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action",
                      plan.highlighted
                        ? "bg-action text-black hover:bg-highlight"
                        : "bg-highlight text-black hover:bg-action",
                    ].join(" ")}
                    aria-label={`${plan.cta} - ${plan.name} plan (${billing})`}
                  >
                    {plan.cta}
                  </button>

                  {/* Secondary helper text for yearly breakdown */}
                  {billing === "yearly" && plan.priceYearly > 0 && (
                    <p className="mt-2 text-xs text-secondary/80 text-center">
                      That’s ${(plan.priceYearly / 12).toFixed(2)}/month when
                      billed annually.
                    </p>
                  )}
                </div>

                {/* Decorative bottom gradient */}
                <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-t from-action/10 via-transparent to-transparent" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
