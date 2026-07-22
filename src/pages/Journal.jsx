import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { resolveImageUrl } from "@/lib/stockImages";

const POSTS = [
  {
    id: "care-guide",
    eyebrow: "Jewelry 101",
    title: "How to care for gold-plated jewelry (so it actually lasts).",
    excerpt: "Five small habits that keep demi-fine pieces glowing for years — from the studio.",
    date: "July 8, 2026",
    read: "4 min read",
  },
  {
    id: "stacking",
    eyebrow: "Styling",
    title: "Three ways to stack huggies this summer.",
    excerpt: "A short guide to mixing metals, weights, and silhouettes without overthinking it.",
    date: "June 24, 2026",
    read: "3 min read",
  },
  {
    id: "behind-the-studio",
    eyebrow: "Behind the studio",
    title: "A morning at the bench with Mara.",
    excerpt: "From coffee to courier — a quiet look at how a Velmora piece is finished and shipped.",
    date: "June 2, 2026",
    read: "6 min read",
  },
  {
    id: "gifting",
    eyebrow: "Gifting",
    title: "The art of the small, beautiful gift.",
    excerpt: "Why the most remembered gifts are rarely the biggest. A short, opinionated essay.",
    date: "May 14, 2026",
    read: "5 min read",
  },
];

export default function Journal() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="bg-cream">
      <div className="pt-32 md:pt-40 pb-12 md:pb-16 text-center max-w-3xl mx-auto px-5 md:px-8">
        <p className="eyebrow text-gold-deep mb-3">The Velmora Journal</p>
        <h1 className="display-lg text-ink">Notes from the studio.</h1>
        <p className="mt-4 text-muted font-sans font-light text-[15px]">
          Quiet essays on jewelry, gifting, and the slow art of getting dressed.
        </p>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 pb-24">
        {/* Feature */}
        <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center mb-16 md:mb-20">
          <div className="aspect-[4/3] bg-ivory border border-line/70 overflow-hidden">
            <img
              alt={POSTS[0].title}
              data-strk-img-id="journal-feature-img"
              data-strk-img="[journal-feature-title] jewelry care gold plated flat lay warm editorial"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={resolveImageUrl("journal-feature-img")}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow text-gold-deep mb-3">{POSTS[0].eyebrow}</p>
            <h2
              id="journal-feature-title"
              className="display-md text-ink"
            >
              {POSTS[0].title}
            </h2>
            <p className="mt-5 text-ink-soft text-[15px] font-sans font-light leading-[1.75] max-w-md">
              {POSTS[0].excerpt}
            </p>
            <p className="mt-5 text-[11px] uppercase tracking-wider-3 text-muted font-sans">
              {POSTS[0].date} · {POSTS[0].read}
            </p>
            <Link
              to="/journal"
              className="mt-6 inline-flex items-center gap-2 text-ink link-underline"
            >
              Read essay
              <ArrowRight strokeWidth={1.5} className="w-4 h-4" />
            </Link>
          </div>
        </article>

        <div className="border-t border-line" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-14">
          {POSTS.slice(1).map((p) => {
            const titleId = `journal-${p.id}-title`;
            return (
              <article key={p.id}>
                <Link to="/journal" className="block group">
                  <div className="aspect-[4/5] bg-ivory border border-line/70 overflow-hidden mb-5">
                    <img
                      alt={p.title}
                      data-strk-img-id={`journal-${p.id}-img`}
                      data-strk-img={`[${titleId}] ${p.eyebrow.toLowerCase()} editorial portrait warm`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src={resolveImageUrl(`journal-${p.id}-img`)}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="eyebrow text-gold-deep mb-2">{p.eyebrow}</p>
                  <h3
                    id={titleId}
                    className="font-serif text-2xl text-ink leading-snug"
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 text-muted text-sm font-sans font-light leading-[1.7]">
                    {p.excerpt}
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-wider-3 text-muted font-sans">
                    {p.date} · {p.read}
                  </p>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
