import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import StockBackground from "@/components/ui/StockBackground";

const POSTS = [
  {
    id: "styling-gold",
    title: "How to Layer Gold Without Overdoing It",
    excerpt:
      "Three rules our founder uses when stacking necklaces for a wedding — and the one she never breaks.",
    date: "May 2025",
    readTime: "4 min",
    imageQuery: "stacked gold necklaces on bare skin editorial closeup",
  },
  {
    id: "care-guide",
    title: "The Quiet Guide to Caring for Plated Jewelry",
    excerpt:
      "Five small habits that keep demi-fine gold looking new for years — and one myth to forget.",
    date: "Apr 2025",
    readTime: "5 min",
    imageQuery: "gold jewelry in linen pouch soft natural light",
  },
  {
    id: "gifting",
    title: "What to Give the Woman Who Has Everything",
    excerpt:
      "A short, considered list — from the engagement-gift to the I'm-thinking-of-you piece.",
    date: "Mar 2025",
    readTime: "3 min",
    imageQuery: "gift wrapped jewelry box linen ribbon warm",
  },
  {
    id: "atelier",
    title: "Inside the Atelier: A Day in Florence",
    excerpt:
      "What it actually looks like to cast, set, and finish a piece by hand — at the bench that makes ours.",
    date: "Feb 2025",
    readTime: "6 min",
    imageQuery: "goldsmith working at workbench warm light Florence",
  },
];

export default function Journal() {
  return (
    <>
      <section className="relative">
        <StockBackground
          id="journal-hero"
          query="stack of magazines and gold jewelry on linen soft warm"
          ratio="16x9"
          width={1600}
          className="h-[40vh] min-h-[320px]"
          overlayClassName="bg-gradient-to-b from-ink/30 to-ink/60"
        >
          <div className="container-page h-full flex flex-col justify-end pb-10 text-ivory">
            <p className="eyebrow text-ivory/80 mb-3">The Journal</p>
            <h1 className="font-serif text-5xl md:text-6xl font-light leading-[1.02] max-w-2xl text-balance">
              Stories, slowly told.
            </h1>
          </div>
        </StockBackground>
      </section>

      <section className="bg-ivory">
        <div className="container-page py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {POSTS.map((p, i) => (
              <article
                key={p.id}
                className={`group ${i === 0 ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-10" : ""}`}
              >
                <Link
                  to="#"
                  className={`block ${i === 0 ? "" : "mb-5"} ${i === 0 ? "md:order-1" : ""}`}
                >
                  <StockImage
                    id={`journal-${p.id}`}
                    query={p.imageQuery}
                    ratio={i === 0 ? "4x3" : "4x5"}
                    width={i === 0 ? 1200 : 800}
                    alt={p.title}
                    className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </Link>
                <div className={`${i === 0 ? "md:order-2 md:flex md:flex-col md:justify-center" : ""}`}>
                  <p className="eyebrow text-taupe mb-3">
                    {p.date} · {p.readTime}
                  </p>
                  <h2 className={`font-serif font-light text-ink leading-[1.1] ${i === 0 ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                    <Link
                      to="#"
                      className="hover:text-gold transition-colors"
                    >
                      {p.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm text-ink/75 leading-relaxed max-w-md">
                    {p.excerpt}
                  </p>
                  <Link
                    to="#"
                    className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-eyebrow uppercase text-ink group-hover:text-gold transition-colors"
                  >
                    Read
                    <ArrowRight
                      className="w-3 h-3 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
