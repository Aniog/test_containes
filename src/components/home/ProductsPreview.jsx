import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader.jsx";
import strkImgConfig from "@/strk-img-config.json";

const CATEGORIES = [
  {
    key: "home-textiles",
    title: "Home Textiles & Housewares",
    desc: "Bedding, curtains, kitchenware, decor. Strong supplier base in Jiangsu, Zhejiang, and Shandong.",
    img: "home-textiles-card",
  },
  {
    key: "consumer-electronics",
    title: "Consumer Electronics",
    desc: "Chargers, audio, smart home devices, accessories. Compliance support for CE, FCC, RoHS.",
    img: "consumer-electronics-card",
  },
  {
    key: "fashion-accessories",
    title: "Fashion & Accessories",
    desc: "Bags, wallets, jewelry, scarves. Sampling, materials, and small-batch production.",
    img: "fashion-accessories-card",
  },
  {
    key: "outdoor-sporting",
    title: "Outdoor & Sporting Goods",
    desc: "Camping, fitness, cycling, water sports. Material and safety testing arranged.",
    img: "outdoor-sporting-card",
  },
  {
    key: "beauty-personal-care",
    title: "Beauty & Personal Care",
    desc: "Skincare, grooming, packaging. GMP and FDA-compliant partners, formula review support.",
    img: "beauty-personal-care-card",
  },
  {
    key: "industrial-tools",
    title: "Industrial Tools & Hardware",
    desc: "Hand tools, power tool accessories, fittings. Mill audits and pre-shipment load tests.",
    img: "industrial-tools-card",
  },
];

export default function ProductsPreview() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-white">
      <div className="container-x py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Products we source"
            title="Built for the categories overseas buyers actually import"
            description="We focus on categories where on-the-ground presence matters most — quality, compliance, and supplier consistency."
          />
          <Link to="/products" className="btn-ghost self-start md:self-end">
            See all categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <article
              key={cat.key}
              className="group overflow-hidden rounded-lg border border-brand-line bg-white card-hover"
            >
              <div className="aspect-[3/2] w-full overflow-hidden bg-brand-surface">
                <img
                  alt={`${cat.title} sourced from China`}
                  data-strk-img-id={cat.img}
                  data-strk-img={`[${cat.key}-desc] [${cat.key}-title] Products we source End-to-end sourcing`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6">
                <h3 id={`${cat.key}-title`} className="text-base font-semibold text-brand-ink">
                  {cat.title}
                </h3>
                <p id={`${cat.key}-desc`} className="mt-1.5 text-sm leading-relaxed text-brand-muted">
                  {cat.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
