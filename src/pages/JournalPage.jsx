import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const POSTS = [
  {
    id: "p-1",
    eyebrow: "Style Notes",
    title: "How to stack huggies without overthinking it",
    excerpt:
      "Three rules (kind of) for an effortless, editorial ear — and the pieces we keep reaching for.",
  },
  {
    id: "p-2",
    eyebrow: "Behind the Atelier",
    title: "The slow craft of 18K gold plating",
    excerpt:
      "A glimpse into the seven-step process that gives our pieces their warm, lived-in finish.",
  },
  {
    id: "p-3",
    eyebrow: "Gifting",
    title: "For the woman who buys her own jewelry",
    excerpt:
      "A short guide to gifting the woman in your life who already has everything she needs.",
  },
];

export default function JournalPage() {
  return (
    <section className="bg-bone text-ink">
      <div className="container-editorial pt-32 md:pt-40 pb-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow">Journal</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl font-light leading-[1.05]">
            Stories, notes, and the{" "}
            <span className="italic text-gold-deep">occasional secret</span>.
          </h1>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post) => (
            <li key={post.id} className="group">
              <div className="aspect-[4/5] bg-warm-radial-soft mb-5" />
              <p className="eyebrow">{post.eyebrow}</p>
              <h2 className="mt-2 font-serif text-2xl md:text-3xl font-light leading-tight text-ink group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-muted-light font-sans leading-relaxed">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-editorial text-ink group-hover:text-gold transition-colors">
                Read more
                <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-20 text-center">
          <Link to="/shop" className="editorial-link">
            Browse the collection
            <ArrowRight className="inline-block ml-2 w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
