import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader.jsx";

const CATEGORIES = [
  { title: "Consumer Electronics & Accessories", desc: "Audio, smart home, mobile accessories, cables, charging products." },
  { title: "Home, Kitchen & Tableware", desc: "Stainless steel cookware, ceramics, glassware, organizers, decor." },
  { title: "Apparel, Textiles & Accessories", desc: "Knitwear, workwear, bags, hats, scarves, fashion accessories." },
  { title: "Beauty, Personal Care & Packaging", desc: "Skincare, haircare, cosmetics, OEM/ODM packaging solutions." },
  { title: "Sports, Outdoor & Fitness", desc: "Yoga, camping, cycling, training gear, and outdoor equipment." },
  { title: "Industrial Parts & OEM Components", desc: "Machined parts, sheet metal, plastic injection, electronics PCBA." },
  { title: "Furniture, Lighting & Home Improvement", desc: "Indoor and outdoor furniture, LED lighting, hardware." },
  { title: "Pet Products, Toys & Stationery", desc: "Pet supplies, educational toys, boards, and gift stationery." },
];

export default function ProductsWeSource() {
  return (
    <section id="products" className="section bg-[#F6F1EA] border-y border-[#E5E1D8]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Products We Source"
              title="Across 30+ product categories"
              subtitle="From OEM manufacturing to private-label consumer goods — we help you source the products your customers need, with factories that meet your quality and compliance requirements."
            />
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <Link to="/products" className="btn-primary">
              See full category list <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <article key={c.title} className="card p-6 h-full hover:-translate-y-0.5 transition-transform">
              <div className="h-9 w-9 rounded-md bg-[#C8553D]/10 text-[#C8553D] flex items-center justify-center text-[14px] font-semibold font-display">
                {c.title.charAt(0)}
              </div>
              <h3 className="mt-4 text-[15.5px] font-semibold text-[#0F172A] leading-snug">{c.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[#475569]">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}