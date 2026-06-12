import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/site/SectionHeader";

const PRODUCTS = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    desc: "Bluetooth audio, smart home, accessories, small appliances — with FCC, CE, RoHS support.",
  },
  {
    id: "home-kitchen",
    title: "Home &amp; Kitchen",
    desc: "Cookware, utensils, storage, organization, and small kitchen tools for retail and private label.",
  },
  {
    id: "apparel-textiles",
    title: "Apparel &amp; Textiles",
    desc: "Cut-and-sew, knitwear, uniforms, home textiles, and custom labels and packaging.",
  },
  {
    id: "promotional",
    title: "Promotional &amp; Gifts",
    desc: "Bags, drinkware, stationery, and branded merchandise with logo printing and packaging.",
  },
  {
    id: "industrial",
    title: "Industrial &amp; Hardware",
    desc: "Tools, fasteners, fittings, light machinery, and OEM components for B2B distribution.",
  },
  {
    id: "beauty-personal-care",
    title: "Beauty &amp; Personal Care",
    desc: "Accessories, devices, packaging, and OEM formulations with compliant documentation.",
  },
  {
    id: "outdoor-sports",
    title: "Outdoor &amp; Sports",
    desc: "Camping gear, fitness equipment, cycling accessories, and seasonal sports goods.",
  },
  {
    id: "furniture-decor",
    title: "Furniture &amp; Decor",
    desc: "Flat-pack furniture, lighting, and home decor with container-load optimization.",
  },
];

const HomeProducts = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-surface" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader
          eyebrow="Products We Source"
          title="The categories we know best"
          description="We work across general consumer goods, light industrial, and OEM private-label projects. If your category isn't listed, ask — we likely have a partner factory."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-xl overflow-hidden border border-border-soft shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <img
                  alt={p.title.replace(/&amp;/g, "&")}
                  data-strk-img-id={`home-product-${p.id}-img-2f3b71`}
                  data-strk-img={`[home-product-${p.id}-desc] [home-product-${p.id}-title] china wholesale manufacturing`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3
                  id={`home-product-${p.id}-title`}
                  className="text-base md:text-lg font-semibold text-brand"
                  dangerouslySetInnerHTML={{ __html: p.title }}
                />
                <p
                  id={`home-product-${p.id}-desc`}
                  className="mt-2 text-sm text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.desc }}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-accent font-semibold hover:text-accent-600"
          >
            View all categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
