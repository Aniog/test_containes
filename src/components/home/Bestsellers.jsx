import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.tags?.includes('bestseller'));
  const displayProducts = bestsellers.length >= 5 ? bestsellers.slice(0, 5) : products.slice(0, 5);

  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-3">
            Curated for You
          </p>
          <h2 className="section-title text-3xl md:text-4xl">
            Bestsellers
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-text">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
