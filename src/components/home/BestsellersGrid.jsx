import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import products from '@/data/products';

const bestsellers = products.filter((p) => p.tags.includes('bestseller'));

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0].name);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden">
        <img
          alt={product.name}
          data-strk-img-id={hovered ? product.hoverId : product.imageId}
          data-strk-img={`[product-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          className={`w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />

        {/* Quick add on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAdd}
            className={`w-full py-2.5 text-xs tracking-wider uppercase font-medium text-center transition-all duration-300 ${
              added
                ? 'bg-velmora-gold text-white'
                : 'bg-white/90 backdrop-blur-sm text-velmora-deep hover:bg-velmora-gold hover:text-white'
            }`}
          >
            {added ? 'Added to Bag' : 'Add to Cart — $' + product.price}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'fill-velmora-gold text-velmora-gold'
                  : 'fill-velmora-line text-velmora-line'
              }`}
            />
          ))}
          <span className="text-xs text-velmora-muted ml-1">({product.reviewCount})</span>
        </div>
        <h3 id={`product-name-${product.id}`} className="product-name text-velmora-deep">
          {product.name}
        </h3>
        <p className="text-sm font-medium text-velmora-muted">${product.price}</p>
      </div>
    </Link>
  );
}

export default function BestsellersGrid() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="section-title">Bestsellers</h2>
        <p className="section-subtitle mt-3">The pieces our community loves most</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-subtle">
          View All Pieces
        </Link>
      </div>
    </section>
  );
}
