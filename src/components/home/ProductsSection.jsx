import { Link } from "react-router-dom";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight } from "lucide-react";

const products = [
  { title: "Industrial Components", description: "Machinery parts, hardware, tools, and OEM components." },
  { title: "Electronics & Accessories", description: "Consumer electronics, cables, chargers, and smart devices." },
  { title: "Home & Garden", description: "Furniture, lighting, kitchenware, and outdoor products." },
  { title: "Apparel & Textiles", description: "Clothing, bags, fabrics, and fashion accessories." },
  { title: "Packaging Materials", description: "Custom boxes, bags, labels, and retail packaging." },
  { title: "Promotional Products", description: "Branded merchandise, gifts, and corporate giveaways." },
];

const ProductsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Products We Source"
          title="Wide Range of Product Categories"
          description="We work across multiple industries. If your product is manufactured in China, we can help you source it."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => {
            const titleId = `product-title-${index}`;
            const descId = `product-desc-${index}`;
            const imgId = `product-img-${index}`;

            return (
              <div
                key={product.title}
                className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 id={titleId} className="text-lg font-semibold text-slate-900 mb-2">{product.title}</h3>
                  <p id={descId} className="text-slate-600 text-sm leading-relaxed mb-4">{product.description}</p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700"
                  >
                    View details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 hover:border-teal-600 hover:text-teal-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            See All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
