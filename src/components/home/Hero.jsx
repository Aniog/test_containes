import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="mt-4 md:mt-6 text-cream/70 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          Demi-fine jewelry designed for the modern woman. Timeless pieces that elevate every moment.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-gold text-cream px-10 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-cream/30 animate-pulse" />
      </div>
    </section>
  );
}
