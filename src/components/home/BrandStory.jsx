import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-vel-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-0 items-center">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-[3/4] bg-vel-light relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-vel-deep/70 via-vel-deep/40 to-vel-gold/20" />
            <div className="absolute inset-0 flex items-center justify-center opacity-15">
              <svg viewBox="0 0 200 300" className="w-40 text-white">
                <rect x="60" y="40" width="80" height="120" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
                <rect x="65" y="45" width="70" height="110" rx="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <text x="100" y="190" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="serif">VELMORA</text>
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="py-16 md:py-20 md:pl-16 lg:pl-20">
            <p className="font-serif italic text-vel-gold text-sm tracking-wider mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-vel-deep tracking-wide mb-6 leading-tight">
              Jewelry That Lives
              <br />
              With You
            </h2>
            <div className="w-12 h-px bg-vel-gold mb-6" />
            <p className="text-vel-taupe text-sm leading-relaxed mb-4 max-w-md">
              Velmora was founded on a simple belief: fine jewelry should be part of
              your everyday life, not locked away for special occasions. We craft demi-fine
              pieces in 18K gold plate, designed to be lived in — from morning coffee
              to evening cocktails.
            </p>
            <p className="text-vel-taupe text-sm leading-relaxed mb-8 max-w-md">
              Every piece is designed in our Paris atelier and crafted by artisans who
              share our obsession with detail. The result? Jewelry that feels
              personal, timeless, and unmistakably yours.
            </p>
            <Link
              to="#"
              className="inline-block text-sm tracking-[0.1em] uppercase text-vel-deep border-b border-vel-gold pb-1 hover:text-vel-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
