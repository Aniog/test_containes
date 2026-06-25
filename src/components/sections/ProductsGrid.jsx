import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "./SectionHeader";

const CATEGORIES = [
  {
    id: "consumer-electronics",
    title: "Consumer Electronics",
    description: "Bluetooth audio, chargers, smart home devices, wearables, accessories.",
    examples: ["Earbuds", "Power banks", "Smart plugs", "Phone accessories"],
  },
  {
    id: "home-kitchen",
    title: "Home & Kitchen",
    description: "Small appliances, cookware, storage, organization, and homeware.",
    examples: ["Coffee makers", "Cookware sets", "Storage bins", "Bedding"],
  },
  {
    id: "apparel-textiles",
    title: "Apparel & Textiles",
    description: "Cut-and-sew, knitwear, sportswear, accessories, and OEM private label.",
    examples: ["T-shirts", "Hoodies", "Caps", "Bags"],
  },
  {
    id: "furniture",
    title: "Furniture",
    description: "Office, hospitality, outdoor and residential — flat-pack and finished.",
    examples: ["Office chairs", "Outdoor sets", "Cabinets", "Bed frames"],
  },
  {
    id: "industrial-machinery",
    title: "Industrial & Machinery",
    description: "Spare parts, custom-machined components, light industrial equipment.",
    examples: ["CNC parts", "Hand tools", "Hardware", "Fittings"],
  },
  {
    id: "beauty-personal-care",
    title: "Beauty & Personal Care",
    description: "Private-label cosmetics, packaging, brushes, and personal care devices.",
    examples: ["Lip balm", "Makeup brushes", "Skincare jars", "Hair tools"],
  },
  {
    id: "toys-baby",
    title: "Toys & Baby",
    description: "EN71 / CPSIA-compliant plush, plastic, and educational toys.",
    examples: ["Plush toys", "STEM kits", "Baby gear", "Outdoor play"],
  },
  {
    id: "packaging",
    title: "Packaging & Print",
    description: "Custom boxes, gift packaging, labels, inserts, and branded sleeves.",
    examples: ["Mailers", "Rigid boxes", "Stickers", "Hang tags"],
  },
];

export default function ProductsGrid({ compact = false }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products We Source"
          title="Broad category expertise"
          description="Most of our buyers source across multiple categories. Below are the categories where we have the deepest factory network and inspection experience."
        />

        <div className="mt-12 grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <article
              key={c.id}
              className="overflow-hidden rounded-2xl bg-surface border border-line shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="aspect-[4/3] bg-bg overflow-hidden">
                <img
                  alt={c.title}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`product-cat-${c.id}-3f2b`}
                  data-strk-img={`[product-cat-${c.id}-desc] [product-cat-${c.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-5">
                <h3
                  id={`product-cat-${c.id}-title`}
                  className="text-base font-semibold text-ink"
                >
                  {c.title}
                </h3>
                <p
                  id={`product-cat-${c.id}-desc`}
                  className="mt-1.5 text-sm leading-relaxed text-muted"
                >
                  {c.description}
                </p>
                {!compact && (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {c.examples.map((e) => (
                      <li
                        key={e}
                        className="rounded-md bg-bg px-2 py-1 text-[11px] font-medium text-ink/80 border border-line"
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Don't see your category? Ask us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
