import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const ref = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream border-y border-sand">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-espresso">
          <img
            alt="Velmora atelier"
            className="absolute inset-0 w-full h-full object-cover"
            data-strk-img-id="brand-story-img"
            data-strk-img="[brand-story-subtitle] [brand-story-title] jewelry maker atelier hands gold craft"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>

        <div className="md:pl-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
            Our Story
          </p>
          <h2
            id="brand-story-title"
            className="font-serif text-4xl md:text-5xl text-ink leading-tight"
          >
            Quiet luxury, made to be lived in.
          </h2>
          <p
            id="brand-story-subtitle"
            className="mt-6 text-base text-taupe leading-relaxed"
          >
            Velmora began with a simple belief: that fine gold jewelry should
            be warm enough for the everyday and considered enough for the
            unforgettable. Each piece is designed in our studio and finished in
            18K gold plate over a hypoallergenic base, so it feels as good as
            it looks.
          </p>
          <p className="mt-4 text-base text-taupe leading-relaxed">
            We work directly with our makers — no markups, no middlemen — so
            you get demi-fine quality at an honest price.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-ink uppercase tracking-[0.18em] text-xs border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
