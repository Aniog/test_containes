import React from "react";
import { ArrowUpRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";
import Reveal from "@/components/ui/Reveal";

const posts = [
  {
    id: "care-guide",
    title: "How to Care for Demi-Fine Jewelry",
    excerpt: "Five quiet rituals that keep 18k gold plating luminous for years.",
    date: "July 2026",
    imgId: "journal-care-3a9d52",
    titleId: "journal-care-title",
    excerptId: "journal-care-excerpt",
  },
  {
    id: "stacking",
    title: "The Art of the Ear Stack",
    excerpt: "Cuffs, huggies and drops — composing an ear that tells a story.",
    date: "June 2026",
    imgId: "journal-stack-77b1e0",
    titleId: "journal-stack-title",
    excerptId: "journal-stack-excerpt",
  },
  {
    id: "gifting",
    title: "A Gifting Guide for Every Her",
    excerpt: "Sister, mother, partner, friend — the piece that always lands.",
    date: "May 2026",
    imgId: "journal-gift-c4e28a",
    titleId: "journal-gift-title",
    excerptId: "journal-gift-excerpt",
  },
];

export default function Journal() {
  return (
    <div className="bg-ivory pt-16 md:pt-20">
      <header className="border-b border-line bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <p className="eyebrow">Notes from the Atelier</p>
          <h1 className="mt-3 font-serif text-4xl font-light uppercase tracking-[0.12em] text-ink md:text-5xl">
            The Journal
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 120}>
              <article className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden bg-sand">
                  <StrkImage
                    imgId={post.imgId}
                    query={`[${post.excerptId}] [${post.titleId}] gold jewelry editorial`}
                    ratio="4x3"
                    width="700"
                    alt={post.title}
                    className="transition-transform duration-700 ease-luxe group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-muted">
                  {post.date}
                </p>
                <h2
                  id={post.titleId}
                  className="mt-2 flex items-start justify-between gap-3 font-serif text-2xl font-light leading-snug text-ink transition-colors duration-300 group-hover:text-gold-deep"
                >
                  {post.title}
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </h2>
                <p id={post.excerptId} className="mt-2 text-sm font-light leading-relaxed text-muted">
                  {post.excerpt}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
