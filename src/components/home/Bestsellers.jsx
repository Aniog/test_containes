import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { bestsellers } from '@/data/products';
import { useCartDispatch } from '@/context/CartContext';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem, openCart } = useCartDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    openCart();
  };

  const imgId = `bestseller-img-${product.id}`;
  const nameId = `bestseller-name-${product.id}`;
  const catId = `bestseller-cat-${product.id}`;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-velmora-sand/40 aspect-[3/4] mb-4">
        <img
          data-strk-img-id={imgId}
          data-strk-img={`[${catId}] [${nameId}] gold demi-fine jewelry editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100'
          }`}
        />
        {/* Hover second image */}
        <img
          data-strk-img-id={`${imgId}-hover`}
          data-strk-img={`[${nameId}] on model warm editorial lifestyle`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Quick add to cart (hover) */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 py-3 bg-velmora-espresso/90 backdrop-blur text-white text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <ShoppingBag className="w-3 h-3" />
          Quick Add
        </button>
      </div>

      {/* Info */}
      <p id={catId} className="text-[10px] tracking-[0.15em] uppercase text-velmora-muted mb-1 sr-only">{product.category}</p>
      <h3 id={nameId} className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase font-medium text-velmora-black">
        {product.name}
      </h3>

      <div className="flex items-center gap-1.5 mt-1">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-2.5 h-2.5 ${
                i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'
              }`}
            />
          ))}
        </div>
        <span className="text-[10px] text-velmora-muted">({product.reviews})</span>
      </div>

      <p className="text-sm font-medium text-velmora-black mt-0.5">${product.price}</p>
    </Link>
  );
}

export default function Bestsellers() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-[11px] tracking-[0.2em] uppercase text-velmora-muted mb-3">Most Loved</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-black">Bestsellers</h2>
        <div className="w-12 h-px bg-velmora-gold/60 mx-auto mt-5" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
