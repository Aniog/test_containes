import { useEffect, useRef } from "react";
import {
  Cpu,
  Wrench,
  PackageOpen,
  Shirt,
  Sofa,
  Car,
  Sparkles,
  Gamepad2,
  Construction,
  Baby,
  CookingPot,
  Watch,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const categories = [
  {
    icon: Cpu,
    name: "Electronics & Components",
    examples: "PCB assemblies, cables, chargers, smart home devices, consumer electronics, semiconductors",
  },
  {
    icon: Wrench,
    name: "Machinery & Industrial",
    examples: " CNC parts, molds, industrial equipment, automation components, hardware, tools",
  },
  {
    icon: PackageOpen,
    name: "Packaging & Printing",
    examples: "Corrugated boxes, retail packaging, labels, flexible packaging, gift boxes, paper bags",
  },
  {
    icon: Shirt,
    name: "Apparel & Textiles",
    examples: "T-shirts, uniforms, sportswear, fabrics, bedding, towels, fashion accessories",
  },
  {
    icon: Sofa,
    name: "Home & Furniture",
    examples: "Office furniture, outdoor furniture, lighting, kitchenware, home decor, storage",
  },
  {
    icon: Car,
    name: "Automotive Parts",
    examples: "Auto accessories, car electronics, interior trim, maintenance tools, EV components",
  },
  {
    icon: Sparkles,
    name: "Beauty & Personal Care",
    examples: "Skincare packaging, cosmetics, hair tools, personal hygiene, nail products",
  },
  {
    icon: Gamepad2,
    name: "Toys & Gifts",
    examples: "Educational toys, promotional gifts, seasonal decorations, party supplies, crafts",
  },
  {
    icon: Construction,
    name: "Building Materials",
    examples: "Tiles, hardware, sanitary ware, flooring, insulation, decorative panels",
  },
  {
    icon: Baby,
    name: "Baby & Maternity",
    examples: "Baby clothing, strollers, feeding products, nursery furniture, maternity wear",
  },
  {
    icon: CookingPot,
    name: "Food & Beverage",
    examples: "Packaged foods, kitchen appliances, food packaging, beverage containers, utensils",
  },
  {
    icon: Watch,
    name: "Jewelry & Accessories",
    examples: "Fashion jewelry, watches, bags, wallets, belts, sunglasses, phone accessories",
  },
];

export default function Products() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Products We Source
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              We work across virtually every major product category manufactured
              in China. If you do not see your product listed, contact us — we
              probably source it already.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-brand-800" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {cat.examples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Can not find your product?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                China manufactures an enormous range of products. Even if your
                category is not listed above, chances are we have sourced
                something similar or can tap our network to find the right
                supplier.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Custom and OEM product development",
                  "Niche and specialized components",
                  "Sustainable and eco-friendly materials",
                  "Low MOQ and trial order facilitation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-800 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-800 px-6 py-3 text-base font-semibold text-white hover:bg-blue-900 transition-colors"
              >
                Ask About Your Product
              </Link>
            </div>
            <div className="rounded-xl border border-slate-200 overflow-hidden">
              <img
                data-strk-img-id="products-cta-img"
                data-strk-img="[products-cta-title] [products-cta-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Product sourcing consultation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
