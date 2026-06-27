import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#1A1816]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617038224558-28ad3fb558a7?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 md:mb-6 opacity-80">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wide leading-[1.1] mb-4 md:mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-sm md:text-base font-light opacity-80 max-w-md mx-auto mb-8 md:mb-10">
          18K gold-plated pieces designed for everyday luxury. Timeless silhouettes,
          modern sensibility.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-[#B8966A] text-white text-xs tracking-[0.16em] uppercase font-medium px-8 py-3.5 rounded hover:bg-[#A6835B] transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-6 left-0 right-0 text-center">
        <div className="w-px h-10 bg-white/30 mx-auto animate-pulse" />
      </div>
    </section>
  );
}
