import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/ui/Reveal";

const PLACEHOLDER_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const POSTS = [
  {
    id: "care-guide",
    title: "How to Make Gold-Plated Jewelry Last for Years",
    excerpt:
      "Five quiet habits — from the last-on, first-off rule to the soft-cloth ritual — that keep 18K plate radiant.",
    date: "July 2026",
    tag: "Care",
  },
  {
    id: "ear-stack",
    title: "The Art of the Ear Stack: A Beginner's Map",
    excerpt:
      "Where to start, how to mix textures, and why the huggie is the anchor of every great stack.",
    date: "June 2026",
    tag: "Style",
  },
  {
    id: "gifting",
    title: "Gifting Jewelry Without Guessing Her Size",
    excerpt:
      "Earrings and necklaces are the safe harbors of jewelry gifting. Here's how to choose one she'll actually wear.",
    date: "May 2026",
    tag: "Gifting",
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <div className="border-b border-line bg-cream py-16 text-center md:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
          Notes from the Atelier
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium text-noir md:text-6xl">
          The Journal
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {POSTS.map((post, i) => (
            <Reveal key={post.id} delay={i * 100}>
              <article className="group">
                <Link to="/journal" className="block overflow-hidden bg-cream">
                  <div className="aspect-[4/3]">
                    <img
                      data-strk-img-id={`journal-${post.id}`}
                      data-strk-img={`[journal-title-${post.id}] gold jewelry editorial photography, warm tones`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src={PLACEHOLDER_SRC}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                    {post.tag} · {post.date}
                  </p>
                  <Link to="/journal">
                    <h2
                      id={`journal-title-${post.id}`}
                      className="mt-2 font-serif text-2xl font-medium leading-snug text-noir transition-colors group-hover:text-gold"
                    >
                      {post.title}
                    </h2>
                  </Link>
                  <p className="mt-3 text-sm leading-relaxed text-taupe">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/journal"
                    className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-noir transition-colors hover:text-gold"
                  >
                    Read More
                    <ArrowRight size={13} strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
