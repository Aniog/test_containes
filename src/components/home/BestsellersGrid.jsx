import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden mb-4 aspect-[3/4]">
        <Link to={`/product/${product.id}`}>
          <img
            src={hovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#1a1a1a] text-white text-[10px] tracking-wider uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => addItem(product, product.variants[0])}
          className={`absolute bottom-0 left-0 right-0 bg-[#1a1a1a]/90 text-white py-3 text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
      <Link to={`/product/${product.id}`}>
        <h3 className="product-name text-sm mb-1 group-hover:text-[#c9a96e] transition-colors">
          {product.name}
        </h3>
      </Link>
      <p className="text-xs text-gray-500 mb-2">{product.description}</p>
      <div className="flex items-center gap-2 mb-1">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-[#c9a96e] fill-[#c9a96e]' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <span className="text-xs text-gray-400">({product.reviews})</span>
      </div>
      <p className="text-sm font-medium">${product.price}</p>
    </div>
  );
}

export default function BestsellersGrid() {
  return (
    <section className="section-padding bg-[#faf8f5]">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl md:text-4xl mb-3">Bestsellers</h2>
          <p className="text-sm text-gray-500 tracking-wider uppercase">Our most loved pieces</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
