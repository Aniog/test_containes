import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";

export default function BrandStory() {
  return (
    <section className="py-20 sm:py-28 bg-cream-warm">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] bg-ink overflow-hidden">
            <svg
              viewBox="0 0 600 750"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                <radialGradient id="bs-glow" cx="50%" cy="40%" r="50%">
                  <stop offset="0%" stopColor="#E8C99A" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#1A1614" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="bs-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E8C99A" />
                  <stop offset="50%" stopColor="#B8956A" />
                  <stop offset="100%" stopColor="#7A5A38" />
                </linearGradient>
              </defs>
              <rect width="600" height="750" fill="#1A1614" />
              <circle cx="300" cy="280" r="280" fill="url(#bs-glow)" />
              {/* Artist hands sketch */}
              <g transform="translate(300 400)" opacity="0.9">
                <ellipse cx="0" cy="120" rx="160" ry="12" fill="#000" opacity="0.4" />
                {/* Necklace on a stand */}
                <path
                  d="M-90 -20 Q0 130 90 -20"
                  fill="none"
                  stroke="url(#bs-gold)"
                  strokeWidth="2.2"
                />
                <circle cx="0" cy="80" r="18" fill="url(#bs-gold)" />
                <circle cx="0" cy="80" r="6" fill="#1A1614" opacity="0.4" />
                <line x1="-90" y1="-20" x2="-90" y2="-40" stroke="url(#bs-gold)" strokeWidth="1.5" />
                <line x1="90" y1="-20" x2="90" y2="-40" stroke="url(#bs-gold)" strokeWidth="1.5" />
                <line x1="-110" y1="-50" x2="110" y2="-50" stroke="url(#bs-gold)" strokeWidth="1" />
              </g>
              <g opacity="0.4" fontFamily="Cormorant Garamond, serif" fontStyle="italic">
                <text x="40" y="710" fontSize="12" fill="#E8C99A" letterSpacing="3">EST. 2021 · ATELIER</text>
              </g>
            </svg>
          </div>

          <div className="lg:pl-8">
            <span className="label-eyebrow text-muted">Our Story</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-ink mt-4 leading-[1.05]">
              Heirlooms in the making.
            </h2>
            <div className="mt-8 space-y-5 text-base text-muted leading-relaxed max-w-xl">
              <p>
                Velmora began at a kitchen table in Lisbon, with a single
                sketch of a pair of earrings that felt like the kind you'd find
                in your grandmother's velvet box.
              </p>
              <p>
                Today we work with a small atelier of artisans to make demi-fine
                pieces in 18K gold plating over a brass core — solid-feeling,
                fairly priced, designed to be worn every day and passed down.
              </p>
              <p>
                We believe quiet luxury isn't a price point. It's a feeling —
                and it should be available to everyone who loves beautiful
                things.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 label-product text-ink hover:text-gold transition-colors"
            >
              Our Story
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
