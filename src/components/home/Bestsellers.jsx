import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => { setHovered(true); setImgIdx(1); }}
      onMouseLeave={() => { setHovered(false); setImgIdx(0); }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
        <img
          src={product.images[imgIdx].src}
          alt={product.images[imgIdx].alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick add */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-10 h-10 bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus size={18} className="text-velmora-ink" />
        </button>
      </div>

      {/* Info */}
      <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-ink mb-1">
        {product.name}
      </h3>
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={11}
              className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-stone'}
            />
          ))}
        </div>
        <span className="text-[11px] text-velmora-taupe">({product.reviewCount})</span>
      </div>
      <p className="text-sm font-medium text-velmora-charcoal">${product.price}</p>
    </Link>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="container-wide section-padding">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-super uppercase text-velmora-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-ink">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline text-xs">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}