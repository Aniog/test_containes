import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const POSTS = [
  {
    id: "p1",
    title: "How to Layer Necklaces (Without the Tangle)",
    excerpt:
      "A three-step rule for a layered look that looks considered, not crowded.",
    readTime: "4 min",
    date: "May 2026",
    imgId: "journal-p1",
  },
  {
    id: "p2",
    title: "A Short Guide to Demi-Fine",
    excerpt:
      "What does demi-fine actually mean, and how is it different from fine jewelry?",
    readTime: "6 min",
    date: "April 2026",
    imgId: "journal-p2",
  },
  {
    id: "p3",
    title: "Caring for Gold-Plated Pieces",
    excerpt:
      "Five small habits that keep your pieces looking like the day they arrived.",
    readTime: "3 min",
    date: "March 2026",
    imgId: "journal-p3",
  },
  {
    id: "p4",
    title: "Gifting, Quietly",
    excerpt:
      "The art of the considered gift — no wrapping paper required.",
    readTime: "5 min",
    date: "February 2026",
    imgId: "journal-p4",
  },
];

export default function Journal() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="pt-28 md:pt-32 pb-20">
      <div className="container-7xl">
        <header className="max-w-2xl">
          <p className="eyebrow text-muted">◆ Journal</p>
          <h1
            id="journal-title"
            className="display-1 text-ink mt-3 text-5xl md:text-7xl text-balance"
          >
            Notes from the studio.
          </h1>
          <p className="text-base text-ink-soft mt-6 leading-relaxed">
            Short reads on jewelry, materials and the small decisions that
            make a piece worth keeping.
          </p>
        </header>

        <ul className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {POSTS.map((post) => (
            <li key={post.id}>
              <Link to={`/journal/${post.id}`} className="group block">
                <div className="relative overflow-hidden bg-stone" style={{ paddingTop: "62.5%" }}>
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[journal-post-title-${post.id}] [journal-title]`}
                    data-strk-img-ratio="16x10"
                    data-strk-img-width="1000"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-muted">
                  <span>{post.date}</span>
                  <span className="text-gold">·</span>
                  <span>{post.readTime} read</span>
                </div>
                <h2
                  id={`journal-post-title-${post.id}`}
                  className="display-2 text-2xl md:text-3xl text-ink mt-3 group-hover:text-gold-deep transition-colors"
                >
                  {post.title}
                </h2>
                <p className="text-sm text-ink-soft mt-3 leading-relaxed max-w-md">
                  {post.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
