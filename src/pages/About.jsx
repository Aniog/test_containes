import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const values = [
  {
    title: "Quietly made",
    body: "Each piece is cast and finished in small batches by a small studio of makers we know by name.",
  },
  {
    title: "Worn, not stored",
    body: "Demi-fine 18K gold plating, hypoallergenic and made for daily wear — not for the jewelry box.",
  },
  {
    title: "Considered packaging",
    body: "Recycled paper, suede pouches, and a signature cream and gold box. Designed to be kept.",
  },
];

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div ref={ref} className="bg-canvas">
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-editorial mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
              About Velmora
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-espresso leading-[1.05] tracking-tight">
              A small studio with a long view of jewelry.
            </h1>
            <p className="mt-6 text-espresso/80 text-base md:text-lg leading-relaxed">
              Velmora is a demi-fine jewelry studio based between Lisbon and Brooklyn. We
              design jewelry to live in — pieces that earn their place in your daily
              rotation, made to be layered, gifted, and eventually passed down.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial image */}
      <section className="max-w-editorial mx-auto px-6 md:px-10">
        <div className="relative aspect-[16/9] md:aspect-[16/7] bg-surface overflow-hidden">
          <img
            alt="The Velmora studio"
            data-strk-img-id="about-studio"
            data-strk-img="[about-title-1] [about-eyebrow-1] jewelry studio warm light editorial"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Values */}
      <section className="max-w-editorial mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {values.map((v, i) => (
            <article key={v.title}>
              <p
                id={`about-eyebrow-${i + 1}`}
                className="text-[11px] uppercase tracking-widest2 text-gold mb-3"
              >
                0{i + 1}
              </p>
              <h3
                id={`about-title-${i + 1}`}
                className="font-serif text-2xl md:text-3xl text-espresso tracking-tight"
              >
                {v.title}
              </h3>
              <p className="mt-3 text-taupe text-sm md:text-base leading-relaxed">{v.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Long-form copy split */}
      <section className="bg-surface border-y border-dune">
        <div className="max-w-editorial mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 aspect-[4/5] bg-canvas overflow-hidden">
            <img
              alt="Founder at work"
              data-strk-img-id="about-founder"
              data-strk-img="[about-detail-title] [about-detail-eyebrow] woman designer working with gold jewelry warm studio"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-6">
            <p
              id="about-detail-eyebrow"
              className="text-[11px] uppercase tracking-widest2 text-gold mb-3"
            >
              A note from our founder
            </p>
            <h2
              id="about-detail-title"
              className="font-serif text-4xl md:text-5xl text-espresso tracking-tight leading-[1.05]"
            >
              I started Velmora to slow jewelry down.
            </h2>
            <div className="mt-5 space-y-4 text-espresso/80 text-[15px] md:text-base leading-relaxed">
              <p>
                After a decade in fashion, I wanted to make something quieter. Jewelry that
                could be worn to a wedding and a Tuesday — that didn’t shout to be noticed,
                and didn’t fade after a season.
              </p>
              <p>
                Every piece we make is a small, careful thing. We hope it finds a place in
                your life, and one day, in someone else’s.
              </p>
              <p className="font-serif italic text-espresso text-lg pt-2">
                — Mara Velmora, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-editorial mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-espresso tracking-tight">
          Begin your collection
        </h2>
        <p className="mt-3 text-taupe max-w-lg mx-auto">
          Start with a piece that wears well with everything — and add quietly from there.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center justify-center bg-espresso text-canvas h-12 px-8 text-[11px] uppercase tracking-widest2 font-medium hover:bg-espresso/90 transition-colors"
        >
          Shop the Collection
        </Link>
      </section>
    </div>
  );
}
