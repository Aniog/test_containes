import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowUpRight } from "lucide-react";
import { format } from "date-fns";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/Reveal";

const POSTS = [
  {
    id: "how-to-layer-necklaces",
    title: "How to Layer Necklaces Without Overthinking It",
    excerpt:
      "Three lengths, one focal pendant, and the quiet confidence to stop there — our stylists' formula for an effortless stack.",
    date: "2026-07-08",
    tag: "Styling",
    readTime: "4 min read",
  },
  {
    id: "demi-fine-vs-fine",
    title: "Demi-Fine vs. Fine Jewelry: An Honest Guide",
    excerpt:
      "What the terms actually mean, where your money goes, and why demi-fine might be the smartest piece in your jewelry box.",
    date: "2026-06-22",
    tag: "Education",
    readTime: "6 min read",
  },
  {
    id: "caring-for-gold-plated",
    title: "Caring for Gold-Plated Jewelry (So It Lasts Years)",
    excerpt:
      "Five small habits — from the order you apply perfume to how you store your huggies — that keep the shine for years.",
    date: "2026-06-03",
    tag: "Care",
    readTime: "3 min read",
  },
  {
    id: "the-art-of-gifting",
    title: "The Art of Gifting Jewelry She'll Actually Wear",
    excerpt:
      "Read her jewelry box, not her wishlist. A gentle guide to choosing a piece that feels like it was always hers.",
    date: "2026-05-18",
    tag: "Gifting",
    readTime: "5 min read",
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const [featured, ...rest] = POSTS;

  return (
    <div ref={containerRef} className="bg-cream pt-16 md:pt-20">
      <header className="border-b border-sand bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Notes from the Atelier
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-ink md:text-6xl">
            The <em className="italic">Journal</em>
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        {/* Featured post */}
        <Reveal>
          <article className="group grid gap-6 border border-sand bg-ivory md:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[380px]">
              <img
                data-strk-img-id={`journal-featured-${featured.id}-5b3c9e`}
                data-strk-img={`[journal-${featured.id}-excerpt] [journal-${featured.id}-title] editorial photography`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="1100"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={featured.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-col justify-center p-7 md:p-12">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-taupe">
                <span className="bg-gold-soft px-3 py-1 text-espresso">
                  {featured.tag}
                </span>
                <span>{format(new Date(featured.date), "MMMM d, yyyy")}</span>
                <span>· {featured.readTime}</span>
              </div>
              <h2
                id={`journal-${featured.id}-title`}
                className="mt-4 font-serif text-3xl font-medium leading-tight text-ink md:text-4xl"
              >
                {featured.title}
              </h2>
              <p
                id={`journal-${featured.id}-excerpt`}
                className="mt-4 text-sm leading-relaxed text-espresso"
              >
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.2em] text-espresso transition-colors group-hover:text-gold">
                Read the Story <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </article>
        </Reveal>

        {/* Post grid */}
        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
          {rest.map((post, i) => (
            <Reveal key={post.id} delay={i * 90}>
              <article className="group flex h-full flex-col border border-sand bg-white">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    data-strk-img-id={`journal-${post.id}-8d2f4a`}
                    data-strk-img={`[journal-${post.id}-excerpt] [journal-${post.id}-title] editorial photography`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-taupe">
                    <span className="bg-gold-soft px-2.5 py-1 text-espresso">
                      {post.tag}
                    </span>
                    <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
                  </div>
                  <h2
                    id={`journal-${post.id}-title`}
                    className="mt-3 font-serif text-2xl font-medium leading-snug text-ink transition-colors group-hover:text-gold"
                  >
                    {post.title}
                  </h2>
                  <p
                    id={`journal-${post.id}-excerpt`}
                    className="mt-3 flex-1 text-sm leading-relaxed text-espresso"
                  >
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold">
                    Read More <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="font-serif text-2xl italic text-espresso">
            More stories are being written at the bench.
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-block border border-ink px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Browse the Collection
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
