import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, isAdding } = useCart();
  const isAddingThis = isAdding === product.id;

  return (
    <div
      className="group opacity-0 animate-fade-in"
      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] bg-[#F5F1EB] overflow-hidden mb-4">
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          
          {/* Secondary Image on Hover */}
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-[#FAF8F5] text-[#2C2824] text-sm font-sans tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
            {isAddingThis ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </Link>

      <div className="text-center">
        <h3 className="product-name text-sm mb-1">{product.name}</h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star size={12} fill="#C9A962" stroke="#C9A962" />
          <span className="text-xs text-[#6B635A]">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="font-sans text-sm text-[#2C2824]">${product.price}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C2824] mb-3">
            Bestsellers
          </h2>
          <p className="font-sans text-[#6B635A]">
            Our most loved pieces, chosen by you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}