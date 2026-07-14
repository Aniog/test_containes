import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

function BestsellersSection() {
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5);
  
  return (
    <section id="bestsellers" className="py-20 md:py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Our Bestsellers
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Loved by thousands, these pieces have become everyday essentials for those who appreciate timeless elegance.
          </p>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestsellersSection;
