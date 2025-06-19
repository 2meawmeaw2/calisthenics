"use client";

import { motion } from "motion/react";
import { FiCheck } from "react-icons/fi";

export default function Pricing() {
  return (
    <div className="min-h-screen w-full  p-[5%] py-20">
      <div className="max-w-[1600px] mx-auto text-center">
        <h1 className="text-4xl md:text-6xl xl:text-[8xl] text-primary  font-black tracking-wide text-shadow-primary mb-4">
          Pricing
        </h1>
        <h3 className="text-xl md:text-2xl xl:text-[3xl] text-highlight font-medium text-shadow-primary">
          Start for free, master it with pro
        </h3>
      </div>

      <div className="max-w-[1600px] mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Free Tier */}
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ duration: 0.1, delay: 0, ease: "easeOut" }}
          className="group relative bg-foreground border border-highlight/30 hover:border-action rounded-2xl p-8 flex flex-col justify-between min-h-[600px] transition-all duration-300"
        >
          <div>
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-2">
                Free
              </h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl md:text-5xl font-black text-highlight">
                  $0
                </span>
                <span className="text-secondary ml-2">/month</span>
              </div>
              <p className="text-secondary text-sm">
                Perfect for getting started
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>Access to basic workouts</span>
              </li>
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>3 beginner programs</span>
              </li>
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>Progress tracking</span>
              </li>
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>Community access</span>
              </li>
            </ul>
          </div>

          <button className="w-full py-4 px-6 bg-highlight text-black font-black rounded-lg hover:bg-action transition-colors duration-300 flex items-center justify-center group">
            Get Started
          </button>
        </motion.div>

        {/* Pro Tier */}
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group relative bg-foreground border-2 border-action rounded-2xl p-8 flex flex-col justify-between min-h-[600px] transition-all duration-300 shadow-lg shadow-action/20"
        >
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-action text-black px-4 py-1 rounded-full text-sm font-black">
              MOST POPULAR
            </span>
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-2">
                Pro
              </h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl md:text-5xl font-black text-action">
                  $19
                </span>
                <span className="text-secondary ml-2">/month</span>
              </div>
              <p className="text-secondary text-sm">For serious athletes</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>Everything in Free</span>
              </li>
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>Unlimited programs</span>
              </li>
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>Personalized plans</span>
              </li>
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>Video tutorials</span>
              </li>
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>Priority support</span>
              </li>
            </ul>
          </div>

          <button className="w-full py-4 px-6 bg-action text-black font-black rounded-lg hover:bg-highlight transition-colors duration-300 flex items-center justify-center group">
            Start Pro Trial
          </button>
        </motion.div>

        {/* Premium Tier */}
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group relative bg-foreground border border-highlight/30 hover:border-action rounded-2xl p-8 flex flex-col justify-between min-h-[600px] transition-all duration-300"
        >
          <div>
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-2">
                Premium
              </h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl md:text-5xl font-black text-highlight">
                  $39
                </span>
                <span className="text-secondary ml-2">/month</span>
              </div>
              <p className="text-secondary text-sm">For elite performers</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>1-on-1 coaching</span>
              </li>
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>Custom programs</span>
              </li>
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>Nutrition guidance</span>
              </li>
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>Recovery tracking</span>
              </li>
              <li className="flex items-center text-primary">
                <FiCheck className="text-action mr-3 flex-shrink-0" />
                <span>24/7 support</span>
              </li>
            </ul>
          </div>

          <button className="w-full py-4 px-6 bg-highlight text-black font-black rounded-lg hover:bg-action transition-colors duration-300 flex items-center justify-center group">
            Go Premium
          </button>
        </motion.div>
      </div>
    </div>
  );
}
