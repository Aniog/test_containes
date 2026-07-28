import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  Cpu,
  ChefHat,
  Wrench,
  Shirt,
  Sparkles,
  Cog,
  Package,
  Boxes,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

const categories = [
  {
    icon: Cpu,
    name: "Consumer Electronics",
    summary:
      "Accessories, audio, charging, smart home, wearables, and small appliances.",
    examples: [
      "Charging cables, power banks, wireless chargers",
      "Bluetooth speakers, earbuds, headphones",
      "Smart plugs, smart lights, sensors",
      "Fitness bands, smart watches",
      "Phone stands, mounts, and accessories",
    ],
    moq: "500 – 5,000 units",
    leadTime: "30 – 60 days",
    region: "Shenzhen, Dongguan",
    imageId: "cat-electronics-1b29a4",
    imageQuery:
      "[cat-electronics-name] [products-eyebrow] [products-title]",
  },
  {
    icon: ChefHat,
    name: "Home & Kitchen",
    summary:
      "Cookware, storage, organization, and small kitchen appliances for retail and private label.",
    examples: [
      "Stainless steel cookware, knives, cutting boards",
      "Storage containers, food organizers, pantry bins",
      "Air fryers, blenders, kettles, toasters",
      "Bath accessories and laundry organization",
    ],
    moq: "1,000 – 5,000 units",
    leadTime: "35 – 70 days",
    region: "Yongkang, Jieyang",
    imageId: "cat-home-7b09a1",
    imageQuery:
      "[cat-home-name] [products-eyebrow] [products-title]",
  },
  {
    icon: Wrench,
    name: "Hardware & Tools",
    summary:
      "Hand tools, fasteners, fittings, and building materials for distributors and OEM brands.",
    examples: [
      "Hand tools, pliers, screwdrivers, wrenches",
      "Fasteners, anchors, brackets, hinges",
      "Pipes, valves, fittings (brass, stainless, PVC)",
      "Power tool accessories and storage",
    ],
    moq: "1,000 – 10,000 units",
    leadTime: "30 – 60 days",
    region: "Zhejiang, Jiangsu",
    imageId: "cat-tools-3a4f81",
    imageQuery:
      "[cat-tools-name] [products-eyebrow] [products-title]",
  },
  {
    icon: Shirt,
    name: "Apparel & Textiles",
    summary:
      "Knitwear, workwear, uniforms, and technical fabrics with on-site quality control.",
    examples: [
      "T-shirts, hoodies, sweatshirts, polos",
      "Workwear, hi-vis, uniforms",
      "Performance fabrics, activewear, sportswear",
      "Scarves, hats, bags (fabric)",
    ],
    moq: "300 – 3,000 pcs/style",
    leadTime: "30 – 60 days",
    region: "Guangzhou, Hangzhou",
    imageId: "cat-apparel-d019c2",
    imageQuery:
      "[cat-apparel-name] [products-eyebrow] [products-title]",
  },
  {
    icon: Sparkles,
    name: "Beauty & Personal Care",
    summary:
      "Skincare, cosmetics, hair care, and packaging with GMP-aware factories.",
    examples: [
      "Skincare OEM (serums, creams, cleansers)",
      "Cosmetics (lipstick, foundation, palettes)",
      "Hair care (shampoo, conditioner, treatments)",
      "Custom packaging, jars, pumps, droppers",
    ],
    moq: "1,000 – 5,000 units",
    leadTime: "40 – 80 days",
    region: "Shanghai, Guangzhou",
    imageId: "cat-beauty-91c0af",
    imageQuery:
      "[cat-beauty-name] [products-eyebrow] [products-title]",
  },
  {
    icon: Cog,
    name: "Industrial Parts",
    summary:
      "CNC machining, sheet metal, casting, and plastic injection molding with engineering support.",
    examples: [
      "CNC machined parts, prototypes, low-volume runs",
      "Sheet metal fabrication, laser cutting, bending",
      "Investment casting, sand casting, die casting",
      "Plastic injection molding, inserts, overmolding",
    ],
    moq: "300 – 5,000 units",
    leadTime: "30 – 75 days",
    region: "Suzhou, Dongguan, Ningbo",
    imageId: "cat-industrial-f7108b",
    imageQuery:
      "[cat-industrial-name] [products-eyebrow] [products-title]",
  },
  {
    icon: Package,
    name: "Packaging & Print",
    summary:
      "Custom boxes, labels, bags, and retail packaging — paper, plastic, and sustainable options.",
    examples: [
      "Rigid boxes, folding cartons, mailer boxes",
      "Corrugated shipping boxes, inserts",
      "Labels, stickers, shrink sleeves",
      "Stand-up pouches, kraft bags, retail bags",
    ],
    moq: "500 – 5,000 units",
    leadTime: "15 – 35 days",
    region: "Shenzhen, Dongguan",
    imageId: "cat-packaging-7e3b12",
    imageQuery:
      "[cat-packaging-name] [products-eyebrow] [products-title]",
  },
  {
    icon: Boxes,
    name: "Furniture & Outdoor",
    summary:
      "Flat-pack furniture, rattan, garden, and pet products for retailers and DTC brands.",
    examples: [
      "Flat-pack furniture, KD construction, RTA",
      "Rattan and wicker indoor/outdoor",
      "Garden tools, planters, irrigation",
      "Pet beds, carriers, feeding accessories",
    ],
    moq: "200 – 1,000 units",
    leadTime: "40 – 75 days",
    region: "Foshan, Anji",
    imageId: "cat-furniture-1d3b08",
    imageQuery:
      "[cat-furniture-name] [products-eyebrow] [products-title]",
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(categories[0].name);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  return (
    <>
      <section className="bg-brand-900 text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            id="products-eyebrow"
            className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-500"
          >
            Products we source
          </p>
          <h1
            id="products-title"
            className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl"
          >
            Most consumer and industrial categories — with realistic MOQs.
          </h1>
          <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-3xl">
            These are the categories we work with most often. Each has
            suppliers we've already visited or audited. If your product isn't
            listed, ask — we can usually help.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-canvas border-b border-ink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setActive(c.name)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium border transition",
                  active === c.name
                    ? "bg-brand-800 text-white border-brand-800"
                    : "bg-white text-ink-700 border-ink-200 hover:border-brand-100"
                )}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.name;
            return (
              <article
                key={cat.name}
                id={`cat-${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center scroll-mt-24",
                  !isActive && "hidden"
                )}
              >
                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] bg-ink-100 rounded-lg overflow-hidden shadow-card">
                    <img
                      alt={cat.name}
                      data-strk-img-id={cat.imageId}
                      data-strk-img={cat.imageQuery}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-md bg-brand-100 text-brand-800 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2
                      id={`cat-${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-name`}
                      className="text-2xl md:text-3xl font-bold tracking-tight text-ink-900"
                    >
                      {cat.name}
                    </h2>
                  </div>
                  <p className="mt-4 text-base md:text-lg text-ink-700 leading-relaxed">
                    {cat.summary}
                  </p>

                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-accent-600">
                    Common items
                  </h3>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-ink-700">
                    {cat.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-600 flex-shrink-0" />
                        <span className="leading-relaxed">{ex}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
                    <Meta label="Typical MOQ" value={cat.moq} />
                    <Meta label="Lead time" value={cat.leadTime} />
                    <Meta label="Main region" value={cat.region} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Specialized sourcing"
            title="Categories we cover on request"
            description="Some products need more attention — usually because of regulations, materials, or tooling. We work with a small number of vetted partners for these."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Children's products (EN71, ASTM F963)",
              "Food contact materials (LFGB, FDA)",
              "Electrical with CE / FCC / UKCA",
              "Battery-powered products (UN38.3)",
              "Outdoor and sporting goods",
              "Pet products and accessories",
            ].map((s) => (
              <div
                key={s}
                className="bg-canvas border border-ink-200 rounded-lg p-5"
              >
                <p className="text-sm font-semibold text-ink-900">{s}</p>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  We pair you with factories that have the right certificates
                  and test reports for your market.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-semibold px-6 py-3 rounded-md transition shadow-sm"
            >
              Ask about your product
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Meta({ label, value }) {
  return (
    <div className="bg-white border border-ink-200 rounded-md p-3">
      <div className="text-[11px] font-semibold tracking-wider uppercase text-ink-500">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-ink-900">{value}</div>
    </div>
  );
}
