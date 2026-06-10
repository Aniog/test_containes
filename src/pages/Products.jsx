import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import PageHeader from "../components/PageHeader";
import CtaBanner from "../components/CtaBanner";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

const CATEGORIES = [
  {
    id: "electronics",
    title: "Consumer Electronics",
    desc: "Bluetooth audio, smart home devices, wearables, charging accessories, and small electronics.",
    examples: ["Wireless earbuds", "Smart plugs", "USB-C accessories", "Power banks"],
    cluster: "Shenzhen, Dongguan, Huizhou",
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen",
    desc: "Cookware, kitchenware, small appliances, organization, and home decor.",
    examples: ["Stainless steel cookware", "Storage containers", "Small appliances", "Home textiles"],
    cluster: "Yongkang, Yiwu, Cixi",
  },
  {
    id: "apparel",
    title: "Apparel & Textiles",
    desc: "Cut-and-sew, knitwear, uniforms, accessories, and home textiles.",
    examples: ["T-shirts and basics", "Knitted sweaters", "Workwear uniforms", "Bedding sets"],
    cluster: "Guangzhou, Hangzhou, Nantong",
  },
  {
    id: "furniture",
    title: "Furniture",
    desc: "Office, residential, hospitality, and contract furniture, including custom builds.",
    examples: ["Office chairs", "Dining furniture", "Hotel bedroom sets", "Outdoor furniture"],
    cluster: "Foshan, Dongguan, Anji",
  },
  {
    id: "beauty",
    title: "Beauty & Personal Care",
    desc: "Tools, accessories, packaging, and private-label personal care products.",
    examples: ["Makeup brushes", "Hair tools", "Cosmetic packaging", "Skincare accessories"],
    cluster: "Yiwu, Guangzhou, Yangzhou",
  },
  {
    id: "toys-baby",
    title: "Toys & Baby",
    desc: "Plush, educational toys, baby gear, and CPSIA / EN71-compliant products.",
    examples: ["Plush toys", "Educational toys", "Strollers and accessories", "Feeding products"],
    cluster: "Shantou, Yiwu, Ningbo",
  },
  {
    id: "sports",
    title: "Sports & Outdoor",
    desc: "Fitness, camping, cycling, water sports, and team gear.",
    examples: ["Yoga and fitness gear", "Camping equipment", "Bike accessories", "Water bottles"],
    cluster: "Ningbo, Xiamen, Yongkang",
  },
  {
    id: "industrial",
    title: "Industrial & Hardware",
    desc: "Hand tools, fasteners, components, fittings, and small machinery parts.",
    examples: ["Power tools", "Fasteners and hardware", "Plumbing fittings", "Industrial components"],
    cluster: "Yongkang, Wenzhou, Tianjin",
  },
  {
    id: "packaging",
    title: "Packaging",
    desc: "Custom boxes, bags, inserts, sustainable options, and unboxing experiences.",
    examples: ["Mailer boxes", "Rigid gift boxes", "Custom poly bags", "Eco-friendly inserts"],
    cluster: "Dongguan, Shanghai, Wenzhou",
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
        eyebrow="Products we source"
        title="Categories we know inside out"
        description="Twelve years of supplier networks across China's largest manufacturing clusters. We help buyers source product lines we genuinely understand — and tell you honestly when a category sits outside our expertise."
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHeader>

      <section className="section-y bg-white">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <article
                key={c.id}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    alt={c.title}
                    data-strk-img-id={`prod-page-${c.id}-img-3a91d5`}
                    data-strk-img={`[prod-page-${c.id}-desc] [prod-page-${c.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2
                    id={`prod-page-${c.id}-title`}
                    className="text-lg font-semibold text-slate-900"
                  >
                    {c.title}
                  </h2>
                  <p
                    id={`prod-page-${c.id}-desc`}
                    className="mt-2 text-sm text-slate-600"
                  >
                    {c.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.examples.map((ex) => (
                      <span
                        key={ex}
                        className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{c.cluster}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="eyebrow">A note on scope</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              We say no to products we cannot source well
            </h2>
            <p className="mt-4 text-slate-600">
              Heavily regulated categories like food, pharmaceuticals, medical devices, and
              dangerous goods require specialist sourcing partners. If your product falls
              outside our expertise, we will tell you and, where possible, refer you to a
              trusted partner instead of taking the project anyway.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need a category that's not listed?"
        description="Tell us what you're sourcing. If it's a fit, we'll send a proposal within 24 hours. If not, we will say so honestly."
      />
    </div>
  );
};

export default Products;
