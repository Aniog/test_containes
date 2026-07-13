import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-deep"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          data-strk-img-id="hero-bg-img-3a7f91"
          data-strk-img="[hero-desc-3a7f91] [hero-title-3a7f91]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Industrial sheet metal folding machine in a modern factory"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
              Precision Engineering
            </span>
            <div className="h-px w-10 bg-gold" />
          </div>

          {/* Headline */}
          <h1
            id="hero-title-3a7f91"
            className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-off-white leading-tight mb-6"
          >
            Master the Art of{' '}
            <span className="text-gold">Metal Folding</span>
          </h1>

          {/* Subheadline */}
          <p
            id="hero-desc-3a7f91"
            className="text-lg md:text-xl text-light-gray max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            ARTITECT MACHINERY engineers world-class double folding machines and sheet metal folders — built for precision, designed for productivity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollTo('#products')}
              className="bg-gold text-navy-deep font-semibold px-8 py-4 rounded-full hover:bg-gold-light transition-all duration-200 text-base tracking-wide shadow-lg shadow-gold/20"
            >
              Explore Products
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="border border-gold/60 text-off-white font-semibold px-8 py-4 rounded-full hover:border-gold hover:text-gold transition-all duration-200 text-base tracking-wide"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-10 justify-center lg:justify-start">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="font-serif font-bold text-3xl text-gold">{stat.value}</div>
                <div className="text-sm text-light-gray tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side decorative card */}
        <div className="hidden lg:flex flex-col gap-4 w-72 shrink-0">
          {[
            { title: 'Double Folding Machine', spec: 'Up to 4000mm working length' },
            { title: 'Sheet Metal Folder', spec: 'Precision ±0.1mm tolerance' },
            { title: 'Metal Folding Machine', spec: 'CNC & manual configurations' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-steel-blue/60 backdrop-blur border border-slate-mid/60 rounded-xl p-5 hover:border-gold/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                <div>
                  <div className="text-off-white font-semibold text-sm">{item.title}</div>
                  <div className="text-light-gray text-xs mt-1">{item.spec}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#products')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-light-gray hover:text-gold transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
