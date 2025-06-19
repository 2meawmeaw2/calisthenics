"use client";

import { motion } from "motion/react";
import {
  FiGithub,
  FiTwitter,
  FiInstagram,
 
  FiHeart,
} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-foreground border-t border-highlight/20">
      <div className="max-w-[1600px] mx-auto p-[5%] py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="text-3xl font-black text-primary mb-4">
              CaliLanding
            </h3>
            <p className="text-secondary text-lg leading-relaxed mb-6">
              Transform your fitness journey with our comprehensive calisthenics
              platform. Build strength, master skills, and join a community of
              dedicated athletes.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-highlight hover:text-action transition-colors duration-200"
              >
                <FiTwitter size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-highlight hover:text-action transition-colors duration-200"
              >
                <FiInstagram size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-highlight hover:text-action transition-colors duration-200"
              >
                <FiGithub size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-action transition-colors duration-200"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-action transition-colors duration-200"
                >
                  Workouts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-action transition-colors duration-200"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-action transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-primary mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-action transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-action transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-action transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-action transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-highlight/20 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-secondary text-sm mb-4 md:mb-0">
            © {currentYear} CaliLanding. All rights reserved.
          </p>
          <div className="flex items-center text-secondary text-sm">
            <span>Made with</span>
            <FiHeart className="mx-2 text-action" size={16} />
            <span>for athletes worldwide</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
