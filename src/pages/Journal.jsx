import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Artwork from "@/components/ui/Artwork";

const POSTS = [
  {
    id: "how-to-layer",
    eyebrow: "Styling",
    title: "How to layer necklaces without the tangle",
    excerpt:
      "A three-step method our designers use every morning — and the one combination that always works.",
    art: "floraNecklace",
  },
  {
    id: "caring-for-gold",
    eyebrow: "Care",
    title: "Five habits that keep your gold-plated jewelry glowing",
    excerpt:
      "Demi-fine is made to be worn — but a few small rituals go a long way. Here is what we recommend.",
    art: "sphereHuggies",
  },
  {
    id: "story-of-the-cuff",
    eyebrow: "Behind the pieces",
    title: "The story of the Vivid Aura cuff",
    excerpt:
      "How a single ear cuff — made for a friend, worn every day — became our best-selling piece.",
    art: "earCuff",
  },
];

export default function Journal() {
  return (
    <article className="bg-ivory">
      <section className="container-editorial pt-28 md:pt-32 pb-10 text-center max-w-2xl mx-auto">
        <div className="label-eyebrow text-mute mb-3">Journal</div>
        <h1 className="font-display text-5xl md:text-6xl leading-[1.02] text-ink">
          Notes from the studio.
        </h1>
      </section>

      <section className="container-editorial pb-20 md:pb-28">
        {/* Featured (first) */}
        <Link
          to="/shop"
          className="group block mb-10 md:mb-14 relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-bone img-zoom"
        >
          <Artwork
            variant={POSTS[0].art}
            tone="deep"
            className="absolute inset-0 w-full h-full"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(31,26,23,0.1) 30%, rgba(31,26,23,0.55) 100%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14 text-ivory">
            <div className="label-eyebrow text-ivory/70 mb-3">
              {POSTS[0].eyebrow}
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-2xl">
              {POSTS[0].title}
            </h2>
            <p className="mt-4 max-w-lg text-ivory/80 text-sm md:text-base">
              {POSTS[0].excerpt}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase">
              Read More <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {POSTS.slice(1).map((post) => (
            <Link
              key={post.id}
              to="/shop"
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-bone img-zoom">
                <Artwork
                  variant={post.art}
                  tone="deep"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="mt-5">
                <div className="label-eyebrow text-mute">{post.eyebrow}</div>
                <h3 className="mt-2 font-display text-2xl md:text-3xl text-ink leading-tight group-hover:text-gold-dark transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
