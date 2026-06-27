import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-velmora-black mb-4">
            Bestsellers
          </h2>
          <p className="text-sm md:text-base text-velmora-muted max-w-md mx-auto">
            Our most-loved pieces, chosen by you. Timeless designs that become part of your everyday story.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <a
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium tracking-widest uppercase text-velmora-black hover:text-velmora-gold-dark transition-colors duration-300 group"
          >
            View All
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
