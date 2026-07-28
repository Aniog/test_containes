import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  Cpu,
  ChefHat,
  Wrench,
  Shirt,
  Sparkles,
  Cog,
  Package,
  Boxes,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import strkImgConfig from "@/strk-img-config.json";

const products = [
  {
    icon: Cpu,
    name: "Consumer Electronics",
    examples: "Accessories, smart home, audio, charging, wearables",
    imgId: "prod-electronics-71b3d2",
    imgQuery: "[prod-electronics-name] [home-products-eyebrow] [home-products-title]",
  },
  {
    icon: ChefHat,
    name: "Home & Kitchen",
    examples: "Cookware, storage, organization, small appliances",
    imgId: "prod-home-44ec1a",
    imgQuery: "[prod-home-name] [home-products-eyebrow] [home-products-title]",
  },
  {
    icon: Wrench,
    name: "Hardware & Tools",
    examples: "Hand tools, fasteners, fittings, building materials",
    imgId: "prod-tools-0afb29",
    imgQuery: "[prod-tools-name] [home-products-eyebrow] [home-products-title]",
  },
  {
    icon: Shirt,
    name: "Apparel & Textiles",
    examples: "Knitwear, workwear, uniforms, technical fabrics",
    imgId: "prod-apparel-8c14f5",
    imgQuery: "[prod-apparel-name] [home-products-eyebrow] [home-products-title]",
  },
  {
    icon: Sparkles,
    name: "Beauty & Personal Care",
    examples: "Skincare OEM, cosmetics, hair care, packaging",
    imgId: "prod-beauty-1d3a8b",
    imgQuery: "[prod-beauty-name] [home-products-eyebrow] [home-products-title]",
  },
  {
    icon: Cog,
    name: "Industrial Parts",
    examples: "CNC, sheet metal, casting, plastic injection molding",
    imgId: "prod-industrial-6f02ce",
    imgQuery: "[prod-industrial-name] [home-products-eyebrow] [home-products-title]",
  },
  {
    icon: Package,
    name: "Packaging & Print",
    examples: "Custom boxes, labels, bags, retail packaging",
    imgId: "prod-packaging-92d647",
    imgQuery: "[prod-packaging-name] [home-products-eyebrow] [home-products-title]",
  },
  {
    icon: Boxes,
    name: "Furniture & Outdoor",
    examples: "Flat-pack, rattan, garden, pet products",
    imgId: "prod-furniture-3b09ad",
    imgQuery: "[prod-furniture-name] [home-products-eyebrow] [home-products-title]",
  },
];

export default function ProductsGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products we source"
          title={<span id="home-products-title">Across most consumer & industrial categories</span>}
          description="If it's made in China, we can usually help. Below are the categories we work with most often. For something more specialized, just ask."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map(({ icon: Icon, name, examples, imgId, imgQuery }) => (
            <div
              key={name}
              className="group bg-card border border-ink-200 rounded-lg overflow-hidden shadow-card hover:shadow-cardHover transition"
            >
              <div className="aspect-[4/3] bg-ink-100 overflow-hidden">
                <img
                  alt={name}
                  data-strk-img-id={imgId}
                  data-strk-img={imgQuery}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-md bg-brand-100 text-brand-800 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3
                    id={`prod-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-name`}
                    className="text-base font-semibold text-ink-900"
                  >
                    {name}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  {examples}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-700"
          >
            See the full product list
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
