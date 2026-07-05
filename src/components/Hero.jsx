import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&h=900&fit=crop&crop=center')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/70 via-charcoal-800/20 to-charcoal-800/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-800/40 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full">
          <div className="max-w-xl">
            <p className="text-overline uppercase text-gold-light tracking-[0.2em] mb-4 animate-fade-in">
              New Collection 2026
            </p>
            <h1
              className="text-display-xl text-cream-50 font-light mb-6 animate-fade-in animate-delay-100"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Crafted to be
              <br />
              <span className="font-medium italic">Treasured</span>
            </h1>
            <p className="text-body-lg text-cream-200/90 max-w-md mb-8 animate-fade-in animate-delay-200">
              Premium demi-fine jewelry designed for the modern woman. 
              18K gold plated, hypoallergenic, and made to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in animate-delay-300">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-charcoal-800 text-overline uppercase tracking-[0.14em] font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 hover:shadow-elevated"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-cream-100/30 text-cream-100 text-overline uppercase tracking-[0.14em] font-medium rounded-lg hover:bg-cream-50/10 transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in animate-delay-500">
        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-cream-100/50" />
      </div>
    </section>
  );
}
