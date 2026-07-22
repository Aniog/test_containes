import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Button } from "@/components/ui/Button";

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-28 bg-cream-white border-t border-taupe"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5]">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-heading] fine gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src={SVG_PLACEHOLDER}
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute inset-4 border border-ivory/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-manrope text-[10px] uppercase tracking-widest text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6"
            >
              Born from a love of
              <br />
              <em className="italic">quiet beauty</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-warm-gray leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry
              shouldn't require a special occasion — or a special budget. We
              create demi-fine pieces in 18K gold plate that feel luxurious,
              wear beautifully, and last.
            </p>
            <p className="font-manrope text-sm text-warm-gray leading-relaxed mb-8">
              Every piece is hypoallergenic, nickel-free, and designed to
              become a quiet constant in your everyday life. Because the best
              jewelry is the kind you never want to take off.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/shop">
                <Button variant="outline" size="md">
                  Our Story
                </Button>
              </Link>
              <Link
                to="/shop"
                className="font-manrope text-xs uppercase tracking-widest text-warm-gray hover:text-gold transition-colors"
              >
                Shop Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
