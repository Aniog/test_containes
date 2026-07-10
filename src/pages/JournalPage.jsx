import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";
import Newsletter from "@/components/home/Newsletter";

const POSTS = [
  {
    id: "stack-quietly",
    title: "How to Stack Quietly",
    excerpt: "Three rules for layering demi-fine without it looking like you tried.",
    imgId: "journal-1-img-3a4b5c",
    query: "editorial closeup of stacked gold necklaces on linen background warm natural light",
    date: "May 12, 2026",
    readTime: "4 min read",
  },
  {
    id: "care-of-gold",
    title: "A Quiet Ritual for Gold",
    excerpt: "The five-minute care routine that keeps gold plate looking new for years.",
    imgId: "journal-2-img-6d7e8f",
    query: "soft still life of a small gold jewelry polishing cloth on linen next to a delicate gold necklace",
    date: "April 28, 2026",
    readTime: "3 min read",
  },
  {
    id: "gifting-quietly",
    title: "Gifting, Without the Noise",
    excerpt: "What to give the woman who already has everything — and how to wrap it.",
    imgId: "journal-3-img-9g0h1i",
    query: "flat lay of cream linen gift box with a gold necklace inside soft window light editorial",
    date: "April 04, 2026",
    readTime: "5 min read",
  },
];

export default function JournalPage() {
  return (
    <>
      <section className="bg-ink-950 text-textondark">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <span className="label-cap text-champagne-300">Journal</span>
          <h1
            id="journal-title"
            className="mt-4 font-serif text-5xl md:text-7xl font-light leading-[1.02]"
          >
            Stories, slowly.
          </h1>
          <p
            id="journal-subtitle"
            className="mt-4 text-textmuteondark max-w-xl"
          >
            Notes from the studio, on how we make — and wear — the things we keep.
          </p>
        </div>
      </section>

      <section className="bg-sand-50">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
            {POSTS.map((post) => (
              <article key={post.id} className="group">
                <Link to="#" className="block">
                  <div className="aspect-[4/5] overflow-hidden bg-sand-100">
                    <StrkImage
                      imgId={post.imgId}
                      query={post.query}
                      ratio="4x5"
                      width={800}
                      alt={post.title}
                      className="w-full h-full editorial-transition group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-5">
                    <p className="label-cap text-textmute">
                      {post.date} · {post.readTime}
                    </p>
                    <h2 className="mt-2 font-serif text-2xl font-light text-ink-950 group-hover:text-champagne-600 editorial-transition">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-textmute leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 label-cap text-ink-950 group-hover:text-champagne-600 editorial-transition">
                      Read More <ArrowRight size={12} strokeWidth={1.4} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
