import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

const CATEGORIES = [
  {
    id: "home-kitchen",
    title: "Home & Kitchen",
    desc: "Cookware, bakeware, small appliances, organization, household goods, tableware.",
    examples: ["Stainless cookware sets", "Silicone kitchen tools", "Storage and organizers", "Coffee accessories"],
  },
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    desc: "Audio, charging, smart home, IoT modules, accessories, OEM components.",
    examples: ["Bluetooth speakers", "USB-C chargers and cables", "Smart plugs and sensors", "Webcams and ring lights"],
  },
  {
    id: "apparel-textiles",
    title: "Apparel & Textiles",
    desc: "T-shirts, polos, uniforms, hats, bags, knitwear, fabric sourcing.",
    examples: ["Branded t-shirts and polos", "Workwear and uniforms", "Caps and beanies", "Cotton and tech fabric"],
  },
  {
    id: "promotional-gifts",
    title: "Promotional & Gifts",
    desc: "Branded merchandise, corporate gifts, custom packaging, conference giveaways.",
    examples: ["Branded drinkware", "Notebooks and pens", "Tech gifts", "Eco-friendly merchandise"],
  },
  {
    id: "industrial-hardware",
    title: "Industrial & Hardware",
    desc: "Hand tools, fittings, fasteners, OEM parts, machinery components.",
    examples: ["Hand tools and tool sets", "Stainless fasteners", "Metal and plastic OEM parts", "Hardware accessories"],
  },
  {
    id: "beauty-personal",
    title: "Beauty & Personal Care",
    desc: "Cosmetics packaging, brushes, accessories, OEM formulations, skincare components.",
    examples: ["Cosmetic packaging and tubes", "Makeup brushes", "Hair tools", "Personal care accessories"],
  },
  {
    id: "outdoor-sports",
    title: "Outdoor & Sports",
    desc: "Camping, fitness, cycling, water sports, branded sports merchandise.",
    examples: ["Resistance bands and yoga mats", "Camping gear", "Cycling accessories", "Branded team gear"],
  },
  {
    id: "pet-products",
    title: "Pet Products",
    desc: "Pet accessories, toys, beds, feeding tools, grooming products.",
    examples: ["Pet beds and carriers", "Toys and chews", "Bowls and feeders", "Grooming tools"],
  },
  {
    id: "office-stationery",
    title: "Office & Stationery",
    desc: "Office supplies, paper goods, branded stationery, planners, organization.",
    examples: ["Notebooks and planners", "Branded pens", "Desk organizers", "Custom paper packaging"],
  },
];

const NOTE = "If your category is not listed, ask. We will tell you honestly whether we have the right factory network — and if not, we will not pretend otherwise.";

export default function Products() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Products We Source"
        title="Categories where we have proven factory networks"
        description="Strong supplier relationships across consumer goods, light industrial products, and OEM components. Most projects ship from Yiwu, Ningbo, Shenzhen, Guangzhou, and Dongguan."
        bgId="products-page-bg"
        bgQuery="[products-page-bg-title] [products-page-bg-desc]"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((c) => (
              <article
                key={c.id}
                className="group rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[3/2] bg-slate-100 overflow-hidden">
                  <img
                    alt={c.title}
                    data-strk-img-id={`pcat-${c.id}-img`}
                    data-strk-img={`[pcat-${c.id}-desc] [pcat-${c.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`pcat-${c.id}-title`} className="text-lg font-semibold text-slate-900">
                    {c.title}
                  </h3>
                  <p id={`pcat-${c.id}-desc`} className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {c.desc}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.examples.map((e) => (
                      <li
                        key={e}
                        className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs"
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-amber-200 bg-amber-50 p-6 md:p-8 text-amber-900">
            <p className="text-base md:text-lg leading-relaxed">{NOTE}</p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
