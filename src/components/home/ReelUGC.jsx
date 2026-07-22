import { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import StrkImage from "@/components/ui/StrkImage";
import { reelSlides } from "@/data/products";

export default function ReelUGC() {
  const containerRef = useRef(null);
  const stripRef = useRef(null);

  // Re-scan images whenever the strip children change.
  useEffect(() => {
    if (!containerRef.current) return;
    const node = containerRef.current;
    const frame = window.requestAnimationFrame(() => {
      try {
        ImageHelper.loadImages(strkImgConfig, node);
      } catch {
        // ignore
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [reelSlides.length]);

  // Horizontal scroll wheel support
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        strip.scrollBy({ left: e.deltaY, behavior: "auto" });
      }
    };
    strip.addEventListener("wheel", onWheel, { passive: true });
    return () => strip.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="overflow-hidden bg-ivory-soft py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-container px-5 md:px-10 lg:px-16">
        <div className="mb-10 flex flex-col items-center text-center md:mb-14">
          <SectionTitle
            eyebrow="Worn by you"
            title="In the Wild, On You"
            italicWord="On You"
            align="center"
            description="A reel of the moments our community wears Velmora. Tag #velmorafine to be featured."
          />
        </div>
      </div>

      <Reveal
        ref={containerRef}
        className="relative w-full"
        delay={80}
      >
        <div
          ref={stripRef}
          className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:gap-6 md:px-10 lg:px-16"
        >
          {reelSlides.map((slide, index) => (
            <ReelCard key={slide.id} slide={slide} index={index} />
          ))}
          <li
            aria-hidden="true"
            className="shrink-0 snap-start"
            style={{ width: "calc(100vw - 40px)", maxWidth: "1px" }}
          />
        </div>
      </Reveal>

      <div className="mt-10 flex items-center justify-center gap-3 text-[11px] uppercase tracking-widest2 text-muted md:mt-12">
        <Instagram size={14} strokeWidth={1.5} />
        <span>Tag #velmorafine to be featured</span>
      </div>
    </section>
  );
}

function ReelCard({ slide, index }) {
  return (
    <article
      className="group relative shrink-0 snap-start overflow-hidden bg-espresso"
      style={{ width: "min(72vw, 280px)", aspectRatio: "9 / 16" }}
    >
      <StrkImage
        query={slide.imageQuery}
        ratio="9x16"
        width={600}
        alt={slide.caption}
        fill
        className="!absolute !inset-0 !h-full !w-full"
        imgClassName="transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-espresso/30" />
      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <p className="font-serif text-xl italic text-ivory md:text-2xl">
          {slide.caption}
        </p>
        <span className="mt-2 block text-[10px] uppercase tracking-widest2 text-gold-soft/90">
          @velmorafine
        </span>
      </div>
      {/* Top corner brand mark */}
      <div className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-ivory/30 bg-espresso/30 text-ivory/80 backdrop-blur">
        <Instagram size={12} strokeWidth={1.5} />
      </div>
    </article>
  );
}
