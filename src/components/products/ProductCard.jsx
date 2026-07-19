import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold');
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-brand-warm">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold tracking-widest uppercase text-brand-ink">
            {product.badge}
          </span>
        )}
        <div className={`absolute inset-x-0 bottom-0 flex justify-center pb-4 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <button
            onClick={handleAdd}
            className="rounded-full bg-white/95 px-5 py-2 text-xs font-semibold tracking-wide text-brand-ink shadow-lg hover:bg-white transition-colors"
          >
            {added ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-serif text-base font-medium tracking-wide text-brand-ink uppercase">{product.name}</h3>
        <p className="text-sm text-brand-muted">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
