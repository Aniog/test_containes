import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants?.[0] || null, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-accent-light overflow-hidden rounded-sm mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-6xl text-velmora-accent/20 uppercase tracking-wider">
            {product.name.charAt(0)}
          </span>
        </div>
        {/* Hover overlay with add to cart */}
        <div
          className={`absolute inset-0 bg-black/10 flex items-end justify-center pb-6 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={handleAdd}
            className="bg-white text-velmora-text px-6 py-2.5 text-xs uppercase tracking-widest font-sans font-medium hover:bg-velmora-accent hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="product-name text-xs mb-1 group-hover:text-velmora-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mb-1">
          <Star className="w-3 h-3 fill-velmora-accent text-velmora-accent" />
          <span className="text-xs text-velmora-muted font-sans">{product.rating}</span>
          <span className="text-xs text-velmora-divider font-sans">({product.reviews})</span>
        </div>
        <p className="font-sans text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-velmora-base">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-muted mb-3">Most Loved</p>
          <h2 className="section-title">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
          <Link to="/shop" className="btn-secondary">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
