import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-parchment">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-q2r3s4"
              data-strk-img="[brand-story-headline] fine jewelry craftsmanship atelier"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-sans text-[11px] tracking-widest3 uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-headline"
              className="font-serif text-4xl md:text-5xl font-light text-espresso leading-tight mb-6"
            >
              Made with intention,<br />
              <em className="italic">worn with love</em>
            </h2>
            <div className="w-8 h-px bg-gold mb-6" />
            <p className="font-sans text-sm text-charcoal leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that feel luxurious, last for years, and become part of your everyday story.
            </p>
            <p className="font-sans text-sm text-charcoal leading-relaxed mb-8">
              Every piece is crafted in 18K gold-plated brass, nickel-free and hypoallergenic, designed to be worn from morning coffee to evening candlelight.
            </p>
            <Link
              to="/#about"
              className="self-start font-sans text-xs tracking-widest uppercase text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
