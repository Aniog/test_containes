import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const BestsellersSection = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="serif-heading text-3xl md:text-4xl font-light mb-4">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Our most loved pieces, chosen by women who know what matters.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
