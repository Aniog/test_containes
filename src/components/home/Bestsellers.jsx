import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const bestsellers = products.filter((p) => p.featured).slice(0, 5);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            Bestsellers
          </h2>
          <p className="mt-3 text-stone-500 max-w-md mx-auto">
            Our most-loved pieces, chosen by women who appreciate the art of
            quiet luxury.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addItem(product, product.variants[0])}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-gold text-gold text-sm uppercase tracking-[0.15em] hover:bg-gold hover:text-white transition-all duration-300"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            data-strk-img-id={product.imgId}
            data-strk-img={`[product-${product.id}-name] bestseller jewelry`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
          />

          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onAddToCart();
            }}
            className="absolute bottom-0 left-0 right-0 bg-stone-900/90 text-white py-3 flex items-center justify-center gap-2 text-xs uppercase tracking-wider opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>

        {/* Product Info */}
        <div className="mt-4">
          <h3
            id={`product-${product.id}-name`}
            className="text-xs font-medium uppercase tracking-[0.2em] text-stone-800 group-hover:text-gold transition-colors line-clamp-1"
          >
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gold font-medium">
            ${product.price}
          </p>
        </div>
      </Link>
    </div>
  );
}
