import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const posts = [
  {
    id: "care-guide",
    title: "A Quiet Guide to Caring for Gold Plated Jewelry",
    excerpt:
      "Three small habits to keep your demi-fine pieces looking new — and a few we no longer recommend.",
    tag: "Care",
    readTime: "4 min",
    search: "gold plated jewelry on linen care editorial flatlay",
  },
  {
    id: "ear-stack",
    title: "The Art of the Everyday Ear Stack",
    excerpt:
      "From a single stud to a layered line-up — how to build an ear that feels considered, not cluttered.",
    tag: "Styling",
    readTime: "6 min",
    search: "ear stack gold earrings editorial close-up portrait",
  },
  {
    id: "inside-studio",
    title: "Inside the Velmora Studio",
    excerpt:
      "A morning with our makers in Lisbon, where every piece is cast and finished by hand.",
    tag: "Behind the Scenes",
    readTime: "5 min",
    search: "jewelry studio artisan working on gold pieces warm light",
  },
  {
    id: "gifting",
    title: "A Short Guide to Gifting Demi-Fine",
    excerpt:
      "How to choose a piece that will be worn — and remembered — long after the bow is undone.",
    tag: "Gifting",
    readTime: "3 min",
    search: "gold jewelry gift box wrapped cream ribbon editorial",
  },
];

export default function Journal() {
  const ref = useRef(null);
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div ref={ref} className="bg-canvas">
      <section className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="max-w-editorial mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
            The Journal
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-espresso tracking-tight">
            Notes from the studio
          </h1>
        </div>
      </section>

      <section className="max-w-editorial mx-auto px-6 md:px-10 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {posts.map((p) => (
            <article key={p.id} className="group">
              <Link to="/journal" className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <img
                    alt={p.title}
                    data-strk-img-id={`journal-${p.id}`}
                    data-strk-img={`[journal-excerpt-${p.id}] [journal-title-${p.id}] ${p.tag.toLowerCase()}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] duration-700"
                  />
                </div>
                <div className="pt-6">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest2 text-taupe">
                    <span className="text-gold">{p.tag}</span>
                    <span aria-hidden="true">·</span>
                    <span>{p.readTime} read</span>
                  </div>
                  <h2
                    id={`journal-title-${p.id}`}
                    className="mt-3 font-serif text-2xl md:text-3xl text-espresso leading-snug tracking-tight group-hover:text-gold transition-colors"
                  >
                    {p.title}
                  </h2>
                  <p
                    id={`journal-excerpt-${p.id}`}
                    className="mt-3 text-taupe text-[15px] leading-relaxed"
                  >
                    {p.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
