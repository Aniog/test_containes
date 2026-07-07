import ProductCard from '@/components/home/ProductCard';

const ShopGrid = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-charcoal-400 text-sm mb-2">No products match your filters.</p>
        <p className="text-xs text-charcoal-300">Try adjusting your selection.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopGrid;