import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-surface-elevated overflow-hidden">
            <img
              alt="Velmora Fine Jewelry craftsmanship"
              data-strk-img-id="brand-story-3f7b2d"
              data-strk-img="[story-title] [story-text]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <h2 id="story-title" className="section-title">
              Our Story
            </h2>
            <div className="w-10 h-px bg-velmora-gold mt-6 mb-6" />
            <p
              id="story-text"
              className="text-velmora-text-secondary text-sm md:text-base font-sans leading-relaxed"
            >
              Velmora was born from a simple belief: that exceptional jewelry
              should not require exceptional sacrifice. We craft each piece
              in 18K gold-plated sterling silver, designed to transition
              seamlessly from desk to dinner, from everyday to extraordinary.
            </p>
            <p className="text-velmora-text-secondary text-sm md:text-base font-sans leading-relaxed mt-4">
              Every piece is hand-finished, rigorously tested, and arrives in
              packaging designed to be as beautiful as what lies inside.
              Because you deserve jewelry that feels as good as it looks.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-velmora-gold text-sm uppercase tracking-[0.2em] font-sans mt-8 hover:text-velmora-gold-hover transition-colors duration-200 group"
            >
              Read Our Story
              <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}