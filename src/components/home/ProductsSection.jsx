import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";

const products = [
  {
    title: "Electronics & Components",
    description: "PCBs, cables, chargers, IoT devices, consumer electronics, and semiconductors.",
    imgId: "prod-electronics-1a2b3c",
  },
  {
    title: "Machinery & Equipment",
    description: "Industrial machines, CNC parts, tools, molds, and automation equipment.",
    imgId: "prod-machinery-2b3c4d",
  },
  {
    title: "Consumer Goods",
    description: "Home goods, kitchenware, personal care, toys, sports equipment, and accessories.",
    imgId: "prod-consumer-3c4d5e",
  },
  {
    title: "Textiles & Apparel",
    description: "Fabrics, garments, bags, shoes, and custom-branded promotional items.",
    imgId: "prod-textiles-4d5e6f",
  },
  {
    title: "Packaging Materials",
    description: "Custom boxes, bottles, labels, bags, and sustainable packaging solutions.",
    imgId: "prod-packaging-5e6f7g",
  },
  {
    title: "Building Materials",
    description: "Hardware, lighting, flooring, plumbing fixtures, and construction supplies.",
    imgId: "prod-building-6f7g8h",
  },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Industries</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Products We Source
          </h2>
          <p className="text-slate-600 text-lg">
            We source across a wide range of categories. If it is made in China, we can help you find the right factory.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const titleId = `product-${product.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}-title`;
            const descId = `product-${product.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}-desc`;
            return (
              <div
                key={product.title}
                className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-all"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 id={titleId} className="text-lg font-semibold text-slate-900 mb-1.5">{product.title}</h3>
                  <p id={descId} className="text-slate-600 text-sm leading-relaxed">{product.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
          >
            See All Product Categories
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
