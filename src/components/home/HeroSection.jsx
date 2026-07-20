import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=85"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-velmora-gold text-xs md:text-sm tracking-widest uppercase font-sans mb-4">
              Velmora Fine Jewelry
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              Crafted to be
              <br />
              <span className="italic">Treasured</span>
            </h1>
            <p className="text-white/80 text-sm md:text-base mt-5 max-w-md leading-relaxed font-sans">
              Demi-fine gold jewelry, handcrafted for the woman who values
              quiet luxury and enduring style.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/shop"
                className="btn-accent inline-flex items-center gap-2"
              >
                Shop the Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/collections"
                className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-white/10"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}