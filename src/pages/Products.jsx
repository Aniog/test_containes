import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "../components/shared/PageHeader";
import CTASection from "../components/shared/CTASection";

const categories = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    desc: "Bluetooth audio, small appliances, lighting, smart home accessories, cables and chargers. OEM and private label with CE, FCC and RoHS documentation.",
    items: ["Bluetooth speakers", "Smart lighting", "Power banks", "Cables & chargers", "Small kitchen electronics", "Wearable accessories"],
    imgId: "products-page-electronics-3fa102",
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen",
    desc: "Cookware, storage, table top, decor, organisers and seasonal home goods. Strong factory base in Zhejiang and Guangdong.",
    items: ["Kitchen utensils", "Storage containers", "Glassware & ceramics", "Home organisers", "Bedding & textiles", "Decor & gifts"],
    imgId: "products-page-home-kitchen-9ab421",
  },
  {
    id: "apparel-textiles",
    title: "Apparel & Textiles",
    desc: "Knitwear, woven garments, basics, accessories and home textiles. Sample-based development and small-batch production capabilities.",
    items: ["T-shirts & basics", "Knitwear & hoodies", "Activewear", "Bags & accessories", "Home textiles", "Workwear & uniforms"],
    imgId: "products-page-apparel-7c11de",
  },
  {
    id: "furniture",
    title: "Furniture",
    desc: "Indoor and outdoor furniture for retail, e-commerce and contract projects. Flat-pack export packaging available.",
    items: ["Office furniture", "Outdoor furniture", "Hotel & contract", "Living room", "Bedroom & storage", "Custom OEM furniture"],
    imgId: "products-page-furniture-2db870",
  },
  {
    id: "industrial-machinery",
    title: "Industrial & Machinery",
    desc: "Components, tools, hardware, packaging equipment and B2B machinery from established OEMs.",
    items: ["Hardware & fasteners", "Hand and power tools", "Packaging machinery", "Spare parts", "Auto accessories", "Custom metal & plastic parts"],
    imgId: "products-page-industrial-8f2c91",
  },
  {
    id: "beauty-personal-care",
    title: "Beauty & Personal Care",
    desc: "Tools, accessories, packaging and OEM formulations with regulatory documentation for US and EU markets.",
    items: ["Beauty tools", "Hair accessories", "Cosmetic packaging", "Skincare OEM", "Oral care accessories", "Personal care devices"],
    imgId: "products-page-beauty-5e3aa6",
  },
  {
    id: "toys-baby",
    title: "Toys & Baby",
    desc: "Plush, plastic and wooden toys, baby gear and accessories. EN71, ASTM F963 and CPC compliance support.",
    items: ["Plush toys", "Educational toys", "Baby accessories", "Outdoor toys", "Party & seasonal", "Brand licensed (with rights)"],
    imgId: "products-page-toys-1c80fa",
  },
  {
    id: "sports-outdoors",
    title: "Sports & Outdoors",
    desc: "Fitness, camping, cycling and outdoor accessories. Custom branding and packaging for DTC brands.",
    items: ["Fitness accessories", "Camping gear", "Cycling accessories", "Yoga & training", "Travel gear", "Outdoor apparel"],
    imgId: "products-page-sports-6a44b2",
  },
  {
    id: "packaging-printing",
    title: "Packaging & Printing",
    desc: "Custom boxes, mailers, insert cards, hang tags and printed accessories to support your private-label launch.",
    items: ["Mailer boxes", "Rigid gift boxes", "Insert cards & manuals", "Hang tags & labels", "Branded fillers", "Custom polybags"],
    imgId: "products-page-packaging-2ed31a",
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Products We Source"
        title="Categories we work with every week"
        description="We focus on consumer and light industrial goods where China offers the strongest combination of price, capacity and lead time. If your product is not listed, ask us &mdash; we can usually point you to the right cluster."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <article
                key={cat.id}
                className="rounded-xl overflow-hidden border border-[#D9E2EC] bg-white hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[4/3] bg-[#EEF2F7]">
                  <img
                    alt={cat.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[products-page-${cat.id}-desc] [products-page-${cat.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2
                    id={`products-page-${cat.id}-title`}
                    className="text-lg font-semibold text-[#0B2545]"
                  >
                    {cat.title}
                  </h2>
                  <p
                    id={`products-page-${cat.id}-desc`}
                    className="mt-2 text-sm text-[#475569] leading-relaxed"
                  >
                    {cat.desc}
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-[#475569]">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="text-[#1F4E79] mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Sourcing something we did not list?"
        description="Tell us about your product. If it is made in China and shippable, there is a strong chance we can help."
      />
    </div>
  );
};

export default Products;
