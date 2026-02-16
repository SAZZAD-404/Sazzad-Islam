import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Video, Laptop, Rocket, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const MotionDiv = motion.div as any;

const services: Service[] = [
  {
    id: 'cpa-infrastructure',
    title: 'Performance Marketing & CPA Infrastructure',
    description: 'Building conversion-focused funnel systems with robust real-time tracking implementation and analytics-driven scaling logic.',
    icon: BarChart3,
    details: ['Funnel Architecture', 'Server-Side Tracking', 'Offer Optimization', 'Data Integrity']
  },
  {
    id: 'ai-automation',
    title: 'AI Video Automation Systems',
    description: 'Architecting end-to-end script-to-video pipelines. I build systems that automate storytelling, editing, and distribution for viral scale.',
    icon: Video,
    details: ['Script-to-Video Workflow', 'Shorts Automation', 'AI Storytelling', 'Monetization Pipelines']
  },
  {
    id: 'web-development',
    title: 'Scalable Web Development',
    description: 'Developing high-converting landing pages and custom performance dashboards. Speed-optimized architecture for maximum traffic retention.',
    icon: Laptop,
    details: ['Performance Dashboards', 'Tracking Integrations', 'Next.js Architecture', 'High-Convert UI']
  },
  {
    id: 'personal-brand',
    title: 'Personal Brand Growth Engineering',
    description: 'Engineering authority positioning through organic distribution strategies and optimized content monetization structures.',
    icon: Rocket,
    details: ['Authority Systems', 'Organic Distribution', 'Digital Identity', 'Monetization Strategy']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-slate-950 relative overflow-hidden">
       {/* Background Noise */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Core Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            The 4-Pillar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Growth Framework</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            I don't offer generic services. I build specific, high-leverage digital systems designed to solve complex growth and scalability problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <MotionDiv
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-10 rounded-2xl bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-900/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center mb-8 text-blue-500 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-lg">
                  <service.icon className="w-7 h-7" />
                </div>

                <h4 className="text-2xl font-bold text-white mb-4 pr-4 leading-snug">
                  {service.title}
                </h4>
                <p className="text-slate-400 mb-8 leading-relaxed text-base border-b border-white/5 pb-8">
                  {service.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-300 transition-colors font-medium">
                      <span className="w-1 h-1 rounded-full bg-blue-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;