import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Layers, Cpu, TrendingUp } from 'lucide-react';

const MotionDiv = motion.div as any;

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-slate-950">
      {/* Premium Tech Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[20%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-900/5 rounded-full blur-[100px]" />
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 max-w-3xl text-center lg:text-left">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-bold tracking-widest uppercase mb-8 shadow-lg backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                System Builder & Strategist
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                Sazzad Islam
                <span className="block text-2xl lg:text-3xl font-medium text-slate-400 mt-4 tracking-normal">
                  Designing Scalable Digital Growth Systems Powered by <span className="text-white">AI, Automation & Performance Marketing</span>.
                </span>
              </h1>
              
              <p className="text-lg text-slate-400 font-light mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed border-l-2 border-blue-500/30 pl-6">
                I architect high-performance CPA tracking infrastructures, automated video content pipelines, and conversion-focused web ecosystems for brands that demand measurable scale.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start mb-16">
                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                  Schedule Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900/50 text-white font-semibold rounded-lg border border-white/10 hover:bg-slate-900 hover:border-white/20 backdrop-blur-sm transition-all"
                >
                  View Case Studies
                </button>
              </div>

              {/* Authority Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/5 text-left">
                 <div className="flex items-center gap-3">
                   <div className="p-2 bg-blue-500/10 rounded-lg">
                     <Layers className="w-5 h-5 text-blue-400" />
                   </div>
                   <div>
                     <p className="text-white font-bold text-sm">Scalable</p>
                     <p className="text-slate-500 text-xs">Infrastructure</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="p-2 bg-blue-500/10 rounded-lg">
                     <Cpu className="w-5 h-5 text-blue-400" />
                   </div>
                   <div>
                     <p className="text-white font-bold text-sm">Automated</p>
                     <p className="text-slate-500 text-xs">AI Systems</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="p-2 bg-blue-500/10 rounded-lg">
                     <TrendingUp className="w-5 h-5 text-blue-400" />
                   </div>
                   <div>
                     <p className="text-white font-bold text-sm">Performance</p>
                     <p className="text-slate-500 text-xs">Marketing</p>
                   </div>
                 </div>
              </div>
            </MotionDiv>
          </div>

          {/* Hero Image - Executive Look */}
          <MotionDiv 
            className="flex-1 w-full max-w-lg lg:max-w-xl relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-white/10">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-80"></div>
               <img 
                src="https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjk5MzQzMDQ2ZWQ4ODE5MWEyOTJhOTNlZjYzYjRkMGE6ZmlsZV8wMDAwMDAwMDY1ZTQ3MWZhODNjM2NhZmMwNWJhZWExMCIsInRzIjoiMjA1MDAiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6IjBiYTI3MmFmMjI1ZmMzMjQyYTBhOWNlYzY2NzliYjI1MjliYzI5MWQ2NDVjMzAzZWIxYTEzZmRkOTBmYzM0OTQiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY2RuIjpudWxsLCJjcCI6bnVsbCwibWEiOm51bGx9" 
                alt="Sazzad Islam - Digital Growth Architect" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Founder/Status Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                 <div className="bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-xl p-5 flex items-center justify-between">
                    <div>
                       <p className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">Current Status</p>
                       <p className="text-white font-medium">Building CPA Ecosystems</p>
                    </div>
                    <div className="flex -space-x-3">
                       <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-950 flex items-center justify-center text-[10px] text-white font-bold">AI</div>
                       <div className="w-8 h-8 rounded-full bg-blue-600 border border-slate-950 flex items-center justify-center text-[10px] text-white font-bold">CPA</div>
                       <div className="w-8 h-8 rounded-full bg-white border border-slate-950 flex items-center justify-center text-[10px] text-slate-950 font-bold">DEV</div>
                    </div>
                 </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>

      <MotionDiv 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce cursor-pointer hover:text-white transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <ChevronDown className="w-5 h-5" />
      </MotionDiv>
    </section>
  );
};

export default Hero;