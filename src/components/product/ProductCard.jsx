import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCartDispatch } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const dispatch = useCartDispatch();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        variant: product.variants[0],
        images: product.images,
        quantity: 1,
      },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden bg-velmora-sand aspect-[3/4] mb-4"
      >
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 py-3 text-center font-sans text-xs tracking-wider uppercase transition-all duration-300 ${
            added
              ? 'bg-green-800 text-white'
              : 'bg-velmora-deep/90 text-white translate-y-full group-hover:translate-y-0'
          }`}
        >
          {added ? 'Added!' : '+ Add to Cart'}
        </button>
      </Link>

      <div className="flex items-center gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < Math.floor(product.rating)
                ? 'fill-velmora-gold text-velmora-gold'
                : 'text-velmora-divider'
            }`}
          />
        ))}
        <span className="font-sans text-xs text-velmora-muted ml-1">({product.reviewCount})</span>
      </div>

      <Link
        to={`/product/${product.id}`}
        className="font-serif text-xs md:text-sm tracking-wideprod uppercase text-velmora-deep hover:text-velmora-gold transition-colors block"
      >
        {product.name}
      </Link>
      <p className="font-sans text-sm text-velmora-deep mt-1">${product.price}</p>
    </div>
  );
}
