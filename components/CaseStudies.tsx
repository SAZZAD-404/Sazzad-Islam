import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudy } from '../types';

const MotionDiv = motion.div as any;

const cases: CaseStudy[] = [
  {
    id: '1',
    category: 'CPA Infrastructure',
    title: 'CPA Tracking Infrastructure Build',
    problem: 'A mid-sized affiliate team was losing 30% of ad spend due to inaccurate client-side pixel tracking across 5 distinct traffic sources.',
    approach: 'Implemented a server-side tracking logic using custom postback scripts to bypass browser restrictions.',
    infrastructure: 'Custom Node.js Postback Server, RedTrack Integration, API-based Conversion Deduplication.',
    result: '140% Increase in ROI and 99.8% attribution accuracy achieved within 2 weeks.',
    image: 'https://ppcexpo.com/blog/wp-content/uploads/2024/10/what-is-cpa-in-marketing-1-1.jpg'
  },
  {
    id: '2',
    category: 'AI Automation',
    title: 'Autonomous Video Pipeline',
    problem: 'Manual editing bottlenecks restricted client to < 3 videos/week, making viral scale and consistent posting impossible to sustain.',
    approach: 'Engineered a headless Python application orchestrating GPT-4 for scripting, ElevenLabs for neural audio, and FFmpeg for programmatic video assembly.',
    infrastructure: 'Python, FFmpeg, OpenAI API, AWS Lambda, Stable Diffusion.',
    result: 'Automated 30+ videos/week with zero human touch, driving 1.2M+ organic views in month one.',
    image: 'https://cdn-dlofh.nitrocdn.com/TASgNozwGfEfVHakzcSlOaFmdxhUvEBv/assets/images/optimized/rev-bdc9b37/gleematic.com/wp-content/uploads/2023/05/Screenshot-2023-05-03-at-00.01.59.png'
  },
  {
    id: '3',
    category: 'Growth Systems',
    title: 'Growth Funnel Optimization System',
    problem: 'Tech founder had authority but no lead capture mechanism, resulting in high traffic but zero qualified leads.',
    approach: 'Deployed a premium personal brand ecosystem with automated lead magnet delivery and email sequences.',
    infrastructure: 'Next.js Landing Page, ConvertKit Automation, CRM Integration.',
    result: 'Captured 500+ high-ticket leads and secured 3 enterprise partnership deals.',
    image: 'https://media.licdn.com/dms/image/v2/D4E12AQGa3zaVqRpWwQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1729385679144?e=2147483647&v=beta&t=XNkJhc_KQkO5cH05FTOrYa3KO8grb_k4Kvw00RxG66c'
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Case Studies</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Engineering Success</h3>
        </div>

        <div className="flex flex-col gap-16">
          {cases.map((study, index) => (
            <MotionDiv
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/20 transition-all duration-500 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                
                {/* Image Section */}
                <div className="lg:col-span-2 relative min-h-[300px] lg:min-h-full overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10"></div>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 z-20">
                     <span className="px-3 py-1 bg-slate-950/80 backdrop-blur text-white text-xs font-bold uppercase tracking-wider rounded border border-white/10">
                       {study.category}
                     </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                   <h4 className="text-2xl md:text-3xl font-bold text-white mb-8">{study.title}</h4>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <p className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-2">The Problem</p>
                        <p className="text-slate-400 text-sm leading-relaxed">{study.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-2">Strategic Approach</p>
                        <p className="text-slate-400 text-sm leading-relaxed">{study.approach}</p>
                      </div>
                   </div>

                   <div className="mb-10">
                      <p className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-2">Infrastructure Built</p>
                      <div className="flex items-center gap-2 text-white text-sm font-medium border-l-2 border-white/20 pl-4 py-1">
                         <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                         {study.infrastructure}
                      </div>
                   </div>

                   <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Measurable Result</p>
                        <p className="text-xl md:text-2xl font-bold text-white">{study.result}</p>
                      </div>
                      <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors group/btn">
                        View Details <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </button>
                   </div>
                </div>

              </div>
            </MotionDiv>
          ))}
        </div>
        
        <div className="mt-24 text-center">
           <a href="#" className="inline-block px-10 py-4 bg-transparent hover:bg-white/5 text-white font-medium rounded-full transition-all border border-white/10 hover:border-white/20">
             View All Projects
           </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;