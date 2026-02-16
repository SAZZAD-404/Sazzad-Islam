import React from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useRef } from 'react';
import { Stat } from '../types';

const MotionDiv = motion.div as any;

const stats: Stat[] = [
  { id: 'projects', label: 'Projects Delivered', value: 45, suffix: '+', prefix: '' },
  { id: 'revenue', label: 'Revenue Generated', value: 1.2, suffix: 'M+', prefix: '$' },
  { id: 'views', label: 'Video Views Achieved', value: 2.5, suffix: 'M+', prefix: '' },
  { id: 'clients', label: 'Clients & Partners Served', value: 32, suffix: '', prefix: '' },
];

const Results: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="results" className="py-24 bg-slate-950 border-y border-white/5 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <MotionDiv
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
                  {stat.prefix}
                  {isInView ? <CountUp end={stat.value} duration={2.5} decimals={stat.value % 1 !== 0 ? 1 : 0} /> : 0}
                  {stat.suffix}
                </div>
                <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </MotionDiv>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Results;