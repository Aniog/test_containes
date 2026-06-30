import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';
import { products } from '../../data/products';

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.tags?.includes('bestseller'));

  return (
    <section className="section-container py-16 md:py-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-gold-500 text-xs uppercase tracking-extra-wide mb-3">
          Customer Favorites
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-warm-800 mb-4">
          Our Bestsellers
        </h2>
        <p className="text-warm-600 max-w-xl mx-auto">
          The pieces our customers reach for again and again. Discover why these 
          designs have become wardrobe essentials.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        {bestsellers.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {/* View All CTA */}
      <div className="text-center mt-12">
        <Link to="/shop">
          <Button variant="secondary" size="md">
            View All Jewelry
          </Button>
        </Link>
      </div>
    </section>
  );
}
