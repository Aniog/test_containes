import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const APPLICATIONS = [
  {
    id: "architectural",
    title: "Architectural Cladding",
    desc: "Precision folded aluminium and zinc panels for award-winning façades.",
    image: "Architectural metal cladding panels on modern building facade",
    imgId: "applications-architectural-77d2a1",
    titleId: "applications-architectural-title",
    descId: "applications-architectural-desc",
  },
  {
    id: "hvac",
    title: "HVAC & Ductwork",
    desc: "Galvanized and stainless duct components folded to airtight tolerances.",
    image: "Industrial HVAC ductwork and sheet metal components in factory",
    imgId: "applications-hvac-77d2a2",
    titleId: "applications-hvac-title",
    descId: "applications-hvac-desc",
  },
  {
    id: "enclosures",
    title: "Electronics Enclosures",
    desc: "EMI-shielded cabinets and 19-inch rack frames for data-centre hardware.",
    image: "Metal electronics enclosure cabinets on manufacturing line",
    imgId: "applications-enclosures-77d2a3",
    titleId: "applications-enclosures-title",
    descId: "applications-enclosures-desc",
  },
  {
    id: "automotive",
    title: "Automotive & EV",
    desc: "Battery trays, motor housings, and structural components for EV programmes.",
    image: "Automotive EV battery enclosure sheet metal forming",
    imgId: "applications-automotive-77d2a4",
    titleId: "applications-automotive-title",
    descId: "applications-automotive-desc",
  },
  {
    id: "rail",
    title: "Rail & Transit",
    desc: "High-strength steel bodyside panels and interior modules for rolling stock.",
    image: "Rail transit interior and exterior metal panels workshop",
    imgId: "applications-rail-77d2a5",
    titleId: "applications-rail-title",
    descId: "applications-rail-desc",
  },
  {
    id: "cabinetry",
    title: "Cabinetry & Furniture",
    desc: "Designer-grade steel and aluminium furniture folded in small batches.",
    image: "Designer metal cabinetry and furniture workshop production",
    imgId: "applications-cabinetry-77d2a6",
    titleId: "applications-cabinetry-title",
    descId: "applications-cabinetry-desc",
  },
];

export default function ApplicationsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="applications"
      ref={containerRef}
      className="bg-paper py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <span id="applications-eyebrow" className="eyebrow">
              Where our machines work
            </span>
            <h2
              id="applications-title"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] mt-6 text-ink"
            >
              Built for every
              <br />
              industry that folds metal.
            </h2>
          </div>
          <div className="lg:col-span-5 self-end">
            <p className="text-base md:text-lg text-smoke leading-relaxed">
              ARTITECT double folding machines, sheet metal folders, and metal
              folding systems are trusted by fabricators in six core industries
              — from one-off architectural commissions to lights-out automotive
              production.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {APPLICATIONS.map((app) => (
            <article
              key={app.id}
              className="group flex flex-col bg-sand border border-mist hover:border-brass transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                <img
                  alt={app.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  data-strk-img-id={app.imgId}
                  data-strk-img={`[${app.descId}] [${app.titleId}] [applications-eyebrow] [applications-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-8">
                <h3
                  id={app.titleId}
                  className="font-display text-2xl font-semibold text-ink"
                >
                  {app.title}
                </h3>
                <p id={app.descId} className="mt-3 text-sm text-smoke leading-relaxed">
                  {app.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
