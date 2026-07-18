import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background with warm gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal opacity-90" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(184, 149, 106, 0.15) 0%, transparent 60%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-24 h-px bg-gold mx-auto mb-8" />
          <h1 className="heading-serif text-5xl md:text-7xl mb-6 font-light leading-tight">
            Crafted to be<br />
            <span className="font-medium italic accent-gold">Treasured</span>
          </h1>
          <div className="w-24 h-px bg-gold mx-auto mt-8" />
        </div>

        <p className="text-lg md:text-xl mb-12 font-light tracking-wide max-w-2xl mx-auto leading-relaxed opacity-90">
          Demi-fine jewelry for the modern romantic. Each piece tells a story of quiet luxury and intentional design.
        </p>

        <a
          href="/shop"
          className="btn-secondary inline-block"
          style={{ color: 'white', borderColor: 'white' }}
        >
          Shop the Collection
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/50">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-white/30" />
        </div>
      </div>
    </section>
  );
}
