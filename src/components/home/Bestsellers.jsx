import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const bestsellers = products.filter((p) => p.badge === 'Bestseller');
  // Add the Royal Heirloom Set too since it has a badge
  const displayProducts = products.filter((p) => p.badge);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C8A45C] font-medium mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-[#C8A45C] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-[#C8A45C] text-[#C8A45C] px-8 py-3 uppercase tracking-[0.2em] text-sm hover:bg-[#C8A45C] hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-[#F5F0EB] mb-3">
        <img
          src={hovered && product.hoverImage ? product.hoverImage : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />

        {product.badge && (
          <span className="absolute top-3 left-3 bg-white/90 text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 text-[#1A1A1A] font-medium">
            {product.badge}
          </span>
        )}

        <button
          onClick={onAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-[#1A1A1A] text-white py-2.5 text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>

      <h3 className="text-xs tracking-[0.15em] uppercase font-medium text-[#1A1A1A]">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mt-1">
        <Star className="w-3 h-3 fill-[#C8A45C] text-[#C8A45C]" />
        <span className="text-xs text-[#6B6B6B]">{product.rating}</span>
      </div>
      <p className="text-sm font-medium mt-1 text-[#1A1A1A]">${product.price}</p>
    </Link>
  );
}