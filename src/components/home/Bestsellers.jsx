import { Link } from 'react-router-dom';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';
import { products } from '@/data/products';

const Bestsellers = () => {
  // Get first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-velmora-gold text-sm tracking-ultrawide uppercase">
            Customer Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mt-3">
            Our Bestsellers
          </h2>
          <div className="hairline w-16 mx-auto mt-6" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className={`animate-fade-in-up stagger-${index + 1}`}
              style={{ opacity: 0 }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link to="/collection">
            <Button variant="secondary">
              View All Pieces
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
