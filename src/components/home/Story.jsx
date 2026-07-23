import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Story() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="section bg-editorial-alt"
      aria-label="Our story"
    >
      <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* Image left */}
          <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-ivory-100 order-1">
            <img
              alt="Jewelry maker at work, hand-finishing a piece in soft natural light"
              data-strk-img-id="story-img-2c4e8a"
              data-strk-img="[story-eyebrow] [story-title] [story-quote] atelier jewelry maker hand finishing editorial warm"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <span className="absolute bottom-5 left-5 px-3 py-1.5 bg-ivory-50/95 text-[10px] tracking-button uppercase text-cocoa-900">
              Est. 2021 · Brooklyn
            </span>
          </div>

          {/* Text right */}
          <div className="order-2">
            <p id="story-eyebrow" className="eyebrow mb-5">Our Story</p>
            <h2
              id="story-title"
              className="font-display text-cocoa-900 text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.01em] mb-8"
            >
              Made by hand.
              <br />
              <em className="italic font-normal text-brass-700">Worn for years.</em>
            </h2>
            <p
              id="story-quote"
              className="font-display text-cocoa-700 text-xl md:text-2xl leading-relaxed italic mb-6"
            >
              "We started Velmora in a Brooklyn apartment, casting the first
              pieces in a single borrowed mold. Five years later, the same
              intention — quiet, made-to-last, made to be loved."
            </p>
            <p className="text-cocoa-700 text-[15px] leading-relaxed mb-8 max-w-md">
              Every piece is hand-finished in small batches by a team of seven.
              We work with recycled brass and brass from certified small
              foundries, plate in 18K gold in thick, jewelry-grade layers, and
              finish every surface by hand. The result: demi-fine that looks
              and feels like fine.
            </p>
            <Link to="/about" className="btn-link">
              Read the Full Story
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
