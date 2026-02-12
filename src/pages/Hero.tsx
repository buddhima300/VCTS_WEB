import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "../components/Button";

export const Hero: React.FC = () => {
  const headlineWords = "GRAPHIC DESIGNER".split(" ");

  // Explicitly typing variants to avoid easing array type inference issues
  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Fixed error by adding explicit Variants type to handle numeric ease array
  const wordVars: Variants = {
    initial: { y: 100, skewY: 7, opacity: 0 },
    animate: {
      y: 0,
      skewY: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black"
    >
      {/* Background Decor & Light Beams */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full" />

        {/* Animated Light Beams */}
        <motion.div
          animate={{
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[20%] w-[150%] h-[100px] bg-gradient-to-r from-transparent via-[#a8ff35]/10 to-transparent blur-[80px]"
          style={{ transformOrigin: "center center" }}
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[10%] w-[120%] h-[150px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-[100px]"
          style={{ transformOrigin: "center center" }}
        />

        {/* Massive Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.03] whitespace-nowrap">
          <h1 className="text-[20rem] font-black font-display leading-none">
            VCTS
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#a8ff35] animate-pulse" />
          <span className="text-sm font-medium tracking-wide uppercase">
            Available for freelance
          </span>
        </motion.div>

        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <h1 className="font-black font-display tracking-tight leading-[0.85]">
            <div className="overflow-hidden inline-block mr-[2vw]">
              <motion.span
                variants={wordVars}
                className="inline-block text-white text-6xl md:text-8xl lg:text-[9vw]"
              >
                VISION
              </motion.span>
            </div>
            <br />
            <div className="overflow-hidden inline-block">
              <motion.span
                variants={wordVars}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 text-6xl md:text-8xl lg:text-[9vw]"
              >
                CREATIVE
              </motion.span>
            </div>
            <div className="overflow-hidden inline-block">
              <motion.span
                variants={wordVars}
                className="text-3xl md:text-8xl lg:text-[5vw] inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30"
              >
                TECH SOLUTIONS
              </motion.span>
            </div>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Engineering Intelligent Solutions for a Digital-First World.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            className="w-full sm:w-auto"
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View our Work
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Us
          </Button>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};
