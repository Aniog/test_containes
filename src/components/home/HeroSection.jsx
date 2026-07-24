import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-velmora-dark">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: 'radial-gradient(ellipse at 50% 40%, #3D3835 0%, #1C1C1C 60%, #0D0D0D 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'linear-gradient(180deg, rgba(12,10,8,0.3) 0%, rgba(12,10,8,0.6) 60%, rgba(12,10,8,0.9) 100%)',
          }}
        />
        {/* Warm gold glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #C9A96E 0%, transparent 70%)' }}
        />
        {/* Accent light line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-velmora-accent/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-widest uppercase text-velmora-accent mb-6 animate-fade-in">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6 tracking-wide animate-slide-up">
          Crafted to be<br />Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-white/60 max-w-xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Gold jewelry designed for the modern woman — pieces that move from day to night, from gifting to self-love, without ever losing their glow.
        </p>
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Link to="/shop" className="btn-accent text-xs tracking-widest uppercase">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-[10px] tracking-widest uppercase font-sans">
        <span>Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
