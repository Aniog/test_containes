import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/ui/Reveal";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="border-y border-line bg-cream py-16 md:py-28">
      <div className="max-w-7xl mx-auto grid items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  data-strk-img-id="story-atelier-01"
                  data-strk-img="[story-body] [story-title] jewelry atelier workbench, artisan hands polishing gold"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="The Velmora atelier"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 bg-gold px-6 py-5 md:-right-5 md:px-8 md:py-6">
              <p className="font-serif text-3xl font-medium text-ivory md:text-4xl">Est.</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-ivory/90">
                MMXXI
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
            Our Story
          </p>
          <h2
            id="story-title"
            className="mt-3 font-serif text-3xl font-medium leading-tight text-noir md:text-5xl"
          >
            Jewelry that outlives the occasion
          </h2>
          <p id="story-body" className="mt-6 text-sm leading-relaxed text-taupe md:text-base">
            Velmora began at a single atelier bench with one belief: beautiful
            jewelry should not ask you to choose between craftsmanship and
            accessibility. Each piece is designed in-house, cast in recycled
            brass, and finished in a generous layer of 18K gold — then polished
            by hand, one at a time.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-taupe md:text-base">
            We make fewer, better things. No seasons, no noise — only quiet
            pieces meant to be worn on ordinary days and remembered on
            extraordinary ones.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-3 border border-noir px-9 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-noir transition-all duration-300 hover:bg-noir hover:text-ivory"
          >
            Our Story
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
