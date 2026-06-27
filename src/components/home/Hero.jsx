import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-vel-deep/60 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><defs><linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1A1512"/><stop offset="40%" stop-color="#3A2E28"/><stop offset="100%" stop-color="#C8A45C"/></linearGradient></defs><rect fill="url(#a)" width="1600" height="900"/></svg>')}')`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-6">
        <p className="font-serif italic text-vel-gold text-sm md:text-base tracking-wider mb-4 opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-wide leading-tight mb-6 opacity-0 animate-[fadeUp_0.8s_ease-out_0.4s_forwards]">
          Crafted to be
          <br />
          Treasured
        </h1>
        <p className="text-white/60 text-sm md:text-base max-w-md leading-relaxed mb-8 opacity-0 animate-[fadeUp_0.8s_ease-out_0.6s_forwards]">
          Demi-fine gold jewelry designed for the modern woman — premium
          materials, timeless design, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-vel-gold hover:bg-vel-gold-hover text-white px-10 py-3.5 text-sm font-medium tracking-[0.1em] uppercase rounded-sm transition-all duration-300 opacity-0 animate-[fadeUp_0.8s_ease-out_0.8s_forwards]"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
