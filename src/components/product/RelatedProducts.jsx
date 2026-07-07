import ProductCard from '@/components/home/ProductCard';
import products from '@/data/products';

const RelatedProducts = ({ currentId }) => {
  const current = products.find((p) => p.id === currentId);
  const related = current
    ? products.filter((p) => current.related?.includes(p.id))
    : products.slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="section-title text-center mb-10">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;