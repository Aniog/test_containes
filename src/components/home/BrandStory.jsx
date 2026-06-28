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
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-0 bg-gold-pale"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image side */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[600px] overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-x9y8z7"
            data-strk-img="[brand-story-desc] [brand-story-title] gold jewelry atelier craftsmanship"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text side */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-4">
            Our Story
          </p>
          <h2
            id="brand-story-title"
            className="font-cormorant text-4xl md:text-5xl font-light text-dark leading-tight mb-6"
          >
            Made with intention.
            <br />
            <em className="italic">Worn with love.</em>
          </h2>
          <p
            id="brand-story-desc"
            className="font-inter text-sm text-stone-warm leading-relaxed mb-4"
          >
            Velmora was born from a simple belief: that beautiful jewelry
            shouldn't cost a fortune, but it should feel like it does. We design
            every piece with the modern woman in mind — someone who moves through
            the world with intention and wears her jewelry as an extension of
            herself.
          </p>
          <p className="font-inter text-sm text-stone-warm leading-relaxed mb-8">
            Each piece is crafted in 18K gold plating over sterling silver or
            brass, hypoallergenic and designed to last. From our studio to your
            jewelry box — with care.
          </p>
          <Link
            to="/shop"
            className="self-start font-inter text-xs uppercase tracking-widest text-dark border-b border-dark pb-0.5 hover:text-gold hover:border-gold transition-colors"
          >
            Discover the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
