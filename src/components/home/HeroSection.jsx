import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-velvet-950">
        <div className="absolute inset-0 bg-gradient-to-b from-velvet-950/60 via-velvet-950/30 to-velvet-950/70 z-10" />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #3a2819 0%, #5c3f2e 50%, #44321c 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-2xl mx-auto">
        <p className="font-sans text-xs md:text-sm tracking-widest uppercase text-warm-300 mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6 animate-slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-sand-200/80 font-light leading-relaxed mb-10 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Gold-plated pieces designed for everyday elegance — because the moments that matter most deserve something beautiful.
        </p>
        <Link
          to="/shop"
          className="btn-primary text-xs md:text-sm animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
