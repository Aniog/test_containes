import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=85"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight tracking-wide mb-5">
            Crafted to be
            <br />
            <span className="italic font-light">Treasured</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
            Demi-fine gold jewelry for the moments that matter — and the everyday moments in between.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-brand-charcoal px-10 py-3.5 font-sans text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:bg-brand-cream"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}