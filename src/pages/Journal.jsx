import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const entries = [
  {
    id: "how-to-layer",
    title: "How to layer necklaces without overdoing it",
    excerpt:
      "A simple formula for the everyday stack — three chains, three lengths, zero fuss.",
    category: "Style notes",
    imgId: "journal-layer-1a2b3c",
  },
  {
    id: "care-guide",
    title: "How to care for gold plated jewelry",
    excerpt:
      "A few small habits that keep demi-fine pieces looking new for years.",
    category: "Care guide",
    imgId: "journal-care-2b3c4d",
  },
  {
    id: "behind-the-atelier",
    title: "Inside the Lisbon atelier",
    excerpt:
      "The four pairs of hands behind every Velmora piece — and the process they refuse to rush.",
    category: "Behind the scenes",
    imgId: "journal-atelier-3c4d5e",
  },
  {
    id: "gift-guide",
    title: "The quiet gift guide",
    excerpt:
      "For the friend who has everything, the sister who never buys for herself, and the one you want to say thank you to.",
    category: "Gifting",
    imgId: "journal-gift-4d5e6f",
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <section className="bg-cream-100 border-b border-cream-200">
        <div className="container-editorial py-12 md:py-20">
          <p className="eyebrow mb-3">The Velmora Journal</p>
          <h1 className="font-serif font-light text-ink-900 text-[44px] md:text-[72px] leading-[1.02]">
            Stories, slowly told.
          </h1>
          <p className="mt-4 text-ink-700 text-base md:text-lg max-w-xl font-light">
            Style notes, behind-the-scenes, and the occasional love letter to
            the everyday.
          </p>
        </div>
      </section>

      <section className="container-editorial py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {entries.map((entry) => (
            <article key={entry.id} className="group">
              <Link to="#" className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-cocoa-800">
                  <img
                    alt={entry.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.04]"
                    data-strk-img-id={entry.imgId}
                    data-strk-img={`${entry.title} ${entry.excerpt} editorial jewelry`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  />
                </div>
                <p className="mt-5 eyebrow text-gold-600">{entry.category}</p>
                <h2 className="mt-2 font-serif text-ink-900 text-[26px] md:text-[32px] leading-[1.1] group-hover:text-gold-600 transition-colors duration-300">
                  {entry.title}
                </h2>
                <p className="mt-3 text-ink-700 text-base leading-relaxed font-light max-w-lg">
                  {entry.excerpt}
                </p>
                <p className="mt-4 text-[11px] uppercase tracking-btn text-ink-900 group-hover:text-gold-600 transition-colors duration-300">
                  Read more →
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
