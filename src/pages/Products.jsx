import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";

const CATEGORIES = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    desc: "Bluetooth audio, smart home devices, accessories, small appliances. We support FCC, CE, RoHS, UKCA, and battery certifications.",
    examples: ["Bluetooth speakers", "Wireless earbuds", "Smart plugs", "Phone accessories", "USB hubs"],
  },
  {
    id: "home-kitchen",
    title: "Home &amp; Kitchen",
    desc: "Cookware, utensils, storage, organization, and small kitchen tools for retail, e-commerce, and private label.",
    examples: ["Stainless cookware", "Silicone bakeware", "Storage containers", "Kitchen tools", "Drinkware"],
  },
  {
    id: "apparel-textiles",
    title: "Apparel &amp; Textiles",
    desc: "Cut-and-sew apparel, knitwear, uniforms, home textiles, with custom labels, hangtags, and packaging.",
    examples: ["T-shirts &amp; basics", "Workwear", "Bedding", "Towels", "Bags &amp; accessories"],
  },
  {
    id: "promotional",
    title: "Promotional &amp; Gifts",
    desc: "Branded merchandise for marketing campaigns, events, and corporate gifting, with logo printing and packaging.",
    examples: ["Drinkware", "Tote bags", "Stationery", "Power banks", "Custom packaging"],
  },
  {
    id: "industrial",
    title: "Industrial &amp; Hardware",
    desc: "Tools, fasteners, fittings, light machinery, and OEM components for B2B distribution.",
    examples: ["Hand tools", "Fasteners", "Pipe fittings", "Light machinery", "OEM parts"],
  },
  {
    id: "beauty-personal-care",
    title: "Beauty &amp; Personal Care",
    desc: "Devices, accessories, packaging, and OEM formulations with documentation for major markets.",
    examples: ["Beauty devices", "Hair tools", "Cosmetic packaging", "Skincare OEM", "Accessories"],
  },
  {
    id: "outdoor-sports",
    title: "Outdoor &amp; Sports",
    desc: "Camping, fitness, cycling accessories, and seasonal sports goods for retail and brand owners.",
    examples: ["Camping gear", "Fitness equipment", "Cycling accessories", "Backpacks", "Water bottles"],
  },
  {
    id: "furniture-decor",
    title: "Furniture &amp; Decor",
    desc: "Flat-pack furniture, lighting, and home decor with container-load optimization and packaging engineering.",
    examples: ["Flat-pack furniture", "Lighting", "Mirrors", "Wall decor", "Storage"],
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Products We Source"
        title="Categories where we have proven supplier networks"
        description="We focus on categories where we already know reliable factories, typical price points, and the practical pitfalls. Don't see your category? Ask — we likely have a partner factory for it."
      />

      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CATEGORIES.map((c) => (
              <article
                key={c.id}
                className="bg-white rounded-xl overflow-hidden border border-border-soft shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <img
                    alt={c.title.replace(/&amp;/g, "&")}
                    data-strk-img-id={`products-${c.id}-img-91eb27`}
                    data-strk-img={`[products-${c.id}-desc] [products-${c.id}-title] china wholesale b2b manufacturing`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2
                    id={`products-${c.id}-title`}
                    className="text-lg md:text-xl font-semibold text-brand"
                    dangerouslySetInnerHTML={{ __html: c.title }}
                  />
                  <p
                    id={`products-${c.id}-desc`}
                    className="mt-2 text-sm text-slate-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: c.desc }}
                  />
                  <div className="mt-4 pt-4 border-t border-border-soft">
                    <p className="text-xs uppercase tracking-wider text-muted font-semibold mb-2">
                      Examples
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.examples.map((ex) => (
                        <span
                          key={ex}
                          className="inline-flex items-center rounded-md bg-slate-100 text-slate-700 px-2 py-1 text-xs"
                          dangerouslySetInnerHTML={{ __html: ex }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};

export default Products;
