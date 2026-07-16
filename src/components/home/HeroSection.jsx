import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&q=80"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-velmora-gold-light text-sm tracking-[0.25em] uppercase font-sans font-medium mb-4">
              Velmora Fine Jewelry
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight font-light">
              Crafted to be
              <br />
              <span className="font-semibold italic">Treasured</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 font-sans font-light leading-relaxed max-w-md">
              Demi-fine gold jewelry designed for the woman who values quiet
              luxury and enduring style.
            </p>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 mt-8 bg-velmora-gold hover:bg-velmora-gold-dark text-white px-8 py-3.5 text-sm tracking-widest uppercase font-sans font-medium transition-all duration-300"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}