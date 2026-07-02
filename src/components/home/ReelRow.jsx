import { useRef, useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { UGC_REELS } from "@/data/products";
import { StrkImage } from "@/components/ui/StrkImage";

export function ReelRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="container-velmora mb-8">
        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-velmora-muted">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-3xl tracking-wide md:text-4xl">
          Styled by You
        </h2>
      </div>

      <div className="relative">
        <div className="no-scrollbar flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
          {UGC_REELS.map((reel, idx) => {
            const captionId = `reel-caption-${idx}`;
            return (
              <div
                key={reel.id}
                className="group relative w-[160px] flex-shrink-0 snap-start sm:w-[200px] md:w-[240px]"
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-sm bg-velmora-fg">
                  <StrkImage
                    id={reel.id}
                    query={`[${captionId}] gold jewelry ear neck worn`}
                    ratio="9x16"
                    width={400}
                    alt={reel.caption}
                    className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-fg/70 via-transparent to-transparent" />
                  <p
                    id={captionId}
                    className="absolute bottom-4 left-4 right-4 font-serif text-sm italic leading-snug text-white"
                  >
                    {reel.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
