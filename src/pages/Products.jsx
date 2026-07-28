import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, Package, CheckCircle2, MapPin } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import InquiryForm from "@/components/shared/InquiryForm";
import Seo from "@/components/ui/Seo";
import strkImgConfig from "@/strk-img-config.json";

const CATEGORIES = [
  {
    title: "Consumer Electronics & Accessories",
    cluster: "Shenzhen · Dongguan",
    blurb:
      "Audio devices, charging accessories, smart-home gadgets, phone and computer peripherals.",
    items: [
      "Bluetooth speakers and earbuds",
      "Chargers, cables, power banks",
      "Smart-home and IoT devices",
      "Phone, tablet, and laptop accessories",
      "Computer peripherals and storage",
    ],
  },
  {
    title: "Apparel, Bags & Textiles",
    cluster: "Guangzhou · Quanzhou",
    blurb:
      "Garments, fabric bags, and home textiles from apparel-strong clusters with strong export logistics.",
    items: [
      "Cotton, polyester, and blended apparel",
      "Tote bags, backpacks, and duffels",
      "Home textiles and linens",
      "Workwear, uniforms, and PPE",
      "Custom embroidery and print",
    ],
  },
  {
    title: "Home, Kitchen & Garden",
    cluster: "Yongkang · Jiangmen",
    blurb:
      "Everyday housewares and outdoor products from stainless steel, plastic, and bamboo specialists.",
    items: [
      "Cookware and kitchen tools",
      "Storage and home organization",
      "Garden tools and accessories",
      "Pet products",
      "Cleaning and laundry items",
    ],
  },
  {
    title: "Beauty, Health & Personal Care",
    cluster: "Shantou · Guangzhou",
    blurb:
      "Packaging, tools, and accessories for skincare, haircare, and personal care brands.",
    items: [
      "Skincare packaging and airless bottles",
      "Hair tools and brushes",
      "Fitness and wellness accessories",
      "Cosmetic tools and applicators",
      "Sponges, towels, and bath items",
    ],
  },
  {
    title: "Industrial, Tools & Hardware",
    cluster: "Yongkang · Linyi",
    blurb:
      "Hand tools, power tool accessories, and general hardware from long-established industrial clusters.",
    items: [
      "Hand and measuring tools",
      "Power tool accessories",
      "Fasteners, anchors, and fittings",
      "Lighting and electrical components",
      "Machined and stamped parts",
    ],
  },
  {
    title: "Packaging, Paper & Print",
    cluster: "Dongguan · Shenzhen",
    blurb:
      "Custom packaging, labels, and printed materials with the certifications your market requires.",
    items: [
      "Custom folding cartons and rigid boxes",
      "Paper bags and shopping bags",
      "Labels, stickers, and shrink sleeves",
      "Eco and recycled packaging",
      "Manuals, booklets, and inserts",
    ],
  },
  {
    title: "Toys, Kids & Pet",
    cluster: "Chenghai · Yiwu",
    blurb:
      "Toys, kids products, and pet accessories with full EN71, ASTM, and CPSIA testing pipelines.",
    items: [
      "Plush, plastic, and wooden toys",
      "Baby and kids products",
      "Pet toys, beds, and accessories",
      "Educational and STEM kits",
      "Seasonal and licensed products",
    ],
  },
  {
    title: "Sports, Outdoor & Auto Accessories",
    cluster: "Ningbo · Xiamen",
    blurb:
      "Sports, outdoor recreation, and automotive aftermarket accessories with consistent QC.",
    items: [
      "Camping and outdoor gear",
      "Sports and fitness equipment",
      "Cycling and water-sports accessories",
      "Auto interior and exterior accessories",
      "Luggage and travel gear",
    ],
  },
  {
    title: "Custom & OEM Manufacturing",
    cluster: "All clusters",
    blurb:
      "If your product is custom or highly specialized, we run a tailored sourcing project with the right factory for you.",
    items: [
      "Concept-to-production prototyping",
      "Tooling and mold management",
      "Custom materials and finishes",
      "Regulatory and certification support",
      "IP and NDA protection",
    ],
  },
];

const CLUSTERS = [
  { name: "Shenzhen", focus: "Electronics, hardware, packaging" },
  { name: "Yiwu", focus: "Consumer goods, gifts, packaging" },
  { name: "Guangzhou", focus: "Apparel, bags, beauty" },
  { name: "Ningbo", focus: "Tools, sports, outdoor" },
  { name: "Dongguan", focus: "Electronics, packaging, OEM" },
  { name: "Yongkang & Linyi", focus: "Hardware, tools" },
];

export default function Products() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <>
      <Seo
        title="Products We Source | China Sourcing Categories | SSourcing China"
        description="Across consumer electronics, apparel, home goods, beauty, industrial, packaging, toys, sports, and custom OEM — we source it and verify the factory behind it."
      />

      <PageHero
        eyebrow="Products we source"
        title="A wide range of categories, sourced from the right cluster"
        description="We work across mainstream consumer categories and a long tail of specialized OEM products. Each category has a specific industrial cluster in China where we run active supplier relationships."
        imageId="products-hero-img-3a9c4d"
        backgroundId="products-hero-bg-7b1e5f"
      />

      <Section ref={ref} tone="surface">
        <SectionHeader
          eyebrow="Categories"
          title="Nine categories, hundreds of subcategories"
          lead="If your product is not on this list, ask anyway — we run a custom sourcing project for any product that can be made in China."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => {
            const slug = c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <article
                key={c.title}
                className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-card transition-shadow hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-primary-100">
                  <img
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    data-strk-img-id={`prod-${i}-img-4a1c2d`}
                    data-strk-img={`[prod-${i}-desc] [prod-${i}-title] [products-section-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      id={`prod-${i}-title`}
                      className="text-lg font-semibold text-primary"
                    >
                      {c.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-primary-100 px-2.5 py-1 text-xs font-semibold text-primary">
                      <MapPin className="h-3 w-3" /> {c.cluster.split("·")[0].trim()}
                    </span>
                  </div>
                  <p
                    id={`prod-${i}-desc`}
                    className="mt-2 text-sm leading-relaxed text-muted"
                  >
                    {c.blurb}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {c.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2 text-sm text-ink"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 border-t border-line pt-4">
                    <Button
                      to="/contact#inquiry-form"
                      variant="ghost"
                      size="sm"
                      className="px-0"
                    >
                      Get a quote
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <h3 id="products-section-title" className="sr-only">
          Products we source from China
        </h3>
      </Section>

      <Section tone="default">
        <SectionHeader
          eyebrow="Where we source"
          title="Active clusters across China"
          lead="We maintain on-the-ground presence in the main industrial clusters. Local teams mean faster visits, faster samples, and a real conversation with the factory owner — not just a salesperson."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CLUSTERS.map((c) => (
            <div
              key={c.name}
              className="flex items-start gap-3 rounded-lg border border-line bg-surface p-5 shadow-card"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent-100 text-accent">
                <Package className="h-4 w-4" />
              </span>
              <div>
                <div className="text-base font-semibold text-primary">
                  {c.name}
                </div>
                <div className="mt-0.5 text-sm text-muted">{c.focus}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="primaryDark">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Custom products
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Don't see your product category?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              We have sourced everything from industrial filtration systems to
              medical accessories to custom confectionery. If it is made in
              China, we will find the right factory — and tell you honestly if
              we cannot.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {[
                "Free initial feasibility check",
                "NDA available before sharing any details",
                "Fixed project fee for custom sourcing",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm variant="dark" />
          </div>
        </div>
      </Section>
    </>
  );
}
