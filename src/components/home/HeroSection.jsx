import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-espresso">
        <div className="absolute inset-0 bg-espresso/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="font-sans text-xs md:text-sm tracking-widest uppercase text-cream/80 mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-none mb-6 max-w-2xl animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-base md:text-lg text-cream/80 max-w-lg mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Gold jewelry designed for the moments that matter — from everyday elegance to forever keepsakes.
        </p>
        <Link
          to="/shop"
          className="btn-primary animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="w-5 h-8 border border-cream/50 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-cream/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
