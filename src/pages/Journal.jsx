import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const POSTS = [
  {
    id: "how-to-layer",
    title: "How to Layer Necklaces Without the Tangle",
    excerpt:
      "Three rules our stylists use every day — and the pieces that play best together.",
    category: "Style Notes",
    readTime: "4 min",
    imageId: "journal-1-2c8e4a",
    query: "[journal-card-title-1] [journal-card-category-1] layered gold necklaces editorial portrait",
  },
  {
    id: "care-101",
    title: "Gold Plated Jewelry, Properly Cared For",
    excerpt:
      "The four habits that keep demi-fine looking brand new — and the one thing to avoid.",
    category: "Care Guide",
    readTime: "3 min",
    imageId: "journal-2-9f1b6d",
    query: "[journal-card-title-2] [journal-card-category-2] gold plated jewelry care editorial close up",
  },
  {
    id: "in-the-studio",
    title: "In the Studio: The Making of a Huggie",
    excerpt:
      "From raw brass to the final hand-polish — a behind-the-scenes look at the workshop.",
    category: "Behind the Brand",
    readTime: "6 min",
    imageId: "journal-3-5a3c8e",
    query: "[journal-card-title-3] [journal-card-category-3] jewelry studio making huggie editorial warm",
  },
  {
    id: "earrings-for-every-ear",
    title: "Earrings for Every Ear Shape",
    excerpt:
      "A quick visual guide to the styles that flatter lobes, helix, and everything in between.",
    category: "Style Notes",
    readTime: "5 min",
    imageId: "journal-4-7d2f1b",
    query: "[journal-card-title-4] [journal-card-category-4] gold earrings editorial model portrait warm",
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="bg-editorial-alt pt-32 md:pt-40 pb-12 md:pb-20"
      >
        <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12 text-center">
          <p className="eyebrow mb-4">The Journal</p>
          <h1 className="font-display text-cocoa-900 text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.01em]">
            Notes from the <em className="italic font-normal">studio</em>
          </h1>
          <p className="mt-5 text-cocoa-700 text-[15px] max-w-xl mx-auto leading-relaxed">
            Style notes, care guides, and quiet dispatches from the workshop.
          </p>
        </div>
      </section>

      <section className="section bg-editorial">
        <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {POSTS.map((post) => (
              <Link
                key={post.id}
                to={`/journal#${post.id}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden bg-ivory-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imageId}
                    data-strk-img={post.query}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="pt-5">
                  <div className="flex items-center gap-3 text-[11px] tracking-button uppercase text-taupe-500 mb-2">
                    <span id={`journal-card-category-${post.id.split('-').pop()}`}>
                      {post.category}
                    </span>
                    <span>·</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h3
                    id={`journal-card-title-${post.id.split('-').pop()}`}
                    className="font-display text-cocoa-900 text-2xl md:text-3xl leading-[1.15] tracking-[-0.005em] mb-3 group-hover:text-brass-700 transition-colors"
                  >
                    {post.title}
                  </h3>
                  <p className="text-cocoa-700 text-[15px] leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] tracking-button uppercase text-cocoa-900 group-hover:text-brass-700 transition-colors">
                    Read More
                    <ArrowUpRight
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.6}
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
