import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const STORY_FALLBACK =
  "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&q=90&fit=max&fm=jpg";

export function HomeStory() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section className="bg-bone">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        <div ref={ref} className="relative aspect-[4/5] md:aspect-auto order-1 md:order-1">
          <img
            data-strk-img-id="story-image-1"
            src={STORY_FALLBACK}
            alt="Velmora atelier — craftsmanship"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center order-2 md:order-2 px-6 md:px-14 lg:px-20 py-20 md:py-28">
          <div className="max-w-md">
            <p className="text-[10px] uppercase tracking-wider3 text-gold-deep mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-ink text-3xl md:text-5xl font-light leading-[1.1] mb-6">
              Crafted in small
              <br />
              <span className="italic">batches,</span> made
              <br />
              to be lived in.
            </h2>
            <p className="text-ink/80 text-base leading-relaxed mb-4">
              Velmora began in a small Paris atelier with a single idea: demi-fine jewelry
              that feels as considered as fine jewelry, at a price you can give without
              hesitation.
            </p>
            <p className="text-ink/80 text-base leading-relaxed mb-8">
              Every piece is hand-finished in 18K gold plating over a hypoallergenic brass
              core — substantial enough to feel like a keepsake, gentle enough to wear from
              morning to evening.
            </p>
            <Link
              to="/about"
              className="inline-block text-[11px] uppercase tracking-wider2 text-ink hover:text-gold-deep transition-colors border-b border-ink hover:border-gold-deep pb-1"
            >
              Read our story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
