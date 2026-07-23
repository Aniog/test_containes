import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&auto=format&fit=crop&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-[#D4B96A] text-sm tracking-[0.15em] uppercase mb-4 font-medium">
              New Collection
            </p>
            <h1 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl md:text-7xl text-white font-light leading-tight">
              Crafted to be
              <br />
              <span className="font-semibold italic">Treasured</span>
            </h1>
            <p className="text-white/80 text-lg mt-6 max-w-md leading-relaxed">
              Demi-fine gold jewelry, designed for the moments that matter.
              Elevated essentials for everyday elegance.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-8 bg-[#B8943C] text-white px-10 py-3.5 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#D4B96A] transition-all duration-300 hover:shadow-lg"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-[0.15em] uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}