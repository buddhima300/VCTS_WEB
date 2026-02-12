import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

const skills = [
  "Web Development",
  "Mobile App Development",
  "Automation Tools",
  "Logo Design",
  "Social Media Posts",
  "Flyer & Poster Design",
  "Book Covers",
  "UI/UX Design",
  "Animation & Motion Graphics",
  "Architectural Visualization",
  "Video Editing",
  "Academic Services (Research,Thesis,Case Studies,Assignment Help)",
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Creative DNA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <path
                    d="M10 50 Q 50 10 90 50 T 10 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-[#a8ff35]">ABOUT</span> US
              </h3>

              <div className="space-y-6 mb-10">
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-black text-[#a8ff35]">
                    25+
                  </span>
                  <span className="text-xl text-gray-400">Projects.</span>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-black text-[#a8ff35]">5+</span>
                  <span className="text-xl text-gray-400">
                    Years Experience.
                  </span>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xl text-white font-medium italic">
                    "Transforming Vision into Technology"
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg text-justify">
                Vision Creative Tech Solutions (VCTS) is a global digital
                services and software development startup dedicated to
                delivering intelligent, scalable, and results-driven solutions.
                We specialise in custom software development, AI-powered
                systems, business automation, and enterprise-grade digital
                transformation.
              </p>
            </div>
          </motion.div>

          {/* Middle: Portrait Placeholder & Accents */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col items-center justify-center relative"
          >
            <div className="relative w-full max-w-[400px] aspect-[2/4] rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <img
                src="https://i.pinimg.com/736x/9d/57/f3/9d57f3c4af60f5743c358460c50f061c.jpg"
                alt="Designer Portrait"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Green Arrow Accent like in Reference */}
            <div className="absolute -top-10 -right-10 text-[#a8ff35] rotate-12 hidden lg:block">
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                <path
                  d="M20 60 Q 60 10 100 60"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M100 60 L 90 45 M 100 60 L 80 55"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Right Column: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h4 className="text-[#a8ff35] font-bold text-sm tracking-widest uppercase mb-6">
              OUR SERVICES
            </h4>
            <div className="space-y-3">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="group flex items-center justify-between py-2 border-b border-white/5 hover:border-[#a8ff35]/30 transition-colors"
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#a8ff35] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
