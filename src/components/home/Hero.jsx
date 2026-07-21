import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80"
          alt="Elegant woman wearing gold jewelry"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-espresso)]/70 via-[var(--deep-espresso)]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p
            className="text-sm tracking-[0.3em] text-[var(--champagne-gold)] mb-6 animate-[fadeInUp_800ms_ease]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            NEW COLLECTION
          </p>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl text-[var(--ivory-cream)] mb-6 leading-tight animate-[fadeInUp_800ms_ease_200ms_both]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-[var(--warm-stone)] mb-10 max-w-lg leading-relaxed animate-[fadeInUp_800ms_ease_400ms_both]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Timeless demi-fine jewelry designed for the modern woman. 
            18K gold plated, hypoallergenic, and made to be cherished.
          </p>

          {/* CTA Button */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--champagne-gold)] text-[var(--deep-espresso)] font-medium text-sm tracking-wider hover:bg-[var(--rose-gold)] transition-all duration-300 hover:gap-4 animate-[fadeInUp_800ms_ease_600ms_both]"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--ivory-cream)]/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[var(--ivory-cream)]/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
