import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const categories = [
  { name: "Electronics & Components", id: "cat-electronics" },
  { name: "Machinery & Industrial", id: "cat-machinery" },
  { name: "Packaging & Printing", id: "cat-packaging" },
  { name: "Apparel & Textiles", id: "cat-apparel" },
  { name: "Home & Furniture", id: "cat-home" },
  { name: "Automotive Parts", id: "cat-automotive" },
  { name: "Beauty & Personal Care", id: "cat-beauty" },
  { name: "Toys & Gifts", id: "cat-toys" },
];

export default function ProductsSection() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-slate-600">
              We source across a wide range of product categories. If it is
              manufactured in China, we can help you find the right supplier.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-brand-800 font-semibold hover:underline shrink-0"
          >
            View all categories
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] bg-slate-100 relative">
                <img
                  data-strk-img-id={`product-${cat.id}`}
                  data-strk-img={`[${cat.id}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3
                  id={`${cat.id}-title`}
                  className="text-white font-semibold text-sm md:text-base"
                >
                  {cat.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
