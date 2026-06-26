import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Factory } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Container from "@/components/layout/Container";
import { industries } from "@/data/content";

const industryIntros = {
  "HVAC & Ventilation":
    "High-mix ductwork and architectural panels need a folder that adapts quickly without sacrificing repeatability.",
  "Architectural Cladding":
    "Long, paint-ready folds across full bed length for premium façade work.",
  "Industrial Enclosures":
    "Server racks, control cabinets, and switchgear built to tight tolerances for mission-critical facilities.",
  "Shipbuilding & Rail":
    "Heavy-gauge folding for hulls, bulkheads, and rail car panels — engineered for continuous operation.",
  "Energy & Power":
    "Transformer tanks, switchgear, and renewable energy components with consistent, certifiable results.",
  "Automotive Tier Suppliers":
    "Consistent parts for tier-1 and tier-2 suppliers at automotive cycle rates and uptime expectations.",
};

export default function Industries() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-hero-mesh text-paper-50 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-precision-grid opacity-40"
        />
        <Container className="relative pt-16 pb-20 md:pt-24 md:pb-28">
          <nav
            className="flex items-center gap-1.5 text-paper-50/60 text-xs tracking-[0.18em] uppercase mb-10"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-copper-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-paper-50">Industries</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="eyebrow text-copper-400">Industries</span>
              <h1
                id="industries-hero-title"
                className="mt-4 font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-paper-50 text-balance"
              >
                Six industries, hundreds of successful deployments.
              </h1>
            </div>
            <p
              id="industries-hero-subtitle"
              className="lg:col-span-4 text-paper-50/75 text-base md:text-lg leading-relaxed"
            >
              ARTITECT folders are trusted in environments where every
              fraction of a millimeter matters.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper-50 py-20 md:py-24">
        <Container>
          <div className="space-y-6">
            {industries.map((industry, idx) => (
              <article
                key={industry.title}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-paper-100 border border-ink-900/8 rounded-3xl p-8 md:p-10 ${
                  idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-navy-900 relative">
                    <img
                      alt={industry.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      data-strk-img-id={`industries-${idx}-img-77a3e9`}
                      data-strk-img={`[industries-${idx}-intro] [industries-${idx}-desc] [industries-${idx}-title] [industries-hero-subtitle] [industries-hero-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="1000"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                    <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-paper-50/15 backdrop-blur-sm border border-paper-50/20 text-paper-50 text-xs font-semibold px-3 py-1.5 rounded-full">
                      <Factory className="w-3.5 h-3.5 text-copper-400" />
                      Sector {String(idx + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <h2
                    id={`industries-${idx}-title`}
                    className="font-display font-semibold text-3xl md:text-4xl text-ink-900 leading-tight text-balance"
                  >
                    {industry.title}
                  </h2>
                  <p
                    id={`industries-${idx}-desc`}
                    className="mt-3 text-ink-700 text-base md:text-lg"
                  >
                    {industry.description}
                  </p>
                  <p
                    id={`industries-${idx}-intro`}
                    className="mt-5 text-ink-700 text-sm md:text-base leading-relaxed"
                  >
                    {industryIntros[industry.title]}
                  </p>
                  <Link
                    to="/products"
                    className="mt-6 inline-flex items-center gap-2 text-copper-600 hover:text-copper-700 font-semibold text-sm group"
                  >
                    Browse machines for {industry.title.toLowerCase()}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}