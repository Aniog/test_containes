import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/shared/PageHero.jsx";
import InquiryCTA from "@/components/home/InquiryCTA.jsx";

const CATEGORIES = [
  {
    title: "Consumer Electronics & Accessories",
    desc: "Bluetooth audio, smart home devices, charging products, cables, mobile accessories, computer peripherals.",
    hubs: ["Shenzhen, Guangdong", "Dongguan, Guangdong"],
    capabilities: ["OEM/ODM", "Injection molding", "PCBA", "Packaging compliance"],
    imgId: "products-electronics-1a8c40",
  },
  {
    title: "Home, Kitchen & Tableware",
    desc: "Stainless steel cookware, ceramics, glassware, kitchen tools, organizers, home decor.",
    hubs: ["Yongkang, Zhejiang", "Jieyang, Guangdong"],
    capabilities: ["FDA / LFGB", "Custom packaging", "Private label"],
    imgId: "products-kitchenware-2d9e51",
  },
  {
    title: "Apparel, Textiles & Accessories",
    desc: "Knitwear, workwear, sportswear, bags, hats, scarves, fashion accessories.",
    hubs: ["Hangzhou, Zhejiang", "Guangzhou, Guangdong"],
    capabilities: ["Custom fabrics", "Embroidery / print", "Sizing sets"],
    imgId: "products-apparel-3f0a62",
  },
  {
    title: "Beauty, Personal Care & Packaging",
    desc: "Skincare, haircare, cosmetics, OEM / ODM formulas, primary packaging.",
    hubs: ["Hangzhou, Zhejiang", "Shanghai"],
    capabilities: ["GMP / ISO 22716", "Formula development", "Stability testing"],
    imgId: "products-beauty-4b6c73",
  },
  {
    title: "Sports, Outdoor & Fitness",
    desc: "Yoga equipment, camping gear, cycling accessories, training gear, outdoor products.",
    hubs: ["Yongkang, Zhejiang", "Ningbo, Zhejiang"],
    capabilities: ["Material testing", "Load / fatigue testing", "Retail-ready packaging"],
    imgId: "products-sports-5c2d84",
  },
  {
    title: "Industrial Parts & OEM Components",
    desc: "Machined parts, sheet metal, plastic injection molding, electronics PCBA, custom tooling.",
    hubs: ["Dongguan, Guangdong", "Suzhou, Jiangsu"],
    capabilities: ["ISO 9001", "PPAP / APQP", "Engineering support"],
    imgId: "products-industrial-6a3e95",
  },
  {
    title: "Furniture, Lighting & Home Improvement",
    desc: "Indoor and outdoor furniture, LED lighting, hardware, storage solutions.",
    hubs: ["Foshan, Guangdong", "Zhongshan, Guangdong"],
    capabilities: ["FSC / CARB", "CE / RoHS", "Flat-pack optimization"],
    imgId: "products-furniture-7d1f06",
  },
  {
    title: "Pet Products, Toys & Stationery",
    desc: "Pet supplies, plush toys, educational toys, board games, gift stationery.",
    hubs: ["Yiwu, Zhejiang", "Chenghai, Guangdong"],
    capabilities: ["ASTM / EN71", "Custom molds", "Gift packaging"],
    imgId: "products-pet-toys-8e4a17",
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="page-fade">
      <PageHero
        eyebrow="Products We Source"
        title="Sourcing across 30+ product categories"
        subtitle="From OEM manufacturing to private-label consumer goods, we help international buyers find the right Chinese factories for the products their customers need."
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Products We Source" },
        ]}
        ctaPrimary={{ to: "/contact", label: "Discuss Your Product" }}
        ctaSecondary={{ to: "/services", label: "View Services" }}
      />

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {CATEGORIES.map((c, i) => (
              <article key={c.title} className="card overflow-hidden flex flex-col md:flex-row hover:-translate-y-0.5 transition-transform">
                <div className="md:w-2/5 shrink-0">
                  <img
                    alt={`${c.title} sourcing example`}
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[product-cat-${i}-desc] [product-cat-${i}-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-7 flex-1">
                  <h3 id={`product-cat-${i}-title`} className="font-display text-[20px] font-semibold text-[#0F172A] leading-snug">
                    {c.title}
                  </h3>
                  <p id={`product-cat-${i}-desc`} className="mt-3 text-[14.5px] text-[#475569] leading-relaxed">{c.desc}</p>
                  <div className="mt-4">
                    <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-[#0E2A47]/70">Key hubs</p>
                    <p className="mt-1 text-[13px] text-[#0F172A]">{c.hubs.join(" · ")}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.capabilities.map((cap) => (
                      <span key={cap} className="text-[11.5px] font-medium px-2.5 py-1 rounded-full bg-[#0E2A47]/5 text-[#0E2A47]">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F1EA] border-y border-[#E5E1D8] py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <p className="eyebrow">Don't see your category?</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-[#0F172A] leading-tight">
            We probably still source it.
          </h2>
          <p className="mt-5 text-[16.5px] leading-relaxed text-[#475569] max-w-2xl mx-auto">
            The categories above are the ones we handle most often. If your product is not listed, send us a message — we will confirm whether we have the right factory network for it.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary">
              Ask about your product <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <InquiryCTA />
    </div>
  );
}