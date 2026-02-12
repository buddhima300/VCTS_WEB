import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { portfolioItems } from "../data/portfolioItems";
import { Category, PortfolioItem } from "../../types";

const categories: Category[] = [
  "All",
  "Software Projects",
  "Design Works",
  "Social Media",
  "Academic Services",
  "Other",
];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="work" className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="FEATURED WORKS"
          subtitle="A collection of visual experiences, branding identities, and creative digital designs."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
                activeCategory === cat
                  ? "bg-[#a8ff35] text-black border-[#a8ff35]"
                  : "border-white/10 text-gray-500 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems
              .sort((a, b) => b.id - a.id)
              .map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden rounded-3xl glass grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <span className="text-[#a8ff35] text-xs font-bold tracking-widest uppercase mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-6xl glass rounded-[2rem] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-10 p-2 glass rounded-full hover:bg-white/10 transition-colors"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="md:w-2/3 h-[40vh] md:h-full">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/3 p-8 md:p-12 overflow-y-auto">
                <span className="text-[#a8ff35] text-sm font-bold tracking-widest uppercase mb-4 block">
                  {selectedItem.category}
                </span>
                <h2 className="text-4xl font-black font-display mb-6">
                  {selectedItem.title}
                </h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                      Project Description
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedItem.description}
                    </p>
                  </div>
                  {selectedItem.client && (
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                        Client
                      </h4>
                      <p className="text-white text-lg font-medium">
                        {selectedItem.client}
                      </p>
                    </div>
                  )}
                  <div className="pt-8">
                    <button className="w-full py-4 rounded-2xl bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                      Live Preview
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
