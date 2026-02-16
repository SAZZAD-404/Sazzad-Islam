import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';

const MotionDiv = motion.div as any;

const BookingSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    budget: '',
    goals: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-32 bg-slate-950 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Schedule Strategy Call
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I work with a limited number of high-value partners to ensure dedicated focus. Fill out the form below to see if we are a strategic fit.
          </p>
        </div>

        <div className="bg-slate-900/40 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-sm shadow-2xl">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-blue-400 uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white text-xl focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700 font-light"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-blue-400 uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white text-xl focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700 font-light"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-blue-400 uppercase tracking-widest">Business Type</label>
                  <div className="relative">
                    <select 
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white text-xl focus:outline-none focus:border-blue-500 transition-colors appearance-none font-light cursor-pointer"
                    >
                      <option value="" disabled selected className="bg-slate-900 text-slate-500">Select Type</option>
                      <option className="bg-slate-900">CPA Network / Affiliate</option>
                      <option className="bg-slate-900">SaaS / Tech Startup</option>
                      <option className="bg-slate-900">Content Creator / Brand</option>
                      <option className="bg-slate-900">E-commerce</option>
                      <option className="bg-slate-900">Agency</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-blue-400 uppercase tracking-widest">Monthly Budget Range</label>
                  <div className="relative">
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white text-xl focus:outline-none focus:border-blue-500 transition-colors appearance-none font-light cursor-pointer"
                    >
                      <option value="" disabled selected className="bg-slate-900 text-slate-500">Select Range</option>
                      <option className="bg-slate-900">$3k - $5k</option>
                      <option className="bg-slate-900">$5k - $10k</option>
                      <option className="bg-slate-900">$10k - $25k</option>
                      <option className="bg-slate-900">$25k+</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 - Text Area */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-blue-400 uppercase tracking-widest">Project Goals</label>
                <textarea 
                  name="goals"
                  rows={2}
                  value={formData.goals}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white text-xl focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-700 font-light resize-none"
                  placeholder="Briefly describe what you want to achieve..."
                />
              </div>

              <div className="pt-8 text-center">
                <button 
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-white text-slate-950 hover:bg-blue-50 font-bold rounded-lg transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  Submit Application <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <MotionDiv 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-12"
            >
              <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-8 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Application Received</h3>
              <p className="text-slate-400 max-w-md mb-8 text-lg">
                Thank you, {formData.name}. I will review your project details and goals. If we are a strategic fit, you will receive a calendar link within 24 hours.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-sm text-white border-b border-white/30 hover:border-white pb-1 transition-colors"
              >
                Start New Application
              </button>
            </MotionDiv>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;