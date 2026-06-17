import React from 'react';

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
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 bg-slate-950 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title] industrial machinery workshop"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27/%3E')",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
          <span className="text-white/90 text-sm tracking-[2px] font-medium">EST. 1987</span>
        </div>

        <h1 id="hero-title" className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[0.95]">
          Precision.<br />Power.<br />Perfection.
        </h1>

        <p id="hero-subtitle" className="max-w-2xl mx-auto text-xl md:text-2xl text-white/80 mb-10 tracking-tight">
          World-class sheet metal folding machines engineered for the most demanding workshops.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToProducts}
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 text-base font-semibold rounded-xl hover:bg-slate-100 transition-all active:scale-[0.985]"
          >
            Explore Our Machines
          </button>
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-base font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all"
          >
            Request a Quote
          </button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-white/50 text-sm tracking-widest">
          <div>GERMAN ENGINEERING</div>
          <div className="w-1 h-1 rounded-full bg-white/30" />
          <div>40+ COUNTRIES</div>
          <div className="w-1 h-1 rounded-full bg-white/30" />
          <div>LIFETIME SUPPORT</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-white/40 text-xs tracking-[3px]">
          SCROLL TO DISCOVER
          <div className="w-px h-8 bg-white/20" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
