"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiHeart,
  FiArrowUp,
} from "react-icons/fi";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 22, duration: 0.7 },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function isValidEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("error");
      return;
    }
    // Hook up to your API here
    setStatus("success");
    setEmail("");
  };

  const scrollTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer
      id="footer"
      className="w-full bg-foreground/70 backdrop-blur-md ring-1 ring-highlight/10 border-t border-highlight/20"
      aria-labelledby="footer-title"
    >
      <div className="mx-auto w-full max-w-screen-2xl px-[5%] py-14 sm:py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand / About */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-2"
          >
            <h3
              id="footer-title"
              className="text-3xl font-black text-primary mb-3"
            >
              CaliLanding
            </h3>
            <p className="text-secondary leading-relaxed mb-6 max-w-prose">
              Transform your fitness journey with structured calisthenics
              programs, clear progress tracking, and a supportive community.
            </p>

            <ul className="flex items-center gap-4" aria-label="Social links">
              <li>
                <motion.a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center rounded-lg p-2 text-highlight hover:text-action focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <FiTwitter size={22} aria-hidden />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center rounded-lg p-2 text-highlight hover:text-action focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <FiInstagram size={22} aria-hidden />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center rounded-lg p-2 text-highlight hover:text-action focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <FiGithub size={22} aria-hidden />
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            aria-labelledby="footer-quicklinks"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4
              id="footer-quicklinks"
              className="text-lg font-bold text-primary mb-3"
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/programs"
                  className="text-secondary hover:text-action transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/workouts"
                  className="text-secondary hover:text-action transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded"
                >
                  Workouts
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-secondary hover:text-action transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-secondary hover:text-action transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </motion.nav>

          {/* Support + Newsletter */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="text-lg font-bold text-primary mb-3">Support</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <Link
                  href="/help"
                  className="text-secondary hover:text-action transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary hover:text-action transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-secondary hover:text-action transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-secondary hover:text-action transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>

            {/* Newsletter */}
            <form
              onSubmit={onSubscribe}
              className="rounded-2xl p-3 bg-foreground ring-1 ring-highlight/20"
              aria-labelledby="newsletter-title"
              noValidate
            >
              <h5
                id="newsletter-title"
                className="text-primary font-semibold mb-2"
              >
                Get training tips
              </h5>
              <div className="flex items-center gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@domain.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus("idle");
                  }}
                  className="w-full rounded-xl bg-foreground px-3 py-2 text-primary placeholder:text-secondary/60 ring-1 ring-highlight/20 focus:ring-2 focus:ring-action outline-none"
                  aria-invalid={status === "error"}
                  aria-describedby={
                    status === "error" ? "newsletter-error" : undefined
                  }
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl px-4 py-2 bg-action text-black font-black hover:bg-highlight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
                >
                  Subscribe
                </button>
              </div>
              {status === "error" && (
                <p id="newsletter-error" className="mt-2 text-xs text-action">
                  Please enter a valid email.
                </p>
              )}
              {status === "success" && (
                <p className="mt-2 text-xs text-highlight">
                  Thanks! Check your inbox to confirm.
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-highlight/20 to-transparent mb-8" />

        {/* Bottom bar */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-secondary text-sm text-center md:text-left">
            © {currentYear} CaliLanding. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-secondary text-sm">
            <span>Made with</span>
            <FiHeart className="text-action" size={16} aria-hidden />
            <span>for athletes worldwide</span>
          </div>

          <button
            type="button"
            onClick={scrollTop}
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-primary ring-1 ring-highlight/20 hover:bg-highlight/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
          >
            <FiArrowUp aria-hidden />
            Back to top
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
