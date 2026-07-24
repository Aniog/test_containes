import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    description: "Stacks, cuffs, drops",
    href: "/shop?cat=earrings",
    accent: "from-[#2A201A] via-[#1F1812] to-[#0F0B09]",
    glyph: (
      <svg viewBox="0 0 200 240" className="w-full h-full">
        <defs>
          <linearGradient id="cat-gold-a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8C99A" />
            <stop offset="100%" stopColor="#7A5A38" />
          </linearGradient>
        </defs>
        <g transform="translate(100 110)">
          <path d="M-8 -30 Q-14 0 -8 30 Q0 50 8 50 Q16 50 22 30 Q28 0 22 -30" fill="none" stroke="url(#cat-gold-a)" strokeWidth="2" />
          <circle cx="7" cy="65" r="9" fill="url(#cat-gold-a)" />
          <circle cx="7" cy="92" r="13" fill="url(#cat-gold-a)" opacity="0.8" />
        </g>
        <g transform="translate(140 80)">
          <path d="M-8 -30 Q-14 0 -8 30 Q0 50 8 50 Q16 50 22 30 Q28 0 22 -30" fill="none" stroke="url(#cat-gold-a)" strokeWidth="2" />
          <circle cx="7" cy="65" r="6" fill="url(#cat-gold-a)" />
        </g>
      </svg>
    ),
  },
  {
    id: "necklaces",
    label: "Necklaces",
    description: "Pendants & chains",
    href: "/shop?cat=necklaces",
    accent: "from-[#1F1A14] via-[#1A1410] to-[#0E0B09]",
    glyph: (
      <svg viewBox="0 0 200 240" className="w-full h-full">
        <defs>
          <linearGradient id="cat-gold-b" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8C99A" />
            <stop offset="100%" stopColor="#7A5A38" />
          </linearGradient>
        </defs>
        <path d="M40 50 Q100 130 160 50" fill="none" stroke="url(#cat-gold-b)" strokeWidth="2" />
        <g transform="translate(100 150)">
          <circle r="22" fill="url(#cat-gold-b)" opacity="0.85" />
          <circle r="22" fill="none" stroke="#E8C99A" strokeWidth="0.6" opacity="0.6" />
          <circle r="6" fill="#1A1614" opacity="0.4" />
        </g>
      </svg>
    ),
  },
  {
    id: "huggies",
    label: "Huggies",
    description: "Everyday gold",
    href: "/shop?cat=huggies",
    accent: "from-[#221A14] via-[#1A130E] to-[#0E0B09]",
    glyph: (
      <svg viewBox="0 0 200 240" className="w-full h-full">
        <defs>
          <linearGradient id="cat-gold-c" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8C99A" />
            <stop offset="100%" stopColor="#7A5A38" />
          </linearGradient>
        </defs>
        <g transform="translate(70 120)">
          <circle r="34" fill="url(#cat-gold-c)" />
          <circle r="34" fill="none" stroke="#E8C99A" strokeWidth="0.6" opacity="0.4" />
          <circle cx="-10" cy="-10" r="10" fill="#fff" opacity="0.18" />
        </g>
        <g transform="translate(130 120)">
          <circle r="34" fill="url(#cat-gold-c)" />
          <circle r="34" fill="none" stroke="#E8C99A" strokeWidth="0.6" opacity="0.4" />
          <circle cx="-10" cy="-10" r="10" fill="#fff" opacity="0.18" />
        </g>
      </svg>
    ),
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-eyebrow text-muted">Shop by Category</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink mt-4 leading-[1.05]">
            Begin your collection
          </h2>
          <p className="text-muted text-sm sm:text-base mt-4">
            Three signatures. Endless ways to wear them.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              className="group relative block aspect-[3/4] overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tile.accent}`}
                aria-hidden="true"
              />
              <div className="absolute inset-0 opacity-90 transition-transform duration-[1.6s] ease-out group-hover:scale-105">
                {tile.glyph}
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-cream">
                <span className="label-eyebrow text-cream/70">
                  {tile.description}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl mt-2 group-hover:text-gold-pale transition-colors">
                  {tile.label}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 label-product text-cream/80 group-hover:text-cream transition-colors">
                  Shop
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              <div className="absolute inset-0 border border-cream/0 group-hover:border-cream/15 transition-colors" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
