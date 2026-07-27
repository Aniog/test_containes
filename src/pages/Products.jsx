import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/shared/PageHero.jsx";
import SectionHeader from "@/components/shared/SectionHeader.jsx";
import CtaBanner from "@/components/shared/CtaBanner.jsx";
import strkImgConfig from "@/strk-img-config.json";

const CATEGORIES = [
  {
    key: "home-textiles",
    title: "Home Textiles & Housewares",
    desc: "Bedding, curtains, table linen, kitchenware, decor. Strong supplier base in Jiangsu, Zhejiang, and Shandong with export experience to the US, EU, and AU.",
    hubs: ["Jiangsu", "Zhejiang", "Shandong"],
    capabilities: ["Custom weaving", "Printing & embroidery", "OEKO-TEX on request"],
    img: "products-home-textiles",
  },
  {
    key: "consumer-electronics",
    title: "Consumer Electronics & Accessories",
    desc: "Chargers, audio, smart home devices, cables, and small appliances. Compliance support for CE, FCC, RoHS, REACH, and UKCA.",
    hubs: ["Shenzhen", "Dongguan", "Suzhou"],
    capabilities: ["PCB assembly partners", "Battery sourcing", "EMC & safety testing"],
    img: "products-consumer-electronics",
  },
  {
    key: "fashion-accessories",
    title: "Fashion & Accessories",
    desc: "Bags, wallets, jewelry, scarves, belts, hats. Material and small-batch production are our strengths.",
    hubs: ["Yiwu", "Guangzhou", "Qingdao"],
    capabilities: ["Material sourcing", "Sampling rooms", "Small-batch production"],
    img: "products-fashion-accessories",
  },
  {
    key: "outdoor-sporting",
    title: "Outdoor & Sporting Goods",
    desc: "Camping, fitness, cycling, water sports. Material and safety testing arranged for EU and US markets.",
    hubs: ["Ningbo", "Xiamen", "Hangzhou"],
    capabilities: ["Fabric testing", "Load testing", "Packaging for retail"],
    img: "products-outdoor-sporting",
  },
  {
    key: "beauty-personal-care",
    title: "Beauty & Personal Care",
    desc: "Skincare, haircare, grooming tools, packaging. GMP and FDA-registered partners, formula review, and lab testing support.",
    hubs: ["Shanghai", "Guangzhou", "Hangzhou"],
    capabilities: ["Formula review", "Stability testing", "Packaging sourcing"],
    img: "products-beauty-personal-care",
  },
  {
    key: "industrial-tools",
    title: "Industrial Tools & Hardware",
    desc: "Hand tools, power tool accessories, fittings, fasteners, lighting. Mill audits and pre-shipment load tests are routine.",
    hubs: ["Linyi", "Yongkang", "Foshan"],
    capabilities: ["Mill audits", "Load and torque testing", "Custom packaging"],
    img: "products-industrial-tools",
  },
  {
    key: "kids-baby",
    title: "Kids & Baby Products",
    desc: "Toys, nursery items, school supplies. EN71, ASTM F963, and CPSIA compliance support.",
    hubs: ["Yiwu", "Shantou", "Chenghai"],
    capabilities: ["Compliance paperwork", "Age-grade testing", "Retail packaging"],
    img: "products-kids-baby",
  },
  {
    key: "packaging",
    title: "Packaging & Print",
    desc: "Boxes, bags, labels, sleeves, mailers. Sampling, color matching, and pre-production proofs are part of the workflow.",
    hubs: ["Dongguan", "Wenzhou", "Cangnan"],
    capabilities: ["Color management", "Pre-production proofs", "FSC paper on request"],
    img: "products-packaging",
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    document.title =
      "Products We Source from China | Categories & Hubs | SSourcing China";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "The product categories we source most often from China: home textiles, consumer electronics, fashion, outdoor goods, beauty, industrial tools, kids and baby, and packaging.",
      );
    } else {
      const tag = document.createElement("meta");
      tag.name = "description";
      tag.content =
        "The product categories we source most often from China: home textiles, consumer electronics, fashion, outdoor goods, beauty, industrial tools, kids and baby, and packaging.";
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Products we source"
        title="Eight categories where on-the-ground sourcing matters most"
        description="We focus on categories where supplier quality, capacity, and compliance vary a lot — and where an agent on the ground adds real value."
        primaryCta={{ to: "/contact", label: "Get a Free Sourcing Quote" }}
        secondaryCta={{ to: "/services", label: "View Services" }}
      />

      <section ref={containerRef} className="bg-white">
        <div className="container-x py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CATEGORIES.map((cat) => (
              <article
                key={cat.key}
                className="grid grid-cols-1 overflow-hidden rounded-xl border border-brand-line bg-white card-hover sm:grid-cols-5"
              >
                <div className="sm:col-span-2 aspect-[3/2] sm:aspect-auto bg-brand-surface">
                  <img
                    alt={`${cat.title} sourced from China`}
                    data-strk-img-id={cat.img}
                    data-strk-img={`[${cat.key}-desc] [${cat.key}-title] Products we source`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="sm:col-span-3 p-6">
                  <h3 id={`${cat.key}-title`} className="text-lg font-semibold text-brand-ink">
                    {cat.title}
                  </h3>
                  <p id={`${cat.key}-desc`} className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {cat.desc}
                  </p>
                  <div className="mt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-muted">
                      Sourcing hubs
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {cat.hubs.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 rounded-full bg-brand-surface px-2.5 py-0.5 text-xs font-medium text-brand-ink"
                        >
                          <MapPin className="h-3 w-3 text-brand-primary" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-muted">
                      Capabilities
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {cat.capabilities.map((c) => (
                        <li
                          key={c}
                          className="inline-flex items-center rounded-md border border-brand-line bg-white px-2 py-0.5 text-xs text-brand-text"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface border-y border-brand-line">
        <div className="container-x py-20">
          <SectionHeader
            align="center"
            eyebrow="Don't see your category?"
            title="If it is made in China, we can probably source it"
            description="The list above is what we work on most often. We also handle furniture, lighting, pet products, stationery, and small industrial equipment. Tell us what you need and we will tell you honestly whether we are a good fit."
          />
          <div className="mt-8 flex justify-center">
            <Link to="/contact" className="btn-primary">
              Ask about your category <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Tell us what you are sourcing"
        description="A short description of the product, target price, and quantity is enough to start. We will reply within one business day."
        primaryLabel="Get a Free Sourcing Quote"
        primaryTo="/contact"
      />
    </>
  );
}
