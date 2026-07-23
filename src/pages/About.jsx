import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Hand, Leaf } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const VALUES = [
  {
    icon: Hand,
    title: "Hand-Finished",
    body: "Every piece is hand-finished by a team of seven in our Brooklyn studio. No mass production. No shortcuts.",
  },
  {
    icon: Sparkles,
    title: "Demi-Fine Standard",
    body: "18K gold plated over recycled brass in thick, jewelry-grade layers. We plate two to three times industry standard — so it lasts.",
  },
  {
    icon: Leaf,
    title: "Made to Last",
    body: "We design for the long shelf — pieces you'll wear for years, repair if you need to, and pass down eventually.",
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        ref={containerRef}
        className="bg-editorial-alt pt-32 md:pt-40 pb-16 md:pb-24"
      >
        <div className="max-w-editorial mx-auto px-5 md:px-8 lg:px-12 text-center">
          <p className="eyebrow mb-5">Our Story</p>
          <h1 className="font-display text-cocoa-900 text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.01em]">
            Quiet pieces,{" "}
            <em className="italic font-normal">made to last</em>
          </h1>
          <p className="mt-6 text-cocoa-700 text-[16px] md:text-lg leading-relaxed max-w-xl mx-auto">
            Velmora started in a Brooklyn apartment in 2021 — a single borrowed
            mold, a hand-pour of brass, and an idea: demi-fine jewelry that
            looks and feels like fine, without the four-figure price tag.
          </p>
        </div>

        {/* Editorial image */}
        <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12 mt-14 md:mt-20">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-ivory-100">
            <img
              alt="Velmora studio, hand-finishing jewelry in warm light"
              data-strk-img-id="about-hero-7a1d3e"
              data-strk-img="[about-hero-quote] [about-hero-title] velmora studio jewelry making editorial warm light"
              data-strk-img-ratio="21x9"
              data-strk-img-width="1600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 9'/%3E"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="section bg-editorial">
        <div className="max-w-editorial mx-auto px-5 md:px-8 lg:px-12 text-center">
          <p
            id="about-hero-quote"
            className="font-display text-cocoa-900 text-3xl md:text-4xl lg:text-5xl leading-[1.2] italic"
          >
            "We didn't want another fine jewelry brand that lived behind glass.
            We wanted the kind of gold you'd reach for on a Tuesday — and feel
            quietly, absurdly good about."
          </p>
          <p className="mt-8 text-[12px] tracking-button uppercase text-taupe-500">
            — Eleanor Park, Founder
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-editorial-alt">
        <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-ivory-50 border border-cocoa-900/8 p-8 md:p-10"
                >
                  <Icon
                    className="w-6 h-6 text-brass-700 mb-6"
                    strokeWidth={1.3}
                  />
                  <h3 className="font-display text-2xl text-cocoa-900 mb-3 tracking-wide">
                    {v.title}
                  </h3>
                  <p className="text-cocoa-700 text-[15px] leading-relaxed">
                    {v.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight bg-espresso-900 text-ivory-50">
        <div className="max-w-editorial mx-auto px-5 md:px-8 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-[-0.01em]">
            Find the piece you'll <em className="italic font-normal text-champagne-300">reach for</em>
          </h2>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 text-[12px] tracking-button uppercase border border-champagne-300 px-8 py-4 rounded-sm hover:bg-champagne-500/15 transition-colors"
          >
            Shop the Collection
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </>
  );
}
