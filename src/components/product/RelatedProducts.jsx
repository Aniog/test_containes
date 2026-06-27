import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

export default function RelatedProducts({ currentId, category }) {
  const related = products
    .filter((p) => p.id !== currentId && (category ? p.category === category : true))
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#FBF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-semibold text-[#1A1A1A] tracking-wide mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
