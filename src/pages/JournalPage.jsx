import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ProductArt } from "@/components/decor/JewelryArt";
import { useReveal } from "@/hooks/useReveal";

const POSTS = [
  {
    id: "how-to-stack",
    title: "How to stack huggies without overthinking it",
    excerpt: "Three rules from the studio — and the pairs we reach for most.",
    category: "Styling",
    read: "4 min read",
    imageKey: "sphereHuggieOn",
  },
  {
    id: "care-guide",
    title: "A small, honest care guide for plated gold",
    excerpt: "What to do (and what to stop doing) to keep your pieces glowing.",
    category: "Care",
    read: "3 min read",
    imageKey: "floralNecklaceOn",
  },
  {
    id: "gift-edit",
    title: "The wedding-guest gift edit",
    excerpt: "Eight pieces under $100 — for the bride, the mother, the friend.",
    category: "Gifting",
    read: "5 min read",
    imageKey: "heirloomSetOn",
  },
  {
    id: "earrings-for-every-face",
    title: "Earrings for every face shape (no, really)",
    excerpt: "A non-intimidating, mostly-visual guide from our designer Mariana.",
    category: "Styling",
    read: "6 min read",
    imageKey: "laceDropOn",
  },
];

export default function JournalPage() {
  const ref = useReveal();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div ref={ref} className="bg-bone pt-32 md:pt-40 pb-20">
      <div className="mx-auto max-w-8xl px-5 md:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-[10px] font-medium tracking-wide-4 uppercase text-gold">
            The Journal
          </p>
          <h1 className="mt-4 font-serif font-light text-4xl md:text-6xl text-ink leading-[1.05]">
            Notes from the studio
          </h1>
          <p className="mt-5 text-[15px] font-light text-cocoa">
            Styling, care, and the occasional studio dispatch.
          </p>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {POSTS.map((post, i) => (
            <Link
              to={`/journal/${post.id}`}
              key={post.id}
              className="group block reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[5/4] overflow-hidden bg-cream-dark">
                <div className="w-full h-full transition-transform duration-[1200ms] ease-elegant group-hover:scale-105">
                  <ProductArt imageKey={post.imageKey} />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-wide-3 font-medium">
                <span className="text-gold">{post.category}</span>
                <span className="text-cocoa/40">·</span>
                <span className="text-cocoa">{post.read}</span>
              </div>
              <h2 className="mt-3 font-serif text-2xl md:text-3xl text-ink leading-tight group-hover:text-gold transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-sm font-light text-cocoa max-w-md">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wide-3 font-medium text-ink">
                Read
                <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
