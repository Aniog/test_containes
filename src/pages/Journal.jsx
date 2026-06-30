import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useStrkImages } from "@/lib/imageLoader.js";
import Newsletter from "@/components/home/Newsletter.jsx";
import { POSTS } from "./_journalPosts.js";

const FEATURED = POSTS.find((p) => p.id === "how-to-layer");
const REST = POSTS.filter((p) => p.id !== FEATURED.id);

function PostCard({ post, large = false }) {
  return (
    <article className={large ? "md:col-span-3" : ""}>
      <Link to={`/journal/${post.id}`} className="group block">
        <div
          className={[
            "relative overflow-hidden bg-surface-warm",
            large ? "aspect-[16/9]" : "aspect-[4/3]",
          ].join(" ")}
        >
          <img
            alt={post.title}
            data-strk-img-id={`journal-${post.id}-img`}
            data-strk-img={post.query}
            data-strk-img-ratio={large ? "16x9" : "4x3"}
            data-strk-img-width={large ? 1600 : 800}
            loading="lazy"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="pt-5 flex flex-col gap-2">
          <div className="flex items-center gap-3 text-ink-muted">
            <span className="font-sans text-[11px] tracking-[0.24em] uppercase">
              {post.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-sans text-[11px] tracking-[0.18em] uppercase">
              {post.readTime}
            </span>
          </div>
          <h3
            className={[
              "font-serif font-light text-ink leading-[1.1] group-hover:text-gold transition-colors",
              large ? "text-3xl md:text-4xl" : "text-2xl",
            ].join(" ")}
          >
            {post.title}
          </h3>
          <p className="font-sans text-[15px] text-ink-muted leading-relaxed max-w-prose">
            {post.excerpt}
          </p>
          <span className="link-underline mt-1 inline-flex items-center gap-2 font-sans text-sm text-ink self-start">
            Read the story
            <ArrowRight strokeWidth={1.5} className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function Journal() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <div ref={ref} className="bg-cream">
      <section className="bg-surface-warm border-b border-line">
        <div className="container-wide py-16 md:py-24 flex flex-col items-center text-center gap-4">
          <span className="eyebrow">The Journal</span>
          <h1 className="font-serif font-light text-4xl md:text-6xl text-ink leading-[1.05] max-w-2xl">
            Stories from the studio.
          </h1>
          <p className="font-sans text-base md:text-[17px] text-ink-muted max-w-xl leading-relaxed">
            Style notes, studio sketches, and quiet guides to wearing and
            caring for your Velmora pieces.
          </p>
        </div>
      </section>

      <section className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 mb-16 md:mb-24">
          <PostCard post={FEATURED} large />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
          {REST.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
