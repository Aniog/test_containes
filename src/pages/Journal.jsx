import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useStrkImages } from "@/lib/useStrkImages";

const articles = [
  {
    slug: "how-to-style-ear-stacks",
    eyebrow: "Style Notes",
    title: "How to build an ear stack you'll never take off",
    excerpt: "Three pieces, four ways, and the quiet rules of layering gold.",
    imgId: "journal-ear-stacks-7c2d",
    query: "Ear stack gold jewelry editorial portrait close-up on model",
    ratio: "4x5",
  },
  {
    slug: "caring-for-gold-plate",
    eyebrow: "Care Guide",
    title: "The five-second routine that keeps gold-plated jewelry new",
    excerpt: "No polishers, no chemicals — just water, a soft cloth, and one habit.",
    imgId: "journal-care-9f4a",
    query: "Gold plated jewelry care soft cloth editorial flat lay",
    ratio: "4x5",
  },
  {
    slug: "gifting-without-overthinking",
    eyebrow: "Gifting",
    title: "Gifting, without overthinking it",
    excerpt: "A short guide to choosing the right piece for the right person.",
    imgId: "journal-gift-2b1c",
    query: "Velmora Royal Heirloom jewelry gift box editorial flat lay",
    ratio: "4x5",
  },
  {
    slug: "the-everyday-necklace",
    eyebrow: "Lookbook",
    title: "The everyday necklace, layered three ways",
    excerpt: "Flora, alone, layered, or with a sweatshirt. A study in restraint.",
    imgId: "journal-necklace-5e8d",
    query: "Gold crystal necklace layered editorial portrait three ways",
    ratio: "4x5",
  },
];

export default function Journal() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <div ref={ref} className="bg-ivory-50">
      <header className="border-b border-ink-800/10 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32 pb-12 sm:pb-14">
          <p className="eyebrow">The Journal</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl text-ink-800 text-balance">
            Studio notes & quiet inspiration
          </h1>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
          {articles.map((a) => (
            <article key={a.slug} className="group">
              <Link to={`/journal/${a.slug}`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink-800">
                  <img
                    alt={a.title}
                    data-strk-img-id={a.imgId}
                    data-strk-img={a.query}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="900"
                    loading="lazy"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.04]"
                  />
                  <div className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center border border-ivory-50/40 text-ivory-50 transition-all duration-500 group-hover:bg-ivory-50 group-hover:text-ink-900 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <p className="eyebrow mt-5">{a.eyebrow}</p>
                <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-ink-800 text-balance">
                  {a.title}
                </h2>
                <p className="mt-2 max-w-prose text-ink-600 text-pretty">{a.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
