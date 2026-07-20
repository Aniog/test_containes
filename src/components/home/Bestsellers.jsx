import { getBestsellers } from '@/data/products';
import ProductCard from './ProductCard';

export default function Bestsellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="section-padding py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-4">Our Favorites</p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-14">
        <a href="/shop" className="btn-outline">
          View All
        </a>
      </div>
    </section>
  );
}
