import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="border-y border-ink/10 bg-ivory">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full border border-gold/40" />
          <img
            alt="Velmora atelier — hands crafting gold jewelry"
            data-strk-img-id="story-atelier-01"
            data-strk-img="[story-text] [story-title] artisan jeweler hands crafting gold jewelry atelier warm light"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src={SVG_PLACEHOLDER}
            className="relative aspect-[4/3] w-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-luxe text-gold">
            Our Story
          </p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-3xl font-medium leading-tight text-ink md:text-5xl"
          >
            Jewelry that honors the <span className="italic">quiet moments</span>
          </h2>
          <p id="story-text" className="mt-6 leading-relaxed text-taupe">
            Velmora began at a single jeweler's bench with a simple belief:
            the pieces we wear closest should be made with the most care. Every
            design is plated in a generous layer of 18k gold, hand-finished in
            small batches, and priced so that luxury feels like an everyday
            ritual — not a rare occasion.
          </p>
          <p className="mt-4 leading-relaxed text-taupe">
            From the first sketch to the final polish, we craft jewelry meant
            to be lived in, gifted, and passed on.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-xs font-semibold uppercase tracking-luxe text-espresso transition-colors hover:text-gold"
          >
            Read Our Story
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
