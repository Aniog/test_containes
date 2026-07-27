import React, { useEffect, useRef } from "react";
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
      className="py-20 md:py-0 bg-parchment overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden md:aspect-auto aspect-[4/3]" style={{ minHeight: "480px" }}>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            data-strk-img-id="brand-story-img-a1b2c3"
            data-strk-img="[brand-story-desc] [brand-story-title]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            alt="Velmora brand story"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-4">
            Our Story
          </p>
          <h2
            id="brand-story-title"
            className="font-cormorant text-4xl md:text-5xl font-light text-espresso leading-tight mb-6"
          >
            Made with intention,
            <br />
            <em className="italic">worn with love</em>
          </h2>
          <p
            id="brand-story-desc"
            className="font-inter text-sm text-taupe leading-relaxed mb-4"
          >
            Velmora was born from a simple belief: that beautiful jewelry
            shouldn't cost a fortune, but it should feel like it does. Every
            piece is thoughtfully designed to flatter, to last, and to become
            part of your story.
          </p>
          <p className="font-inter text-sm text-taupe leading-relaxed mb-8">
            We work with skilled artisans to create demi-fine pieces that bridge
            the gap between fashion jewelry and fine jewelry — 18K gold plated,
            hypoallergenic, and crafted to be treasured.
          </p>
          <Link
            to="/shop"
            className="self-start font-inter text-xs uppercase tracking-[0.15em] text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
