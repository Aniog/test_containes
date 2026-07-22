import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { usePageFx } from "@/hooks/usePageFx";
import { StrkImage } from "@/components/ui/StrkMedia";

const POSTS = [
  {
    id: "how-to-layer-necklaces",
    title: "How to Layer Necklaces Like an Editor",
    category: "Styling",
    date: "Jul 2026",
    excerpt: "The three-length rule we use for an effortless, layered neck.",
    query: "layered gold necklaces styling, elegant neck, warm editorial",
  },
  {
    id: "demi-fine-vs-fine",
    title: "Demi-Fine vs. Fine: What's the Difference?",
    category: "Education",
    date: "Jun 2026",
    excerpt: "Why demi-fine is the smart middle ground for everyday luxury.",
    query: "gold jewelry flat lay, elegant, educational, warm light",
  },
  {
    id: "caring-for-gold-plated",
    title: "Caring for Gold-Plated Jewelry",
    category: "Care",
    date: "Jun 2026",
    excerpt: "Five small habits that keep your pieces glowing for years.",
    query: "gold jewelry care, soft cloth, elegant, warm light",
  },
  {
    id: "the-gift-guide",
    title: "The Velmora Gift Guide",
    category: "Gifting",
    date: "May 2026",
    excerpt: "Thoughtful gold pieces for every person and every moment.",
    query: "luxury gold jewelry gift box, elegant, warm editorial",
  },
  {
    id: "huggies-three-ways",
    title: "Huggies, Three Ways",
    category: "Styling",
    date: "May 2026",
    excerpt: "One pair of huggies, styled for day, desk and dinner.",
    query: "gold huggie earrings styling, elegant, warm editorial",
  },
  {
    id: "behind-the-atelier",
    title: "Behind the Atelier: A Day in Gold",
    category: "Journal",
    date: "Apr 2026",
    excerpt: "A quiet morning with the makers behind your favorite pieces.",
    query: "jewelry atelier artisan, crafting gold, warm editorial",
  },
];

export default function Journal() {
  const ref = usePageFx([]);

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 md:pt-32 lg:px-12">
      <div className="border-b border-line pb-8 text-center">
        <span className="font-sans text-xs font-semibold uppercase tracking-overline text-gold">
          The Journal
        </span>
        <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
          Notes on Gold
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-inkSoft">
          Styling notes, care guides and quiet dispatches from the atelier.
        </p>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post, i) => {
          const titleId = `journal-${post.id}-title`;
          const excerptId = `journal-${post.id}-excerpt`;
          return (
            <article
              key={post.id}
              className="group reveal flex flex-col"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Link to="/journal" className="relative block overflow-hidden rounded-sm">
                <StrkImage
                  imgId={`journal-${post.id}`}
                  query={`[${excerptId}] [${titleId}] ${post.query}`}
                  ratio="4x3"
                  width={700}
                  alt={post.title}
                  className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col pt-5">
                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-luxe">
                  <span className="text-gold">{post.category}</span>
                  <span className="h-px w-6 bg-line" />
                  <span className="text-inkSoft">{post.date}</span>
                </div>
                <h2
                  id={titleId}
                  className="mt-3 font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-gold"
                >
                  <Link to="/journal">{post.title}</Link>
                </h2>
                <p id={excerptId} className="mt-2 text-sm leading-relaxed text-inkSoft">
                  {post.excerpt}
                </p>
                <Link
                  to="/journal"
                  className="mt-4 inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-luxe text-gold"
                >
                  Read More
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
