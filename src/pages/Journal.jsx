import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const ARTICLES = [
  {
    id: "j1",
    title: "How to Layer Necklaces, the Quiet Way",
    excerpt: "Three rules of editorial layering — and the one that actually matters.",
    category: "Style",
    imgId: "journal-layer-necklaces-7d3a2e",
    titleId: "journal-layer-necklaces-title",
    descId: "journal-layer-necklaces-desc",
  },
  {
    id: "j2",
    title: "Caring for Demi-Fine Gold",
    excerpt: "A small ritual that keeps your pieces looking new for years.",
    category: "Care",
    imgId: "journal-care-demi-fine-2b8c5e",
    titleId: "journal-care-demi-fine-title",
    descId: "journal-care-demi-fine-desc",
  },
  {
    id: "j3",
    title: "The Heirloom We Designed for Gifting",
    excerpt: "Behind the scenes of the Royal Heirloom Set.",
    category: "Atelier",
    imgId: "journal-heirloom-9f4e1c",
    titleId: "journal-heirloom-title",
    descId: "journal-heirloom-desc",
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div ref={containerRef} className="bg-cream text-ink pt-28 md:pt-36">
      <header className="max-w-7xl mx-auto px-5 md:px-8 text-center pb-12">
        <p className="font-sans uppercase tracking-widest2 text-[11px] text-taupe mb-4">
          The Journal
        </p>
        <h1 className="font-serif text-4xl md:text-6xl leading-tight">
          Letters from the atelier.
        </h1>
      </header>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {ARTICLES.map((a) => (
            <article key={a.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] bg-bone overflow-hidden">
                <img
                  alt={a.title}
                  data-strk-img-id={a.imgId}
                  data-strk-img={`[${a.descId}] [${a.titleId}] editorial demi-fine gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-widest2 text-taupe">
                {a.category}
              </p>
              <h2
                id={a.titleId}
                className="mt-2 font-serif text-2xl text-ink leading-tight group-hover:text-champagne transition-colors duration-300"
              >
                {a.title}
              </h2>
              <p
                id={a.descId}
                className="mt-2 text-sm text-mocha/85 leading-relaxed"
              >
                {a.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
