import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { processSteps } from "../data/portfolioItems";

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="How We Deliver Every Project"
          subtitle="At Vision Creative Tech Solutions, every project whether academic, technical, or enterprise-level follows a structured and results-driven methodology. Our proven 4-step approach ensures clarity, quality, and measurable outcomes."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group p-8 glass rounded-[2.5rem] hover:bg-[#a8ff35]/5 transition-all duration-500 border-white/5"
            >
              <div className="mb-8">
                <span
                  className="text-5xl font-black font-display text-transparent stroke-white/20"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
                >
                  {step.number}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#a8ff35] transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>

              <div className="mt-8 h-1 w-0 group-hover:w-full bg-[#a8ff35] transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" />
    </section>
  );
};
