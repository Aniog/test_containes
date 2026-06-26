import { Link } from "react-router-dom";

const categories = [
  {
    id: "electronics",
    title: "Electronics & Components",
    description: "Consumer electronics, PCBA, cables, chargers, and IoT devices.",
    imgId: "products-electronics-1a2b3c",
    titleId: "products-electronics-title",
    descId: "products-electronics-desc",
  },
  {
    id: "machinery",
    title: "Machinery & Tools",
    description: "Industrial equipment, power tools, CNC parts, and hardware.",
    imgId: "products-machinery-4d5e6f",
    titleId: "products-machinery-title",
    descId: "products-machinery-desc",
  },
  {
    id: "textiles",
    title: "Textiles & Apparel",
    description: "Fabrics, garments, bags, footwear, and accessories.",
    imgId: "products-textiles-7g8h9i",
    titleId: "products-textiles-title",
    descId: "products-textiles-desc",
  },
  {
    id: "home-goods",
    title: "Home & Kitchen",
    description: "Furniture, kitchenware, home decor, and lighting.",
    imgId: "products-home-0j1k2l",
    titleId: "products-home-title",
    descId: "products-home-desc",
  },
  {
    id: "packaging",
    title: "Packaging & Printing",
    description: "Custom boxes, labels, bags, and promotional materials.",
    imgId: "products-packaging-3m4n5o",
    titleId: "products-packaging-title",
    descId: "products-packaging-desc",
  },
  {
    id: "automotive",
    title: "Automotive & Parts",
    description: "Auto parts, EV components, accessories, and tools.",
    imgId: "products-automotive-6p7q8r",
    titleId: "products-automotive-title",
    descId: "products-automotive-desc",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Products We Source
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            We cover a wide range of product categories across China's manufacturing hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group rounded-xl border border-border-light bg-surface overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-alt">
                <img
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-5">
                <h3
                  id={cat.titleId}
                  className="text-base font-semibold text-text-primary mb-1"
                >
                  {cat.title}
                </h3>
                <p
                  id={cat.descId}
                  className="text-sm text-text-secondary leading-relaxed"
                >
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            View all product categories
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
