import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellerProducts = products.filter(p => p.isBestseller).slice(0, 5);

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Bestsellers</h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs">Curated favorites loved by many</p>
          </div>
          <Link to="/shop" className="hidden md:block text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-accent hover:border-accent transition-all">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellerProducts.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block overflow-hidden relative aspect-[3/4] bg-secondary mb-4">
                <img
                  data-strk-img-id={`prod-img-${product.id}`}
                  data-strk-img={`[prod-name-${product.id}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                <button 
                  className="absolute bottom-4 left-4 right-4 bg-white text-black py-3 text-[10px] uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={(e) => {
                    e.preventDefault();
                    // Add to cart logic would go here
                  }}
                >
                  <ShoppingBag className="w-3 h-3" />
                  <span>Quick Add</span>
                </button>
              </Link>
              <div className="space-y-1">
                <h3 id={`prod-name-${product.id}`} className="text-sm font-serif uppercase tracking-widest truncate">{product.name}</h3>
                <p className="text-sm text-muted-foreground font-sans tracking-wide">${product.price}.00</p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/shop" className="md:hidden block text-center mt-12 text-sm uppercase tracking-widest border-b border-black pb-1 w-fit mx-auto">
          View All
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
