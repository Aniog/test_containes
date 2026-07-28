import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const products = [
  { name: 'Electronics & Components', imgId: 'product-electronics-a1b2c3' },
  { name: 'Machinery & Industrial', imgId: 'product-machinery-d4e5f6' },
  { name: 'Textiles & Apparel', imgId: 'product-textiles-g7h8i9' },
  { name: 'Home & Garden', imgId: 'product-home-j1k2l3' },
  { name: 'Auto Parts & Accessories', imgId: 'product-auto-m4n5o6' },
  { name: 'Packaging & Printing', imgId: 'product-packaging-p7q8r9' },
];

export default function ProductsPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Products We Source</h2>
          <p className="section-subtitle mx-auto">
            From consumer electronics to industrial machinery, we source virtually any product manufactured in China.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl aspect-square bg-slate-100">
              <img
                data-strk-img-id={product.imgId}
                data-strk-img={`[product-name-${index}] [products-title]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
                <span id={`product-name-${index}`} className="text-white font-medium text-sm">{product.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/products" className="btn-secondary">
            View All Product Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
