import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import products from '@/data/products';
import { useCart } from '@/context/CartContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function BestsellersGrid() {
  const bestsellers = products.filter((p) => p.bestseller);
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    openCart();
  };

  const renderStars = (rating) => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-gold text-gold' : 'text-border'}`}
        />
      ))}
    </div>
  );

  const staggerClasses = ['animate-stagger-1', 'animate-stagger-2', 'animate-stagger-3', 'animate-stagger-4', 'animate-stagger-5'];

  return (
    <section className="section-padding py-20 md:py-28">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.2em] uppercase text-taupe mb-4">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso tracking-wider">
            Bestsellers
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product, idx) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className={`group block ${staggerClasses[idx] || ''}`}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative aspect-[3/4] bg-rose overflow-hidden mb-4">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose via-warm-white to-rose">
                <div className="text-center px-4">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gold-pale/60 flex items-center justify-center">
                    <span className="text-gold text-lg">✦</span>
                  </div>
                  <span className="text-[10px] text-taupe/50 uppercase tracking-[0.15em]">
                    {product.category}
                  </span>
                </div>
              </div>

              <div
                className={`absolute inset-0 bg-espresso/5 flex items-end justify-center pb-4 transition-all duration-500 ${
                  hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="bg-white text-espresso text-[11px] tracking-[0.15em] uppercase px-5 py-2.5 flex items-center gap-2 shadow-lg hover:bg-gold-pale transition-all duration-300 hover:shadow-xl translate-y-2 group-hover:translate-y-0"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-1">
              {renderStars(product.rating)}
            </div>
            <h3 className="product-name text-xs md:text-sm tracking-[0.15em] text-espresso mb-1">
              {product.name}
            </h3>
            <p className="text-sm text-taupe">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}