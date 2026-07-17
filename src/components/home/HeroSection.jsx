import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-base/50 via-velmora-base/20 to-velmora-base/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/70 mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="heading-xl text-white mb-6 max-w-3xl animate-slide-up">
          Crafted to be<br className="hidden md:block" /> Treasured
        </h1>
        <p className="font-sans text-base md:text-lg text-white/70 max-w-lg mb-10 font-light animate-slide-up">
          Heirloom-quality gold jewelry at an accessible price. Designed for the woman who collects moments, not things.
        </p>
        <Link to="/shop" className="btn-primary animate-slide-up">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}