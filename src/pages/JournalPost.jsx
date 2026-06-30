import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useStrkImages } from "@/lib/imageLoader.js";
import { POSTS } from "./_journalPosts.js";

export default function JournalPost() {
  const { id } = useParams();
  const ref = useRef(null);
  useStrkImages(ref);

  const post = POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container-wide py-32 text-center flex flex-col items-center gap-4">
        <p className="font-serif text-3xl font-light text-ink">Story not found</p>
        <Link to="/journal" className="btn-secondary mt-2">Back to the journal</Link>
      </div>
    );
  }

  return (
    <div ref={ref} className="bg-cream">
      <article className="container-editorial py-16 md:py-24">
        <Link
          to="/journal"
          className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.18em] uppercase text-ink-muted hover:text-ink mb-8"
        >
          <ArrowLeft strokeWidth={1.5} className="w-3.5 h-3.5" />
          Back to the journal
        </Link>

        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-ink-muted">
            <span className="font-sans text-[11px] tracking-[0.24em] uppercase">
              {post.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-sans text-[11px] tracking-[0.18em] uppercase">
              {post.readTime}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-ink font-light leading-[1.05] mt-4">
            {post.title}
          </h1>
          <p className="font-sans text-base md:text-[17px] text-ink-muted leading-relaxed mt-5">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-12 md:mt-16 relative aspect-[16/9] overflow-hidden bg-surface-warm">
          <img
            alt={post.title}
            data-strk-img-id={`journal-post-${post.id}-img`}
            data-strk-img={post.query}
            data-strk-img-ratio="16x9"
            data-strk-img-width="1800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="prose-editorial max-w-2xl mx-auto mt-12 md:mt-16 flex flex-col gap-6 font-sans text-[17px] text-ink leading-[1.75]">
          <p>
            {post.excerpt} This is a sample story page — in production the
            full article body would be authored in the studio CMS and rendered
            here. The layout is built to hold long-form editorial copy in a
            warm, considered reading column.
          </p>
          <p>
            We will keep this placeholder intentionally short. The aim of the
            journal is to make space for slow, useful stories — the kind you
            want to read with a coffee, not scroll past.
          </p>
          <p>
            For now, head back to the <Link to="/journal" className="text-gold hover:underline">journal index</Link> or
            take a look at the <Link to="/shop" className="text-gold hover:underline">current collection</Link>.
          </p>
        </div>
      </article>
    </div>
  );
}
