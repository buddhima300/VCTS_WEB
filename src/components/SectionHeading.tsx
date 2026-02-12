import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = "left",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${align === "center" ? "text-left" : ""}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`h-1 w-20 bg-[#a8ff35] mt-6 ${align === "center" ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
};
