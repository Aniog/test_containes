import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { editorialSVG } from "@/data/placeholders";
import { useReveal } from "@/lib/useReveal";

const tiles = [
  {
    key: "editorialEarrings",
    title: "Earrings",
    blurb: "Studs, cuffs, drops",
    href: "/shop?category=earrings",
  },
  {
    key: "editorialNecklaces",
    title: "Necklaces",
    blurb: "Whisper chains & statements",
    href: "/shop?category=necklaces",
  },
  {
    key: "editorialHuggies",
    title: "Huggies",
    blurb: "The everyday classic",
    href: "/shop?category=huggies",
  },
];

export default function CategoryTiles() {
  const ref = useReveal();
  return (
    <section className="bg-cream-50 py-20 md:py-28">
      <div className="max-w-editorial mx-auto px-5 sm:px-8" ref={ref}>
        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-4">Shop by category</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] max-w-xl">
              The collection, considered.
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[0.7rem] tracking-widest2 uppercase text-ink hover:text-gold transition-colors font-sans font-medium border-b border-ink hover:border-gold pb-1 self-start sm:self-auto"
          >
            Browse all
            <ArrowRight size={14} strokeWidth={1.6} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {tiles.map((t, i) => (
            <Link
              key={t.key}
              to={t.href}
              className="reveal group relative block aspect-[3/4] overflow-hidden bg-cream-200"
              style={{ transitionDelay: `${i * 100}ms` }}
              aria-label={`Shop ${t.title}`}
            >
              <img
                src={editorialSVG(t.key)}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-500"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-cream">
                <p className="font-serif text-2xl sm:text-3xl mb-1">{t.title}</p>
                <p className="text-[0.65rem] tracking-widest2 uppercase text-cream/75 font-sans">
                  {t.blurb}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-[0.65rem] tracking-widest2 uppercase text-cream/90 group-hover:text-gold transition-colors font-sans font-medium">
                  Discover
                  <ArrowRight size={12} strokeWidth={1.6} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
