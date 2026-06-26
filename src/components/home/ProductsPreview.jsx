import { Link } from "react-router-dom";
import { ArrowRight, Ruler, Weight, Gauge } from "lucide-react";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const products = [
  {
    id: "double-folding-machine",
    title: "Double Folding Machine",
    shortDesc: "Industrial-grade double folding for complex metal shapes",
    specs: [
      { icon: Ruler, label: "Up to 4m length" },
      { icon: Weight, label: "16mm capacity" },
      { icon: Gauge, label: "CNC controlled" },
    ],
  },
  {
    id: "sheet-metal-folder",
    title: "Sheet Metal Folder",
    shortDesc: "Versatile folding for sheet metal fabrication workshops",
    specs: [
      { icon: Ruler, label: "Up to 3m length" },
      { icon: Weight, label: "12mm capacity" },
      { icon: Gauge, label: "Manual / CNC" },
    ],
  },
  {
    id: "metal-folding-machine",
    title: "Metal Folding Machine",
    shortDesc: "Heavy-duty metal folding with programmable back gauges",
    specs: [
      { icon: Ruler, label: "Up to 5m length" },
      { icon: Weight, label: "20mm capacity" },
      { icon: Gauge, label: "Full CNC" },
    ],
  },
];

export default function ProductsPreview() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-gold-600 text-sm font-semibold tracking-widest uppercase">
              Our Machines
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">
              Featured Products
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium text-sm transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-gold-300 transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  data-strk-img-id={`product-preview-${product.id}`}
                  data-strk-img={`[product-title-${product.id}] [product-desc-${product.id}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  id={`product-title-${product.id}`}
                  className="text-lg font-semibold text-navy-900 mb-2"
                >
                  {product.title}
                </h3>
                <p
                  id={`product-desc-${product.id}`}
                  className="text-sm text-slate-500 mb-4 leading-relaxed"
                >
                  {product.shortDesc}
                </p>
                <div className="flex flex-wrap gap-3 mb-5">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 rounded-full px-3 py-1"
                    >
                      <spec.icon className="w-3.5 h-3.5 text-gold-500" />
                      {spec.label}
                    </div>
                  ))}
                </div>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
