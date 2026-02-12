
import React from 'react';
import { motion } from 'framer-motion';
import { clientLogos, testimonials } from '../data/portfolioItems';

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Mega Clients Grid like Reference */}
          <div className="lg:w-1/2">
            <h3 className="text-[#a8ff35] text-2xl font-black font-display tracking-widest uppercase mb-12">
              MEGA CLIENTS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
              {clientLogos.map((client) => (
                <div 
                  key={client.id} 
                  className="aspect-square flex items-center justify-center p-8 bg-[#0a0a0a] hover:bg-[#111] transition-colors group"
                >
                  <img 
                    src={client.logoUrl} 
                    alt={client.name} 
                    className="w-full max-w-[100px] opacity-40 group-hover:opacity-100 transition-opacity grayscale"
                  />
                </div>
              ))}
              {/* Placeholders for grid symmetry if needed */}
              <div className="aspect-square bg-[#0a0a0a]" />
              <div className="aspect-square bg-[#0a0a0a]" />
              <div className="aspect-square bg-[#0a0a0a]" />
            </div>
          </div>

          {/* Testimonials */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-gray-500 text-sm font-bold tracking-widest uppercase mb-12">WHAT THEY SAY</h3>
            <div className="space-y-12">
              {testimonials.map((t, idx) => (
                <motion.div 
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative"
                >
                  <div className="text-6xl text-[#a8ff35]/10 absolute -top-8 -left-8 font-black">"</div>
                  <p className="text-2xl md:text-3xl font-medium leading-tight mb-8 relative z-10">
                    {t.content}
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
