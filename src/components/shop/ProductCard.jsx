import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, 'Gold', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      {/* Image */}
      <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
        />
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="bg-obsidian text-ivory font-inter text-[9px] tracking-[0.1em] uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="bg-gold text-obsidian font-inter text-[9px] tracking-[0.1em] uppercase px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-ivory font-inter text-[10px] tracking-[0.12em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        <h3
          id={product.titleId}
          className="font-cormorant text-sm uppercase tracking-widest2 text-obsidian group-hover:text-gold transition-colors duration-200"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-1.5">
          <span className="font-inter text-sm text-charcoal">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" className="text-gold" />
            <span className="font-inter text-[10px] text-warm-gray">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
