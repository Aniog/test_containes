import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-espresso">
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #2C2620 0%, #1C1917 40%, #3D3028 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(196, 162, 101, 0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
        <p className="text-gold/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-sans font-light">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream tracking-wider leading-tight mb-6 max-w-3xl text-balance">
          Crafted to be Treasured
        </h1>
        <p className="text-cream/60 text-sm md:text-base max-w-lg mb-10 font-sans font-light leading-relaxed">
          Heirloom-worthy pieces designed for everyday elegance. 18K gold-plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="btn-gold">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-cream/30 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-cream/30 to-transparent" />
      </div>
    </section>
  );
}