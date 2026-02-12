import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { blogPosts } from "../data/portfolioItems";
import { BlogPost } from "../../types";

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="insights" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            title="LATEST INSIGHTS"
            subtitle="Exploring the intersection of technology, psychology, and design."
          />
          <button className="px-8 py-3 rounded-full border border-white/10 text-sm font-bold hover:bg-white hover:text-black transition-all mb-12">
            View All Articles
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 relative">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#a8ff35] text-black text-[10px] font-black uppercase tracking-tighter px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-bold uppercase tracking-widest">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>{post.readTime} Read</span>
              </div>
              <h3 className="text-2xl font-bold group-hover:text-[#a8ff35] transition-colors leading-snug">
                {post.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Dedicated Insight Page Overlay */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-3xl overflow-y-auto"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 100 }}
              className="min-h-screen bg-[#050505] relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="fixed top-8 right-8 z-[210] p-4 glass rounded-full hover:bg-white/10 transition-colors group"
              >
                <svg
                  className="w-6 h-6 group-hover:rotate-90 transition-transform"
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

              <div className="max-w-4xl mx-auto px-6 py-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-[#a8ff35] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                    {selectedPost.category} — {selectedPost.readTime}
                  </span>
                  <h1 className="text-5xl md:text-7xl font-black font-display leading-[0.9] mb-12">
                    {selectedPost.title}
                  </h1>

                  <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl">
                    <img
                      src={selectedPost.thumbnail}
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="prose prose-invert prose-2xl max-w-none text-gray-300 leading-relaxed space-y-8">
                    <p className="text-3xl font-light italic text-white/90 border-l-4 border-[#a8ff35] pl-8 py-2">
                      {selectedPost.content.substring(0, 150)}...
                    </p>
                    <p>{selectedPost.content}</p>
                  </div>

                  <div className="mt-20 pt-12 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#a8ff35] flex items-center justify-center font-black text-black">
                        BC
                      </div>
                      <div>
                        <p className="font-bold text-white">
                          Buddhima Chathuranga
                        </p>
                        <p className="text-sm text-gray-500">Founder of VCTS</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-[#a8ff35] font-bold group">
                      Share Article
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
