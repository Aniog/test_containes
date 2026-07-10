import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "@/components/home/Newsletter";
import { Eyebrow } from "@/components/ui/Primitives";

const posts = [
  {
    id: "how-to-layer",
    title: "How to layer necklaces without overdoing it",
    excerpt: "Three rules from our atelier — and the pieces we reach for every morning.",
    date: "May 14, 2026",
    category: "Style Notes",
  },
  {
    id: "care-guide",
    title: "The five-minute care guide to demi-fine gold",
    excerpt: "Keep your Velmora pieces glowing for years with these simple rituals.",
    date: "April 28, 2026",
    category: "Materials",
  },
  {
    id: "behind-the-atelier",
    title: "Behind the atelier: a day in our LA studio",
    excerpt: "From sketch to final polish — a quiet look at how each piece is made.",
    date: "April 09, 2026",
    category: "Atelier",
  },
  {
    id: "gifting-edit",
    title: "The quiet gift guide (for the woman who has everything)",
    excerpt: "Six pieces under $100 that say everything without shouting.",
    date: "March 22, 2026",
    category: "Gifting",
  },
];

export default function Journal() {
  return (
    <>
      <section className="bg-ivory-light pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="mx-auto max-w-content px-5 md:px-8 lg:px-12 text-center">
          <Eyebrow>The Velmora Journal</Eyebrow>
          <h1 className="serif-display text-4xl md:text-6xl lg:text-7xl text-cocoa mt-4 leading-[1.05]">
            Stories, slowly told.
          </h1>
          <p className="mt-6 text-base md:text-lg text-cocoa-soft leading-relaxed max-w-xl mx-auto">
            Style notes, atelier diaries, and the quiet thinking behind the pieces we make.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {posts.map((post, i) => {
              const titleId = `journal-${post.id}-title`;
              const excerptId = `journal-${post.id}-excerpt`;
              const catId = `journal-${post.id}-cat`;
              return (
                <article key={post.id} className="group">
                  <Link to={`/journal/${post.id}`} className="block">
                    <div className="relative aspect-[4/3] bg-ivory-dark overflow-hidden mb-6">
                      <img
                        alt={post.title}
                        data-strk-img-id={`journal-${post.id}-img`}
                        data-strk-img={`[${excerptId}] [${titleId}] [${catId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                      />
                    </div>
                    <p id={catId} className="text-[10px] uppercase tracking-[0.22em] text-claret">
                      {post.category} · {post.date}
                    </p>
                    <h2 id={titleId} className="serif-display text-2xl md:text-3xl text-cocoa mt-3 group-hover:text-claret transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p id={excerptId} className="mt-3 text-sm text-cocoa-soft leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-cocoa group-hover:text-claret transition-colors">
                      Read more →
                    </span>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
