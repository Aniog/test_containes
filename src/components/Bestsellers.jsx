import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-velmora-ivory overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src={product.hoverImage}
          alt={`${product.name} - alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-velmora-cream text-velmora-charcoal text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } hover:bg-velmora-gold`}
        >
          <span className="flex items-center justify-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </span>
        </button>
      </div>

      <div className="text-center">
        <h3 className="product-name text-xs text-velmora-charcoal mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-velmora-stone mb-2">{product.description}</p>
        <p className="font-medium text-velmora-charcoal">${product.price}</p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating
                  ? 'fill-velmora-gold text-velmora-gold'
                  : 'text-velmora-mist'
              }`}
            />
          ))}
          <span className="text-xs text-velmora-stone ml-1">({product.reviews})</span>
        </div>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-3">
            Bestsellers
          </h2>
          <p className="text-velmora-stone">Our most loved pieces</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}