import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'electronics', label: 'Electronics & Components', icon: '🔌' },
  { id: 'furniture', label: 'Furniture & Home Decor', icon: '🪑' },
  { id: 'apparel', label: 'Apparel & Textiles', icon: '👕' },
  { id: 'machinery', label: 'Industrial Machinery', icon: '⚙️' },
  { id: 'toys', label: 'Toys & Baby Products', icon: '🧸' },
  { id: 'beauty', label: 'Beauty & Personal Care', icon: '💄' },
  { id: 'sports', label: 'Sports & Outdoor', icon: '🏋️' },
  { id: 'packaging', label: 'Packaging & Printing', icon: '📦' },
];

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Product Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-3">
            Products We Source from China
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-5" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We source across a wide range of industries. If your product is manufactured in China, we can find the right supplier for you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/products"
              className="bg-white rounded-xl border border-border p-5 text-center hover:border-primary/40 hover:shadow-md transition-all group"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <p className="text-text-primary text-sm font-semibold group-hover:text-primary transition-colors leading-snug">
                {cat.label}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Browse All Product Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
