import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center pt-6 px-6 pointer-events-none`}
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`glass rounded-full px-8 py-3.5 pointer-events-auto flex items-center gap-12 ${
          scrolled ? "shadow-2xl shadow-black/50 scale-95" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-[#a8ff35]" />
          <span className="font-display font-black tracking-tighter text-xl">
            VCTS.
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="hidden md:block text-[10px] font-black tracking-widest uppercase bg-white text-black px-5 py-2.5 rounded-full hover:bg-[#a8ff35] transition-colors"
        >
          Start Project
        </button>
      </motion.div>
    </nav>
  );
};
