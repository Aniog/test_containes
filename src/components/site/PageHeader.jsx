import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";

export default function PageHeader({ eyebrow, title, description }) {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);
  return (
    <section ref={ref} className="relative bg-brand-800 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="page-header-bg-aa12cd"
        data-strk-bg="[page-header-title] modern container shipping port at dawn"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-800/90 to-brand-700/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-400 mb-3">
            {eyebrow}
          </p>
        )}
        <h1
          id="page-header-title"
          className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl"
        >
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-brand-100/90 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
