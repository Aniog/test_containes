import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-xl">
          {/* Subheading */}
          <p
            className="text-white/80 text-xs tracking-[0.3em] uppercase mb-4 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Demi-Fine Jewelry
          </p>

          {/* Main Headline */}
          <h1
            className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-in"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              animationDelay: '0.4s',
            }}
          >
            Crafted to be Treasured
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/80 text-base md:text-lg mb-8 max-w-md animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            Timeless 18K gold-plated pieces designed for the modern woman. 
            Everyday luxury that moves with you.
          </p>

          {/* CTA Button */}
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-[var(--color-gold)] text-white text-xs tracking-[0.15em] uppercase hover:bg-[var(--color-gold-dark)] transition-all duration-300 animate-fade-in hover:-translate-y-0.5"
            style={{ animationDelay: '0.8s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}