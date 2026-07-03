import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import { format } from "date-fns";

const POSTS = [
  {
    id: "journal-stack-guide",
    title: "How to stack the ear, by intention",
    excerpt:
      "Three rules from the studio for a layered ear that reads as considered, never crowded.",
    date: "2026-05-18",
    imgId: "journal-stack-2a4d",
    query: "Velmora ear stack editorial",
  },
  {
    id: "journal-care",
    title: "The five-year rule: how to care for gold plating",
    excerpt:
      "What to do before you shower, sleep, and apply lotion — and what to skip at the gym.",
    date: "2026-04-02",
    imgId: "journal-care-7b1e",
    query: "Velmora gold jewelry flat lay",
  },
  {
    id: "journal-gifting",
    title: "A small, considered guide to gifting jewelry",
    excerpt:
      "How to read someone's metal, read their wrist, and choose something they'll actually wear.",
    date: "2026-02-12",
    imgId: "journal-gifting-9c8f",
    query: "Velmora jewelry gift box ribbon",
  },
  {
    id: "journal-process",
    title: "From sketch to studio: the Vivid Aura cuff",
    excerpt:
      "A behind-the-scenes look at how a single crystal-lit ear cuff moves from drawing to dispatch.",
    date: "2025-12-01",
    imgId: "journal-process-4d6a",
    query: "Velmora jewelry making process studio",
  },
];

export default function JournalPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ink-950">
      <section className="pt-28 md:pt-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Eyebrow tone="gold">Journal</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-serif text-[44px] font-light leading-[1.05] text-ink-100 md:text-[80px]">
            Studio notes,
            <br />
            <span className="italic text-gold-300">read aloud.</span>
          </h1>
          <p className="mt-6 max-w-xl font-sans text-[14px] leading-relaxed text-ink-300">
            Quiet, considered writing on jewelry, gifting, and the slow craft
            behind every piece.
          </p>
        </div>
      </section>

      <section className="pb-24 pt-16 md:pb-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
            {POSTS.map((p) => (
              <Link
                key={p.id}
                to={`/journal/${p.id}`}
                id={`journal-${p.id}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
                  <img
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[journal-${p.id}-title] [journal-section-tag]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <span className="font-sans text-[10px] uppercase tracking-widest2 text-gold-300">
                    {format(new Date(p.date), "MMMM d, yyyy")}
                  </span>
                  <h2
                    id={`journal-${p.id}-title`}
                    className="mt-3 font-serif text-[26px] font-light leading-tight text-ink-100 md:text-[32px]"
                  >
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-prose font-sans text-[14px] leading-relaxed text-ink-300">
                    {p.excerpt}
                  </p>
                </div>
                <span id="journal-section-tag" className="hidden">
                  Velmora journal
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
