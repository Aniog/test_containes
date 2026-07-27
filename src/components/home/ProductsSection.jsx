import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'Electronics & Components',
    description: 'PCBs, consumer electronics, cables, batteries, and smart devices.',
    imgId: 'products-electronics-4d5e6f',
  },
  {
    title: 'Industrial Equipment',
    description: 'Machinery, tools, hardware, metal parts, and OEM components.',
    imgId: 'products-industrial-5e6f7g',
  },
  {
    title: 'Consumer Goods',
    description: 'Home goods, kitchenware, toys, sporting goods, and personal care.',
    imgId: 'products-consumer-6f7g8h',
  },
  {
    title: 'Textiles & Apparel',
    description: 'Fabrics, clothing, bags, footwear, and fashion accessories.',
    imgId: 'products-textiles-7g8h9i',
  },
  {
    title: 'Packaging Materials',
    description: 'Custom boxes, bags, labels, and sustainable packaging solutions.',
    imgId: 'products-packaging-8h9i0j',
  },
  {
    title: 'Automotive Parts',
    description: 'Aftermarket parts, accessories, and EV components.',
    imgId: 'products-automotive-9i0j1k',
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <h2 id="products-title" className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Products We Source
            </h2>
            <p id="products-subtitle" className="text-lg text-text-secondary max-w-xl">
              We source across dozens of product categories. If it is manufactured in China, we can help you find the right supplier.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary font-medium transition-colors shrink-0"
          >
            View all categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[product-${index}-desc] [product-${index}-title] [products-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 id={`product-${index}-title`} className="text-lg font-semibold text-primary mb-2">
                  {product.title}
                </h3>
                <p id={`product-${index}-desc`} className="text-sm text-text-secondary leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
