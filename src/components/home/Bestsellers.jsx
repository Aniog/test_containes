import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.tags?.includes('bestseller'));

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-inter text-xs uppercase tracking-ultra-wide text-gold mb-3">
            Our Favourites
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold font-inter text-xs uppercase tracking-widest px-10 py-4 hover:bg-gold hover:text-white transition-colors duration-300"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
