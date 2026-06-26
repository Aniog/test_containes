import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Factory, ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { industries } from "@/data/content";

export default function HomeIndustries() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-navy-950 text-paper-50 py-24 md:py-28 relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-precision-grid opacity-30 pointer-events-none"
      />
      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="eyebrow text-copper-400">Industries we serve</span>
            <h2
              id="industries-title"
              className="mt-4 font-display font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight text-paper-50 text-balance"
            >
              Trusted by fabricators across six demanding sectors.
            </h2>
          </div>
          <p
            id="industries-subtitle"
            className="lg:col-span-5 text-paper-50/70 text-base md:text-lg leading-relaxed"
          >
            From architectural cladding to shipbuilding, ARTITECT machines
            earn their keep in some of the most quality-critical environments
            in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, idx) => (
            <article
              key={industry.title}
              className="group relative overflow-hidden rounded-2xl border border-paper-50/10 bg-paper-50/5 hover:bg-paper-50/10 transition-colors"
            >
              <div className="absolute top-5 right-5 font-display text-4xl font-bold text-paper-50/10 group-hover:text-copper-400/40 transition-colors">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="p-7 md:p-8 min-h-[180px] flex flex-col">
                <Factory className="w-6 h-6 text-copper-400" />
                <h3
                  id={`industry-${idx}-title`}
                  className="mt-5 font-display font-semibold text-lg text-paper-50"
                >
                  {industry.title}
                </h3>
                <p
                  id={`industry-${idx}-desc`}
                  className="mt-3 text-sm text-paper-50/70 leading-relaxed"
                >
                  {industry.description}
                </p>
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <img
                  alt=""
                  className="w-full h-full object-cover"
                  data-strk-img-id={`industry-${idx}-bg-9f4b2e`}
                  data-strk-img={`[industry-${idx}-desc] [industry-${idx}-title] [industries-subtitle] [industries-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-copper-400 hover:text-copper-500 font-semibold text-sm group"
          >
            See all industries
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}