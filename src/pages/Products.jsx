import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";

const categories = [
  {
    title: "Electronics & Components",
    description:
      "From PCBs and cables to finished consumer electronics, we source components and assemblies from ISO-certified factories in Shenzhen, Dongguan, and Guangzhou.",
    examples: [
      "PCB assemblies and SMT",
      "USB cables and chargers",
      "IoT devices and sensors",
      "LED lighting modules",
      "Semiconductors and ICs",
    ],
    imgId: "cat-electronics-1a2b3c",
  },
  {
    title: "Machinery & Equipment",
    description:
      "Industrial machinery, precision parts, tools, and automation equipment sourced from specialized manufacturing zones with strong engineering capabilities.",
    examples: [
      "CNC machined parts",
      "Injection molds and dies",
      "Industrial automation components",
      "Power tools and hand tools",
      "Conveyor and packaging machinery",
    ],
    imgId: "cat-machinery-2b3c4d",
  },
  {
    title: "Consumer Goods",
    description:
      "Everyday products for home, personal care, sports, and lifestyle. We work with factories that meet international safety and quality standards.",
    examples: [
      "Kitchenware and cookware",
      "Personal care products",
      "Toys and baby products",
      "Sports and fitness equipment",
      "Home decor and furniture accessories",
    ],
    imgId: "cat-consumer-3c4d5e",
  },
  {
    title: "Textiles & Apparel",
    description:
      "Fabrics, garments, bags, shoes, and promotional items. We source from established textile hubs with experience in export markets.",
    examples: [
      "Apparel and activewear",
      "Bags and luggage",
      "Footwear and accessories",
      "Promotional merchandise",
      "Home textiles and bedding",
    ],
    imgId: "cat-textiles-4d5e6f",
  },
  {
    title: "Packaging Materials",
    description:
      "Custom packaging solutions including boxes, bottles, labels, and sustainable alternatives. We match you with factories that understand branding and compliance.",
    examples: [
      "Folding cartons and rigid boxes",
      "Plastic and glass bottles",
      "Labels, stickers, and tags",
      "Food-safe packaging",
      "Eco-friendly and biodegradable options",
    ],
    imgId: "cat-packaging-5e6f7g",
  },
  {
    title: "Building Materials",
    description:
      "Hardware, lighting, flooring, plumbing, and construction supplies sourced from China's largest building material manufacturing regions.",
    examples: [
      "Hardware and fasteners",
      "LED lighting fixtures",
      "Flooring and tiles",
      "Plumbing fixtures and fittings",
      "Construction tools and safety equipment",
    ],
    imgId: "cat-building-6f7g8h",
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
              Industries
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-5">
              Products We Source
            </h1>
            <p className="text-lg text-slate-600">
              We source across a wide range of product categories. If it is manufactured in China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                idx % 2 === 1 ? "" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[cat-desc-${idx}] [cat-title-${idx}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <h2
                  id={`cat-title-${idx}`}
                  className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
                >
                  {cat.title}
                </h2>
                <p
                  id={`cat-desc-${idx}`}
                  className="text-slate-600 leading-relaxed mb-6"
                >
                  {cat.description}
                </p>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                  Common products in this category:
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cat.examples.map((ex) => (
                    <span
                      key={ex}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                >
                  Request sourcing for this category
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't see your product category?
          </h2>
          <p className="text-slate-300 mb-8">
            China's manufacturing ecosystem covers virtually every industry. Contact us and we will confirm whether we can support your specific product.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
