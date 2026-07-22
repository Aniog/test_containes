import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Button from "@/components/ui/Button";

export default function BrandStory() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4x5] overflow-hidden bg-ivory">
            <img
              alt="Velmora atelier"
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-text] [story-eyebrow] jewelry atelier craftsmanship gold"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="md:pl-6">
            <p
              id="story-eyebrow"
              className="text-[11px] uppercase tracking-widest2 text-gold mb-4"
            >
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              Jewelry made to be lived in.
            </h2>
            <p
              id="story-text"
              className="mt-6 text-ink/75 leading-relaxed"
            >
              Velmora was founded on a simple belief: that beautiful, lasting
              jewelry shouldn't require a special occasion. Each piece is
              hand-finished in 18K gold plating, designed in our studio, and
              made to move with you — from morning coffee to evening out.
            </p>
            <p className="mt-4 text-ink/75 leading-relaxed">
              We work directly with our makers, cutting out the middlemen, so
              you get demi-fine quality at an honest price.
            </p>
            <div className="mt-8">
              <Button as={Link} to="/about" variant="outline">
                Read Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
