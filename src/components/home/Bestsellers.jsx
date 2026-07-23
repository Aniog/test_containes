import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">Bestsellers</h2>
          <p className="text-taupe text-sm mt-3 font-sans max-w-md mx-auto">
            Our most-loved pieces, chosen by women who appreciate quiet elegance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-warm-muted overflow-hidden mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
          }`}
        />
        <img
          src={product.images[1] || product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-espresso/80 text-white text-[10px] uppercase tracking-[0.15em] px-3 py-1 font-sans">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-0 left-0 right-0 btn-primary text-xs py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-espresso group-hover:text-gold transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mt-1">
        <Star className="w-3 h-3 fill-gold text-gold" />
        <span className="text-xs text-taupe">{product.rating}</span>
      </div>
      <p className="text-sm text-espresso font-sans mt-1">${product.price}</p>
    </Link>
  );
}