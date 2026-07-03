import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import Button from '../ui/Button';
import { useCart } from '../../context/CartContext';

const Bestsellers = () => {
  const { addItem, setCartOpen } = useCart();
  const bestsellers = products.slice(0, 5);

  const handleQuickAdd = (product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: product.variants[0],
    });
    setCartOpen(true);
  };

  return (
    <section className="section-container py-16 md:py-24">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Curated for you</p>
          <h2 className="mt-2 font-serif text-3xl text-ink md:text-4xl">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden text-sm font-medium text-ink-secondary transition-colors hover:text-ink md:block">
          View all
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {bestsellers.map((product) => (
          <article key={product.id} className="group relative overflow-hidden rounded-2xl bg-white transition-shadow duration-300 hover:shadow-[0_20px_45px_-15px_rgba(28,25,23,0.12)]">
            <Link to={`/product/${product.slug}`} className="block">
              <div className="relative aspect-[3/4] overflow-hidden bg-background">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full flex-col gap-2 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-ink" onClick={(e) => { e.preventDefault(); handleQuickAdd(product); }}>
                    Add to Cart
                  </Button>
                </div>
                {product.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-surface/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-serif text-base uppercase tracking-product text-ink">{product.name}</h3>
                <p className="mt-1 text-sm text-ink-secondary">${product.price}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link to="/shop" className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink">
          View all
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
