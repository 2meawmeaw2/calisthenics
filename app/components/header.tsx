// components/Header.jsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
const CTA_ID = "cta";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "features", label: "Features" },
  { id: "community", label: "Community" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "F&Q" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // add subtle shadow/opacity once the user scrolls a bit
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); // set initial state on mount

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // 1) Make goTo handle "top"
  const goTo = (id: string) => {
    setOpen(false);

    if (!id || id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (history.pushState) {
        history.pushState(
          null,
          "",
          window.location.pathname + window.location.search
        ); // clear hash
      }
      return;
    }

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history.pushState) history.pushState(null, "", `#${id}`);
  };

  return (
    <header className="sticky top-0 z-[100]">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-action focus:text-black focus:px-3 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>

      <nav
        aria-label="Primary"
        className={[
          "w-full border-b backdrop-blur transition-all",
          scrolled
            ? "bg-foreground/80 border-highlight/20 shadow-sm"
            : "bg-foreground/40 border-highlight/10",
        ].join(" ")}
      >
        <div className="mx-auto max-w-screen-2xl px-[5%] md:px-[6%] lg:px-[8%] h-[4.25rem] md:h-[4.75rem] flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => goTo("top")}
            aria-label="Go to top"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action rounded-lg"
          >
            <span className="relative h-9 w-9 md:h-11 md:w-11">
              <Image
                src="/dark-nb.svg"
                alt="Brand logo"
                fill
                className="object-contain"
                priority
              />
            </span>
            <span className="hidden sm:block font-Clash text-primary text-lg md:text-xl tracking-tight">
              Steady Core
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <ul className="flex items-center gap-1 lg:gap-2">
              {SECTIONS.map((l, i) => (
                <li key={l.id}>
                  <a
                    href={i === 0 ? "#" : `#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (i === 0) {
                        goTo("top");
                      } else {
                        goTo(l.id);
                      }
                    }}
                    className="group relative px-3 py-2 lg:px-4 lg:py-2 rounded-xl text-sm md:text-[0.95rem] font-medium text-primary hover:bg-highlight/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action transition-colors"
                  >
                    <span>{l.label}</span>
                    <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-highlight/60" />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={`#${CTA_ID}`}
              onClick={(e) => {
                e.preventDefault();
                goTo(CTA_ID);
              }}
              className="ml-2 px-4 py-2 rounded-xl bg-action text-white font-black hover:bg-highlight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
            >
              Get Started
            </a>
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
        {open && (
          <div className="md:hidden border-t border-highlight/10 bg-foreground/80 backdrop-blur">
            <ul className="px-[5%] py-2 flex flex-col gap-1">
              {SECTIONS.map((l, i) => (
                <li key={l.id}>
                  <a
                    href={i === 0 ? "#" : `#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (i === 0) {
                        goTo("top");
                      } else {
                        goTo(l.id);
                      }
                    }}
                    className="block w-full px-3 py-3 rounded-lg text-primary ring-1 ring-transparent hover:bg-highlight/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              {/* ... */}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
