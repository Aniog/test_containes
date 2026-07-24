import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";

export default function Hero() {
  return (
    <section className="relative w-full bg-ink text-cream overflow-hidden">
      {/* Editorial SVG hero illustration */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 65% 35%, rgba(184,149,106,0.25), transparent 60%), radial-gradient(circle at 25% 75%, rgba(184,149,106,0.15), transparent 55%)",
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8C99A" />
            <stop offset="50%" stopColor="#B8956A" />
            <stop offset="100%" stopColor="#7A5A38" />
          </linearGradient>
          <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8C99A" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#B8956A" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Big gold bokeh */}
        <circle cx="1100" cy="280" r="260" fill="url(#hero-glow)" />
        <circle cx="1280" cy="540" r="180" fill="url(#hero-glow)" opacity="0.7" />
        <circle cx="950" cy="620" r="120" fill="url(#hero-glow)" opacity="0.5" />

        {/* Abstract jewelry line — earrings silhouette */}
        <g transform="translate(1080 350)" opacity="0.85">
          {/* Left ear */}
          <path
            d="M-10 0 Q-20 60 -10 110 Q0 140 15 140 Q30 140 35 110 Q40 60 30 0 Q15 -15 0 -15 Q-5 -15 -10 0 Z"
            fill="url(#hero-gold)"
            opacity="0.25"
          />
          <path
            d="M-10 0 Q-20 60 -10 110 Q0 140 15 140 Q30 140 35 110 Q40 60 30 0"
            fill="none"
            stroke="url(#hero-gold)"
            strokeWidth="1.4"
            opacity="0.95"
          />
          <circle cx="10" cy="160" r="10" fill="url(#hero-gold)" />
          <circle cx="10" cy="195" r="14" fill="url(#hero-gold)" opacity="0.85" />
          <circle cx="10" cy="232" r="6" fill="url(#hero-gold)" opacity="0.6" />

          {/* Right ear */}
          <g transform="translate(180 -40)">
            <path
              d="M-10 0 Q-20 60 -10 110 Q0 140 15 140 Q30 140 35 110 Q40 60 30 0 Q15 -15 0 -15 Q-5 -15 -10 0 Z"
              fill="url(#hero-gold)"
              opacity="0.25"
            />
            <path
              d="M-10 0 Q-20 60 -10 110 Q0 140 15 140 Q30 140 35 110 Q40 60 30 0"
              fill="none"
              stroke="url(#hero-gold)"
              strokeWidth="1.4"
              opacity="0.95"
            />
            <circle cx="10" cy="160" r="8" fill="url(#hero-gold)" />
            <circle cx="10" cy="200" r="20" fill="url(#hero-gold)" opacity="0.7" />
            <circle cx="10" cy="200" r="6" fill="#1A1614" opacity="0.4" />
          </g>
        </g>

        {/* Soft horizontal lines, hairline texture */}
        <line x1="0" y1="780" x2="1600" y2="780" stroke="#F5EFE7" strokeOpacity="0.06" />
        <line x1="0" y1="820" x2="1600" y2="820" stroke="#F5EFE7" strokeOpacity="0.04" />
      </svg>

      <Container className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center">
        <div className="max-w-2xl pt-24 sm:pt-0">
          <span
            id="hero-eyebrow"
            className="label-eyebrow text-gold-pale animate-fade-up"
          >
            Demi-fine · 18K Gold Plated
          </span>
          <h1
            id="hero-title"
            className="font-serif text-cream mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight animate-fade-up fade-up-1"
            style={{ fontWeight: 400 }}
          >
            Crafted to be
            <br />
            <em className="italic text-gold-pale">treasured.</em>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-7 text-base sm:text-lg text-cream/75 max-w-lg leading-relaxed animate-fade-up fade-up-2"
          >
            Demi-fine gold jewelry designed in small batches. Heirloom-quality
            pieces, made to be lived in — and loved for years to come.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up fade-up-3">
            <Link to="/shop" className="btn btn-gold">
              Shop the Collection
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link
              to="/shop?cat=sets"
              className="btn btn-outline-light"
            >
              Discover Gifts
            </Link>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/40 hidden sm:flex flex-col items-center gap-2">
        <span className="label-eyebrow text-[0.62rem]">Scroll</span>
        <span className="w-px h-10 bg-cream/30" />
      </div>
    </section>
  );
}
