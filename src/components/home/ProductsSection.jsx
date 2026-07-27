import SectionHeading from "@/components/shared/SectionHeading";
import StockImage from "@/components/shared/StockImage";

const products = [
  {
    id: "electronics",
    title: "Electronics & Components",
    description: "Consumer electronics, cables, batteries, PCBs, and accessories.",
    imgId: "product-electronics-4a1b9c",
  },
  {
    id: "machinery",
    title: "Machinery & Industrial Parts",
    description: "Tools, hardware, OEM components, and industrial equipment.",
    imgId: "product-machinery-7d2e5f",
  },
  {
    id: "home",
    title: "Home & Furniture",
    description: "Furniture, lighting, kitchenware, home decor, and textiles.",
    imgId: "product-home-9c3a7d",
  },
  {
    id: "apparel",
    title: "Apparel & Accessories",
    description: "Garments, bags, footwear, jewelry, and promotional items.",
    imgId: "product-apparel-1e8b2a",
  },
  {
    id: "packaging",
    title: "Packaging & Printing",
    description: "Custom boxes, labels, retail packaging, and printed materials.",
    imgId: "product-packaging-5f6c1d",
  },
  {
    id: "new-energy",
    title: "New Energy & Solar",
    description: "Solar panels, inverters, batteries, and EV accessories.",
    imgId: "product-energy-2b4e8a",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products We Source"
          title="Categories we support"
          description="We source a wide range of products across industries, matching you with manufacturers that fit your standards."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="group rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <StockImage
                  id={product.imgId}
                  query={`[product-desc-${product.id}] [product-title-${product.id}] [products-section-title]`}
                  ratio="4x3"
                  width="600"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 id={`product-title-${product.id}`} className="text-lg font-semibold text-slate-900 mb-2">
                  {product.title}
                </h3>
                <p id={`product-desc-${product.id}`} className="text-slate-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
