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
    <section id="about" ref={containerRef} className="bg-ivory-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              alt="Velmora brand story — artisan crafting gold jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-inter text-xs uppercase tracking-widest text-gold mb-6">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-4xl md:text-5xl font-light text-espresso leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">beautiful things</em>
            </h2>
            <p
              id="brand-story-desc"
              className="font-inter text-sm text-stone leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that every woman deserves to wear beautiful jewelry every day — not just on special occasions.
            </p>
            <p className="font-inter text-sm text-stone leading-relaxed mb-8">
              We create demi-fine pieces in 18K gold plate that are designed to last, crafted with the same care as fine jewelry but at a price that feels accessible. Because you shouldn't have to choose between quality and affordability.
            </p>
            <div className="flex items-center gap-8 mb-10">
              <div>
                <p className="font-cormorant text-3xl text-espresso font-light">18K</p>
                <p className="font-inter text-xs uppercase tracking-widest text-stone mt-1">Gold Plated</p>
              </div>
              <div className="w-px h-10 bg-stone-light" />
              <div>
                <p className="font-cormorant text-3xl text-espresso font-light">100%</p>
                <p className="font-inter text-xs uppercase tracking-widest text-stone mt-1">Hypoallergenic</p>
              </div>
              <div className="w-px h-10 bg-stone-light" />
              <div>
                <p className="font-cormorant text-3xl text-espresso font-light">5K+</p>
                <p className="font-inter text-xs uppercase tracking-widest text-stone mt-1">Happy Customers</p>
              </div>
            </div>
            <Link
              to="/#about"
              className="self-start font-inter text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
