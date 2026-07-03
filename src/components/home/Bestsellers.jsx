import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

const Bestsellers = () => {
  const { addItem } = useCart();
  const bestsellers = products.filter((p) => p.badge === 'Bestseller').slice(0, 5);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="flex items-end justify-between">
        <div>
          <p className="section-subtitle">Curated</p>
          <h2 className="section-title mt-2">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:inline-flex text-sm text-muted hover:text-ink underline underline-offset-4">
          View all
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={addItem} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link to="/shop" className="text-sm text-muted hover:text-ink underline underline-offset-4">
          View all
        </Link>
      </div>
    </section>
  );
};

const ProductCard = ({ product, onAdd }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="group relative rounded-2xl bg-white p-3 transition-shadow hover:shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-background">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={() => onAdd(product, product.material)}
          className="absolute inset-x-3 bottom-3 rounded-full bg-ink/90 px-4 py-2 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100"
        >
          Add to Cart
        </button>
      </div>
      <div className="mt-3 px-1">
        <h3 className="font-serif text-sm uppercase tracking-wide text-ink">{product.name}</h3>
        <p className="mt-1 text-sm text-muted">${product.price}</p>
      </div>
    </div>
  );
};

export default Bestsellers;
