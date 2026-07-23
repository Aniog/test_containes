import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ugcPosts } from "@/data/products";
import Container from "@/components/ui/Container";
import StrkImageLoader from "@/components/ui/StrkImageLoader";

function UGCCard({ post }) {
  return (
    <article className="relative w-[220px] sm:w-[260px] md:w-[280px] aspect-[9/16] flex-shrink-0 overflow-hidden bg-ivory-200 group">
      <div
        className="absolute inset-0"
        data-strk-bg-id={`ugc-${post.id}`}
        data-strk-bg={post.query}
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="600"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso/80 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
        <p
          id={`ugc-caption-${post.id}`}
          className="font-serif text-xl leading-tight mb-1"
        >
          {post.caption}
        </p>
        <p className="text-[10px] uppercase tracking-widest text-ivory/70">
          {post.handle}
        </p>
      </div>
    </article>
  );
}

export default function UGCRow() {
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-24 bg-ivory-100">
      <Container className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">@velmora.loves</p>
            <h2 id="ugc-title" className="font-serif text-4xl sm:text-5xl text-espresso font-light">
              Worn by you
            </h2>
            <p id="ugc-subtitle" className="mt-3 text-sm sm:text-base text-taupe max-w-md">
              Real moments, real gold — from our community.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="h-10 w-10 inline-flex items-center justify-center border border-line text-espresso hover:bg-ivory hover:border-espresso transition-colors"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="h-10 w-10 inline-flex items-center justify-center border border-line text-espresso hover:bg-ivory hover:border-espresso transition-colors"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </Container>

      <StrkImageLoader deps={[]}>
        <div
          ref={scrollerRef}
          className="no-scrollbar flex gap-3 sm:gap-4 overflow-x-auto px-5 sm:px-8 lg:px-12 snap-x snap-mandatory"
          style={{ scrollPaddingLeft: "20px" }}
        >
          {ugcPosts.map((post) => (
            <div key={post.id} className="snap-start">
              <UGCCard post={post} />
            </div>
          ))}
          <div className="w-1 flex-shrink-0" aria-hidden="true" />
        </div>
      </StrkImageLoader>
    </section>
  );
}
