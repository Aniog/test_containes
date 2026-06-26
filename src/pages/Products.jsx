import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, MapPin } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCT_CATEGORIES } from "@/lib/site-data";
import PageHero from "@/components/site/PageHero";
import SectionHeader from "@/components/site/SectionHeader";

const REGIONS = [
  {
    name: "Guangdong",
    desc: "Electronics, hardware, lighting, plastics, consumer products and packaging.",
    cities: ["Shenzhen", "Dongguan", "Guangzhou", "Foshan"],
  },
  {
    name: "Zhejiang",
    desc: "Hardware, small commodities, apparel accessories, kitchenware and outdoor.",
    cities: ["Yiwu", "Ningbo", "Hangzhou", "Wenzhou"],
  },
  {
    name: "Fujian",
    desc: "Footwear, sports apparel, outdoor gear, stone and ceramics.",
    cities: ["Xiamen", "Quanzhou", "Putian"],
  },
  {
    name: "Jiangsu & Shanghai",
    desc: "Textiles, garments, machinery, industrial components.",
    cities: ["Suzhou", "Nantong", "Shanghai"],
  },
];

export default function Products() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Products We Source"
        title="Categories we know inside out"
        description="We focus on consumer and light-industrial products where we already have supplier networks, market price benchmarks, and QC experience."
        titleId="products-page-title"
        descId="products-page-desc"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Categories"
            title="Product categories we source"
            description="Within each category, we work across price tiers — from value-engineered private label to premium specifications."
            titleId="products-cat-title"
            descId="products-cat-desc"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((p) => (
              <article
                key={p.id}
                className="group rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={p.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[prod-page-${p.id}-desc] [prod-page-${p.id}-title] [products-cat-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  />
                </div>
                <div className="p-5">
                  <h3
                    id={`prod-page-${p.id}-title`}
                    className="text-lg font-semibold text-navy-900"
                  >
                    {p.name}
                  </h3>
                  <p
                    id={`prod-page-${p.id}-desc`}
                    className="mt-1.5 text-sm text-slate-600 leading-relaxed"
                  >
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Supplier Network"
            title="Regions and manufacturing hubs we cover"
            description="Different regions in China specialize in different products. We help you source from the right hub for your category."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {REGIONS.map((r) => (
              <div
                key={r.name}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-7"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900">{r.name}</h3>
                </div>
                <p className="mt-3 text-slate-600 leading-relaxed">{r.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {r.cities.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white text-xs font-medium text-slate-700 px-2.5 py-1"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Have a product in mind?
          </h2>
          <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
            Even if your product is not listed here, tell us what you need and we
            will let you know honestly whether we can help.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3.5 transition"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
