// components/Header.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";

const navVariants = {
  hidden: { opacity: 0, y: 110 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 22,
      duration: 0.8,
      delay: 0.2,
    },
  },
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/workouts", label: "Workouts" },
      { href: "/about", label: "About" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Lock body scroll when menu open
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-action focus:text-black focus:px-3 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>

      <motion.nav
        initial="hidden"
        animate="show"
        variants={navVariants}
        aria-label="Primary"
        className={[
          "sticky top-0 z-[100] h-[4.25rem] md:h-[4.75rem] w-full",
          "backdrop-blur-md transition-all",
          "border-b",
          scrolled
            ? "bg-foreground/70 border-highlight/20"
            : "bg-foreground/40 border-highlight/10",
        ].join(" ")}
      >
        <div className="mx-auto max-w-screen-2xl px-[5%] md:px-[6%] lg:px-[8%] h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Go to home"
            className="flex items-center gap-3"
          >
            <div className="relative h-9 w-9 md:h-11 md:w-11">
              <Image
                src="/dark-nb.svg"
                alt="Brand logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:block font-Clash text-primary text-lg md:text-xl tracking-tight">
              Steady Core
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <ul className="flex items-center gap-1 lg:gap-2">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href} className="relative">
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "px-3 py-2 lg:px-4 lg:py-2 rounded-xl text-sm md:text-[0.95rem] font-medium",
                        "text-primary hover:bg-highlight/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action",
                        "transition-colors motion-reduce:transition-none",
                      ].join(" ")}
                    >
                      <span className="relative z-10">{l.label}</span>
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-xl bg-highlight/20 ring-1 ring-highlight/30"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 40,
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/get-started"
              className="ml-2 px-4 py-2 rounded-xl bg-action text-black font-black hover:bg-highlight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile: burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 ring-1 ring-highlight/20 hover:bg-highlight/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
          >
            {open ? (
              <FiX className="text-primary" size={22} />
            ) : (
              <FiMenu className="text-primary" size={22} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.25 },
                opacity: { duration: 0.2 },
              }}
              className="md:hidden overflow-hidden border-t border-highlight/10 bg-foreground/80 backdrop-blur-md"
            >
              <div className="px-[5%] pb-4 pt-2">
                <ul className="flex flex-col gap-1">
                  {links.map((l) => {
                    const active = pathname === l.href;
                    return (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className={[
                            "block w-full px-3 py-3 rounded-lg text-primary",
                            "hover:bg-highlight/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action",
                            active
                              ? "bg-highlight/15 ring-1 ring-highlight/25"
                              : "ring-1 ring-transparent",
                          ].join(" ")}
                          aria-current={active ? "page" : undefined}
                        >
                          {l.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <Link
                  href="/get-started"
                  className="mt-3 inline-flex w-full items-center justify-center px-4 py-3 rounded-lg bg-action text-black font-black hover:bg-highlight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
