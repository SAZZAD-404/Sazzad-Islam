import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Database, Zap } from 'lucide-react';

const MotionDiv = motion.div as any;

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Strategic Profile</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              I Don't Just Launch Campaigns. <br/>
              <span className="text-slate-500">I Engineer Revenue Engines.</span>
            </h3>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                With over <strong className="text-white">2+ years of specialized experience</strong> in the high-stakes world of CPA networks and digital ecosystems, my role transcends traditional marketing. I am a <strong>System Builder</strong> and <strong>Growth Engineer</strong>.
              </p>
              <p>
                My expertise lies in architecting end-to-end digital infrastructures—from custom-coded tracking dashboards that ensure data integrity to automated AI video pipelines that scale content production without human bottlenecks.
              </p>
              <p className="border-l-2 border-white/10 pl-6 italic text-slate-500">
                "My mission is to replace manual grind with scalable, automated code and strategy."
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
               <span className="px-4 py-2 bg-blue-900/20 border border-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                 CPA Systems
               </span>
               <span className="px-4 py-2 bg-blue-900/20 border border-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                 Python Automation
               </span>
               <span className="px-4 py-2 bg-blue-900/20 border border-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                 Full-Stack Dev
               </span>
            </div>
          </MotionDiv>

          <MotionDiv
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
          >
             {/* Tech Stack Card */}
             <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-bl-full -mr-8 -mt-8"></div>
                
                <h4 className="text-xl font-bold text-white mb-8">Operational Arsenal</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                      <Terminal className="w-6 h-6 text-blue-500" />
                      <span className="text-white font-semibold">Web Infrastructure</span>
                      <span className="text-xs text-slate-500">Next.js, React, Node</span>
                   </div>
                   <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                      <Database className="w-6 h-6 text-blue-500" />
                      <span className="text-white font-semibold">Tracking Systems</span>
                      <span className="text-xs text-slate-500">Postback, S2S, Analytics</span>
                   </div>
                   <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                      <Zap className="w-6 h-6 text-blue-500" />
                      <span className="text-white font-semibold">AI Automation</span>
                      <span className="text-xs text-slate-500">Python, API Integrations</span>
                   </div>
                   <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                      <ShieldCheck className="w-6 h-6 text-blue-500" />
                      <span className="text-white font-semibold">CPA Optimization</span>
                      <span className="text-xs text-slate-500">Offer Logic, Funnels</span>
                   </div>
                </div>
             </div>
          </MotionDiv>

        </div>
      </div>
    </section>
  );
};

export default About;