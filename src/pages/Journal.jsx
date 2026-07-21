import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";

const POSTS = [
  {
    id: "caring-for-your-gold",
    category: "Materials & Care",
    title: "How to care for your gold-plated jewelry",
    excerpt:
      "A simple, honest routine for keeping your demi-fine pieces bright — without ever needing a polishing cloth you can't find.",
    date: "May 14, 2025",
    readTime: "5 min read",
    query: "velmora gold plated jewelry care polishing cloth editorial",
  },
  {
    id: "how-we-make-the-cuff",
    category: "Atelier Notes",
    title: "How we make the Vivid Aura ear cuff",
    excerpt:
      "From the first wax to the final polish — a behind-the-scenes look at the piece our community wears on repeat.",
    date: "April 22, 2025",
    readTime: "7 min read",
    query: "velmora gold ear cuff being hand made in atelier",
  },
  {
    id: "the-art-of-layered-stacks",
    category: "Styling",
    title: "The art of the layered ear stack",
    excerpt:
      "A few quiet rules for combining huggies, cuffs and drops — and a handful of pairings we keep coming back to.",
    date: "March 30, 2025",
    readTime: "4 min read",
    query: "velmora gold ear stack layered earrings on model",
  },
];

export default function Journal() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <main ref={ref} className="bg-ivory pt-24 sm:pt-28 pb-20">
      <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-14 sm:mb-20">
          <p className="eyebrow mb-3">The Velmora Journal</p>
          <h1
            id="journal-title"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso"
          >
            Notes from the atelier
          </h1>
          <p
            id="journal-subtitle"
            className="mt-4 text-sm sm:text-base text-mocha"
          >
            Quiet reads on materials, design and the slow craft behind the
            pieces we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 sm:gap-y-16">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              <Link to="#" className="block">
                <StrkImage
                  id={`post-${post.id}`}
                  query={`[${post.id}-title] [journal-title] [journal-subtitle] ${post.query}`}
                  ratio="3x2"
                  width={700}
                  tone="dark"
                />
                <div className="pt-5">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-mocha">
                    <span>{post.category}</span>
                    <span aria-hidden>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2
                    id={`${post.id}-title`}
                    className="mt-2 font-serif text-2xl text-espresso group-hover:text-gold-500 transition-colors"
                  >
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-mocha leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-espresso inline-flex items-center gap-2 link-underline">
                    Read essay
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
