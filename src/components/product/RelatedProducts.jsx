import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const RelatedProducts = ({ currentProductId, category }) => {
  const related = products
    .filter((p) => p.id !== currentProductId && (category ? p.category === category : true))
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 md:mt-24 pt-12 border-t border-velmora-border">
      <h2 className="font-serif text-2xl md:text-3xl font-medium text-velmora-black text-center mb-10">
        You May Also Like
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
