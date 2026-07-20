import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const REELS = [
  {
    id: "reel-ear-stack",
    imgId: "reel-ear-stack-3a9d",
    query: "[reels-heading] gold ear stack with huggies and ear cuff on model close-up",
    caption: "Stacked at golden hour",
    handle: "@maya.k",
  },
  {
    id: "reel-necklace",
    imgId: "reel-necklace-7b2e",
    query: "[reels-heading] gold floral crystal pendant necklace on model chest close-up portrait",
    caption: "Flora, in the field",
    handle: "@elena.r",
  },
  {
    id: "reel-huggies",
    imgId: "reel-huggies-9c1f",
    query: "[reels-heading] chunky gold dome huggie earrings on model ear close-up portrait",
    caption: "Sphere, every day",
    handle: "@jules.w",
  },
  {
    id: "reel-gift",
    imgId: "reel-gift-2d4a",
    query: "[reels-heading] gold jewelry gift box unboxing elegant velvet box heirloom set",
    caption: "Gifted, with love",
    handle: "@noor.a",
  },
  {
    id: "reel-detail",
    imgId: "reel-detail-5e8b",
    query: "[reels-heading] gold filigree drop earrings close-up texture detail macro",
    caption: "The lace, in detail",
    handle: "@sofia.m",
  },
  {
    id: "reel-pose",
    imgId: "reel-pose-6f0c",
    query: "[reels-heading] model wearing gold jewelry portrait warm light editorial",
    caption: "A velvet morning",
    handle: "@isla.b",
  },
];

export default function UGCReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollBy = (dir) => {
    const el = containerRef.current?.querySelector("[data-reel-track]");
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="bg-espresso py-20 md:py-28">
      <div className="container-velmora">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
          <div>
            <p className="eyebrow text-bronze-light mb-3">#WornWithVelmora</p>
            <h2
              id="reels-heading"
              className="display-serif text-4xl md:text-5xl lg:text-6xl text-ivory text-balance"
            >
              Worn &amp; loved
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll reels left"
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 border border-ivory/30 text-ivory hover:bg-ivory hover:text-espresso transition-colors duration-300 ease-editorial"
            >
              <ArrowRight className="w-4 h-4 mx-auto rotate-180" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              aria-label="Scroll reels right"
              onClick={() => scrollBy(1)}
              className="w-10 h-10 border border-ivory/30 text-ivory hover:bg-ivory hover:text-espresso transition-colors duration-300 ease-editorial"
            >
              <ArrowRight className="w-4 h-4 mx-auto" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="overflow-hidden">
        <div
          data-reel-track
          className={cn(
            "no-scrollbar flex gap-4 overflow-x-auto scroll-smooth",
            "px-6 md:px-10 lg:px-12 pb-4 snap-x snap-mandatory"
          )}
        >
          {REELS.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
          {/* trailing spacer to allow last card to reach edge */}
          <div className="flex-shrink-0 w-2 md:w-6" aria-hidden />
        </div>
      </div>
    </section>
  );
}

function ReelCard({ reel }) {
  return (
    <article
      className={cn(
        "group relative flex-shrink-0 w-[60vw] sm:w-[260px] md:w-[300px]",
        "aspect-[9/16] overflow-hidden snap-start",
        "bg-espresso-soft"
      )}
    >
      <img
        alt={reel.caption}
        data-strk-img-id={reel.imgId}
        data-strk-img={reel.query}
        data-strk-img-ratio="9x16"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-deep/85 via-espresso/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
        <p className="font-serif text-xl leading-tight text-balance italic">
          {reel.caption}
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-bronze-light/90">
          {reel.handle}
        </p>
      </div>
    </article>
  );
}
