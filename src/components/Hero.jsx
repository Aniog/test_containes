import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-petal rounded-full -translate-y-1/3 translate-x-1/3 opacity-70" />
      <div className="absolute bottom-0 left-0 w-56 h-56 md:w-80 md:h-80 bg-leaf-light rounded-full translate-y-1/3 -translate-x-1/3 opacity-60" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 w-full pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-block bg-leaf-light text-leaf text-xs font-body font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              100% Natural
            </span>
            <h1 id="hero-title" className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight mb-6">
              Life is Better<br />
              <span className="text-coral">with Fruit Tea</span>
            </h1>
            <p id="hero-subtitle" className="font-body text-muted text-lg md:text-xl leading-relaxed mb-10 max-w-md">
              Handcrafted fruit teas bursting with real flavour. No artificial colours, no preservatives — just pure, refreshing goodness in every sip.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToMenu}
                className="bg-coral text-white px-8 py-3.5 rounded-full font-body font-bold text-base hover:bg-coral-dark transition-colors shadow-md"
              >
                Explore Our Teas
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-charcoal text-charcoal px-8 py-3.5 rounded-full font-body font-bold text-base hover:border-coral hover:text-coral transition-colors"
              >
                Our Story
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              {[
                { value: '12+', label: 'Flavours' },
                { value: '100%', label: 'Natural' },
                { value: '5★', label: 'Rated' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display text-2xl font-bold text-charcoal">{value}</p>
                  <p className="font-body text-sm text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img
                alt="Colourful fruit teas"
                className="w-full h-full object-cover"
                data-strk-img-id="hero-fruit-tea-8f2a9c"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-4 -left-4 md:bottom-8 md:-left-8 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
              <span className="text-2xl">🍓</span>
              <div>
                <p className="font-display font-bold text-charcoal text-sm">Fresh Daily</p>
                <p className="font-body text-xs text-muted">Made with real fruit</p>
              </div>
            </div>
            <div className="absolute top-4 -right-4 md:top-8 md:-right-8 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
              <span className="text-2xl">🌿</span>
              <div>
                <p className="font-display font-bold text-charcoal text-sm">No Additives</p>
                <p className="font-body text-xs text-muted">Pure & natural</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
