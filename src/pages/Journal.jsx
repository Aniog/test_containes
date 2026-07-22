import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowUpRight } from "lucide-react";
import StrkImage from "@/components/StrkImage";

const POSTS = [
  {
    id: "care-guide",
    title: "How to Care for Demi-Fine Jewelry",
    excerpt: "Five small rituals that keep 18K gold plated pieces glowing for years.",
    date: "July 2026",
    imgId: "journal-care-img-j1k2l3",
  },
  {
    id: "layering",
    title: "The Art of the Necklace Layer",
    excerpt: "Start with a chain, add a pendant, finish with texture — our formula for effortless layers.",
    date: "June 2026",
    imgId: "journal-layer-img-m4n5o6",
  },
  {
    id: "gifting",
    title: "A Gifting Guide for the Jewelry Lover",
    excerpt: "From huggies to heirloom sets — what to give, and how to make it feel personal.",
    date: "May 2026",
    imgId: "journal-gift-img-p7q8r9",
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <section className="border-b border-noir-line bg-noir-soft">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-luxe text-gold">The Journal</p>
          <h1 id="journal-title" className="mt-3 font-serif text-4xl font-medium text-cream md:text-6xl">
            Notes from the <span className="italic text-gold-soft">Atelier</span>
          </h1>
          <p id="journal-subtitle" className="mt-4 max-w-lg text-sm leading-relaxed text-sand">
            Care rituals, styling notes, and stories behind the pieces — written slowly, like
            everything we make.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {POSTS.map((post) => {
            const titleId = `journal-${post.id}-title`;
            const excerptId = `journal-${post.id}-excerpt`;
            return (
              <article key={post.id} className="group">
                <Link to="/journal" className="block overflow-hidden rounded-sm border border-noir-line">
                  <div className="aspect-[4/3] w-full">
                    <StrkImage
                      imgId={post.imgId}
                      query={`[${excerptId}] [${titleId}] [journal-subtitle] warm gold jewelry editorial photography`}
                      ratio="4x3"
                      width={800}
                      alt={post.title}
                      imgClassName="transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <p className="mt-5 text-[10px] font-semibold uppercase tracking-luxe text-gold">
                  {post.date}
                </p>
                <Link to="/journal">
                  <h2
                    id={titleId}
                    className="mt-2 font-serif text-2xl font-medium leading-snug text-cream transition-colors duration-300 group-hover:text-gold-soft"
                  >
                    {post.title}
                  </h2>
                </Link>
                <p id={excerptId} className="mt-2 text-sm leading-relaxed text-sand">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-luxe text-cream/80 transition-colors group-hover:text-gold">
                  Read more
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
