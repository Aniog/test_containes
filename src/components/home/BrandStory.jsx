import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useReveal } from "@/lib/useReveal.js";

export default function BrandStory() {
  const ref = useReveal();
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, imageRef.current);
  }, []);

  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div ref={imageRef} className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-h-[640px] overflow-hidden bg-gradient-to-br from-ink-700 to-ink-900">
              <img
                alt="Founder portrait"
                data-strk-img-id="story-portrait-3f12"
                data-strk-img="[story-body] [story-title]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,11,8,0) 60%, rgba(15,11,8,0.25) 100%)",
                }}
              />
            </div>
            <p className="mt-3 text-[11px] tracking-[0.28em] uppercase text-muted-500">
              In our atelier · Lisbon
            </p>
          </div>

          {/* Text */}
          <div ref={ref} className="reveal lg:col-span-6 order-1 lg:order-2">
            <p className="eyebrow text-muted-500">Our Story</p>
            <h2
              id="story-title"
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] text-ink-800"
            >
              Made by hand, in small batches, for the long wear.
            </h2>
            <p
              id="story-body"
              className="mt-6 text-[15px] leading-relaxed text-ink-800/85 max-w-xl"
            >
              Velmora began with a simple belief: that demi-fine jewelry should feel as considered
              as fine jewelry — without the quiet mark-up. Each piece is hand-finished by a small
              team of artisans, plated in 18K gold over a solid brass core, and inspected twice
              before it leaves our atelier.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-800/85 max-w-xl">
              The result is jewelry that doesn't ask to be saved for someday — only to be worn
              today, and tomorrow, and the day after.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <Link to="/about" className="link-underline inline-flex items-center gap-2 group">
                Our Story
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
              <Link to="/journal" className="text-[11px] tracking-[0.32em] uppercase text-muted-500 hover:text-ink-800 transition-colors">
                Read the Journal
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Stat value="2019" label="Founded" />
              <Stat value="18K" label="Gold Plated" />
              <Stat value="12k+" label="Happy Wearer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-serif text-3xl text-ink-800">{value}</p>
      <p className="mt-1 text-[10px] tracking-[0.28em] uppercase text-muted-500">{label}</p>
    </div>
  );
}
