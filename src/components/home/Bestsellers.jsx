import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const Bestsellers = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 id="bestsellers-title" className="font-serif text-4xl lg:text-5xl uppercase tracking-widest mb-4">Bestsellers</h2>
          <p className="text-brand-stone text-sm uppercase tracking-widest">Timeless pieces loved by all.</p>
        </div>
        <Link to="/shop" className="text-xs uppercase tracking-[0.3em] font-bold border-b border-brand-charcoal pb-1 hover:text-brand-gold hover:border-brand-gold transition-all">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
        {bestsellers.map((product) => (
          <div key={product.id} className="group relative flex flex-col">
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-stone/5">
              <Link to={`/product/${product.id}`}>
                <img 
                  data-strk-img-id={`best-${product.id}-1`}
                  data-strk-img={`[product-name-${product.id}] gold jewelry luxury white background`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt={product.name}
                />
                <img 
                  data-strk-img-id={`best-${product.id}-2`}
                  data-strk-img={`[product-name-${product.id}] jewelry detail closeup gold luxury`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                  alt={`${product.name} Detail`}
                />
              </Link>
              
              <button 
                onClick={() => addToCart(product)}
                className="absolute bottom-0 left-0 w-full bg-brand-charcoal text-white py-4 uppercase tracking-[0.2em] text-[10px] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 hover:bg-brand-gold"
              >
                Quick Add
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <h3 id={`product-name-${product.id}`} className="font-serif text-sm uppercase tracking-[0.2em] mb-1 italic">
                {product.name}
              </h3>
              <p className="text-xs font-light text-brand-stone">$${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
