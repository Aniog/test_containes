import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-cream">
      <div className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-espresso order-2 md:order-1">
            <img
              alt="Founder at work in the Velmora studio"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-paragraph] [brand-story-title] [brand-story-eyebrow]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 max-w-xl">
            <span id="brand-story-eyebrow" className="eyebrow mb-4 block">
              Our Story
            </span>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-6xl leading-[1.05] mb-6 md:mb-8"
            >
              Made slowly. <em className="italic">Worn forever.</em>
            </h2>
            <p
              id="brand-story-paragraph"
              className="text-[15px] md:text-base text-espresso/80 leading-relaxed mb-8"
            >
              Velmora was founded on a single belief — that fine jewelry
              shouldn't be reserved for a glass case. Each piece is cast in
              small batches, plated in 18K gold over a brass core, and
              finished by hand in our atelier. The result is jewelry with the
              weight of something precious, at a price that lets you actually
              live in it.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider-2 font-medium text-espresso hover:text-gold-deep transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.4} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
