import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/data/site";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[640px] overflow-hidden bg-espresso">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroContent.image}
          alt={heroContent.imageAlt}
          className="w-full h-full object-cover object-center"
          fetchpriority="high"
        />
        {/* Soft warm gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/30 to-espresso/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-transparent to-espresso/60" />
      </div>

      {/* Content */}
      <Container size="wide" className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-2xl text-bone">
          <p className="text-label text-champagne mb-6">{heroContent.eyebrow}</p>
          <h1
            className={cn(
              "font-serif font-light leading-[1.05] tracking-[-0.01em]",
              "text-[44px] sm:text-6xl md:text-7xl lg:text-[88px]"
            )}
          >
            {heroContent.headline}
          </h1>
          <p className="mt-6 md:mt-8 text-base md:text-lg max-w-lg leading-relaxed text-bone/85 font-light">
            {heroContent.subhead}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-champagne text-espresso border border-champagne px-10 py-4 text-label hover:bg-champagne-soft hover:border-champagne-soft transition-colors"
            >
              Shop the Collection
              <ArrowRight strokeWidth={1.25} className="w-4 h-4" />
            </Link>
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 text-label text-bone border-b border-bone/40 hover:border-champagne pb-1 transition-colors"
            >
              View Editorials
            </Link>
          </div>
        </div>
      </Container>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-bone/70">
        <span className="text-[10px] uppercase tracking-label mb-2">Scroll</span>
        <div className="w-px h-8 bg-bone/40" />
      </div>
    </section>
  );
}