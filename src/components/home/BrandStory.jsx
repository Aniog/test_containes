import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";
import { StrkImage } from "@/components/ui/StrkImage";

export function BrandStory() {
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
      <div className="container-velmora">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cream md:aspect-[3/4]">
            <StrkImage
              id="brand-story-image"
              query="[brand-story-title] [brand-story-body] gold jewelry making artisan hands editorial"
              ratio="3x4"
              width={800}
              alt="Velmora craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center md:py-8">
            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-velmora-muted">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl tracking-wide md:text-4xl lg:text-5xl"
            >
              Made for Modern Heirlooms
            </h2>
            <p
              id="brand-story-body"
              className="mt-6 max-w-md text-base leading-relaxed text-velmora-muted"
            >
              Velmora was founded on a simple belief: jewelry should feel special
              every single day. We design demi-fine pieces in small batches, using
              responsibly sourced materials and 18k gold plating that holds its
              warmth wear after wear.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-velmora-muted">
              Each collection balances sculptural shapes with quiet detail, so
              you can build a jewelry wardrobe that lasts beyond the season.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-accent hover:text-velmora-accent-hover"
            >
              Read Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
