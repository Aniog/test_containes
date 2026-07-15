import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-parchment">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[560px]">
            <img
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-inter text-xs uppercase tracking-widest text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-4xl md:text-5xl font-light text-espresso leading-tight"
            >
              Made with intention,
              <br />
              <em>worn with love</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-inter text-sm text-umber leading-relaxed mt-6"
            >
              Velmora was born from a simple belief: that beautiful jewelry
              shouldn't be reserved for special occasions. We design demi-fine
              gold pieces that move with you — from morning coffee to candlelit
              dinners, from boardrooms to beaches.
            </p>
            <p className="font-inter text-sm text-umber leading-relaxed mt-4">
              Every piece is crafted with 18K gold plating over sterling silver,
              hypoallergenic and built to last. Because you deserve jewelry that
              keeps up with your life.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Link
                to="/about"
                className="font-inter text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Our Story
              </Link>
              <div className="w-px h-4 bg-linen" />
              <Link
                to="/shop"
                className="font-inter text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Shop Now
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-linen">
              {[
                { value: "50K+", label: "Happy Customers" },
                { value: "18K", label: "Gold Plated" },
                { value: "4.9★", label: "Average Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-cormorant text-2xl font-light text-espresso">
                    {stat.value}
                  </p>
                  <p className="font-inter text-xs text-stone-warm uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
