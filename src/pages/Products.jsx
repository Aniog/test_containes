import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";
import PageHeader from "../components/site/PageHeader";
import CtaBanner from "../components/site/CtaBanner";
import SectionHeader from "../components/site/SectionHeader";

const categories = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    desc: "Phone and laptop accessories, smart home, audio, wearables, lighting. Compliance support for CE, FCC, RoHS, UKCA.",
    examples: ["Power banks & chargers", "Bluetooth speakers", "Smart plugs & sensors", "Lamps & lighting"],
    imgId: "prod-electronics-7c1d22",
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen",
    desc: "Cookware, small appliances, organization, decor and seasonal items. Food-contact and LFGB material support.",
    examples: ["Cookware & utensils", "Small appliances", "Storage & organization", "Decor & seasonal"],
    imgId: "prod-kitchen-2e8b91",
  },
  {
    id: "apparel-textile",
    title: "Apparel & Textile",
    desc: "Knitwear, sportswear, accessories and bags. Custom labels, hangtags, polybags and retail-ready packaging.",
    examples: ["Knitwear & basics", "Sportswear", "Bags & accessories", "Home textiles"],
    imgId: "prod-apparel-9a2f47",
  },
  {
    id: "promotional-gifts",
    title: "Promotional Gifts",
    desc: "Branded merchandise and corporate gifting with custom logo printing, packaging and gift sets.",
    examples: ["Drinkware & bottles", "Stationery & notebooks", "Branded apparel", "Gift sets & boxes"],
    imgId: "prod-gifts-3b1e58",
  },
  {
    id: "industrial-hardware",
    title: "Industrial Hardware",
    desc: "Tools, fittings, fasteners and metal or plastic components. Drawing-based RFQs and tolerance review.",
    examples: ["Hand tools", "Fasteners & fittings", "CNC & sheet metal parts", "Plastic injection parts"],
    imgId: "prod-hardware-6d4c19",
  },
  {
    id: "auto-parts",
    title: "Auto Parts & Accessories",
    desc: "Aftermarket auto, motorcycle and e-bike parts, plus interior and exterior accessories.",
    examples: ["Aftermarket parts", "Auto accessories", "E-bike & scooter parts", "Tools & care"],
    imgId: "prod-auto-8f3a72",
  },
  {
    id: "outdoor-sports",
    title: "Outdoor & Sports",
    desc: "Camping, fitness, cycling and lifestyle products. Material and durability testing supported.",
    examples: ["Camping gear", "Fitness equipment", "Cycling accessories", "Travel & EDC"],
    imgId: "prod-outdoor-1a9b34",
  },
  {
    id: "beauty-personal-care",
    title: "Beauty & Personal Care",
    desc: "Tools, packaging, accessories and select OEM cosmetics. Tested suppliers with documented compliance.",
    examples: ["Beauty tools", "Cosmetic packaging", "Hair accessories", "Personal care devices"],
    imgId: "prod-beauty-5e2d18",
  },
  {
    id: "packaging",
    title: "Packaging",
    desc: "Custom boxes, bags, inserts, polybags and retail packaging with print proof and material approvals.",
    examples: ["Custom boxes", "Polybags & mailers", "Inserts & dividers", "Labels & stickers"],
    imgId: "prod-packaging-4c8e29",
  },
];

export default function Products() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Products we source"
        title="Categories where our team has deep factory networks"
        description="If your product is not listed below, talk to us — chances are we have sourced something similar, or we know who to call."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c) => (
              <article
                key={c.id}
                className="rounded-xl overflow-hidden border border-line bg-white hover:shadow-card transition flex flex-col"
              >
                <div className="aspect-[3/2] overflow-hidden bg-surface-100">
                  <img
                    alt={c.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[prod-${c.id}-desc] [prod-${c.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3
                    id={`prod-${c.id}-title`}
                    className="text-lg font-semibold text-brand-800"
                  >
                    {c.title}
                  </h3>
                  <p
                    id={`prod-${c.id}-desc`}
                    className="mt-2 text-sm text-ink-700 leading-relaxed"
                  >
                    {c.desc}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {c.examples.map((e) => (
                      <li
                        key={e}
                        className="text-xs px-2.5 py-1 rounded-full bg-surface-50 text-ink-700 border border-line"
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-50 py-16 md:py-24 border-y border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Don't see your product?"
            title="We've sourced more than what's on this page"
            description="Tell us your product idea or specs. If it's outside our wheelhouse, we'll tell you up front and, where possible, refer you to a trusted partner."
            align="center"
          />
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
