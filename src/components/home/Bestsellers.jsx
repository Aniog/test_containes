import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCartDispatch } from '@/context/CartContext';
import products from '@/data/products';

const bestsellerIds = [
  'vivid-aura-jewels',
  'majestic-flora-nectar',
  'golden-sphere-huggies',
  'amber-lace-earrings',
  'royal-heirloom-set',
];

export default function Bestsellers() {
  const dispatch = useCartDispatch();
  const [hovered, setHovered] = useState(null);
  const [added, setAdded] = useState(null);

  const items = bestsellerIds.map((id) => products.find((p) => p.id === id)).filter(Boolean);

  const handleAdd = (product) => {
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
    setAdded(product.id);
    setTimeout(() => setAdded(null), 1500);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-deep tracking-widetitle font-semibold">
          Bestsellers
        </h2>
        <p className="font-sans text-sm text-velmora-muted mt-4">
          The pieces our community loves most
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {items.map((product) => (
          <div
            key={product.id}
            className="group"
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-velmora-sand aspect-[3/4] mb-4">
              <img
                src={hovered === product.id ? product.images[1] : product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Quick add */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAdd(product);
                }}
                className={`absolute bottom-0 left-0 right-0 py-3 text-center font-sans text-xs tracking-wider uppercase transition-all duration-300 ${
                  added === product.id
                    ? 'bg-green-800 text-white'
                    : 'bg-velmora-deep/90 text-white translate-y-full group-hover:translate-y-0'
                }`}
              >
                {added === product.id ? 'Added!' : '+ Add to Cart'}
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
        ))}
      </div>
    </section>
  );
}
