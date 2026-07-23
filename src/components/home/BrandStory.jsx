import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";


export function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] bg-sand overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="gold jewelry craftsmanship modern muse designed"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="md:py-8">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Our Story</p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-6"
            >
              Designed for the Modern Muse
            </h2>
            <p
              id="story-body"
              className="text-base md:text-lg text-stone leading-relaxed mb-8"
            >
              Velmora was born from a simple belief: fine jewelry should feel attainable,
              wearable, and deeply personal. Each piece is designed in-house and finished
              with 18k gold plating, created for women who move through the world with
              quiet confidence.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-espresso hover:text-gold transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
