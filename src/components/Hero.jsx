import React from 'react';
import { ArrowRight, Award, Shield, Users } from 'lucide-react';

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

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sm mb-6">
            <Award className="w-4 h-4" />
            <span>Trusted by manufacturers worldwide since 1987</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] mb-6">
            Precision Sheet Metal<br />Folding Machines
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10">
            Engineered for accuracy. Built for durability. Designed for the professionals who demand excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToProducts}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B8860B] text-white font-medium rounded-md hover:bg-[#9A7209] transition-all text-base"
            >
              Explore Our Machines
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium rounded-md hover:bg-white/5 transition-all text-base"
            >
              Request a Quote
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-16 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#B8860B]" />
              <div>
                <div className="text-sm font-medium">ISO 9001:2015</div>
                <div className="text-xs text-white/50">Certified Quality</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#B8860B]" />
              <div>
                <div className="text-sm font-medium">2,500+ Installations</div>
                <div className="text-xs text-white/50">Across 45 Countries</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#B8860B]" />
              <div>
                <div className="text-sm font-medium">5-Year Warranty</div>
                <div className="text-xs text-white/50">On All Equipment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
