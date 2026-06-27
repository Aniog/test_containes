import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const bestsellers = products.filter((p) => p.tags.includes('bestseller')).slice(0, 5);

export default function BestsellersGrid() {
  const { addItem } = useCart();
  const [addedId, setAddedId] = useState(null);

  const handleAdd = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="py-20 lg:py-28 bg-velmora-warm-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-2xl lg:text-3xl tracking-[0.06em] text-velmora-charcoal">
            Bestsellers
          </h2>
          <hr className="hr-hairline mt-6 max-w-[200px] mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-velmora-sand/10 overflow-hidden mb-4">
                <img
                  alt={product.name}
                  data-strk-img-id={`bestseller-${product.id}`}
                  data-strk-img={`[bestseller-name-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Quick add */}
                <button
                  onClick={(e) => handleAdd(product, e)}
                  className={`absolute bottom-0 left-0 right-0 py-2.5 text-center text-[10px] tracking-[0.12em] uppercase font-medium transition-all duration-300 ${
                    addedId === product.id
                      ? 'bg-velmora-gold text-white'
                      : 'bg-velmora-charcoal/90 text-white translate-y-full group-hover:translate-y-0'
                  }`}
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <ShoppingBag className="w-3 h-3" />
                    {addedId === product.id ? 'Added!' : 'Add to Cart'}
                  </span>
                </button>
              </div>
              <span id={`bestseller-name-${product.id}`} className="hidden">{product.name}</span>
              {/* Info */}
              <h3 className="product-name text-xs lg:text-sm mb-1.5">{product.name}</h3>
              <div className="flex items-center gap-1.5 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-2.5 h-2.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-velmora-gold text-velmora-gold'
                          : 'text-velmora-sand'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-velmora-stone">({product.reviewCount})</span>
              </div>
              <p className="price-tag text-sm">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}