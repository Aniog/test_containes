import { Link } from 'react-router-dom';

export default function HomeHero() {
  return (
    <section className="relative h-screen min-h-[650px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-velmora-base">
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-base/60 via-velmora-base/30 to-velmora-base/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-[800px] aspect-[4/5] md:aspect-[16/9]">
            {/* Abstract jewelry imagery */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-velmora-gold/20 via-velmora-gold-dark/10 to-transparent blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-velmora-gold/30 flex items-center justify-center">
                    <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border border-velmora-gold/20 flex items-center justify-center">
                      <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-velmora-gold/10 border border-velmora-gold/40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-xl animate-fade-in">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold-light mb-6">
            Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-[1.1] tracking-wide text-balance">
            Crafted to be<br />Treasured
          </h1>
          <p className="mt-6 text-white/60 text-sm md:text-base leading-relaxed max-w-md">
            Heirloom-quality gold jewelry at an accessible price. Every piece is designed
            for the woman who knows that luxury is in the details.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-10 px-10 py-4 border border-velmora-gold text-velmora-gold text-xs tracking-widest uppercase font-sans font-medium hover:bg-velmora-gold hover:text-velmora-base transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-white/30 text-[10px] tracking-widest uppercase font-sans">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}