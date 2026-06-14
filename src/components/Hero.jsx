import React from 'react';
import { ArrowRight, Award, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm mb-6">
            <Award className="w-4 h-4" />
            <span>Precision Engineering Since 1987</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 leading-[1.05] mb-6">
            Master the art of<br />precision folding.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
            World-class sheet metal folding machines engineered for accuracy, 
            durability, and effortless operation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToProducts}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white text-base font-medium rounded-xl hover:bg-slate-800 transition-all active:scale-[0.985]"
            >
              Explore Our Machines
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-slate-200 text-slate-700 text-base font-medium rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all"
            >
              Speak with an Engineer
            </button>
          </div>

          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>5-Year Warranty</span>
            </div>
            <div className="text-sm text-slate-600">ISO 9001:2015 Certified</div>
            <div className="text-sm text-slate-600">Global Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
