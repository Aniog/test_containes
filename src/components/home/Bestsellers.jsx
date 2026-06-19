import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-velmora-cream mb-4">
          <img
            src={product.image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            src={product.imageHover}
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-velmora-ivory text-velmora-dark font-sans text-[10px] uppercase tracking-wider px-2.5 py-1">
              {product.badge}
            </span>
          )}

          {/* Quick add button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, product.variants[0]);
            }}
            className={`absolute bottom-3 left-3 right-3 bg-velmora-ivory/95 backdrop-blur-sm text-velmora-dark font-sans text-caption uppercase tracking-widest-xl py-3 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>

      <Link to={`/product/${product.id}`}>
        <h3 className="text-product-name text-sm md:text-base text-velmora-dark mb-1">
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center gap-2 mb-1">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-velmora-sand'}`}
            />
          ))}
        </div>
        <span className="font-sans text-[11px] text-velmora-stone">
          ({product.reviewCount})
        </span>
      </div>
      <p className="font-sans text-sm font-medium text-velmora-dark">
        ${product.price}
      </p>
    </div>
  );
}

export default function Bestsellers() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-caption uppercase tracking-widest-2xl text-gold mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-heading-xl text-velmora-dark">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-gold-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
