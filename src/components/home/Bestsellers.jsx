import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { products } from '@/data/products';
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
      <div className="relative aspect-[3/4] bg-velmora-beige overflow-hidden mb-4">
        <img
          src={product.images[imgIdx].src}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-9 h-9 bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="w-4 h-4 text-velmora-base" />
        </button>
      </div>

      {/* Info */}
      <h3 className="product-name text-velmora-base group-hover:text-velmora-gold transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mt-1.5">
        <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
        <span className="text-xs text-velmora-taupe">{product.rating} ({product.reviewCount})</span>
      </div>
      <p className="text-sm font-medium text-velmora-base mt-1">${product.price}</p>
    </Link>
  );
}

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-taupe mb-3">
          Most Loved
        </p>
        <h2 className="heading-lg text-velmora-base">Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline">
          View All Pieces
        </Link>
      </div>
    </section>
  );
}