"use client";
import Hero from "./components/Hello";
import Intro from "./components/intro";
import Header from "./components/header";
import Community from "./components/community";
import Pricing from "./components/pricing";
import QA from "./components/qa";
import CTA from "./components/cta";
import Footer from "./components/footer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollSmoother);
export default function Home() {
  return (
    <main className="relative h-full">
      {" "}
      <Header />
      <Hero />
      <Intro />
      <Community />
      <Pricing />
      <QA />
      <CTA />
      <Footer />{" "}
    </main>
  );
}
/*


   {"community"}
      {"pricing"}
      {"Q&A"}
      {"Download"}
      {"footer"}

*/
