import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => { setHovered(true); setImgIdx(1); }}
      onMouseLeave={() => { setHovered(false); setImgIdx(0); }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-muted overflow-hidden rounded-sm">
        <img
          src={product.images[imgIdx]?.src || product.images[0].src}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick add */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } hover:bg-accent hover:text-white`}
          aria-label="Add to cart"
        >
          <ShoppingBag size={16} />
        </button>
      </div>

      {/* Info */}
      <div className="mt-4 px-0.5">
        <p className="product-name">{product.name}</p>
        <div className="flex items-center gap-1.5 mt-1">
          <Star size={12} fill="#A68A56" className="text-accent" />
          <span className="text-xs text-text-secondary">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="product-price mt-1">${product.price}</p>
      </div>
    </Link>
  );
}

export default function BestsellersGrid() {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="py-20 md:py-28 bg-base">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="section-heading text-center">Bestsellers</h2>
        <p className="text-text-secondary text-sm text-center mt-3 max-w-md mx-auto">
          The pieces our community wears on repeat.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 mt-12">
          {/* 4 in a row on lg, repeat the first one to get 5 from the 4 bestsellers */}
          {[...bestsellers, bestsellers[0]].slice(0, 5).map((product, i) => (
            <ProductCard key={`${product.id}-${i}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
