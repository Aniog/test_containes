import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PLACEHOLDER_SRC } from "@/components/ui/StrkImg";
import Reveal from "@/components/ui/Reveal";

const POSTS = [
  {
    id: "care-ritual",
    tag: "Care Guide",
    title: "The Five-Minute Jewelry Care Ritual",
    excerpt:
      "How to keep 18k gold plating luminous for years — the pouch, the polish, and the one thing to always avoid.",
    date: "June 2026",
  },
  {
    id: "ear-stack",
    tag: "Styling",
    title: "Building the Perfect Ear Stack",
    excerpt:
      "Cuffs, huggies, and studs — our formula for a layered ear that looks collected, not crowded.",
    date: "May 2026",
  },
  {
    id: "gifting",
    tag: "Gifting",
    title: "What Her Jewelry Box Is Missing",
    excerpt:
      "A gifting field guide: the pieces women buy for themselves, and the ones they secretly hope to receive.",
    date: "April 2026",
  },
];

export default function JournalPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ivory pt-16 md:pt-20">
      <header className="border-b border-line bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-8 md:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-deep">
            Notes from the Atelier
          </p>
          <h1
            id="journal-title"
            className="mt-3 font-serif text-4xl font-medium text-ink md:text-6xl"
          >
            The Journal
          </h1>
          <p
            id="journal-sub"
            className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-bronze"
          >
            Care rituals, styling notes, and quiet essays on gold, gifting, and
            the jewelry we live in.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.id} delay={i * 100}>
              <article className="group cursor-pointer">
                <div className="overflow-hidden border border-line bg-sand">
                  <img
                    data-strk-img-id={`journal-${post.id}`}
                    data-strk-img={`[journal-${post.id}-title] [journal-${post.id}-excerpt] [journal-sub]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src={PLACEHOLDER_SRC}
                    alt={post.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-deep">
                  {post.tag} · {post.date}
                </p>
                <h2
                  id={`journal-${post.id}-title`}
                  className="mt-3 font-serif text-2xl font-medium leading-snug text-ink transition-colors group-hover:text-gold-deep"
                >
                  {post.title}
                </h2>
                <p
                  id={`journal-${post.id}-excerpt`}
                  className="mt-3 text-sm leading-relaxed text-bronze"
                >
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink underline decoration-gold underline-offset-8 group-hover:text-gold-deep">
                  Read <ArrowRight size={13} />
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border border-line bg-cream p-10 text-center md:p-14">
          <h2 className="font-serif text-3xl font-medium text-ink">
            Prefer to browse the pieces first?
          </h2>
          <Link to="/shop" className="mt-6 inline-block">
            <span className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-gold-deep">
              Shop the Collection <ArrowRight size={14} />
            </span>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
