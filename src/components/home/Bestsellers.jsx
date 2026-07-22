import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Plus } from 'lucide-react';
import { useCart, useCartDrawer } from '@/context/CartContext';
import products from '@/data/products';

const bestsellers = products.filter((p) => p.isBestseller);

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const { openDrawer } = useCartDrawer();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    setAdded(true);
    openDrawer();
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-4">
        {/* Primary image placeholder */}
        <div className="absolute inset-0 bg-velvet-200 flex items-center justify-center">
          <div className={`w-2/3 h-2/3 bg-velvet-300 rounded-full transition-all duration-500 ${hovered ? 'scale-110 opacity-0' : 'opacity-100'}`} />
        </div>
        {/* Secondary image placeholder (hover) */}
        <div className={`absolute inset-0 bg-velvet-300 flex items-center justify-center transition-all duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-2/3 h-2/3 bg-velvet-400 rounded-full scale-110" />
        </div>

        {/* Hover add to cart button */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button
            onClick={handleAdd}
            className={`w-full py-3 font-sans text-xs tracking-widest uppercase transition-all duration-200 ${
              added
                ? 'bg-velvet-900 text-white'
                : 'bg-white/90 backdrop-blur-sm text-velvet-900 hover:bg-warm-600 hover:text-white'
            }`}
          >
            {added ? 'Added to Bag' : 'Add to Cart'}
          </button>
        </div>

        {product.isNew && (
          <span className="absolute top-3 left-3 bg-warm-600 text-white text-[10px] tracking-widest uppercase px-2.5 py-1 font-sans">
            New
          </span>
        )}
      </div>

      {/* Info */}
      <h3 className="font-serif text-sm md:text-base tracking-widest uppercase text-velvet-900">
        {product.name}
      </h3>
      <div className="flex items-center gap-1.5 mt-1.5">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-warm-600 fill-warm-600' : 'text-velvet-300'}`}
            />
          ))}
        </div>
        <span className="text-xs text-velvet-500">({product.reviewCount})</span>
      </div>
      <p className="font-sans text-sm text-velvet-900 mt-1.5">${product.price}</p>
    </Link>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-warm-600 mb-4">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl text-velvet-900">Bestsellers</h2>
          <hr className="hairline w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border-2 border-velvet-900 text-velvet-900 hover:bg-velvet-900 hover:text-white font-sans text-xs tracking-widest uppercase px-10 py-3.5 transition-all duration-200"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
