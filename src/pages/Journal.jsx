import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const POSTS = [
  {
    id: "j1",
    title: "How to Layer Necklaces, the Velmora Way",
    excerpt:
      "Three lengths, one tone, and the rule of odd numbers. A guide to layering without overdoing it.",
    tag: "Style",
    imgId: "journal-post-1",
    titleId: "journal-post-1-title",
    excerptId: "journal-post-1-excerpt",
  },
  {
    id: "j2",
    title: "Why We Chose 18k Gold Plating",
    excerpt:
      "On the difference between gold-filled, gold-plated, and vermeil — and why the warmth of demi-fine wins.",
    tag: "Craft",
    imgId: "journal-post-2",
    titleId: "journal-post-2-title",
    excerptId: "journal-post-2-excerpt",
  },
  {
    id: "j3",
    title: "Inside Our Lisbon Atelier",
    excerpt:
      "A morning at the bench with our head jeweler — soldering, polishing, and the smell of beeswax.",
    tag: "Atelier",
    imgId: "journal-post-3",
    titleId: "journal-post-3-title",
    excerptId: "journal-post-3-excerpt",
  },
  {
    id: "j4",
    title: "The Gift Guide for Forever Pieces",
    excerpt:
      "Five jewelry gifts that will outlast the wrapping paper, the season and the moment.",
    tag: "Gifting",
    imgId: "journal-post-4",
    titleId: "journal-post-4-title",
    excerptId: "journal-post-4-excerpt",
  },
];

export default function Journal() {
  const containerRef = useRef(null);
  useEffect(() => {
    const f = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(f);
  }, []);

  return (
    <div ref={containerRef} className="bg-bone pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
          Journal
        </p>
        <h1 className="font-serif font-light text-5xl md:text-7xl text-ink leading-[1.05] max-w-3xl">
          Notes from the <em className="italic">atelier</em>.
        </h1>
        <p className="mt-6 max-w-xl text-ink/75 text-[15px] leading-relaxed">
          Style, craft, and the quiet rituals of dressing for yourself. New
          pieces every other week.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {POSTS.map((post, idx) => (
            <article key={post.id} className={idx === 0 ? "md:col-span-2" : ""}>
              <a href="#" className="group block">
                <div
                  className={`relative bg-cream overflow-hidden ${
                    idx === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.excerptId}] [${post.titleId}]`}
                    data-strk-img-ratio={idx === 0 ? "16x9" : "4x3"}
                    data-strk-img-width={idx === 0 ? "1600" : "900"}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-6 text-[10px] tracking-[0.3em] uppercase text-gold">
                  {post.tag}
                </p>
                <h2
                  id={post.titleId}
                  className={`mt-3 font-serif font-light text-ink ${
                    idx === 0 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
                  }`}
                >
                  {post.title}
                </h2>
                <p
                  id={post.excerptId}
                  className="mt-3 text-ink/75 text-[15px] leading-relaxed max-w-md"
                >
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-block link-underline text-[11px] tracking-[0.3em] uppercase text-ink">
                  Read →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
