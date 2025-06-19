"use client";

import { motion } from "motion/react";
import { FiArrowRight, FiDownload, FiStar } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="min-h-screen w-full bg-foreground p-[5%] py-20">
      <div className="max-w-[1600px] mx-auto text-center">
        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl xl:text-[8xl] text-primary font-black tracking-wide text-shadow-primary mb-6">
            Ready to Transform
          </h1>
          <h2 className="text-2xl md:text-4xl xl:text-[5xl] text-highlight font-bold text-shadow-primary mb-8">
            Your Fitness Journey?
          </h2>
          <p className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed mb-12">
            Join thousands of athletes who have already mastered calisthenics
            skills. Start your journey today and build the strength you&apos;ve
            always wanted.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-action text-black font-black text-xl px-12 py-6 rounded-2xl hover:bg-highlight transition-all duration-300 flex items-center gap-3 shadow-lg shadow-action/30"
          >
            Start Free Trial
            <FiArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={24}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-transparent border-2 border-highlight text-highlight font-black text-xl px-12 py-6 rounded-2xl hover:bg-highlight hover:text-black transition-all duration-300 flex items-center gap-3"
          >
            <FiDownload size={24} />
            Download App
          </motion.button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-foreground border border-highlight/30 rounded-2xl p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <FiStar className="text-action" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">4.9/5</h3>
            <p className="text-secondary">App Store Rating</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-foreground border border-highlight/30 rounded-2xl p-8 text-center"
          >
            <h3 className="text-3xl font-black text-highlight mb-2">50K+</h3>
            <p className="text-secondary">Active Athletes</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-foreground border border-highlight/30 rounded-2xl p-8 text-center"
          >
            <h3 className="text-3xl font-black text-highlight mb-2">200+</h3>
            <p className="text-secondary">Workout Programs</p>
          </motion.div>
        </motion.div>

        {/* Urgency Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-6 bg-highlight/10 border border-highlight/30 rounded-2xl max-w-2xl mx-auto"
        >
          <p className="text-highlight font-semibold text-lg">
            🎯 Limited Time: Get 50% off your first month when you start today!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
