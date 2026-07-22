import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-ivory">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-sand">
              <img
                alt="Velmora founder at the atelier bench"
                data-strk-img-id="brand-story"
                data-strk-img="[brand-story-title] [brand-story-eyebrow] atelier bench gold jewelry"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-widest-2 text-taupe">
              The atelier, Lisbon
            </p>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <p
              id="brand-story-eyebrow"
              className="eyebrow mb-5"
            >
              Our story
            </p>
            <h2
              id="brand-story-title"
              className="display-2 text-balance"
            >
              We make jewelry we want to <em className="font-serif italic">wear</em>.
            </h2>
            <div className="mt-8 space-y-5 max-w-xl text-[15px] md:text-[16px] leading-[1.85] text-ink-muted font-sans font-light">
              <p>
                Velmora began with a single question: why is fine jewelry so often
                hidden away? We started in a small Lisbon studio, designing
                demi-fine gold pieces that could move with you — from morning
                coffee to a midnight flight.
              </p>
              <p>
                Every Velmora piece is hand-finished in small batches by a team
                of nine artisans. We plate heavy. We plate twice. We polish by
                hand. The result is gold you can live in — quietly, daily, for
                years to come.
              </p>
            </div>
            <Link to="/about" className="mt-10 btn-ghost">
              Read our story
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
