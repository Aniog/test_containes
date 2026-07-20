import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const POSTS = [
  {
    id: "how-to-stack",
    title: "How to stack your ear: a quiet guide",
    excerpt:
      "Three rules for an ear stack that reads considered, not crowded — from the studio.",
    imgId: "journal-stack-1a2b",
    query: "[journal-heading] gold ear stack huggies and ear cuff on model editorial portrait",
  },
  {
    id: "care-guide",
    title: "The care guide, in three minutes",
    excerpt:
      "How to keep demi-fine gold bright — and what to avoid. (Hint: it's mostly lotion.)",
    imgId: "journal-care-3c4d",
    query: "[journal-heading] gold jewelry polishing with soft cloth on warm wood surface",
  },
  {
    id: "gift-edit",
    title: "The gift edit, for the person who has everything",
    excerpt:
      "Our most-gifted pieces, chosen by the team — and what to pair them with.",
    imgId: "journal-gift-5e6f",
    query: "[journal-heading] gold jewelry gift set velvet box with handwritten card",
  },
];

export default function Journal() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ivory">
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-ivory-soft">
        <div className="container-velmora text-center">
          <p className="eyebrow mb-4">The Journal</p>
          <h1
            id="journal-heading"
            className="display-serif text-5xl md:text-6xl lg:text-7xl text-espresso text-balance"
          >
            Stories, notes, edits.
          </h1>
        </div>
      </section>

      <section className="container-velmora py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {POSTS.map((p, i) => (
            <article key={p.id} className="group">
              <Link to="#" className="block">
                <div className="aspect-[4/5] overflow-hidden bg-espresso-soft">
                  <img
                    alt={p.title}
                    data-strk-img-id={p.imgId}
                    data-strk-img={p.query}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-105"
                  />
                </div>
                <div className="pt-5">
                  <p className="eyebrow mb-2">
                    {String(i + 1).padStart(2, "0")} · The Journal
                  </p>
                  <h2 className="font-serif text-2xl text-espresso leading-snug text-balance group-hover:text-bronze-deep transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted leading-relaxed text-pretty">
                    {p.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-espresso group-hover:text-bronze-deep transition-colors">
                    Read
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
