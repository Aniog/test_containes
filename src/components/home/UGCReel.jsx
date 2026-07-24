import { useEffect, useRef } from "react";
import { UGC_REELS } from "@/data/site";
import StockImage from "@/components/ui/StockImage";
import Reveal from "@/components/ui/Reveal";

export default function UGCReel() {
  const scrollerRef = useRef(null);

  // Auto-advance the strip slowly for a "reel" feel; pauses on hover.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    let paused = false;
    function step() {
      if (!paused && el) {
        el.scrollLeft += 0.6;
        // Loop
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
          el.scrollLeft = 0;
        }
      }
      raf = window.requestAnimationFrame(step);
    }
    raf = window.requestAnimationFrame(step);
    function pause() { paused = true; }
    function resume() { paused = false; }
    el.addEventListener("pointerenter", pause);
    el.addEventListener("pointerleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    return () => {
      window.cancelAnimationFrame(raf);
      el.removeEventListener("pointerenter", pause);
      el.removeEventListener("pointerleave", resume);
      el.removeEventListener("touchstart", pause);
    };
  }, []);

  return (
    <section className="py-20 sm:py-24 bg-onyx-900 text-cream-100 overflow-hidden">
      <div className="container-wide mb-10 sm:mb-12">
        <Reveal>
          <p className="font-sans uppercase tracking-widest-2 text-[11px] text-gold-300 mb-3">
            Worn by you · @velmora
          </p>
          <h2 className="font-display text-[40px] sm:text-[64px] leading-[1.02] text-cream-100 max-w-[18ch]">
            Real gold.{" "}
            <span className="italic text-gold-300">Real light.</span>
          </h2>
        </Reveal>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-5 overflow-x-auto px-5 sm:px-12 lg:px-16 pb-6 snap-x snap-mandatory"
      >
        {UGC_REELS.map((reel, i) => (
          <Reveal key={reel.id} delay={i * 60} as="div" className="snap-start shrink-0">
            <article className="relative w-[220px] sm:w-[260px] md:w-[300px]">
              <div className="relative rounded-[2px] overflow-hidden">
                <StockImage
                  query={reel.img}
                  ratio="9x16"
                  width={600}
                  imgId={`ugc-${reel.id}`}
                  className="w-full"
                  alt={reel.caption}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(14,13,10,0) 30%, rgba(14,13,10,0.05) 55%, rgba(14,13,10,0.75) 100%)",
                  }}
                />
                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
                  <p className="font-display italic text-[20px] sm:text-[22px] text-cream-100 leading-snug">
                    {reel.caption}
                  </p>
                  <p className="mt-3 font-sans uppercase tracking-widest-2 text-[10px] text-gold-300">
                    {reel.handle}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
        {/* Tail spacer so the last card can sit in the middle */}
        <div aria-hidden="true" className="shrink-0 w-1 sm:w-8" />
      </div>
    </section>
  );
}
