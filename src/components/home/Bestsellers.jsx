import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const Bestsellers = () => {
  const { addItem, openCart } = useCart();
  const bestsellers = products.filter(p => p.bestseller).slice(0, 5);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addItem(product, product.variants[0], 1);
    toast.success('Added to cart');
    openCart();
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="section-subtitle">Curated for you</p>
        <h2 className="section-title mt-2">Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
        {bestsellers.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="product-card group"
          >
            <div className="product-image-wrapper aspect-[3/4]">
              <img
                src={product.images[0]}
                alt={product.name}
                className="product-image"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-full flex-col gap-2 bg-white/90 p-3 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="btn-primary w-full py-2 text-xs"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="p-3 sm:p-4">
              <h3 className="font-serif text-xs uppercase tracking-widest text-brand-charcoal">{product.name}</h3>
              <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
