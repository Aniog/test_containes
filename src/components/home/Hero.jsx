import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p 
            className="text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] mb-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Demi-Fine Jewelry
          </p>

          {/* Headline */}
          <h1 
            className="text-white mb-6 leading-tight"
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 500
            }}
          >
            Crafted to be<br />Treasured
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-white/80 mb-10 max-w-lg leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Timeless pieces designed for the modern woman. 
            18K gold plated, hypoallergenic, and made to last.
          </p>

          {/* CTA Button */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 btn btn-gold group"
          >
            Shop the Collection
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-sans)' }}>
          Scroll
        </span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
