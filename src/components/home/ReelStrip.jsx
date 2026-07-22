import { useEffect, useRef } from "react";
import { UGC_REELS } from "@/data/products";

export default function ReelStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    let raf;
    const onWheel = (e) => {
      const el = containerRef.current;
      if (!el) return;
      // Translate vertical wheel to horizontal scroll inside the strip
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    const el = containerRef.current;
    if (el) el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      if (el) el.removeEventListener("wheel", onWheel);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="bg-ink py-20 md:py-28 overflow-hidden">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="eyebrow text-gold mb-3">@velmora</p>
            <h2 className="display-lg text-cream">
              Worn by <em className="font-serif italic font-light text-gold-soft">you</em>
            </h2>
            <p className="mt-3 text-cream/70 font-sans font-light text-[15px] max-w-md">
              Tag #velmora for a chance to be featured. Real moments, real women, real gold.
            </p>
          </div>
          <a
            href="https://instagram.com"
            className="link-underline text-cream self-start md:self-end"
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-5 md:px-8 pb-3 snap-x snap-mandatory"
      >
        {UGC_REELS.map((r) => (
          <figure
            key={r.id}
            className="reel-card snap-start group"
            data-strk-img-root=""
          >
            <img
              alt={r.title}
              data-strk-img-id={r.imgId}
              data-strk-img={`[${r.id}-caption] [reels-title] woman wearing gold jewelry portrait warm editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={r.imgUrl}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Bottom gradient + caption */}
            <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent">
              <p
                id={`${r.id}-caption`}
                className="font-serif italic font-light text-cream text-[17px] md:text-[19px] leading-snug max-w-[90%]"
              >
                {r.title}
              </p>
            </figcaption>
            {/* Top-right play hint */}
            <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-cream/90 flex items-center justify-center text-ink">
              <svg
                width="9"
                height="11"
                viewBox="0 0 9 11"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 0L9 5.5L0 11V0Z" />
              </svg>
            </div>
          </figure>
        ))}
        <div className="shrink-0 w-2 md:w-8" aria-hidden="true" />
      </div>
      <span id="reels-title" className="sr-only">Worn by you</span>
    </section>
  );
}
