import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const categories = [
  {
    id: "electronics",
    title: "Consumer Electronics",
    desc: "Small appliances, accessories, IoT devices, audio products and electronic gadgets sourced from established factories in Shenzhen, Dongguan and Huizhou.",
    keywords: "consumer electronics gadgets accessories factory China",
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen",
    desc: "Cookware, kitchen tools, storage, organizers, home decor and seasonal goods from supplier clusters in Yiwu, Ningbo and Guangdong.",
    keywords: "kitchen home goods cookware warehouse China",
  },
  {
    id: "apparel",
    title: "Apparel & Textiles",
    desc: "Knitwear, woven garments, sportswear, accessories and home textiles, with size-spec, fabric and trim management from sample to bulk production.",
    keywords: "apparel garment textile factory China production line",
  },
  {
    id: "furniture",
    title: "Furniture",
    desc: "Indoor and outdoor furniture, flat-pack pieces, hospitality and office furniture sourced from factories in Foshan and Guangdong with FOB or door delivery.",
    keywords: "modern furniture warehouse showroom China",
  },
  {
    id: "industrial",
    title: "Industrial & Hardware",
    desc: "Hardware, tools, fittings, OEM metal parts and industrial components, including custom drawings, CNC machining and surface treatments.",
    keywords: "industrial hardware tools metal parts CNC factory",
  },
  {
    id: "beauty",
    title: "Beauty & Personal Care",
    desc: "Cosmetic packaging, accessories, brushes, beauty tools and personal care devices, with compliance support for major export markets.",
    keywords: "beauty cosmetic packaging factory production line China",
  },
  {
    id: "sports",
    title: "Sports & Outdoors",
    desc: "Fitness accessories, outdoor gear, camping equipment, bags and travel goods from specialized factories with EN/ASTM testing where applicable.",
    keywords: "sports outdoor equipment warehouse pallets China export",
  },
  {
    id: "promo",
    title: "Promotional & Gifts",
    desc: "Custom branded merchandise, corporate gifts, event giveaways and packaging — small MOQ friendly, with consolidation from multiple suppliers.",
    keywords: "promotional gifts custom branded merchandise packaging China",
  },
];

export default function Products({ compact = false }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className={compact ? "bg-white py-16" : "bg-white py-16 md:py-24"}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            Products we source
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
            Categories we cover most often
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Our team covers a broad range of consumer and industrial products
            manufactured in China. If your category isn't listed below, contact
            us — we likely have factory contacts that fit.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <article
              key={c.id}
              className="group overflow-hidden rounded-2xl border border-brand-line bg-white transition-shadow hover:shadow-md"
            >
              <img
                alt={c.title}
                className="aspect-[4/3] w-full object-cover"
                data-strk-img-id={`product-${c.id}-img`}
                data-strk-img={`[product-${c.id}-desc] [product-${c.id}-title] ${c.keywords}`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-5">
                <h3
                  id={`product-${c.id}-title`}
                  className="text-base font-semibold text-brand-ink md:text-lg"
                >
                  {c.title}
                </h3>
                <p
                  id={`product-${c.id}-desc`}
                  className="mt-2 text-sm leading-relaxed text-brand-muted"
                >
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
