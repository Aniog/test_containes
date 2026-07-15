import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { Link } from "react-router-dom";
import strkImgConfig from "@/strk-img-config.json";

export default function Placeholder({ eyebrow, title, body, bgQuery, bgId, bgWidth = 1400 }) {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ivory">
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-cocoa text-ivory">
        <div
          className="absolute inset-0"
          data-strk-bg-id={bgId}
          data-strk-bg={bgQuery}
          data-strk-bg-ratio="16x9"
          data-strk-bg-width={String(bgWidth)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 to-cocoa/20" />
        <div className="relative container-shell py-28 md:py-36">
          <span id={`${bgId}-eyebrow`} className="eyebrow text-gold-pale">
            {eyebrow}
          </span>
          <h1
            id={`${bgId}-title`}
            className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-2xl"
          >
            {title}
          </h1>
        </div>
      </section>
      <section className="container-shell py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7 md:col-start-2">
          <p className="font-serif text-2xl md:text-3xl text-ink leading-snug">
            {body}
          </p>
          <div className="mt-10">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
