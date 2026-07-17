import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://placehold.co/1600x900/FFF5EB/8B6914?text=Velmora+Jewelry&font=playfair-display"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-velmora-charcoal/30" />
      </div>

      {/* Content */}
      <div className="container-velmora relative z-10">
        <div className="max-w-lg">
          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.15)" }}
          >
            Crafted to be<br />Treasured
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-md leading-relaxed">
            Demi-fine gold jewelry designed for everyday elegance. Each piece is
            18K gold plated and made to last.
          </p>
          <Link
            to="/shop"
            className="btn-accent inline-flex items-center gap-2 group"
          >
            Shop the Collection
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
