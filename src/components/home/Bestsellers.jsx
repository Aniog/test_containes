import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.tags.includes('bestseller'));

  return (
    <section className="section-padding py-16 md:py-24 bg-velmora-cream">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
          Most Loved
        </p>
        <h2 className="font-serif text-3xl md:text-5xl tracking-wide">Bestsellers</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {bestsellers.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
