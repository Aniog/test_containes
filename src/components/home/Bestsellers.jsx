import { Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import { products } from '@/data/products';
import { useState } from 'react';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden aspect-[3/4] bg-muted">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src={product.images[1]}
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
      </Link>

      {/* Quick add */}
      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-charcoal text-xs uppercase tracking-widest font-sans font-medium py-3 transition-all duration-300 hover:bg-accent hover:text-cream ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        Add to Cart
      </button>

      {/* Info */}
      <div className="mt-4">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-sans text-xs uppercase tracking-product text-charcoal font-medium">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-fg mt-1 font-sans">${product.price}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
          <p className="text-muted-fg text-sm mt-2 font-sans">Our most-loved pieces, chosen by you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-accent text-accent px-8 py-3 text-sm uppercase tracking-wide-btn font-sans font-medium hover:bg-accent hover:text-cream transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
