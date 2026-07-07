import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EDITORIAL } from "@/data/products";

export default function UGCReel() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.7;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="max-w-container mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted mb-3">
              #WornWithVelmora
            </p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
              Worn by you
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 grid place-items-center border border-ink/30 hover:border-ink hover:bg-ink hover:text-ivory transition-colors"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="w-10 h-10 grid place-items-center border border-ink/30 hover:border-ink hover:bg-ink hover:text-ivory transition-colors"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth"
      >
        <div className="flex gap-4 md:gap-6 px-5 md:px-10 pb-4">
          {EDITORIAL.ugc.map((post, i) => (
            <article
              key={i}
              className="relative flex-shrink-0 w-[220px] sm:w-[260px] md:w-[280px] aspect-[9/16] bg-ink overflow-hidden group"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(15,14,12,0.85) 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-ivory">
                <p className="font-serif text-xl md:text-2xl leading-snug italic">
                  "{post.caption}"
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-editorial text-ivory/70">
                  {post.handle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
