
import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { stats } from '../data/portfolioItems';

const CountUp: React.FC<{ value: number, suffix: string }> = ({ value, suffix }) => {
  const [displayValue, setDisplayValue] = React.useState(0);
  const containerRef = React.useRef(null);
  
  React.useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setDisplayValue(end);
            clearInterval(timer);
          } else {
            setDisplayValue(Math.floor(start));
          }
        }, 16);
      }
    }, { threshold: 0.1 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={containerRef}>{displayValue}{suffix}</span>;
};

export const Stats: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-5xl md:text-6xl font-black font-display text-white mb-2 group-hover:text-[#a8ff35] transition-colors">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-500 font-bold tracking-widest text-xs uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
