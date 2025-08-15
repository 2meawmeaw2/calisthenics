// components/Header.jsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
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

// Configure your 7 communities (ids must match section ids on the page)
const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "programs", label: "Features" },
  { id: "programs", label: "Community" },
  { id: "programs", label: "Pricing" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const navWrapRef = useRef<HTMLDivElement | null>(null);
  const [navHeight, setNavHeight] = useState<number>(76);

  // measure sticky header height for offset
  useEffect(() => {
    const measure = () => {
      const h = navWrapRef.current?.offsetHeight ?? 76;
      setNavHeight(h);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (navWrapRef.current) ro.observe(navWrapRef.current);
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // sticky state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Smooth scroll to a section with header offset
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - (navHeight + 8);
    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
    setOpen(false);
  };

  // Observe sections to update activeId
  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[];
    if (!targets.length) return;

    let ticking = false;
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0)
          );
        if (visible[0]) {
          const id = visible[0].target.id;
          if (!ticking) {
            ticking = true;
            requestAnimationFrame(() => {
              setActiveId(id);
              ticking = false;
            });
          }
        }
      },
      {
        // top margin accounts for sticky header
        root: null,
        rootMargin: `-${navHeight + 12}px 0px -50% 0px`,
        threshold: [0.25, 0.5, 0.75, 1],
      }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [navHeight]);

  // Open the section in URL hash on load
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace("#", ""));
    if (hash) {
      // small delay so navHeight is measured
      setTimeout(() => scrollTo(hash), 60);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const desktopLinks = useMemo(() => SECTIONS, []);
  const mobileLinks = useMemo(() => SECTIONS, []);

  return (
    <>
      {/* Skip link */}
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
          "sticky top-0 z-[100] w-full",
          "backdrop-blur-md transition-all",
          "border-b",
          scrolled
            ? "bg-foreground/70 border-highlight/20"
            : "bg-foreground/40 border-highlight/10",
        ].join(" ")}
        ref={navWrapRef}
      >
        <div className="mx-auto max-w-screen-2xl px-[5%] md:px-[6%] lg:px-[8%] h-[4.25rem] md:h-[4.75rem] flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo(SECTIONS[0].id)}
            aria-label="Go to top"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded-lg"
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
          </button>

          {/* Desktop nav (sections) */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <ul className="flex items-center gap-1 lg:gap-2">
              {desktopLinks.map((l) => {
                const active = activeId === l.id;
                return (
                  <li key={l.id} className="relative">
                    <button
                      type="button"
                      onClick={() => scrollTo(l.id)}
                      aria-current={active ? "location" : undefined}
                      className={[
                        "px-3 py-2 lg:px-4 lg:py-2 rounded-xl text-sm md:text-[0.95rem] font-medium",
                        "text-primary hover:bg-highlight/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action",
                        "transition-colors motion-reduce:transition-none relative",
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
                    </button>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={() => scrollTo(SECTIONS[0].id)}
              className="ml-2 px-4 py-2 rounded-xl bg-action text-black font-black hover:bg-highlight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
            >
              Get Started
            </button>
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
                  {mobileLinks.map((l) => {
                    const active = activeId === l.id;
                    return (
                      <li key={l.id}>
                        <button
                          type="button"
                          onClick={() => scrollTo(l.id)}
                          className={[
                            "block w-full text-left px-3 py-3 rounded-lg text-primary",
                            "hover:bg-highlight/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action",
                            active
                              ? "bg-highlight/15 ring-1 ring-highlight/25"
                              : "ring-1 ring-transparent",
                          ].join(" ")}
                          aria-current={active ? "location" : undefined}
                        >
                          {l.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <button
                  type="button"
                  onClick={() => scrollTo(SECTIONS[0].id)}
                  className="mt-3 inline-flex w-full items-center justify-center px-4 py-3 rounded-lg bg-action text-black font-black hover:bg-highlight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
