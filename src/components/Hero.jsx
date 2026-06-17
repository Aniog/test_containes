import React from 'react';
import { ArrowRight, Award, Shield, Users } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = (e) => {
    e.preventDefault();
    const element = document.querySelector('#products');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="pt-20 min-h-[100dvh] flex items-center bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 mb-8">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">Precision Engineering Since 1987</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#1a252f] leading-[1.05] mb-6">
            Master the art of<br />precision folding.
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
            Premium sheet metal folding machines engineered for accuracy, durability, and effortless operation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1a252f] text-white font-medium rounded-lg hover:bg-[#2a3a47] transition-all group"
            >
              Explore Our Machines
              <ArrowRight className="group-hover:translate-x-0.5 transition-transform" size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#contact');
                if (el) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementPosition = el.getBoundingClientRect().top;
                  window.scrollTo({ top: elementPosition - bodyRect - offset, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1a252f] font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-all"
            >
              Request a Quote
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <Award className="text-[#1a252f]" size={20} />
              <div>
                <div className="text-sm font-semibold text-[#1a252f]">ISO 9001:2015</div>
                <div className="text-xs text-gray-500">Certified Quality</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="text-[#1a252f]" size={20} />
              <div>
                <div className="text-sm font-semibold text-[#1a252f]">5-Year Warranty</div>
                <div className="text-xs text-gray-500">On All Machines</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-[#1a252f]" size={20} />
              <div>
                <div className="text-sm font-semibold text-[#1a252f]">2,400+ Installations</div>
                <div className="text-xs text-gray-500">Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
