import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function BrandStory() {
  const ref = useRef(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section ref={ref} className="bg-canvas">
      <div className="max-w-editorial mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 relative aspect-[4/5] bg-surface overflow-hidden">
            <img
              alt="Crafted by hand in a quiet studio"
              data-strk-img-id="brand-story-img-1"
              data-strk-img="[brand-story-title] [brand-story-eyebrow] artisan hands crafting gold jewelry in a soft studio"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-6">
            <p
              id="brand-story-eyebrow"
              className="text-[11px] uppercase tracking-widest2 text-gold mb-4"
            >
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.05] tracking-tight"
            >
              Slow made. <em className="text-gold not-italic">Soft</em> worn.
            </h2>
            <div className="mt-6 space-y-5 text-espresso/80 text-base md:text-[17px] leading-relaxed max-w-xl">
              <p>
                Velmora began at a kitchen table, with a single sketch of a huggie that felt
                weighty in the hand. We wanted jewelry that lived well between a linen blazer
                and a quiet Sunday — pieces that could be passed down without ever being loud.
              </p>
              <p>
                Every piece is cast in 18K gold-plated brass by a small studio of makers we know
                by name. We finish each one in small batches, package it in recycled paper, and
                ship it with care from our studio in Lisbon.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Our Story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
