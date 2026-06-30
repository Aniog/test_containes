import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, product.tone[0]);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-cream overflow-hidden mb-4">
        <img
          src={`https://image.pollinations.ai/prompt/${encodeURIComponent(product.imageQuery)}?width=600&height=800&nologo=true&seed=1`}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ease-editorial ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
          loading="lazy"
        />
        {/* Hover overlay image */}
        <img
          src={`https://image.pollinations.ai/prompt/${encodeURIComponent(product.imageQuery + ' detail shot')}?width=600&height=800&nologo=true&seed=2`}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
        {/* Quick add */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm py-3 text-xs uppercase tracking-widest font-medium text-base hover:bg-gold hover:text-white transition-all duration-300 flex items-center justify-center gap-2 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
      <h3 className="font-sans text-xs uppercase tracking-widest text-base mb-1">
        {product.name}
      </h3>
      <p className="text-sm text-muted">${product.price}</p>
    </Link>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-widest text-gold font-medium mb-3">
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-hairline text-base px-10 py-3.5 text-xs uppercase tracking-widest font-medium hover:border-gold hover:text-gold transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
