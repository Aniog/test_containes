import ProductCard from '../ui/ProductCard';
import { getRelatedProducts } from '../../data/products';

const RelatedProducts = ({ currentProductId }) => {
  const relatedProducts = getRelatedProducts(currentProductId, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="font-serif text-2xl sm:text-3xl text-charcoal">
          You May Also Like
        </h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
