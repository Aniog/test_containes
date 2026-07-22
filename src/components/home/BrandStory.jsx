import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/ui/Reveal";
import StrkImage from "@/components/ui/StrkImage";

export default function BrandStory() {
  const containerRef = useRef(null);

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
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-ivory-soft py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10 lg:px-16">
        <Reveal className="relative aspect-[4/5] overflow-hidden bg-espresso">
          <StrkImage
            query="artisan hands crafting gold jewelry on linen workbench, soft warm light, editorial"
            ratio="4x5"
            width={900}
            alt="Velmora atelier — artisan hands finishing a piece"
            fill
            className="!absolute !inset-0 !h-full !w-full"
            imgClassName="transition-transform duration-[1200ms] ease-editorial hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
          <span className="absolute bottom-5 left-5 rounded-sm bg-ivory/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest2 text-espresso">
            Est. 2019 · Small Batch
          </span>
        </Reveal>

        <Reveal delay={120} className="max-w-xl md:max-w-none">
          <span className="text-[11px] font-medium uppercase tracking-widest2 text-gold-deep">
            Our Story
          </span>
          <h2 className="mt-5 font-serif text-4xl font-light leading-[1.05] text-espresso sm:text-5xl md:text-[56px]">
            Jewelry made with <em className="italic text-gold-deep">intention</em>, worn without effort.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-espresso-soft md:text-base">
            Velmora began at a small workbench in Brooklyn — a love letter to the
            pieces our founder wore every day and the frustration that fine
            jewelry felt either out of reach or out of touch. We craft demi-fine
            gold pieces in small batches, designed to layer, to gift, and to
            outlast a season.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-espresso-soft md:text-base">
            Every Velmora piece is hypoallergenic, lead-free, and made to be
            worn — in the morning light, in the evening, and everywhere in
            between.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest2 text-espresso"
          >
            <span className="border-b border-espresso/40 pb-1 transition-colors group-hover:border-gold-deep group-hover:text-gold-deep">
              Read our story
            </span>
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
