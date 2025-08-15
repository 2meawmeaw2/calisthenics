"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
type HeaderRefs = Record<string, HTMLButtonElement | null>;

type FaqItem = { question: string; answer: string };

const container = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 22, duration: 0.8 },
  },
};

const row = (delay = 0) => ({
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

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

export default function QA() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const headerRefs = useRef<HeaderRefs>({});

  const faqData: FaqItem[] = [
    {
      question: "Question 1 Placeholder",
      answer:
        "Answer 1 placeholder text goes here. This is where the detailed answer to the question would appear.",
    },
    {
      question: "Question 2 Placeholder",
      answer:
        "Answer 2 placeholder text goes here. This is where the detailed answer to the question would appear.",
    },
    {
      question: "Question 3 Placeholder",
      answer:
        "Answer 3 placeholder text goes here. This is where the detailed answer to the question would appear.",
    },
  ];

  // Build IDs once per item
  const itemsWithIds = useMemo(
    () =>
      faqData.map((it) => ({
        ...it,
        id: `q-${slugify(it.question)}`,
      })),
    [faqData]
  );

  // Filter by search query
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return itemsWithIds;
    return itemsWithIds.filter(
      (i) =>
        i.question.toLowerCase().includes(q) ||
        i.answer.toLowerCase().includes(q)
    );
  }, [itemsWithIds, query]);

  // Open by URL hash on mount & when hash changes
  useEffect(() => {
    const openFromHash = () => {
      const hash = decodeURIComponent(window.location.hash.replace("#", ""));
      if (!hash) return;
      const found = itemsWithIds.find((i) => i.id === hash);
      if (found) {
        setOpenId(found.id);
        // Scroll to it (polite)
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [itemsWithIds]);

  const toggle = (id: string) => {
    const next = openId === id ? null : id;
    setOpenId(next);
    // Update URL hash for deep linking (no page jump)
    history.replaceState(null, "", next ? `#${id}` : " ");
  };

  // Keyboard navigation across headings
  const handleKeyNav = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    idx: number
  ) => {
    const ids = filtered.map((f) => f.id);
    const focusByIndex = (i: number) => {
      const targetId = ids[i];
      const el = headerRefs.current[targetId];
      el?.focus();
    };

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        focusByIndex((idx + 1) % ids.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        focusByIndex((idx - 1 + ids.length) % ids.length);
        break;
      case "Home":
        e.preventDefault();
        focusByIndex(0);
        break;
      case "End":
        e.preventDefault();
        focusByIndex(ids.length - 1);
        break;
      default:
        break;
    }
  };

  // JSON-LD for SEO (use full dataset, not filtered)
  const faqJsonLd = useMemo(
    () =>
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: itemsWithIds.map((i) => ({
          "@type": "Question",
          name: i.question,
          acceptedAnswer: { "@type": "Answer", text: i.answer },
        })),
      }),
    [itemsWithIds]
  );

  return (
    <motion.section
      id="faq"
      aria-labelledby="faq-title"
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
            Q&amp;A
          </p>
          <h1
            id="faq-title"
            className="text-highlight text-[clamp(2.2rem,6vw,5rem)] leading-[1.05] font-Clash tracking-tight text-center font-medium italic"
          >
            Frequently Asked Questions
          </h1>
          <p className="font-rajdhani text-center text-secondary max-w-[65ch] mx-auto text-sm sm:text-base md:text-lg leading-relaxed mt-2">
            Answers to common questions. Click a question or press Enter/Space
            to toggle, and use ↑ ↓ to navigate.
          </p>

          {/* Search */}
          <div className="mt-6 max-w-xl mx-auto">
            <label htmlFor="faq-search" className="sr-only">
              Search FAQs
            </label>
            <div className="relative">
              <FiSearch
                aria-hidden="true"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/70"
              />
              <input
                id="faq-search"
                type="search"
                placeholder="Search questions…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-foreground ring-1 ring-highlight/20 focus:ring-2 focus:ring-action outline-none text-primary placeholder:text-secondary/60"
                autoComplete="off"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-highlight/20 to-transparent" />
        </motion.header>

        {/* List */}
        <div
          className="mt-8 sm:mt-12 space-y-4"
          role="region"
          aria-label="FAQ accordion"
        >
          {filtered.length === 0 ? (
            <motion.div
              variants={row(0.05)}
              className="rounded-2xl p-8 text-center ring-1 ring-highlight/15 bg-foreground text-secondary"
            >
              No questions match “{query}”.
            </motion.div>
          ) : (
            filtered.map((item, index) => {
              const isOpen = openId === item.id;
              const panelId = `${item.id}-panel`;
              const buttonId = `${item.id}-button`;

              return (
                <motion.div
                  key={item.id}
                  variants={row(0.04 + index * 0.04)}
                  className="bg-foreground ring-1 ring-highlight/15 rounded-2xl overflow-hidden focus-within:ring-action"
                >
                  <motion.button
                    id={buttonId}
                    ref={(el: HTMLButtonElement | null) => {
                      headerRefs.current[item.id] = el;
                    }}
                    onClick={() => toggle(item.id)}
                    onKeyDown={(e) => handleKeyNav(e, index)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex justify-between items-center hover:bg-highlight/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-action"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-primary">
                      {item.question}
                    </h3>
                    <motion.span
                      aria-hidden="true"
                      className="text-highlight shrink-0"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <FiChevronDown size={22} />
                    </motion.span>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: 0.35, ease: "easeInOut" },
                            opacity: { duration: 0.25, ease: "easeInOut" },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3, ease: "easeInOut" },
                            opacity: { duration: 0.2, ease: "easeInOut" },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -12, opacity: 0 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.28, delay: 0.08 },
                          }}
                          exit={{
                            y: -12,
                            opacity: 0,
                            transition: { duration: 0.2 },
                          }}
                          className="px-6 sm:px-8 pb-6 sm:pb-8"
                        >
                          <p className="text-secondary text-sm sm:text-base lg:text-lg leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>
      </div>

      {/* SEO: FAQPage JSON-LD (safe to hydrate as static) */}
    </motion.section>
  );
}
