import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-ivory-soft py-20 md:py-28" ref={containerRef}>
      <div className="container-velmora">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-espresso-soft">
              <img
                alt="Our atelier — hands shaping a piece of gold jewelry"
                data-strk-img-id="brand-story-atelier-1f8a"
                data-strk-img="[story-quote] [story-heading] [velmora-section-title]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* small floating image */}
            <div className="hidden md:block absolute -bottom-10 -right-10 w-48 aspect-square overflow-hidden border-8 border-ivory-soft shadow-xl">
              <img
                alt="A finished gold piece, in soft light"
                data-strk-img-id="brand-story-detail-3d2b"
                data-strk-img="[story-quote] [story-heading] [velmora-section-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="eyebrow mb-4">Our Story</p>
            <h2
              id="story-heading"
              className="display-serif text-4xl md:text-5xl lg:text-6xl text-espresso text-balance"
            >
              Jewelry that <em className="italic">remembers</em> the day.
            </h2>
            <p
              id="story-quote"
              className="mt-6 text-base md:text-lg text-muted leading-relaxed text-pretty"
            >
              Velmora was founded in a small studio with a simple idea: demi-fine
              jewelry, made the way it should be — slowly, by hand, in solid
              18K gold plating, with hypoallergenic metals that feel as good as
              they look. Every piece is designed to be lived in, layered,
              treasured, and one day, passed on.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-espresso hover:text-bronze-deep transition-colors group"
            >
              Read Our Story
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
