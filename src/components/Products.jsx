import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const products = [
  {
    id: "ax-duo-3200",
    eyebrow: "Flagship",
    name: "AX-Duo 3200",
    category: "Double Folding Machine",
    desc: "Twin-blade architecture for upward and downward folds in a single cycle. Ideal for architectural cladding, panels, and complex geometries.",
    specs: ["3200 mm working length", "1.5 mm mild steel capacity", "CNC 5-axis control"],
    imgId: "product-ax-duo-3200-9b2",
    titleId: "product-ax-duo-3200-title",
    descId: "product-ax-duo-3200-desc",
  },
  {
    id: "fl-prime-2500",
    eyebrow: "Most popular",
    name: "FL-Prime 2500",
    category: "Sheet Metal Folder",
    desc: "Workshop favorite for HVAC, ductwork, and roofing fabricators. Manual setup with motorized clamping for fast repeatable folds.",
    specs: ["2500 mm working length", "1.2 mm capacity", "Motorized clamp beam"],
    imgId: "product-fl-prime-2500-c7e",
    titleId: "product-fl-prime-2500-title",
    descId: "product-fl-prime-2500-desc",
  },
  {
    id: "atelier-2000",
    eyebrow: "Studio",
    name: "Atelier 2000",
    category: "Metal Folder Machine",
    desc: "Compact metal folding machine engineered for studios, architectural metalwork, and bespoke prototyping with whisper-quiet operation.",
    specs: ["2000 mm working length", "0.8 mm capacity", "Compact footprint"],
    imgId: "product-atelier-2000-4d1",
    titleId: "product-atelier-2000-title",
    descId: "product-atelier-2000-desc",
  },
  {
    id: "industria-4000",
    eyebrow: "Heavy duty",
    name: "Industria 4000",
    category: "Metal Folding Machine",
    desc: "Built for industrial production lines that fold thicker steel and stainless. Reinforced beam, hydraulic clamping, programmable backgauge.",
    specs: ["4000 mm working length", "2.0 mm stainless capacity", "Hydraulic clamping"],
    imgId: "product-industria-4000-8a3",
    titleId: "product-industria-4000-title",
    descId: "product-industria-4000-desc",
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="products"
      ref={containerRef}
      className="bg-paper py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p
              id="products-eyebrow"
              className="text-xs uppercase tracking-[0.3em] text-brass mb-4"
            >
              The Collection
            </p>
            <h2
              id="products-title"
              className="font-display text-4xl md:text-6xl font-light text-ink leading-[1.05] max-w-2xl"
            >
              Machines for every fold, every fabricator.
            </h2>
          </div>
          <p
            id="products-subtitle"
            className="text-steel md:max-w-md text-base leading-relaxed"
          >
            From double folding flagships to studio-scale metal folders — every
            ARTITECT machine is engineered with the same obsession for accuracy,
            longevity, and ease of use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {products.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-ink/10 hover:border-ink/30 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <img
                  alt={p.name}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 bg-ink text-white text-[10px] uppercase tracking-[0.22em] px-3 py-1.5">
                  {p.eyebrow}
                </div>
              </div>

              <div className="p-8 md:p-10">
                <p className="text-[11px] uppercase tracking-[0.22em] text-brass mb-3">
                  {p.category}
                </p>
                <h3
                  id={p.titleId}
                  className="font-display text-2xl md:text-3xl text-ink mb-3"
                >
                  {p.name}
                </h3>
                <p
                  id={p.descId}
                  className="text-steel leading-relaxed mb-6"
                >
                  {p.desc}
                </p>

                <ul className="space-y-2 mb-8">
                  {p.specs.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-3 text-sm text-ink/80"
                    >
                      <span className="mt-1.5 inline-block w-3 h-px bg-brass" />
                      {s}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-ink border-b border-ink/30 hover:border-brass hover:text-brass-deep pb-1 transition-colors"
                >
                  Request specifications
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
